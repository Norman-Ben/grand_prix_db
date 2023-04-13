import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamStandings from '@/components/TeamStandings';

export default function TeamStandingsPage() {
  interface TeamStandingsData {
    standings: {};
  }

  const [teamStandingsData, setTeamStandingsData] =
    useState<TeamStandingsData | null>(null);

  useEffect(() => {
    async function getTeamStandings() {
      const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
      const year = 2023;
      try {
        const res = await fetch(
          `${BASE_URL}/api/getTeamStandings?year=${year}`
        );
        const data = await res.json();
        setTeamStandingsData({
          standings: data,
        });
      } catch (error) {
        console.error(error);
        setTeamStandingsData(null);
      }
    }

    getTeamStandings();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        {teamStandingsData ? (
          <TeamStandings standings={teamStandingsData} />
        ) : (
          <p>Loading results...</p>
        )}
        <Footer />
      </div>
    </>
  );
}
