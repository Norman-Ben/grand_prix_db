import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

interface News {
  data: {
    news: {
      newsObj: {};
    };
  };
}

export default function NewsGrid() {
  const [news, setNews] = useState<News | null>(null);

  useEffect(() => {
    async function getNews() {
      const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
      try {
        const res = await fetch(`${BASE_URL}/api/getNews`);
        const data = await res.json();
        setNews({
          data,
        });
      } catch (error) {
        console.error(error);
        setNews(null);
      }
    }

    getNews();
  }, []);

  return (
    <>
      <div className="container mx-auto my-6 flex justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-3 gap-8 justify-evenly">
          {news ? (
            news.data.news.newsObj.data.value.map(
              (newsItem: any, index: number) => (
                <NewsCard
                  key={index}
                  img={
                    newsItem.image
                      ? newsItem.image.contentUrl
                      : 'https://1000marcas.net/wp-content/uploads/2020/01/logo-F1.png'
                  }
                  description={newsItem.description}
                  url={newsItem.url}
                  title={newsItem.name}
                />
              )
            )
          ) : (
            <button className="btn btn-square loading"></button>
          )}
        </div>
      </div>
    </>
  );
}
