import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import News from '@/schemas/newsSchema';

const mongoDbUri = process.env.MONGODB_URI ?? '';
const dbOptions: mongoose.ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(mongoDbUri, dbOptions);

export default async function getCalendar(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const existingNews = await News.findOne();

  if (existingNews) {
    // Return the existing calendar data
    res.status(200).json({ news: existingNews });
    return;
  } else {
    // Fetch the calendar data from the API
    let newsData;
    try {
      const fetchOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY!,
          'X-RapidAPI-Host': process.env.BING_API_HOST!,
        } as Record<string, string>,
      };

      const response = await fetch(
        'https://bing-news-search1.p.rapidapi.com/news/search?q=Formula%201&count=7&mkt=en-GB&freshness=Day&originalImg=true&textFormat=Raw&safeSearch=Off',
        fetchOptions
      );
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      newsData = await response.json();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
      return;
    }

    // Create a new calendar document from API data
    const newsArticles = new News({
      newsObj: { data: newsData },
    });

    // Save the calendar document to the database
    try {
      await newsArticles.save();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
      return;
    }

    // Return the calendar data
    res.status(200).json({ news: newsArticles });
  }
}
