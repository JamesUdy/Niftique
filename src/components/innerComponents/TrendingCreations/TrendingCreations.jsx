import React from 'react';

import { Link } from 'react-router-dom';
import { Rocket } from '../../../assets';

import NFTCards from './NFTCards';

const TrendingCreations = () => {
  return (
    <section className='container mx-auto border-t-2 mt-24 sm:mt-32 py-6 px-14 border-[#1e0732ba]'>
            <div className='flex flex-col space-y-4 mx-auto'>
                <div className='flex items-center justify-between space-x-4 my-6'>
                    <h2 className='text-xl tracking-tighter text-slate-200 font-semibold hover:underline hover:underline-offset-4'>TRENDING CREATIONS</h2>
                    <button className='group py-2 px-4 border-2 animate-pulse hover:animate-none text-[#9846df] border-[#9846df] hover:bg-[#7a2cbf69] hover:border-[rgba(122,44,191,0.41)] hover:text-[#e0aaff] ease-in duration-300 rounded-full items-center'>
                        <span><Link to='/marketplace'  className='flex items-center gap-3'><span className='tracking-tight'>Dive Deeper</span> <Rocket /></Link></span>
                    </button>
                </div>
                <NFTCards />
            </div>
    </section>
  )
};

export default TrendingCreations;