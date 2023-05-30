import React from 'react';
import SelectionCard from './SelectionCard';
import { SelectionGridProps } from '@/types/SelectionGridTypes';

export default function SelectionGrid({ cardProps }: SelectionGridProps) {
  return (
    <>
      <div className="container mx-auto my-6 flex justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-3 gap-8 justify-evenly">
          <SelectionCard
            title={cardProps.DriverStandings.title}
            imgUrl={cardProps.DriverStandings.imgUrl}
            btnText={cardProps.DriverStandings.btnText}
            link={cardProps.DriverStandings.link}
          />
          <SelectionCard
            title={cardProps.ConstructorStandings.title}
            imgUrl={cardProps.ConstructorStandings.imgUrl}
            btnText={cardProps.ConstructorStandings.btnText}
            link={cardProps.ConstructorStandings.link}
          />
          <SelectionCard
            title={cardProps.RaceCalendar.title}
            imgUrl={cardProps.RaceCalendar.imgUrl}
            btnText={cardProps.RaceCalendar.btnText}
            link={cardProps.RaceCalendar.link}
          />
        </div>
      </div>
    </>
  );
}
