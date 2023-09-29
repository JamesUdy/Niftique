import axios from 'axios';

// replace with your Alchemy api key
const nftApiKey = process.env.REACT_APP_NFT_API_KEY;
const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${nftApiKey}/getNFTMetadata`;
const contractAddr = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
const tokenId = "2";
const tokenType = "erc721";

var config = {
  method: 'get',
  url: `${baseURL}?contractAddress=${contractAddr}&tokenId=${tokenId}&tokenType=${tokenType}`,
  headers: { }
};

axios(config)
.then(response => console.log(JSON.stringify(response.data, null, 2)))
.catch(error => console.log(error));