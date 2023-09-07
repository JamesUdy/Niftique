import React, { useEffect, useState } from 'react';

import { Checked } from '../../../assets';

const NFTCardDetails = (props) => { 

  const { data } = props;

  return (
    <section className='mx-6 p-1 my-8 group flex flex-col bg-[#100624c7] ring-2 ring-[#23153f] rounded-xl'>
      <div class="rounded-xl overflow-hidden my-2 mx-1">
        <img src={data.img} alt={data.userName} className='w-fit h-fit transform group-hover:scale-125 ease-in-out transition-transform duration-500' /></div>
        <div className='w-full flex flex-col space-y-1 px-3 py-1'>
          <span className='text-slate-300 text-sm'>{data.userHandle}</span>
          <div className='flex items-center space-x-1'>
            <span className='text-white'>{data.userName}</span>
            {data.status && <img src={Checked} alt='UserName Verified' className='w-4 h-4' />}
          </div>
        </div>
        <div className='px-2 py-2 mb-4 flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <img src={data.userDp} alt="User Profile Photo" className='w-8 h-8 rounded-full ring-2 ring-blue-950' />
            <div className='flex flex-col'>
              <span className='text-xs text-slate-300'>Owned By</span>
              <span className='text-[16px]'>{data.ownedBy}</span>
            </div>
          </div>  
          <div className='flex flex-col items-end'>
              <span className='text-xs text-slate-300'>Current Bid</span>
              <span className='text-xs text-end break-all w-24'>{data.price}</span>
          </div>      
        </div>
        <span className='w-full px-2 mb-2'>
          <button className='w-full py-2 bg-[#341653b9] hover:bg-[#59189ad6] hover:text-slate-200 ease-in duration-300 px-4 rounded-lg'>Place Bid</button>
        </span>
    </section>    
  )
};

export default NFTCardDetails;