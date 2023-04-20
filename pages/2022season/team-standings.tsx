import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamStandings from '@/components/TeamStandings';
import BackButton from '@/components/BackButton';

export default function TeamStandingsPage() {
  interface TeamStandingsData {
    standings: {};
  }

  const [teamStandingsData, setTeamStandingsData] =
    useState<TeamStandingsData | null>(null);

  useEffect(() => {
    async function getTeamStandings() {
      const year = 2022;
      try {
        const res = await fetch(`api/getTeamStandings?year=${year}`);
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
