import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RaceCalendarResults from '@/components/RaceCalendarResults';
import BackButton from '@/components/BackButton';
import useSwr from 'swr';

export default function RaceCalendar() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: calendarData, error } = useSwr(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCalendar?year=2022`,
    fetcher
  );

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <BackButton />
        {calendarData ? (
          <RaceCalendarResults calendar={calendarData} />
        ) : (
          <button className="btn btn-square loading"></button>
        )}
        <Footer />
      </div>
    </>
  );
}
