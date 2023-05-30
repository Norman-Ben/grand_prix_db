import { StaticImageData } from 'next/image';

export interface SelectionCardProps {
  title: string;
  imgUrl: StaticImageData;
  btnText: string;
  link: string;
}
