import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import Calendars from '@/schemas/calendarSchema';
// Establish a connection to the database
const mongoDbUri = process.env.MONGODB_URI ?? '';
mongoose.connect(mongoDbUri);
export default async function getCalendar(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if the calendar document already exists
  const year = req.query.year;
  const existingCalendar = await Calendars.where({ year }).findOne();
  if (existingCalendar) {
    // Return the existing calendar data
    res.status(200).json(existingCalendar);
    return;
  } else {
    // Fetch the calendar data from the API
    let raceCalendarData;
    try {
      const fetchOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY!,
          'X-RapidAPI-Host': process.env.RAPID_API_HOST!,
        } as Record<string, string>,
      };
      const response = await fetch(
        `https://api-formula-1.p.rapidapi.com/races?type=race&season=${year}`,
        fetchOptions
      );
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      raceCalendarData = await response.json();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
      return;
    }
    // Create a new calendar document from API data
    const raceCalendar = new Calendars({
      calendarObj: raceCalendarData,
      year,
      createdAt: new Date(),
    });
    // Save the calendar document to the database
    try {
      await raceCalendar.save();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
      return;
    }
    // Return the calendar data
    res.status(200).json(raceCalendar);
  }
}
