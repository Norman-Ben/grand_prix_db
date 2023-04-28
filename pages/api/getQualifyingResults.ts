import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import QualifyingResults from '@/schemas/qualifyingResultsSchema';

// Establish a connection to the database
const mongoDbUri = process.env.MONGODB_URI ?? '';
const dbOptions: mongoose.ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(mongoDbUri, dbOptions);

export default async function getQualifyingResults(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if the qualifying document already exists
  const raceId = parseInt(req.query.raceId);

  const existingQualifyingResults = await QualifyingResults.where({
    raceId,
  }).findOne();

  if (existingQualifyingResults) {
    // Return the existing qualifying data
    res.status(200).json(existingQualifyingResults);
    return;
  } else {
    // Fetch the qualifying data from the API
    let qualifyingResultsData;
    try {
      const fetchOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY!,
          'X-RapidAPI-Host': process.env.RAPID_API_HOST!,
        } as Record<string, string>,
      };

      const response = await fetch(
        `https://api-formula-1.p.rapidapi.com/rankings/startinggrid?race=${raceId}`,
        fetchOptions
      );
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      qualifyingResultsData = await response.json();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
      return;
    }

    // Create a new qualifying document from API data
    const qualifyingResults = new QualifyingResults({
      qualifyingResultsObj: { data: qualifyingResultsData },
      raceId,
      createdAt: new Date(),
    });

    // Save the qualifying document to the database
    try {
      await qualifyingResults.save();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
      return;
    }

    // Return the qualifying standings data
    res.status(200).json(qualifyingResults);
  }
}
