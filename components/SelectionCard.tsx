import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SelectionCardProps } from '@/types/SelectionCardTypes';

export default function SelectionCard({
  title,
  imgUrl,
  btnText,
  link,
}: SelectionCardProps) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="max-h-[60%]">
        <Image src={imgUrl} alt="Selection Card Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-end">
          <Link className="btn btn-primary" href={link}>
            {btnText}
          </Link>
        </div>
      </div>
    </div>
  );
}
