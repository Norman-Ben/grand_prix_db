import mongoose from 'mongoose';

const raceResultsSchema = new mongoose.Schema({
  raceResultsObj: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  raceId: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
raceResultsSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2419200 });

const RaceResults =
  mongoose.models.RaceResults ||
  mongoose.model('RaceResults', raceResultsSchema);

export default RaceResults;
