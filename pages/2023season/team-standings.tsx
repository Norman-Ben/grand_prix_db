import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamStandings from '@/components/TeamStandings';
import BackButton from '@/components/BackButton';
import useSwr from 'swr';

export default function TeamStandingsPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: teamStandingsData, error } = useSwr(
    `/api/getTeamStandings?year=2023`,
    fetcher
  );

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <BackButton />
        {teamStandingsData ? (
          <TeamStandings standings={teamStandingsData} />
        ) : (
          <button className="btn btn-square loading"></button>
        )}
        <Footer />
      </div>
    </>
  );
}
