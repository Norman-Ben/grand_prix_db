import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DriverStandings from '@/components/DriverStandings';
import BackButton from '@/components/BackButton';
import useSwr from 'swr';

export default function DriverStandingsPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: driverStandingsData, error } = useSwr(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getDriverStandings?year=2023`,
    fetcher
  );

  // const [driverStandingsData, setDriverStandingsData] =
  //   useState<DriverStandingsData | null>(null);

  // const [refreshKey, setRefreshKey] = useState(Date.now());

  // useEffect(() => {
  //   async function getDriverStandings() {
  //     const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  //     const year = 2023;
  //     try {
  //       const res = await fetch(
  //         `${BASE_URL}/api/getDriverStandings?year=${year}`
  //       );
  //       const data = await res.json();
  //       setDriverStandingsData({
  //         standings: data,
  //       });
  //     } catch (error) {
  //       console.error(error);
  //       setDriverStandingsData(null);
  //     }
  //   }
  //   setRefreshKey(Date.now());
  //   getDriverStandings();
  // }, []);

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
