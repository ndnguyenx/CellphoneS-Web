'use client'
import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.scss";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function CustomNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-next-arrow`}
        onClick={onClick}
      >
        <MdNavigateNext style={{ color: "black"}} />
      </div>
    );
  }
  
  function CustomPrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-prev-arrow`}
        onClick={onClick}
      >
        <MdNavigateBefore style={{ color: "black"}} />
      </div>
    );
  }

export function Carousel({ children }: any) {
  const settings = {
    className: "center tworow",
    dots: false,
    infinite: true,
    // centerMode: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 2,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div className="slider-contain">
        <Slider {...settings}>
            {children}
        </Slider>
    </div>
  )
}