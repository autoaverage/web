import React from 'react';
import ContactForm from '../components/sections/ContactForm';
import LayoutDefault from '../layouts/LayoutDefault';

export default function Contact() {
  return (
    <LayoutDefault>
      <div className='illustration-section-01' style={{ minHeight: '80vh' }}>
        <ContactForm />
      </div>
    </LayoutDefault>
  );
}
