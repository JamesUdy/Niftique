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
        userDp: 'https://i.seadn.io/gcs/files/bf2ee4f33cef0122f8daa548655be34d.png?auto=format&dpr=1&w=256',
        createdBy: 'YugaLabs',
    },
    {
        id: 2,
        img: 'https://openseauserdata.com/files/62d203c5c927769836487a767030402e.svg',
        userHandle: 'Milady 5401',
        status: true,
        userName: 'Mutant Ape Yacht Club',
        price: '100,000,000,000,000 ETH',
        userDp: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=256',
        createdBy: 'YugaLabs',
    },    
    {
        id: 3,
        img: 'https://openseauserdata.com/files/e366a31770a0aec5fe04958a1d4a36de.svg',
        userHandle: 'classicart.eth',
        status: true,
        userName: 'ENS: Ethereum Name Service',
        price: '100,000,000,000,000 ETH',
        userDp: 'https://i.seadn.io/gae/0cOqWoYA7xL9CkUjGlxsjreSYBdrUBE0c6EO1COG4XE8UeP-Z30ckqUNiL872zHQHQU5MUNMNhfDpyXIP17hRSC5HQ?auto=format&dpr=1&w=256',
        createdBy: 'FE89CC',
    },  
    {
        id: 4,
        img: 'https://i.seadn.io/gcs/files/bf2ee4f33cef0122f8daa548655be34d.png?auto=format&dpr=1&w=256',
        userHandle: '8568',
        status: true,
        userName: 'Mutant Ape Yacht Club',
        price: '100,000,000,000,000 ETH',
        userDp: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=256',
        createdBy: 'YugaLabs',
    },  
    {
        id: 5,
        img: 'https://i.seadn.io/gcs/files/4702c8f924b73a84960799d942ac5656.png?auto=format&dpr=1&w=256',
        userHandle: '8082',
        status: true,
        userName: 'Mutant Ape Yacht Club',
        price: '5.4 ETH',
        userDp: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=256',
        createdBy: 'YugaLabs',
    },  
    {
        id: 6,
        img: 'https://i.seadn.io/gcs/files/bf2ee4f33cef0122f8daa548655be34d.png?auto=format&dpr=1&w=256',
        userHandle: '8568',
        status: true,
        userName: 'Mutant Ape Yacht Club',
        price: '100,000,000,000,000 ETH',
        userDp: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=256',
        createdBy: 'YugaLabs',
    },  
    {
        id: 7,
        img: 'https://i.seadn.io/gcs/files/bf2ee4f33cef0122f8daa548655be34d.png?auto=format&dpr=1&w=256',
        userHandle: '8568',
        status: true,
        userName: 'Mutant Ape Yacht Club',
        price: '100,000,000,000,000 ETH',
        userDp: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=256',
        createdBy: 'YugaLabs',
    }, 
    {
        id: 8,
        img: 'https://i.seadn.io/gcs/files/bf2ee4f33cef0122f8daa548655be34d.png?auto=format&dpr=1&w=256',
        userHandle: '8568',
        status: true,
        userName: 'Mutant Ape Yacht Club',
        price: '100,000,000,000,000 ETH',
        userDp: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=256',
        createdBy: 'YugaLabs',
    },   
]

export default dataset;