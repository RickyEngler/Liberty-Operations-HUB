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
    <header className="bg-gradient-to-r from-[#0e0c11] via-[#1a161f] to-[#0e0c11] h-20 sm:h-24 flex items-center justify-between px-4 sm:px-6 md:px-8 shadow-[0_4px_20px_rgba(58,255,188,0.15)] border-b border-[#3affbc]/20 z-40">
      <Link href="/" className="flex items-center h-full py-3">
        <div className="relative h-full w-auto">
          <Image
            src="/assets/images/logo-liberty.png"
            alt="Liberty Health Logo"
            width={180}
            height={60}
            className="h-full w-auto object-contain brightness-110 hover:brightness-125 hover:scale-105 transition-all duration-300"
            priority
          />
        </div>
      </Link>
      <button
        onClick={handleNewReport}
        className="hidden lg:inline-block text-black font-bold text-xs bg-gradient-to-r from-[#3affbc] to-[#2de9a8] px-4 py-2 rounded-lg shadow-[0_4px_15px_rgba(58,255,188,0.4)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(58,255,188,0.6)] hover:from-[#9fffdf] hover:to-[#3affbc] hover:-translate-y-0.5"
      >
        + NOVO REPORT
      </button>
    </header>
  );
}
