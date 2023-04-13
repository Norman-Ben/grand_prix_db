import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DriverStandings from '@/components/DriverStandings';

export default function DriverStandingsPage() {
  interface DriverStandingsData {
    standings: {};
  }

  const [driverStandingsData, setDriverStandingsData] =
    useState<DriverStandingsData | null>(null);

  useEffect(() => {
    async function getDriverStandings() {
      const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
      const year = 2022;
      try {
        const res = await fetch(
          `${BASE_URL}/api/getDriverStandings?year=${year}`
        );
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
        {driverStandingsData ? (
          <DriverStandings standings={driverStandingsData} />
        ) : (
          <p>Loading calendar...</p>
        )}
        <Footer />
      </div>
    </>
  );
}
