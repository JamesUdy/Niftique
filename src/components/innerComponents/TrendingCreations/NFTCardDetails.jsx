import React, { useEffect, useState } from 'react';

import { Checked, Etherium } from '../../../assets';

const NFTCardDetails = (props) => { 

  const { data } = props;

  return (
    <section className='relative mx-3 sm:mx-6 p-1 h-[460px] my-8 group flex flex-col justify-between bg-[#0f0421bd] ring-2 ring-[#23153f] rounded-xl'>
      <div className="rounded-xl overflow-hidden m-1">
        <img src={data.img} alt={data.userName} className='w-full h-full transform group-hover:scale-125 ease-in-out transition-transform duration-500' />
      </div>
      <div className='w-full flex flex-col space-y-1 px-3 py-1'>
          <span className='text-slate-300 text-sm w320:text-xs w360:text-sm'>{data.userHandle}</span>
          <div className='flex items-center space-x-1'>
            <span className='text-white text-lg w320:text-xs w360:text-sm'>{data.userName}</span>
            {data.status && <img src={Checked} alt='UserName Verified' className='w-4 h-4' />}
          </div>
        </div>
        <div className='px-2 py-2 mb-4 flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <img src={data.userDp} alt="User Profile Photo" className='w-8 h-8 rounded-full ring-2 ring-[#3e207b]' />
            <div className='flex flex-col'>
              <span className='text-xs w320:text-[10px] w360:text-xs text-slate-300'>created By</span>
              <span className='text-[14px] w320:text-[12px] w360:text-[14px]'>{data.createdBy}</span>
            </div>
          </div>  
          <div className='flex flex-col items-end'>
              <span className='text-xs w320:text-[8px] w360:text-xs text-slate-300'>Current Bid</span>
              <span className='text-xs w320:text-[8px] w360:text-xs text-end break-all w-16 w360:w-24'>{data.price}</span>
          </div>      
        </div>
        <span className='w-full px-2 mb-1'>
          <button className='w-full py-2 bg-[#341653b9] hover:bg-[#59189ad6] hover:text-slate-200 ease-in duration-300 px-4 rounded-lg'>Place Bid</button>
        </span>  
        <Etherium />      
    </section>    
  )
};

export default NFTCardDetails;
