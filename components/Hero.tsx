import React from 'react';

export default function Hero() {
  return (
    <div
      className="hero min-h-[65vh] my-4 sm:rounded-box overflow-hidden"
      style={{
        backgroundImage: `url("https://wallpapercave.com/wp/wp10985103.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-slate-50">
            Grand Prix<span className="text-info">.DB</span>
          </h1>
          <p className="mb-5 text-slate-300">
            The Formula 1 database for all your F1 news and statistics.
          </p>
        </div>
      </div>
    </div>
  );
}
