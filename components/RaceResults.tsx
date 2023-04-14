import Link from 'next/link';
import React from 'react';

interface RaceResultsProps {
  raceId?: number;
}

export default function RaceCalendarResults({ raceId }: RaceResultsProps) {
  return (
    <>
      <div>{raceId}</div>
    </>
  );
}
