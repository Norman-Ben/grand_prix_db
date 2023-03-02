import { NextApiRequest, NextApiResponse } from 'next';
import calendarModel from '../../schemas/calendarSchema';

const mongoose = require('mongoose');

export default async function get2022Calendar(
  req: NextApiRequest,
  res: NextApiResponse
) {
  mongoose.connect(process.env.MONGODB_URI);
  const calendar = new calendarModel({
    name: 'Australian Grand Prix',
    circuit: 'Albert Park',
    laps: 58,
    distance: 307.574,
    date: new Date('2022-03-20T10:00:00.000Z'),
  });
  await calendar.save();
  res.status(200).json({ calendar });
}
