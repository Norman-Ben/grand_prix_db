import mongoose from 'mongoose';

const teamStandingsSchema = new mongoose.Schema({
  teamStandingsObj: {
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

teamStandingsSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

const TeamStandings =
  mongoose.models.TeamStandings ||
  mongoose.model('TeamStandings', teamStandingsSchema);

export default TeamStandings;
