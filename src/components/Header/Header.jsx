import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import './Header.css';
import { Logo } from '../../assets'

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
  return (
    <header className='top-0 fixed left-0 w-full p-4'>
        <section className='container flex gap-24 item-center justify-between'>
            <div className='flex items-center justify-between'>
                <h2 className='flex gap-2 items-center text-2xl font-semibold webName ease-out duration-300 text-[#e0aaff] hover:text-white'>
                    <span>
                        <img src={Logo} alt="" />          
                    </span>
                    NIFTIQUE
                </h2>
            </div>
            <div className='flex items-center'>
                <ul className='flex items-center space-x-10 list-none'>
                    {
                        Nav_Link.map((item, index) => (
                            <li className='text-[#e0aaff] hover:text-white ease-in duration-300' key={index}>
                                <NavLink to={item.url}>{item.display}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='flex items-center gap-5'>
                <Link to='/wallet'>
                    <button className='flex group gap-3 py-2 px-4 border-2 text-[#9341db] border-[#7b2cbf] hover:bg-[#7a2cbf69] hover:border-[rgba(122,44,191,0.41)] hover:text-[#e0aaff] ease-in duration-300 rounded-3xl items-center text-base '>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#7b2cbf' viewBox="0 0 24 24" className='w-8 group-hover:fill-[#e0aaff]'><path d="M22.0049 7H23.0049V17H22.0049V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V7ZM20.0049 17H14.0049C11.2435 17 9.00488 14.7614 9.00488 12C9.00488 9.23858 11.2435 7 14.0049 7H20.0049V5H4.00488V19H20.0049V17ZM21.0049 15V9H14.0049C12.348 9 11.0049 10.3431 11.0049 12C11.0049 13.6569 12.348 15 14.0049 15H21.0049ZM14.0049 11H17.0049V13H14.0049V11Z"></path></svg>
                        </span>
                        Connect Wallet
                    </button>
                </Link>
                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e0aaff" className="w-6 h-6 hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
            </span>
            </div>
        </section>
    </header>
  )
}

export default Header