import React from 'react';

import ActionsData from './ActionsData';

const ActionSectionCards = () => {
  return (
    <section className='flex'>
        {ActionsData.map((data) => {
            return (
                <div key={data.id} className='flex flex-col items-center'>
                    {<data.img />}
                    <div className='flex flex-col items-center'>
                        <span>{data.title}</span>
                        <p>{data.description}</p>
                    </div>
                </div>
            )
        })}
    </section>
  )
};

export default ActionSectionCards;
