import React from 'react';
import { Footer, Navbar } from '~/components';

export default function Layout({ children }) {
  return (
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
  );
}
