import mongoose, { Mongoose } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import Calendars from '@/schemas/calendarSchema';

export default async function getCalendar(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check and get the MongoDB URI and API credentials from the environment variables
  const mongoDbUri = process.env.MONGODB_URI ?? '';

  if (!mongoDbUri) {
    res
      .status(500)
      .json({ error: 'MongoDB URI is not defined as an environment variable' });
    return;
  }

  // Connect to the database
  try {
    await mongoose.connect(mongoDbUri);
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  // Check if the calendar document already exists
  let existingCalendar;
  existingCalendar = await Calendars.where({ year: 2022 }).findOne();

  if (existingCalendar) {
    res.status(200).json({ message: 'Calendar already exists' });
    return;
  } else {
    // Create a new calendar document from API data
    const raceCalendar = new Calendars({
      calendarObj: {
        data: {
          race: 'Australian Grand Prix',
          date: '26 March',
          time: '6:00pm',
          location: 'Melbourne',
          country: 'Australia',
        },
      },
      year: 2022,
    });

    // Save the calendar document to the database
    try {
      await raceCalendar.save();
    } catch (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    // Close the connection to the database
    mongoose.connection.close();

    // Return the calendar data
    res.status(200).json({ raceCalendar });
  }
}
