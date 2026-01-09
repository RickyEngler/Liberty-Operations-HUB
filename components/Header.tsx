'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const handleNewReport = () => {
    window.open(
      'https://libertyti.atlassian.net/servicedesk/customer/portal/11/create/145',
      '_blank'
    );
  };

  return (
    <header className="bg-[#0e0c11] h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6 md:px-8 shadow-lg z-40">
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/images/logo-liberty.png"
          alt="logo-liberty"
          width={40}
          height={40}
          className="sm:w-[50px] sm:h-[50px] hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <button
        onClick={handleNewReport}
        className="text-black font-bold text-xs sm:text-sm bg-[#3affbc] px-3 sm:px-5 py-2 rounded-lg hover:bg-[#9fffdf] shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
      >
        + NOVO REPORT
      </button>
    </header>
  );
}
