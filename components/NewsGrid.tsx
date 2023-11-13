import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { NewsItemType, NewsType } from '@/types/NewsGridTypes';

export default function NewsGrid() {
  const [news, setNews] = useState<NewsType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getNews() {
      try {
        const res = await fetch(`api/getNews`);
        if (!res.ok) {
          throw new Error(res.statusText || 'Error fetching news');
        }
        const data = await res.json();
        setNews(data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(
          'Failed to fetch news from our provider. Please try again later.'
        );
      } finally {
        setLoading(false);
      }
    }
    getNews();
  }, []);

  return (
    <div className="container mx-auto my-6 flex justify-around">
      <div className="grid grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-3 gap-8 justify-evenly">
        {loading ? (
          <button className="btn btn-square loading"></button>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : news ? (
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
          <div>No news available at the moment.</div>
        )}
      </div>
    </div>
  );
}
