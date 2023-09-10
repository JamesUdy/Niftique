import React from 'react';

import ActionsData from './ActionsData';

const ActionSectionCards = () => {
  return (
    <section className='grid items-center grid-cols-1 lg:grid-cols-[1fr,1fr,1fr,1fr]'>
        {ActionsData.map((data) => {
            return (
                <div key={data.id} className='bg-[#09020e] rounded-lg h-80 mx-2 p-4'>
                    <div className='relative p-2 flex flex-col rounded-lg border-[#1d0a29] justify-center space-y-6 items-center border-2 h-full'>
                        <div className='mt-2'>
                            {<data.img />}
                        </div>
                        <div className='flex flex-col items-center'>
                            <span>{data.title}</span>
                            <p className='text-center text-slate-300 text-xs'>{data.description}</p>
                        </div>
                        <span className='absolute tracking-normal -top-[26px] -left-[1.5px] py-1 px-4 rounded-tl-lg border-r-8  border-b-8 border-[#09020e] bg-[#14061c] font-medium text-[#ab51e3]'>0{data.id}</span>
                    </div>                    
                </div>
            )
        })}
    </section>
  )
};

export default ActionSectionCards;
