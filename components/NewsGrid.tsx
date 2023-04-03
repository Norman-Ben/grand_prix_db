import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

export default function NewsGrid() {
  interface News {}

  const [news, setNews] = useState<News | null>(null);

  useEffect(() => {
    async function getNews() {
      const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
      try {
        const res = await fetch(`${BASE_URL}/api/getNews`);
        const data = await res.json();
        setNews({
          news: data,
        });
      } catch (error) {
        console.error(error);
        setNews(null);
      }
    }

    getNews();
  }, []);

  console.log(news);

  return (
    <>
      <div className="container mx-auto my-6 flex justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-3 gap-8 justify-evenly">
          {news ? (
            news.news.map((newsItem: any) => (
              <NewsCard
                key={newsItem.id}
                title={newsItem.title}
                img={newsItem.img}
                description={newsItem.description}
                link={newsItem.link}
              />
            ))
          ) : (
            <p>Loading news...</p>
          )}
        </div>
      </div>
    </>
  );
}
