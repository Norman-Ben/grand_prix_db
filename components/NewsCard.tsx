import React from 'react';
import Link from 'next/link';
import { NewsCardProps } from '@/types/NewsCardTypes';

export default function NewsCard({
  img,
  description,
  url,
  title,
}: NewsCardProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={`Image for ${title}`} />
      </figure>
      <article className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link href={url} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </article>
    </div>
  );
}
