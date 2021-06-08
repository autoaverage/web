import Head from 'next/head';
import React from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const LayoutDefault = ({ children }) => (
  <React.Fragment>
    <Head>
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
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
    <Footer className='illustration-section-06' />
  </React.Fragment>
);

export default LayoutDefault;
