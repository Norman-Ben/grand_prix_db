import mongoose from 'mongoose';

const calendarSchema = new mongoose.Schema({
  calendarObj: mongoose.Schema.Types.Mixed,
});

const calendarModel =
  mongoose.models.Calendar || mongoose.model('Calendar', calendarSchema);

export default calendarModel;
