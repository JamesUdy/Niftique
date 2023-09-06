import React from 'react';

import { Link } from 'react-router-dom';

const UpcomingBids = () => {
  return (
    <section className='container border-t-2 py-6 border-[#1e0732ba]'>
            <div className='flex flex-col space-y-4 mx-auto'>
                <div className='flex items-center space-x-4'>
                    <h2 className='text-xl font-bold my-4'>Upcoming Bids</h2>
                    <button className='flex group gap-3 py-2 px-4 border-2 text-[#9341db] border-[#7b2cbf] hover:bg-[#7a2cbf69] hover:border-[rgba(122,44,191,0.41)] hover:text-[#e0aaff] ease-in duration-300 rounded-full items-center'>
                        <span><Link to='/marketplace'>Dive Deeper</Link></span>
                    </button>
                </div>
            </div>
    </section>
  )
};

export default UpcomingBids;