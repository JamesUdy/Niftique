import React from 'react';

import ActionSectionCards from './ActionSectionCards';

const ActionSection = () => {
    return (
        <section className='container mx-auto max-w-full space-y-16 lg:space-y-0 lg:mt-12 lg:mb-24 px-2 lg:px-10 sm:px-6 flex justify-center'>
            <div className='ring-2 w-3/4 ring-[#3b165c] px-2 lg:px-10 sm:px-6 py-6 rounded-md flex flex-col items-center space-y-10'>
                <span className=''>🚀 Innovate and Amplify Your NFTs: Craft and Propel Your Digital Assets! 🌟</span>
                <ActionSectionCards />
            </div>
        </section>
    );
};

export default ActionSection;
