import mongoose from 'mongoose';

const driverStandingsSchema = new mongoose.Schema({
  driverStandingsObj: {
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

driverStandingsSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

const DriverStandings =
  mongoose.models.DriverStandings ||
  mongoose.model('DriverStandings', driverStandingsSchema);

export default DriverStandings;
