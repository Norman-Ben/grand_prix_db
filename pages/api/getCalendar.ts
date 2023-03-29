import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import Calendars from '@/schemas/calendarSchema';

// Establish a connection to the database
const mongoDbUri = process.env.MONGODB_URI ?? '';
mongoose.connect(mongoDbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function getCalendar(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if the calendar document already exists
  // const { year } = req.query;
  const year = '2022';
  const existingCalendar = await Calendars.where({ year }).findOne();

  if (existingCalendar) {
    // Return the existing calendar data
    res.status(200).json({ calendar: existingCalendar });
    return;
  } else {
    // Fetch the calendar data from the API (replace with actual API call)
    const raceCalendarData = {
      race: 'Australian Grand Prix',
      date: '26 March',
      time: '6:00pm',
      location: 'Melbourne',
      country: 'Australia',
    };

    // Create a new calendar document from API data
    const raceCalendar = new Calendars({
      calendarObj: { data: raceCalendarData },
      year,
    });

    // Save the calendar document to the database
    try {
      await raceCalendar.save();
    } catch (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    // Return the calendar data
    res.status(200).json({ calendar: raceCalendar });
  }
}
