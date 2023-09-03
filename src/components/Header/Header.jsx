import React, { useState } from 'react';

import { NavLink, Link } from 'react-router-dom';

import './Header.css';
import { Logo, Close, Menu } from '../../assets';

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
        display: 'Contact',
        url: '/contact',
    },
]

const Header = () => {
    
    const [toggle, setToggle] = useState(false);

    return (
        <header className='top-0 left-0 sm:w-full p-4'>
            <section className='container flex gap-8 lg:gap-24 item-center justify-between'>
                <div className='flex items-center justify-between'>
                    <Link to='/' className='flex lg:gap-2 items-center text-xl sm:text-2xl font-semibold webName ease-out duration-300 text-[#e0aaff] hover:text-white'>
                        <span>
                            <img src={Logo} alt="Website Logo" className='w-10 h-10' />          
                        </span>
                        NIFTIQUE
                    </Link>
                </div>
                <div className='hidden sm:flex items-center'>
                    <ul className='flex items-center space-x-4 lg:space-x-10 list-none'>
                        {
                            Nav_Link.map((item, index) => (
                                <li className='text-[#e0aaff] hover:text-white ease-in duration-300' key={index}>
                                    <NavLink to={item.url}>{item.display}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex items-center'>
                    <Link to='/wallet'>
                        <button className='flex group gap-3 py-2 px-4 border-2 text-[#9341db] border-[#7b2cbf] hover:bg-[#7a2cbf69] hover:border-[rgba(122,44,191,0.41)] hover:text-[#e0aaff] ease-in duration-300 rounded-3xl items-center'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#7b2cbf' viewBox="0 0 24 24" className='w-8 group-hover:fill-[#e0aaff] ease-in duration-300'><path d="M22.0049 7H23.0049V17H22.0049V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V7ZM20.0049 17H14.0049C11.2435 17 9.00488 14.7614 9.00488 12C9.00488 9.23858 11.2435 7 14.0049 7H20.0049V5H4.00488V19H20.0049V17ZM21.0049 15V9H14.0049C12.348 9 11.0049 10.3431 11.0049 12C11.0049 13.6569 12.348 15 14.0049 15H21.0049ZM14.0049 11H17.0049V13H14.0049V11Z"></path></svg>
                            </span>
                            Connect Wallet
                        </button>
                    </Link>
                    <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? Close : Menu} alt="menu" className="w-28px h-28px cursor-pointer object-contain" onClick={() => setToggle(!toggle)} />
                 </div>
                 <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg- absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl` }>
                    <ul className="list-none flex justify-center flex-col items-start gap-4">
                        {
                            Nav_Link.map((item, index) => (
                                <li key={index} className={
                                    `hover:text-white text-[16px] font-semibold cursor-pointer`
                                }
                                onClick={() => {
                                    setToggle(!toggle);
                                    }}>
                                    <NavLink to={item.url}>{item.display}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                 </div>
                </div>
            </section>
        </header>
    )
};

export default Header;