import React from 'react';

import ActionsData from './ActionsData';

const ActionSectionCards = () => {
  return (
    <section className='grid items-center justify-center space-y-2 xl:space-y-0 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
        {ActionsData.map((data) => {
            return (
                <div key={data.id} className='bg-[#09020e] group rounded-lg h-80 mx-2 p-4'>
                    <div className='relative p-2 flex flex-col  rounded-lg border-[#1d0a29] justify-center space-y-6 items-center border-2 h-full'>
                        <div className='mt-2'>
                            {<data.img />}
                        </div>
                        <div className='flex flex-col items-center space-y-1'>
                            <span className='text-sm text-slate-100'>{data.title}</span>
                            <p className='text-center text-slate-400 text-xs'>{data.description}</p>
                        </div>
                        <span className='absolute tracking-normal -top-[26px] -left-[1.5px] py-1 px-4 rounded-tl-lg border-r-8  border-b-8 border-[#09020e] bg-[#14061c] font-medium text-[#641197] group-hover:text-[#732c9f] ease-in duration-200'>0{data.id}</span>
                    </div>                    
                </div>
            )
        })}
    </section>
  )
};

export default ActionSectionCards;
