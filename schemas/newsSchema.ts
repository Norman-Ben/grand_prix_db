import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  newsObj: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

newsSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

const News = mongoose.models.News || mongoose.model('News', newsSchema);

export default News;
