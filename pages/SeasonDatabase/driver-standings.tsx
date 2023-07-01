import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DriverStandings from '@/components/DriverStandings';
import BackButton from '@/components/BackButton';
import useSwr from 'swr';

export default function DriverStandingsPage() {
  const { season } = useRouter().query;
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: driverStandingsData, error } = useSwr(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getDriverStandings?year=${season}`,
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
