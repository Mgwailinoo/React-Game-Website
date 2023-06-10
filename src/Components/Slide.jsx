import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
const Slide = ({ children }) => {
  const PrevArrow = (props) => (
    <button {...props} className="slick-arrow slick-prev">
      <ArrowCircleLeft sx={{ color: "black", fontSize: "32px" }} />
    </button>
  );

  const NextArrow = (props) => (
    <button {...props} className="slick-arrow slick-next">
      <ArrowCircleRight sx={{ color: "black", fontSize: "32px" }} />
    </button>
  );
  let settings = {
    dots: false,
    // className: "center",
    // centerMode: true,
    infinite: true,

    slidesToShow: 3,
    speed: 500,
    prevArrow: null,
    nextArrow: null,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
        {children}
      </Slider>
    </div>
  );
};

export default Slide;
