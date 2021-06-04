import Head from 'next/head';
import React from 'react';
import Cta from '../components/sections/Cta';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import HeroSplit from '../components/sections/HeroSplit';
import Pricing from '../components/sections/Pricing';
import LayoutDefault from '../layouts/LayoutDefault';

export default function Home() {
  return (
    <LayoutDefault>
      <Head>
        <title>Cryptocurrency dollar cost averaging - DCA trading bot</title>
      </Head>
      <HeroSplit imageFill className='illustration-section-01' />
      <FeaturesSplit
        invertMobile
        imageFill
        className='illustration-section-03'
      />
      <FeaturesTiles className='gradient-section' />
      <Pricing hasBgColor topDivider />
      <Cta hasBgColor invertColor split className='illustration-element-08' />
    </LayoutDefault>
  );
}
