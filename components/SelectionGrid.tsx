import React from 'react';
import SelectionCard from './SelectionCard';
import { SelectionGridProps } from '@/types/SelectionGridTypes';

export default function SelectionGrid({
  cardProps,
  season,
}: SelectionGridProps) {
  return (
    <>
      <div className="container mx-auto my-6 flex justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-3 gap-8 justify-evenly">
          <SelectionCard
            title={cardProps.DriverStandings.title}
            imgUrl={cardProps.DriverStandings.imgUrl}
            btnText={cardProps.DriverStandings.btnText}
            link={
              !season
                ? cardProps.DriverStandings.link
                : `${cardProps.DriverStandings.link}?season=${season}`
            }
          />
          <SelectionCard
            title={cardProps.ConstructorStandings.title}
            imgUrl={cardProps.ConstructorStandings.imgUrl}
            btnText={cardProps.ConstructorStandings.btnText}
            link={
              !season
                ? cardProps.ConstructorStandings.link
                : `${cardProps.ConstructorStandings.link}?season=${season}`
            }
          />
          <SelectionCard
            title={cardProps.RaceCalendar.title}
            imgUrl={cardProps.RaceCalendar.imgUrl}
            btnText={cardProps.RaceCalendar.btnText}
            link={
              !season
                ? cardProps.RaceCalendar.link
                : `${cardProps.RaceCalendar.link}?season=${season}`
            }
          />
        </div>
      </div>
    </>
  );
}
