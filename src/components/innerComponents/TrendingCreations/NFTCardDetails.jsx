import React, { useEffect, useState } from 'react';

import { Network, Alchemy } from 'alchemy-sdk';


import axios from 'axios';

const NFTCardDetails = () => {

    
    const settings = {
        apiKey: "RFZifUtq-cnkKmjN_JCWoDZEXB6pLel_",
        network: Network.ETH_MAINNET,
    };

    const alchemy = new Alchemy(settings);

    // get the latest block
    const latestBlock = alchemy.core.getBlock("latest").then(console.log);

    // const [nftData, setNFTData] = useState(null);

    // useEffect(() => {
    //   const apiKey = 'RFZifUtq-cnkKmjN_JCWoDZEXB6pLel_';
    //   const nftContractAddress = 'YOUR_NFT_CONTRACT_ADDRESS';
    //   const tokenId = 'YOUR_NFT_TOKEN_ID';
  
    //   const apiUrl = `https://api.alchemyapi.io/v2/collections/${nftContractAddress}/assets/${tokenId}`;
      
    //   axios
    //     .get(apiUrl, {
    //       headers: {
    //         'Alchemy-Api-Key': apiKey,
    //       },
    //     })
    //     .then((response) => {
    //       setNFTData(response.data);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching NFT data:', error);
    //     });
    // }, []);
  
  return (
    <></>
    // <section>
    //         <div>
    //   {nftData ? (
    //     <div>
    //       <h1>{nftData.name}</h1>
    //       <img src={nftData.image_url} alt={nftData.name} />
    //       {/* Display other NFT details as needed */}
    //     </div>
    //   ) : (
    //     <p>Loading NFT data...</p>
    //   )}
    // </div>
    // </section>
  )
};

export default NFTCardDetails;