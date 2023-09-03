import React from 'react';
import Routers from '../../routes/Routers';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Routers />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
