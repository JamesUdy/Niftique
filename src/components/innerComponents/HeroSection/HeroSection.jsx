import React from 'react';
import { Link } from 'react-router-dom';

import NFTSection from './NFTSection';

import { Create, Explore } from '../../../assets';

const HeroSection = () => {
  return (
    <section className='container lg:px-10 px-6 max-w-full space-y-16 lg:space-y-0 justify-between flex flex-col lg:flex-row'>
            <div className='flex flex-col lg:w-1/2 space-y-4 m-2'>
                <h2 className='text-4xl font-bold my-4'>Unlock the Future of Art Collection with Rare NFTs!</h2>
                <p>🚀 Dive into a universe of exceptional digital art and seize one-of-a-kind 🌌 NFTs to propel your collection to the forefront of innovation.</p>
                <div className='flex items-center space-x-8'>
                    <Link to='/marketplace'>
                        <button className='flex group gap-3 py-2 px-4 border-2 text-[#9341db] border-[#7b2cbf] hover:bg-[#7a2cbf69] hover:border-[rgba(122,44,191,0.41)] hover:text-[#e0aaff] ease-in duration-300 rounded-lg items-center'>
                            <Explore />
                            <span>Explore</span>
                        </button>
                    </Link>
                    <Link to='/create'>
                        <button className='flex group gap-3 py-2 px-4 border-2 text-[#9341db] border-[#7b2cbf] hover:bg-[#7a2cbf69] hover:border-[rgba(122,44,191,0.41)] hover:text-[#e0aaff] ease-in duration-300 rounded-lg items-center'>
                            <Create />
                            <span>Create</span>
                        </button>
                    </Link>
                </div>
            </div>
            <NFTSection />
    </section>
  )
};

export default HeroSection;