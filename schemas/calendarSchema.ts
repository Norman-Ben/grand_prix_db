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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

calendarSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

const Calendars =
  mongoose.models.Calendars || mongoose.model('Calendars', calendarSchema);

export default Calendars;
