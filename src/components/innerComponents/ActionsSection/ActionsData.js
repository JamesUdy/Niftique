import { Sell, Wallet, CreateAction, Collection } from "../../../assets";

const ActionsData = [
    {
        id: 1,
        img: Wallet,
        title: 'Link Your Wallet',
        description: 'Once your preferred wallet is configured, establish a connection with OpenSea by clicking on the wallet icon located in the top right corner. Familiarize yourself with the wallets we support for a seamless experience.',
    },
    {
        id: 2,
        img: Collection,
        title: 'Create Your Collection',
        description: 'Begin by clicking "My Collections" to set up your collection. Here, you can add social links, craft a compelling description, upload profile and browser images, and establish a secondary sales fee.',
    },
    {
        id: 3,
        img: CreateAction,
        title: 'Add Your NFTs',
        description: 'To add your NFTs, upload your work and organize it within your newly created collection. This step marks the journey of showcasing your unique digital assets.',
    },
    {
        id: 4,
        img: Sell,
        title: 'Selling Your NFTs',
        description: 'Explore diverse selling options, including auctions, fixed-price listings, and declining-price listings. Tailor your NFT sales strategy to your preferences, and let us facilitate your success.',
    },
];

export default ActionsData;
