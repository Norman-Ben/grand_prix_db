import React from 'react';
import Link from 'next/link';

export default function Footer() {
  let date = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded sm:rounded-box my-4">
      <div className="grid grid-flow-col gap-4">
        <Link href="/">F1 News</Link>
        <Link href="/2023season">2023 Season</Link>
        <Link href="/2022season">2022 Season</Link>
      </div>

      <div>
        <p>🏎 Copyright © {date} - Built by Ben Norman 🏎</p>
      </div>
    </footer>
  );
}
