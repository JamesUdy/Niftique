import React from 'react';

import { Create, Explore } from '../../../assets';

const HeroSection = () => {
  return (
    <section className='container  my-10 px-6'>
        <div>
            <div className='w-1/2 flex flex-col space-y-4'>
                <h2 className='text-4xl font-bold my-4'>Unlock the Future of Art Collection with Rare NFTs!</h2>
                <p>🚀 Dive into a universe of exceptional digital art and seize one-of-a-kind 🌌 NFTs to propel your collection to the forefront of innovation.</p>
                <div className='flex items-center space-x-8'>
                    <button className='flex items-center gap-2 mx-2 '>
                        <img src={Explore} alt="Icon to explore the Marketplace" className='w-6 h-6' />
                        <span>Explore</span>
                    </button>
                    <button className='flex items-center gap-2 mx-2 '>
                        <img src={Create} alt="Icon to create NFTs" className='w-6 h-6' />
                        <span>Create</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
};

export default HeroSection;