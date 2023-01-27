import { Client, Entity, Schema, Repository } from 'redis-om';

export default async function getNews(res: any) {
  let client = await new Client().open(process.env.REDIS_URL);

  class News extends Entity {}

  const newsSchema = new Schema(News, {
    title: { type: 'string' },
    description: { type: 'string' },
    imageurl: { type: 'string' },
    articleurl: { type: 'string' },
  });

  const newsRepository = client.fetchRepository<News>(newsSchema);

  const newNews = newsRepository.createEntity();
  newNews.title = 'Hello World';
  newNews.description = 'This is a description';

  const id = await newsRepository.save(newNews);

  console.log(id);
  await newsRepository.expire(id, 600);

  await client.close();
}
