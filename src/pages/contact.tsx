import Head from 'next/head';
import React from 'react';
import ContactForm from '../components/sections/ContactForm';
import LayoutDefault from '../layouts/LayoutDefault';

export default function Contact() {
  return (
    <LayoutDefault>
      <Head>
        <title>Contact us - Cryptocurrency dollar cost averaging</title>
        <meta
          name='description'
          key='description'
          content='Get in touch with us for any question.'
        />
      </Head>
      <div className='illustration-section-01' style={{ minHeight: '80vh' }}>
        <ContactForm />
      </div>
    </LayoutDefault>
  );
}
