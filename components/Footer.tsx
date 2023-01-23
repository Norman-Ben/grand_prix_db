import React from 'react';

export default function Footer() {
  let date = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded sm:rounded-box my-4">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">F1 News</a>
        <a className="link link-hover">Current Season</a>
        <a className="link link-hover">Previous Seasons</a>
      </div>

      <div>
        <p>🏎 Copyright © {date} - Built by Ben Norman 🏎</p>
      </div>
    </footer>
  );
}
