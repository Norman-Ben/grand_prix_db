import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RaceCalendarResults from '@/components/RaceCalendarResults';
import BackButton from '@/components/BackButton';

export default function RaceCalendar() {
  interface CalendarData {
    calendar: {};
  }

  const [calendarData, setCalendarData] = useState<CalendarData | null>(null);

  useEffect(() => {
    async function getRaceCalendar() {
      const year = 2023;
      try {
        const res = await fetch(`api/getCalendar?year=${year}`);
        const data = await res.json();
        setCalendarData({
          calendar: data.calendar.calendarObj,
        });
      } catch (error) {
        console.error(error);
        setCalendarData(null);
      }
    }

    getRaceCalendar();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <BackButton />
        {calendarData ? (
          <RaceCalendarResults calendar={calendarData.calendar} />
        ) : (
          <button className="btn btn-square loading"></button>
        )}
        <Footer />
      </div>
    </>
  );
}
