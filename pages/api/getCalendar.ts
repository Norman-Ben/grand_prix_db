import mongoose, { Mongoose } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import calendarModel from '@/schemas/calendarSchema';

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

  mongoose.connect(mongoDbUri);
  const calendar = new calendarModel({
    name: 'Australian Grand Prix',
    circuit: 'Albert Park',
    laps: 58,
    distance: 307.574,
    date: new Date('2022-03-20T10:00:00.000Z'),
  });
  await calendar.save();

  // Close the connection to the database
  mongoose.connection.close();

  // Return the calendar data
  res.status(200).json({ calendar });
}
