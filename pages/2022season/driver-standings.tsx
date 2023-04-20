import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DriverStandings from '@/components/DriverStandings';
import BackButton from '@/components/BackButton';

export default function DriverStandingsPage() {
  interface DriverStandingsData {
    standings: {};
  }

  const [driverStandingsData, setDriverStandingsData] =
    useState<DriverStandingsData | null>(null);

  useEffect(() => {
    async function getDriverStandings() {
      const year = 2022;
      try {
        const res = await fetch(`api/getDriverStandings?year=${year}`);
        const data = await res.json();
        setDriverStandingsData({
          standings: data,
        });
      } catch (error) {
        console.error(error);
        setDriverStandingsData(null);
      }
    }

    getDriverStandings();
  }, []);

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
