import sound1 from '@/assets/images/sounds/apple-airpods-pro-2-usb-c_1_h2.png'
import sound2 from '@/assets/images/sounds/group_170_1_h1.png'
import sound3 from '@/assets/images/sounds/samsung-galaxy-buds-2-pro-00.png'
import sound4 from '@/assets/images/sounds/samsung-galaxy-buds-3-spa.png'
import sound5 from '@/assets/images/sounds/sony.png'
import sound6 from '@/assets/images/sounds/tai-nghe-khong-day-anker-soundcore-r50i-a3949_2_.png'
import sound7 from '@/assets/images/sounds/tai-nghe-khong-day-huawei-freeclip-000.png'
import sound8 from '@/assets/images/sounds/tai-nghe-samsung-galaxy-buds-3-pro-spa.png'
import ribbon from '@/assets/icons/wrap.png'
import { StaticImageData } from "next/image";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import type { SVGProps } from 'react';

export function TwemojiStar(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#ffac33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379"></path></svg>);
}

interface SoundCarousel {
  id: string;
  img: StaticImageData;
  name: string;
  ribbon: StaticImageData | null;
  newpri: number;
  oldpri: number;
  payway?: number;
  discount?: number;
  desc: string;
  loveIc: JSX.Element;
  loveIcFull?: JSX.Element;
  suggest?: boolean;
  stars?: JSX.Element | null;
  chip?: string;
  type?: string;
  special?: string[];
  manufacturer?: string;
  available?: boolean;
}

export const SoundCarouselData: SoundCarousel[] = [
  {
    id: uuidv4(),
    img: sound1,
    name: 'Tai nghe Apple AirPods Pro 2 USB-C',
    ribbon: ribbon,
    newpri: 10000000,
    oldpri: 12000000,
    payway: 0,
    discount: 15,
    desc: 'High performance and great sound quality.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
    stars: (
      <>
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
      </>
    )
  },
  {
    id: uuidv4(),
    img: sound2,
    name: 'Tai nghe Group 170',
    ribbon: ribbon,
    newpri: 15000000,
    oldpri: 18000000,
    payway: 0,
    discount: 16,
    desc: 'Latest model with exceptional features.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
    suggest: true,
    stars: (
      <>
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
      </>
    )
  },
  {
    id: uuidv4(),
    img: sound3,
    name: 'Tai nghe Samsung Galaxy Buds 2 Pro',
    ribbon: ribbon,
    newpri: 15000000,
    oldpri: 18000000,
    payway: 0,
    discount: 16,
    desc: 'Perfect for both work and entertainment.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
    stars: (
      <>
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
      </>
    )
  },
  {
    id: uuidv4(),
    img: sound4,
    name: 'Tai nghe Samsung Galaxy Buds 3',
    ribbon: ribbon,
    newpri: 25000000,
    oldpri: 30000000,
    payway: 0,
    discount: 20,
    desc: 'Top-tier headphones with premium features.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
    suggest: true,
    stars: (
      <>
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
      </>
    )
  },
  {
    id: uuidv4(),
    img: sound5,
    name: 'Tai nghe Sony',
    ribbon: ribbon,
    newpri: 8000000,
    oldpri: 10000000,
    payway: 0,
    discount: 20,
    desc: 'Affordable headphones with good performance.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
    stars: (
      <>
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
      </>
    )
  },
  {
    id: uuidv4(),
    img: sound6,
    name: 'Tai nghe không dây Anker Soundcore R50i',
    ribbon: ribbon,
    newpri: 10000000,
    oldpri: 12000000,
    payway: 0,
    discount: 16,
    desc: 'High performance and great sound quality.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
    suggest: true,
    stars: (
      <>
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
      </>
    )
  },
  {
    id: uuidv4(),
    img: sound7,
    name: 'Tai nghe không dây Huawei Freeclip',
    ribbon: ribbon,
    newpri: 15000000,
    oldpri: 18000000,
    payway: 0,
    discount: 16,
    desc: 'Latest model with exceptional features.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
    stars: (
      <>
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
      </>
    )
  },
  {
    id: uuidv4(),
    img: sound8,
    name: 'Tai nghe Samsung Galaxy Buds 3 Pro',
    ribbon: ribbon,
    newpri: 12000000,
    oldpri: 14000000,
    payway: 0,
    discount: 14,
    desc: 'Excellent sound quality and battery life.',
    loveIc: <IoMdHeartEmpty />,
    loveIcFull: <IoMdHeart />,
    stars: (
      <>
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
        <TwemojiStar />
      </>
    )
  },
];