import laptop1 from '@/assets/images/laptop/air_m2.png'
import laptop2 from '@/assets/images/laptop/air_m2_16gb.png'
import laptop3 from '@/assets/images/laptop/apple_m3_slot.png'
import laptop4 from '@/assets/images/laptop/gpu.png'
import laptop5 from '@/assets/images/laptop/laptop-lenovo-loq-15iax9-83gs001rvn-thumbnails_1.png'
import laptop6 from '@/assets/images/laptop/macbook_air_m2_1_1.png'
import laptop7 from '@/assets/images/laptop/svfer.png'
import laptop8 from '@/assets/images/laptop/text_ng_n_-_2023-06-08t005130.908.png'
import laptop9 from '@/assets/images/laptop/text_ng_n_19__50.png'
import laptop10 from '@/assets/images/laptop/text_ng_n_8__1_115.png'
import ribbon from '@/assets/icons/wrap.png'
import { StaticImageData } from "next/image";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import type { SVGProps } from 'react';

export function TwemojiStar(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#ffac33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379"></path></svg>);
}

interface LaptopCarousel {
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

export const LaptopCarouselData: LaptopCarousel[] = [
  {
      id: uuidv4(),
      img: laptop1,
      name: 'Apple MacBook Air M1 256GB 2020 | Chính hãng Apple Việt Nam',
      ribbon: ribbon,
      newpri: 10000000,
      oldpri: 12000000,
      payway: 0,
      discount: 16,
      desc: 'High performance and great camera quality.',
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
      img: laptop2,
      name: 'Apple MacBook Air M2 2022 | Chính hãng Apple Việt Nam',
      ribbon: ribbon,
      newpri: 15000000,
      oldpri: 18000000,
      payway: 0,
      discount: 15,
      desc: 'Latest model with exceptional features.',
      loveIc: <IoMdHeartEmpty />,
      loveIcFull: <IoMdHeart />,
  },
  {
      id: uuidv4(),
      img: laptop3,
      name: 'MacBook Air M3 13 inch 2024 | Chính hãng Apple Việt Nam',
      ribbon: ribbon,
      newpri: 15000000,
      oldpri: 18000000,
      payway: 0,
      discount: 16,
      desc: 'Perfect for both work and entertainment.',
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
      img: laptop4,
      name: 'Laptop Lenovo LOQ 151AX9',
      ribbon: null,
      newpri: 25000000,
      oldpri: 30000000,
      payway: 0,
      desc: 'Top-tier laptop with premium features.',
      loveIc: <IoMdHeartEmpty />,
      loveIcFull: <IoMdHeart />,
  },
  {
      id: uuidv4(),
      img: laptop5,
      name: 'Laptop ASUS Vivobook 15 X1504ZA-NJ582W',
      ribbon: ribbon,
      newpri: 8000000,
      oldpri: 10000000,
      payway: 0,
      discount: 20,
      desc: 'Affordable laptop with good performance.',
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
      img: laptop6,
      name: 'Laptop ASUS VivoBook Go 14 E1404FA-NK177W',
      ribbon: ribbon,
      newpri: 10000000,
      oldpri: 12000000,
      payway: 0,
      discount: 16,
      desc: 'High performance and great camera quality.',
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
      img: laptop7,
      name: 'Laptop MSI Cyborg 15 A12VE-412VN',
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
      img: laptop8,
      name: 'Laptop Gaming Acer Nitro 5 Tiger AN515 58 52SP',
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
      img: laptop9,
      name: 'Laptop Acer Nitro 5 15-12450HX RTX 3050',
      ribbon: ribbon,
      newpri: 25000000,
      oldpri: 30000000,
      payway: 0,
      discount: 20,
      desc: 'Top-tier laptop with premium features.',
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
      img: laptop10,
      name: 'MacBook Pro 14 M3 Pro 18GB | Chính hãng Apple Việt Nam',
      ribbon: ribbon,
      newpri: 8000000,
      oldpri: 10000000,
      payway: 0,
      discount: 20,
      desc: 'Affordable laptop with good performance.',
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
];
