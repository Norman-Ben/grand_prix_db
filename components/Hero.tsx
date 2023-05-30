import Image from 'next/image';
import React from 'react';
import { HeroProps } from '@/types/HeroTypes';
export default function Hero({ title, img, description }: HeroProps) {
  return (
    <div className="hero sm:rounded-box overflow-hidden">
      <Image
        src={img}
        alt={`Hero Image for ${title} page`}
        className="w-full overflow-hidden bg-cover bg-center"
      />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <header className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-slate-50">{title}</h1>
          <p className="mb-5 text-slate-300">{description}</p>
        </header>
      </div>
    </div>
  );
}
