import mongoose from 'mongoose';

const calendarSchema = new mongoose.Schema({
  name: String,
  circuit: String,
  laps: Number,
  distance: Number,
  date: Date,
});

const calendarModel =
  mongoose.models.Calendar || mongoose.model('Calendar', calendarSchema);

export default calendarModel;
