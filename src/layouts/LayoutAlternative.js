import React from 'react';
import Footer from '../components/layout/Footer02';
import Header from '../components/layout/Header';

const LayoutAlternative = ({ children }) => (
  <React.Fragment>
    <Head>
      <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta
        name='description'
        key='description'
        content='Buy cryptocurrency automatically at regular intervals and reduce your
      exposure to volatility. Start investing in cryptocurrency for free'
      />
      <meta name='robots' content='index, nofollow' />
    </Head>
    <Header navPosition='right' />
    <main className='site-content'>{children}</main>
    <Footer />
  </React.Fragment>
);

export default LayoutAlternative;
