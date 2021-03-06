import React from 'react';
import Clients from '../components/sections/Clients';
import Cta from '../components/sections/Cta';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import HeroSplit from '../components/sections/HeroSplit';
import Pricing from '../components/sections/Pricing';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroSplit imageFill className='illustration-section-01' />
        <Clients topDivider bottomDivider />
        <FeaturesSplit
          invertMobile
          imageFill
          className='illustration-section-03'
        />
        <FeaturesTiles className='gradient-section' />
        <Pricing hasBgColor topDivider pricingSwitcher />
        <Cta hasBgColor invertColor split className='illustration-element-08' />
      </React.Fragment>
    );
  }
}

export default Home;
