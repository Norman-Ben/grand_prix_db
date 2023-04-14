import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import RaceResults from '@/components/RaceResults';

export default function RaceResultsPage() {
  const router = useRouter();
  const { id } = router.query;
  const raceId = parseInt(id as string);
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <RaceResults raceId={raceId} />
        <Footer />
      </div>
    </>
  );
}
