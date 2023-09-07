import React, { useEffect, useState } from 'react';

const NFTCardDetails = (props) => { 

  const { data } = props;

  return (
    <section className='w-1/2'>
        <img src={data.img} alt={data.userName} className='w-10 h-10' />
        <span className='text-white'>{data.userName}</span>
    </section>
  )
};

export default NFTCardDetails;