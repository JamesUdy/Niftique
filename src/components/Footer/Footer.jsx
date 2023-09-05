import React from 'react';

import { Link } from 'react-router-dom';

import './Footer.css';
import { Logo, Play, Github, Facebook, Twitter, Insta } from '../../assets';

const Profile_Actions = [
  {
      display: 'Author Profile',
      url: '/seller',
  },
  {
    display: 'Create',
    url: '/create',
  },
  {
      display: 'Collection',
      url: '/marketplace',
  },
  {
      display: 'Edit Profile',
      url: '/edit',
  },
];

const Explore = [
  {
      display: 'Home',
      url: '/',
  },
  {
    display: 'NFT Details',
    url: '/details',
  },
  {
      display: 'Contact Us',
      url: '/contact',
  },
  {
      display: 'CryptoConverter',
      url: '/converter',
  },
];

const Footer = () => {
  return <footer className='bg-[#0903125d] border-t-2 border-[#1e0732ba]'>
    <section className='container mt-10 px-4'>
      <div className='grid items-center gap-6 grid-cols-1 sm:px-32 lg:px-0 lg:grid-cols-[1fr,1fr,1fr,1fr]'>
        <section className='flex flex-col space-y-2'>
          <div className='flex items-center justify-between'>
                  <Link to='/' className='flex lg:gap-2 items-center text-2xl font-semibold webName ease-out duration-300 text-[#e0aaff] hover:text-white'>
                      <span>
                          <img src={Logo} alt="Website Logo" />          
                      </span>
                      NIFTIQUE
                  </Link>
            </div>
            <p className='text-sm tracking-wider'>Welcome to <strong>Niftique</strong>, where digital art, music, and collectibles converge. Explore a world of unique NFT creations, connect with visionary creators, and own a piece of digital history. Discover the future of ownership at <strong>Niftique</strong>.</p>
        </section>
          <section className='flex flex-col gap-4 items-center'>
            <h3 className='text-lg'>Profile Actions</h3>
            <ul className='flex flex-col pl-3 space-y-1 list-none'>
                        {
                            Profile_Actions.map((item, index) => (
                                <li className='text-[#e0aaff] group hover:text-slate-300 ease-in duration-300 flex items-center space-x-2' key={index}>
                                    <Play />
                                    <Link to={item.url}>{item.display}</Link>
                                </li>
                            ))
                        }
              </ul>                
          </section>
          <section className='flex flex-col gap-4 items-center'>
          <h3 className='text-lg'>Explore</h3>
                  <ul className='flex flex-col lg:pl-12 space-y-1 list-none'>
                      {
                          Explore.map((item, index) => (
                            <li className='text-[#e0aaff] group hover:text-slate-300 ease-in duration-300 flex items-center space-x-2' key={index}>
                                <Play />
                                <Link to={item.url}>{item.display}</Link>
                            </li>
                          ))
                      }
                  </ul>
          </section>
        <section  className='flex flex-col space-y-6'>
          <div className='flex flex-col space-y-2'>
            <h3 className='text-lg'>Newsletter</h3>
            <input type="text" id='newsletter-input' name='newsletter-input' className='newsletter px-4 py-2 rounded-md hover:bg-white hover:ring-2 hover:ring-[#ba6ff7] hover:ease-in hover:duration-150 bg-slate-300 text-slate-800 focus:bg-white placeholder-slate-800' placeholder='Email' />
          </div>
          <div className='flex items-center space-x-2'>
            <Link to="#"><Insta /></Link>
            <Link to="#"><Github /></Link>
            <Link to="#"><Facebook /></Link>
            <Link to="#"><Twitter /></Link>
          </div>
        </section>
      </div>
    </section>
    <span className='text-[8px] sm:text-sm text-center text-slate-200 font-light flex justify-center items-center mt-10 py-4'>Copyrights 2023, Developed By James Udy. @JamesUdy All rights Reserved.</span>
  </footer>
}

export default Footer;