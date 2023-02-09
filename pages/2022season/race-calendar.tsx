import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RaceCalendarResults from '@/components/RaceCalendarResults';

export default function raceCalendar() {
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
