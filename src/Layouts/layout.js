import React from 'react';
import { Footer, Navbar } from '~/components';

export default function Layout({ children }) {
  return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
  );
}
