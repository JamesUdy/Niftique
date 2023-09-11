import React from 'react';

import './ActionSection.css';

import ActionSectionCards from './ActionSectionCards';

const ActionSection = () => {
    return (
        <section className='container actionSection mx-auto max-w-full space-y-16 lg:space-y-0 my-40 lg:my-32 px-2 lg:px-10 sm:px-6 flex justify-center'>
            <div className='ring-2 w-72 sm:w-3/4 actionSectionDiv ring-[#09020e2b] px-2 lg:px-10 sm:px-6 py-8 rounded-md flex flex-col items-center space-y-10'>
                <span className='text-lg font-semibold text-slate-300 text-center'>🚀 Innovate and Amplify Your NFTs: Craft and Propel Your Digital Assets! 🌟</span>
                <ActionSectionCards />
            </div>
        </section>
    );
};

export default ActionSection;
