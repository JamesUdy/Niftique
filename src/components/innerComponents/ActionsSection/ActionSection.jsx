import React from 'react';

const ActionSection = () => {
  return (
    <section className='container mx-auto max-w-full space-y-16 lg:space-y-0 lg:mt-12 lg:mb-24 px-2 lg:px-10 sm:px-6 flex justify-center'>
        <div className='ring-2 w-3/4 ring-[#3b165c] px-2 lg:px-10 sm:px-6 py-6 rounded-md flex flex-col items-center space-y-10'>
            <span className=''>🚀 Innovate and Amplify Your NFTs: Craft and Propel Your Digital Assets! 🌟</span>
            <section className='flex'>
                <div className='flex flex-col items-center'>
                    <img src="https://nifter-nft-marketplace.netlify.app/images/single-create-sell-item-1.png" alt="" />
                    <div className='flex flex-col items-center'>
                        <span>Link Your Wallet</span>
                        <p>Once your preferred wallet is configured, establish a connection with OpenSea by clicking on the wallet icon located in the top right corner. Familiarize yourself with the wallets we support for a seamless experience.</p>
                    </div>
                </div>
                
                <div className='flex flex-col items-center'>
                    <img src="https://nifter-nft-marketplace.netlify.app/images/single-create-sell-item-1.png" alt="" />
                    <div className='flex flex-col items-center'>
                        <span>Create Your Collection</span>
                        <p>Begin by clicking "My Collections" to set up your collection. Here, you can add social links, craft a compelling description, upload profile and browser images, and establish a secondary sales fee.</p>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <img src="https://nifter-nft-marketplace.netlify.app/images/single-create-sell-item-1.png" alt="" />
                    <div className='flex flex-col items-center'>
                        <span>Add Your NFTs</span>
                        <p>To add your NFTs, upload your work and organize it within your newly created collection. This step marks the journey of showcasing your unique digital assets.</p>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <img src="https://nifter-nft-marketplace.netlify.app/images/single-create-sell-item-1.png" alt="" />
                    <div className='flex flex-col items-center'>
                        <span>Selling Your NFTs</span>
                        <p>Explore diverse selling options, including auctions, fixed-price listings, and declining-price listings. Tailor your NFT sales strategy to your preferences, and let us facilitate your success.</p>
                    </div>
                </div>
            </section>
        </div>
    </section>
  )
};

export default ActionSection;