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

  let isCached = await client.execute(['KEYS', 'News:*']);
  // console.log(isCached);

  if (isCached.length === 0) {
    const options = {
      method: 'GET',
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'd9067d268fmsh141632809016681p1983a2jsn7498276439f8',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
      },
    };

    let bingNewsApiCall = await fetch(
      'https://bing-news-search1.p.rapidapi.com/news/search?q=Formula%201&count=6&freshness=Day&originalImg=true&textFormat=Raw&safeSearch=Off',
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));

    console.log(bingNewsApiCall);

    const newsRepository = client.fetchRepository<News>(newsSchema);

    const newNews = newsRepository.createEntity();
    newNews.title = bingNewsApiCall.value[0].name;
    newNews.description = bingNewsApiCall.value[0].description;
    newNews.imageurl = bingNewsApiCall.value[0].image.thumbnail.contentUrl;
    newNews.articleurl = bingNewsApiCall.value[0].url;

    const id = await newsRepository.save(newNews);

    // console.log(id);
    await newsRepository.expire(id, 600);
  } else {
    const newsCache = await client.execute(['KEYS', 'News:*']);
    console.log(newsCache);
    res = await client.execute(['JSON.GET', newsCache]);
    console.log(res);
  }
  // console.log(res);
  await client.close();
}
