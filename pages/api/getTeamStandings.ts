import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import TeamStandings from '@/schemas/teamStandingsSchema';

// Establish a connection to the database
const mongoDbUri = process.env.MONGODB_URI ?? '';

mongoose.connect(mongoDbUri);

export default async function getTeamStandings(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if the team standings document already exists
  const year = req.query.year;

  const existingTeamStandings = await TeamStandings.where({
    year,
  }).findOne();

  if (existingTeamStandings) {
    // Return the existing team standings data
    res.status(200).json(existingTeamStandings);
    return;
  } else {
    // Fetch the team standings data from the API
    let teamStandingsData;
    try {
      const fetchOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY!,
          'X-RapidAPI-Host': process.env.RAPID_API_HOST!,
        } as Record<string, string>,
      };

      const response = await fetch(
        `https://api-formula-1.p.rapidapi.com/rankings/teams?season=${year}`,
        fetchOptions
      );
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      teamStandingsData = await response.json();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
      return;
    }

    // Create a new team standings document from API data
    const teamStandings = new TeamStandings({
      teamStandingsObj: teamStandingsData,
      year,
      createdAt: new Date(),
    });

    // Save the team standings document to the database
    try {
      await teamStandings.save();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
      return;
    }

    // Return the team standings data
    res.status(200).json(teamStandings);
  }
}
