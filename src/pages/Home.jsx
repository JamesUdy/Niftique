import React from 'react';

import HeroSection from '../components/innerComponents/HeroSection/HeroSection';
import TopSellers from '../components/innerComponents/TopSellers/TopSellers';
import TrendingCreations from '../components/innerComponents/TrendingCreations/TrendingCreations';
import ActionSection from '../components/innerComponents/ActionsSection/ActionSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrendingCreations />
      <ActionSection />
    </>
  )
};

export default Home;