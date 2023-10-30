import React from 'react';
import Routers from '../../routes/Routers';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({isShowPopup}) => {
  return (
    <div className={`${isShowPopup ? 'filter blur-xl' : ''} flex flex-col min-h-screen`}>
      <Header />
      <main className="flex-grow  mt-32 mb-10">
        <Routers />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
