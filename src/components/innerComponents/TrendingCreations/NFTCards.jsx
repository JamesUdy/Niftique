import React from 'react';

import NFTCardDetails from './NFTCardDetails';

import Slider from 'react-slick';

import dataset from './NFTData';

const sliderConfig = {
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  speed: 500,
  arrows: true,
  dots: true,
}

const NFTCards = () => {
  return (
    <section className='px-24'>
      <Slider {...sliderConfig}>
        {dataset.map((data) => {
          return (
            <NFTCardDetails data={data} />
          )
        })}
      </Slider>
    </section>
  )
};

export default NFTCards;