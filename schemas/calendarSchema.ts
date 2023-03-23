import mongoose from 'mongoose';

const calendarSchema = new mongoose.Schema({
  calendarObj: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const Calendars =
  mongoose.models.Calendars || mongoose.model('Calendars', calendarSchema);

export default Calendars;
