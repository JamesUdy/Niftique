import React from 'react'

import Routers from '../../routes/Routers'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <section className='max-w-full'>
        <Header />
        <div>
            <Routers />
        </div>
        <Footer />
    </section>
  )
}

export default Layout;