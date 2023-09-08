// import React from 'react';

// import NFTCardDetails from './NFTCardDetails';

// import Slider from 'react-slick';

// import dataset from './NFTData';

// const sliderConfig = {
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   autoplay: false,
//   autoplaySpeed: 1000,
//   speed: 500,
//   arrows: true,
//   dots: true,
//   responsive: [
//     {
//       breakpoint: 1024,
//       sliderConfig: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       sliderConfig: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       sliderConfig: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// }

// const NFTCards = () => {
//   return (
//     <section className='px-24'>
//       <Slider {...sliderConfig}>
//         {dataset.map((data) => {
//           return (
//             <NFTCardDetails data={data} />
//           )
//         })}
//       </Slider>
//     </section>
//   )
// };

// export default NFTCards;

import React from 'react';
import Slider from 'react-slick';
import NFTCardDetails from './NFTCardDetails';
import dataset from './NFTData';

const NFTCards = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section className='w320:px-4 sm:px-0 xl:px-24'>
      <Slider {...sliderSettings}>
        {dataset.map((data, index) => (
          <NFTCardDetails key={index} data={data} />
        ))}
      </Slider>
    </section>
  );
};

export default NFTCards;
