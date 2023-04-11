import { useState, useEffect } from 'react';
import { themeChange } from 'theme-change';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (event.target.closest('.menu') || event.target.closest('.btn')) {
        return;
      }
      setIsOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    themeChange(false);
  });

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Grand Prix<span className="text-info">.DB</span>
          </Link>
        </div>
        <div className="flex-none max-w-[100px]">
          <label className="">
            Select Theme:
            <select
              data-choose-theme
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
            >
              <option value="">OS Default</option>
              <option value="dark">Dark</option>
              <option value="emerald">Light</option>
            </select>
          </label>
        </div>
      </div>

      <ul
        className={`menu bg-base-300 w-56 rounded-box z-10 transform transition-all duration-700 ease-in-out absolute ${
          isOpen ? 'translate-y-0' : '-translate-y-[100vh]'
        }`}
      >
        <li>
          <Link href="/">F1 News</Link>
        </li>
        <li>
          <Link href="/2023season">2023 Season</Link>
        </li>
        <li>
          <Link href="/2022season">2022 Season</Link>
        </li>
      </ul>
    </>
  );
}
