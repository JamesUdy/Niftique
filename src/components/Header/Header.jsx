import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import { Logo, Close, Menu, Wallet } from '../../assets';

const Nav_Link = [
    {
        display: 'Home',
        url: '/home',
    },
    {
        display: 'Marketplace',
        url: '/marketplace',
    },
    {
        display: 'Create',
        url: '/create',
    },
    {
        display: 'CryptoConverter',
        url: '/converter',
    },
    {
        display: 'Contact',
        url: '/contact',
    },
];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="top-0 left-0 sm:px-8 lg:px-12 px-6 z-20 fixed w-full bg-[#1105183e] backdrop-filter backdrop-blur-lg p-4">
            <section className="container flex gap-8 lg:gap-12 item-center justify-between">
                <div className="flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex lg:gap-2 items-center text-xl sm:text-2xl font-semibold webName ease-out duration-300 text-[#e0aaff] hover:text-white"
                    >
                        <span>
                            <img src={Logo} alt="Website Logo" className="w-10 h-10" />
                        </span>
                        NIFTIQUE
                    </Link>
                </div>
                <div className={`hidden lg:flex items-center space-x-4 lg:space-x-6 list-none ${mobileMenuOpen ? 'hidden' : ''}`}>
                    {Nav_Link.map((item, index) => (
                        <li className="text-[#e0aaff] hover:text-white ease-in duration-300" key={index}>
                            <NavLink to={item.url}>{item.display}</NavLink>
                        </li>
                    ))}
                </div>
                <div className="flex items-center">
                    <Link to="/wallet">
                        <button className="w320:hidden sm:flex group gap-3 py-2 px-4 border-2 text-[#9341db] border-[#7b2cbf] hover:bg-[#7a2cbf69] hover:border-[rgba(122,44,191,0.41)] hover:text-[#e0aaff] ease-in duration-300 rounded-3xl items-center">
                            <Wallet />
                            Connect Wallet
                        </button>
                    </Link>
                    <div className="lg:hidden ml-2 flex flex-1 justify-end items-center">
                        <img
                            src={mobileMenuOpen ? Close : Menu}
                            alt="menu"
                            className="w-[28px] h-[28px] cursor-pointer object-contain"
                            onClick={toggleMobileMenu}
                        />
                    </div>
                </div>
                <div className={`${mobileMenuOpen ? 'block' : 'hidden'} w-full bg-[#090312c1] backdrop-filter backdrop-blur-lg  lg:hidden p-6 absolute top-[4rem] left-0 my-2 min-w-[140px] z-10 border-y-2 border-[#210e31ba]`}>
                    <ul className="list-none flex justify-center w-fit mx-auto flex-col items-center gap-4">
                        {Nav_Link.map((item, index) => (
                            <li
                                key={index}
                                className={`hover:text-white text-[16px] font-semibold cursor-pointer`}
                                onClick={() => {
                                    toggleMobileMenu();
                                }}
                            >
                                <NavLink to={item.url}>{item.display}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </header>
    );
};

export default Header;
