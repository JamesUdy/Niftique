import React from 'react';

import NFTImg from './NFTSectionImg';

const NFTSection = () => {
  return (
    <section className='py-10 w320:px-3 w375:px-0 w425:px-[24px] sm:px-36 lg:py-4 lg:px-6 xl:px-24 2xl:px-36 flex flex-1 items-center justify-center'>
        <div className="flex flex-wrap justify-center rotate-45">
            {NFTImg.map((image) => {
              return <img loading='lazy' key={image.id} src={image.img} alt="" className='w320:w-28 w360:w-32 w375:w-36 sm:w-48 w320:h-28 w360:h-32 w375:h-36 sm:h-48 border-2 border-[#9341db] rounded-lg object-contain block -rotate-45 items-center justify-center' />
            })}
        </div>
    </section>
  )
};

export default NFTSection;
