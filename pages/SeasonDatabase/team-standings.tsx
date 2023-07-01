import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamStandings from '@/components/TeamStandings';
import BackButton from '@/components/BackButton';
import useSwr from 'swr';

export default function TeamStandingsPage() {
  const { season } = useRouter().query;
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: teamStandingsData, error } = useSwr(
    `/api/getTeamStandings?year=${season}`,
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
