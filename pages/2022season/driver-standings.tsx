import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DriverStandings from '@/components/DriverStandings';
import BackButton from '@/components/BackButton';
import useSwr from 'swr';

export default function DriverStandingsPage() {
  type DriverStandingsData = Record<string, any>;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: driverStandingsData, error } = useSwr(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getDriverStandings?year=2022`,
    fetcher
  );

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <BackButton />
        {driverStandingsData ? (
          <DriverStandings standings={driverStandingsData} />
        ) : (
          <button className="btn btn-square loading"></button>
        )}
        <Footer />
      </div>
    </>
  );
}
