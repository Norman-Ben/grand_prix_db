import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { NewsItemType, NewsType } from '@/types/NewsGridTypes';
export default function NewsGrid() {
  const [news, setNews] = useState<NewsType | null>(null);
  useEffect(() => {
    async function getNews() {
      try {
        const res = await fetch(`api/getNews`);
        const data = await res.json();
        setNews(data);
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
            news.newsObj.value.map((newsItem: NewsItemType, index: number) => (
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
            ))
          ) : (
            <button className="btn btn-square loading"></button>
          )}
        </div>
      </div>
    </>
  );
}
