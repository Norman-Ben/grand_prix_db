import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import News from '@/schemas/newsSchema';
const mongoDbUri = process.env.MONGODB_URI ?? '';
mongoose.connect(mongoDbUri);
export default async function getNews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const existingNews = await News.findOne();
  if (existingNews) {
    // Return the existing News data
    res.status(200).json(existingNews);
    return;
  } else {
    // Fetch the News data from the API
    let newsData;
    try {
      const fetchOptions = {
        method: 'GET',
        headers: {
          'Ocp-Apim-Subscription-Key': process.env.BING_NEWS_API_KEY!,
        } as Record<string, string>,
      };
      const response = await fetch(
        process.env.BING_NEWS_API_URL!,
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
    // Create a new News document from API data
    const newsArticles = new News({
      newsObj: newsData,
      createdAt: new Date(),
    });
    // Save the News document to the database
    try {
      await newsArticles.save();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
      return;
    }
    // Return the News data
    res.status(200).json(newsArticles);
  }
}
