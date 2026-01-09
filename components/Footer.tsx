'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0e0c11] border-t border-[#322b44] py-6 px-4 sm:px-6 md:px-8 text-center text-[#3affbc] text-xs sm:text-sm shadow-[0_-2px_10px_rgba(0,0,0,0.3)]">
      <p>
        © 2024{' '}
        <Link 
          href="https://github.com/RickyEngler" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-[#9fffdf] font-bold transition-colors"
        >
          AUGUSTO ENGLER
        </Link>
        , Inc. All rights reserved.
      </p>
    </footer>
  );
}
