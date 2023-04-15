import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import RaceResults from '@/components/RaceResults';

export default function RaceResultsPage() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const raceId = Number(id);

  interface QualifyingData {
    results: {};
  }

  interface RaceData {
    results: {};
  }

  const [qualifyingData, setQualifyingData] = useState<QualifyingData | null>(
    null
  );

  const [raceData, setRaceData] = useState<RaceData | null>(null);

  useEffect(() => {
    async function getQualifyingResults() {
      const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
      try {
        const res = await fetch(
          `${BASE_URL}/api/getQualifyingResults?raceId=${raceId}`
        );
        const data = await res.json();
        setQualifyingData({
          results: data,
        });
      } catch (error) {
        console.error(error);
        setQualifyingData(null);
      }
    }
    if (raceId) {
      getQualifyingResults();
    }
  }, [raceId]);

  useEffect(() => {
    async function getRaceResults() {
      const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
      try {
        const res = await fetch(
          `${BASE_URL}/api/getRaceResults?raceId=${raceId}`
        );
        const data = await res.json();
        setRaceData({
          results: data,
        });
      } catch (error) {
        console.error(error);
        setRaceData(null);
      }
    }
    if (raceId) {
      getRaceResults();
    }
  }, [raceId]);

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <RaceResults
          raceId={raceId}
          qualifyingData={qualifyingData}
          raceData={raceData}
        />
        <Footer />
      </div>
    </>
  );
}
