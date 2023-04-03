import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  newsObj: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

const News = mongoose.models.News || mongoose.model('News', newsSchema);

export default News;
