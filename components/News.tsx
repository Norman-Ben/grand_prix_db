import React from 'react';
import NewsCard from './NewsCard';

export default function News() {
  return (
    <>
      <h1 className="text-5xl font-bold mx-4 my-6 text-center">F1 News:</h1>
      <div className="container mx-auto my-6 flex justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-evenly">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </>
  );
}
