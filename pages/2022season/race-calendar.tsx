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
  const [refreshKey, setRefreshKey] = useState(Date.now());

  useEffect(() => {
    async function getRaceCalendar() {
      const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
      const year = 2022;
      try {
        const res = await fetch(`${BASE_URL}/api/getCalendar?year=${year}`);
        const data = await res.json();
        setCalendarData({
          calendar: data.calendar.calendarObj,
        });
      } catch (error) {
        console.error(error);
        setCalendarData(null);
      }
    }
    setRefreshKey(Date.now());

    getRaceCalendar();
  }, []);

  return (
    <>
      <div className="container mx-auto" key={refreshKey}>
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
