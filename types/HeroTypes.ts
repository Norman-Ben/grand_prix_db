import { StaticImageData } from 'next/image';
export type HeroProps = {
  title: string | JSX.Element;
  img: StaticImageData;
  description: string;
};
