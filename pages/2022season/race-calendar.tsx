import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RaceCalendarResults from '@/components/RaceCalendarResults';

export default function raceCalendar() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  async function getRaceCalendar() {
    const res = await fetch(`${BASE_URL}/api/getCalendar`);
    const data = await res.json();
    return data;
  }
  getRaceCalendar();

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <RaceCalendarResults />
        <Footer />
      </div>
    </>
  );
}
