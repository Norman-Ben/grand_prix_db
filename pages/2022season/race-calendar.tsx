import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RaceCalendarResults from '@/components/RaceCalendarResults';

export default function raceCalendar() {
  const calendarData = fetch('/api/get2022Calendar')
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  console.log(calendarData);

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
