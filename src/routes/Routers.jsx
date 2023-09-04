import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Marketplace from '../pages/Marketplace';
import Create from '../pages/Create';
import Contact from '../pages/Contact';
import CryptoConverter from '../pages/CryptoConverter';
import Edit from '../pages/Edit';
import NFTDetails from '../pages/NFTDetails';
import ProfileOfSeller from '../pages/ProfileOfSeller';
import Wallet from '../pages/Wallet';


const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/marketplace' element={<Marketplace />} />
      <Route path='/marketplace/:id' element={<NFTDetails />} />
      <Route path='/create' element={<Create />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/converter' element={<CryptoConverter />} />
      <Route path='/edit' element={<Edit />} />
      <Route path='/wallet' element={<Wallet />} />
      <Route path='/details' element={<NFTDetails />} />
      <Route path='/seller' element={<ProfileOfSeller />} />
    </Routes>
  )
}

export default Routers;
