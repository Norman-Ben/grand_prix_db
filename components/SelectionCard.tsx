import React from 'react';
import Link from 'next/link';

export default function SelectionCard({ title, imgUrl, btnText, link }) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={imgUrl} alt="f1 picture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-end">
          <Link href={link}>
            <button className="btn btn-primary">{btnText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
