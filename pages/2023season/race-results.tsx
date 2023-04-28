import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import RaceResults from '@/components/RaceResults';
import BackButton from '@/components/BackButton';
import useSwr from 'swr';

export default function RaceResultsPage() {
  const router = useRouter();
  const { id } = router.query;
  const raceId = Number(id);

  interface QualifyingData {
    results: {};
  }

  interface RaceData {
    results: {};
  }

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: qualifyingData, error: qualifyingError } = useSwr(
    raceId ? `/api/getQualifyingResults?raceId=${raceId}` : null,
    fetcher
  );

  const { data: raceData, error: raceError } = useSwr(
    raceId ? `/api/getRaceResults?raceId=${raceId}` : null,
    fetcher
  );

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <BackButton />
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
