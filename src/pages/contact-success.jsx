import React from 'react';
import ContactSuccess from '../components/sections/ContactSuccess';
import LayoutDefault from '../layouts/LayoutDefault';

export default function Contact() {
  return (
    <LayoutDefault>
      <div className='illustration-section-01' style={{ minHeight: '80vh' }}>
        <ContactSuccess />
      </div>
    </LayoutDefault>
  );
}
