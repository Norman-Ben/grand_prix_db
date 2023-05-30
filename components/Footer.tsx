import React from 'react';
import Link from 'next/link';
export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded sm:rounded-box my-4">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/">F1 News</Link>
        <Link href="/2023season">2023 Season</Link>
        <Link href="/2022season">2022 Season</Link>
      </nav>
      <div>
        <p>
          <span role="img" aria-label="Racing car">
            🏎
          </span>
          Copyright © {date} - Built by Ben Norman
          <span role="img" aria-label="Racing car">
            🏎
          </span>
        </p>
      </div>
    </footer>
  );
}
