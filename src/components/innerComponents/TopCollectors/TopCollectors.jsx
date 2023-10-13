import React, { useState, useEffect } from 'react';
import { Alchemy } from 'alchemy-sdk';

const TopCollectors = () => {
  const perPage = 10;
  const [nfts, setNfts] = useState([]);
  const [showCount, setShowCount] = useState(perPage);
  const [errorMessageText, setErrorMessageText] = useState('');

  const apiKey = 'RFZifUtq-cnkKmjN_JCWoDZEXB6pLel_';

  useEffect(() => {
    const settings = {
      apiKey: apiKey,
    };
    const alchemy = new Alchemy(settings);

    alchemy.nft
      .getNftsForContract('0x61fce80d72363b731425c3a2a46a1a5fed9814b2')
      .then((nftData) => {
        setErrorMessageText('');
        setNfts(nftData.nfts);
      })
      .catch((error) => {
        setErrorMessageText(error.message);
      });
  }, []);


  console.log(nfts);

  return (
    <section className="container mx-auto mt-24 sm:mt-32 py-6 px-6 sm:px-14 flex flex-col">
      <span>Top Creators</span>
      {nfts.length > 0 ? (
        <div className='flex space-x-24 w-2/3 mx-auto overflow-x-auto'>
          {
            nfts.slice(0, showCount).map((nft, index) => (
              <section key={index} className='flex'>
                <span className="text-white">
                  {nft.title}
                </span>
                <img loading='lazy' src={nft.contract.openSea.imageUrl} alt="" className='w-10 h-10 rounded-3xl' />
              </section>
            ))
          }
        </div>
      ) : (
        <div>No NFTs available</div>
      )}
    </section>
  );
};

export default TopCollectors;
