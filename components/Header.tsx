'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const handleNewReport = () => {
    window.open(
      'https://libertyti.atlassian.net/servicedesk/customer/portals',
      '_blank'
    );
  };

  return (
    <header className="bg-[#0e0c11] h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6 md:px-8 shadow-[0_2px_10px_rgba(0,0,0,0.35)] z-40">
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/images/logo-liberty.png"
          alt="logo-liberty"
          width={100}
          height={100}
          className="sm:w-[200px] sm:h-[50px] hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <button
        onClick={handleNewReport}
        className="text-black font-bold text-xs sm:text-sm bg-[#3affbc] px-3 sm:px-5 py-2 rounded-lg shadow-[0_2px_10px_rgba(0,10,15,0.7)] transition-all duration-300 hover:bg-[#9fffdf] hover:-translate-y-0.5"
      >
        + NOVO REPORT
      </button>
    </header>
  );
}
