import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  newsObj: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 120, //24 hours in seconds
  },
});

const News = mongoose.models.News || mongoose.model('News', newsSchema);

export default News;
