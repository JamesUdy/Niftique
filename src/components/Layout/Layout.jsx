import React from 'react';
import Routers from '../../routes/Routers';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow  mt-32 mb-10  px-2 lg:px-10 sm:px-6">
        <Routers />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
