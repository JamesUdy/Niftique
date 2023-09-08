import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slider.css';

import NFTCardDetails from './NFTCardDetails';
import dataset from './NFTData';

import { CustomPrevArrow, CustomNextArrow } from './CustomArrowComponent';

const NFTCards = () => {
  const sliderSettings = {
    dots: true,
    autoplay: false,
    autoplaySpeed: 1500,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      }
    ]
  };

  return (
    <section className='w320:px-4 w425:px-10 sm:px-0 xl:px-24'>
      <Slider {...sliderSettings}>
        {dataset.map((data, index) => (
          <NFTCardDetails key={index} data={data} />
        ))}
      </Slider>
    </section>
  );
};

export default NFTCards;
