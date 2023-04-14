import mongoose from 'mongoose';

const qualifyingResultsSchema = new mongoose.Schema({
  qualifyingResultsObj: {
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

qualifyingResultsSchema.index(
  { createdAt: 1 },
  { expireAfterSeconds: 2419200 }
);

const QualifyingResults =
  mongoose.models.QualifyingResults ||
  mongoose.model('QualifyingResults', qualifyingResultsSchema);

export default QualifyingResults;
