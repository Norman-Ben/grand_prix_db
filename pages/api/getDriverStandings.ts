import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import DriverStandings from '@/schemas/driverStandingsSchema';
// Establish a connection to the database
const mongoDbUri = process.env.MONGODB_URI ?? '';
mongoose.connect(mongoDbUri);
export default async function getDriverStandings(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if the Driver Standings document already exists
  const year = req.query.year;
  const existingDriverStandings = await DriverStandings.where({
    year,
  }).findOne();
  if (existingDriverStandings) {
    // Return the existing Driver Standings data
    res.status(200).json(existingDriverStandings);
    return;
  } else {
    // Fetch the Driver Standings data from the API
    let driverStandingsData;
    try {
      const fetchOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY!,
          'X-RapidAPI-Host': process.env.RAPID_API_HOST!,
        } as Record<string, string>,
      };
      const response = await fetch(
        `https://api-formula-1.p.rapidapi.com/rankings/drivers?season=${year}`,
        fetchOptions
      );
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      driverStandingsData = await response.json();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
      return;
    }
    // Create a new Driver Standings document from API data
    const driverStandings = new DriverStandings({
      driverStandingsObj: driverStandingsData,
      year,
      createdAt: new Date(),
    });
    // Save the Driver Standings document to the database
    try {
      await driverStandings.save();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
      return;
    }
    // Await Return the Driver Standings data
    res.status(200).json(driverStandings);
  }
}
