import { StaticImageData } from 'next/image';

export interface CardProps {
  title: string;
  imgUrl: StaticImageData;
  btnText: string;
  link: string;
}

export interface SelectionGridProps {
  cardProps: {
    DriverStandings: CardProps;
    ConstructorStandings: CardProps;
    RaceCalendar: CardProps;
  };
}
