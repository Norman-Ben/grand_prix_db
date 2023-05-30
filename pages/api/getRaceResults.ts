import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import RaceResults from '@/schemas/raceResultsSchema';

// Establish a connection to the database
const mongoDbUri = process.env.MONGODB_URI ?? '';

mongoose.connect(mongoDbUri);

export default async function getRaceResults(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if the qualifying document already exists
  const raceId = parseInt(req.query.raceId);

  const existingRaceResults = await RaceResults.where({
    raceId,
  }).findOne();

  if (existingRaceResults) {
    // Return the existing qualifying data
    res.status(200).json(existingRaceResults);
    return;
  } else {
    // Fetch the qualifying data from the API
    let raceResultsData;
    try {
      const fetchOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY!,
          'X-RapidAPI-Host': process.env.RAPID_API_HOST!,
        } as Record<string, string>,
      };

      const response = await fetch(
        `https://api-formula-1.p.rapidapi.com/rankings/races?race=${raceId}`,
        fetchOptions
      );
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      raceResultsData = await response.json();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
      return;
    }

    // Create a new qualifying document from API data
    const raceResults = new RaceResults({
      raceResultsObj: raceResultsData,
      raceId,
      createdAt: new Date(),
    });

    // Save the qualifying document to the database
    try {
      await raceResults.save();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
      return;
    }

    // Return the qualifying standings data
    res.status(200).json(raceResults);
  }
}
