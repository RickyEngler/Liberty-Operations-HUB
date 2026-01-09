'use client';

import { useState, useEffect } from 'react';
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0e0c11] min-h-screen flex flex-col">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[9999]">
          <div className="w-12 h-12 border-4 border-[#3affbc] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Header />
      <Menu />
      <main className="flex-grow w-full px-4 sm:px-6 md:px-8 py-8 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}
