// import { Network, Alchemy } from 'alchemy-sdk';

// const settings = {
//     apiKey: "RFZifUtq-cnkKmjN_JCWoDZEXB6pLel_",
//     network: Network.ETH_MAINNET,
// };

// const alchemy = new Alchemy(settings);

// // get the latest block
// const latestBlock = alchemy.core.getBlock("latest").then(console.log);

const dataset = [
    {
        id: 1,
        img: 'https://i.seadn.io/gcs/files/bf2ee4f33cef0122f8daa548655be34d.png?auto=format&dpr=1&w=256',
        userHandle: '8568',
        status: true,
        userName: 'Mutant Ape Yacht Club',
        price: '100,000,000,000,000 ETH',
        userDp: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=256',
    },
    {
        id: 2,
        img: 'https://i.seadn.io/gcs/files/bf2ee4f33cef0122f8daa548655be34d.png?auto=format&dpr=1&w=256',
        userHandle: '8568',
        status: true,
        userName: 'Mutant Ape Yacht Club',
        price: '100,000,000,000,000 ETH',
        userDp: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=256',
    },    
    {
        id: 3,
        img: 'https://i.seadn.io/gcs/files/bf2ee4f33cef0122f8daa548655be34d.png?auto=format&dpr=1&w=256',
        userHandle: '8568',
        status: true,
        userName: 'Mutant Ape Yacht Club',
        price: '100,000,000,000,000 ETH',
        userDp: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=256',
    },  
    {
        id: 4,
        img: 'https://i.seadn.io/gcs/files/bf2ee4f33cef0122f8daa548655be34d.png?auto=format&dpr=1&w=256',
        userHandle: '8568',
        status: true,
        userName: 'Mutant Ape Yacht Club',
        price: '100,000,000,000,000 ETH',
        userDp: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=256',
    },  
    {
        id: 5,
        img: 'https://i.seadn.io/gcs/files/4702c8f924b73a84960799d942ac5656.png?auto=format&dpr=1&w=256',
        userHandle: '8082',
        status: true,
        userName: 'Mutant Ape Yacht Club',
        price: '5.4 ETH',
        userDp: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=256',
    },  
    {
        id: 6,
        img: 'https://i.seadn.io/gcs/files/bf2ee4f33cef0122f8daa548655be34d.png?auto=format&dpr=1&w=256',
        userHandle: '8568',
        status: true,
        userName: 'Mutant Ape Yacht Club',
        price: '100,000,000,000,000 ETH',
        userDp: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=256',
    },  
    {
        id: 7,
        img: 'https://i.seadn.io/gcs/files/bf2ee4f33cef0122f8daa548655be34d.png?auto=format&dpr=1&w=256',
        userHandle: '8568',
        status: true,
        userName: 'Mutant Ape Yacht Club',
        price: '100,000,000,000,000 ETH',
        userDp: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=256',
    }, 
    {
        id: 8,
        img: 'https://i.seadn.io/gcs/files/bf2ee4f33cef0122f8daa548655be34d.png?auto=format&dpr=1&w=256',
        userHandle: '8568',
        status: true,
        userName: 'Mutant Ape Yacht Club',
        price: '100,000,000,000,000 ETH',
        userDp: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=256',
    },   
]

export default dataset;