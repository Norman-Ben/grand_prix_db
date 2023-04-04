import React from 'react';
import Link from 'next/link';

interface NewsCardProps {
  img: string;
  description: string;
  url: string;
  title: string;
}

export default function NewsCard({
  img,
  description,
  url,
  title,
}: NewsCardProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="News Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link href={url}>
            <button className="btn btn-primary">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
