'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Menu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('nav') && !target.closest('button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      <button
        className="lg:hidden fixed right-5 top-5 z-50 text-white text-3xl"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <nav className={`bg-[#322b44] w-full lg:static lg:w-auto ${
        isMobileMenuOpen ? 'fixed inset-0 w-[70%] right-0 top-0 z-40 flex flex-col' : 'hidden lg:flex'
      }`}>
        <ul className="flex flex-col lg:flex-row justify-center items-start lg:items-center list-none m-0 p-0 lg:shadow-md w-full">
          <li className="relative w-full lg:w-auto">
            <Link
              href="/"
              className="block px-6 py-3 text-[#3affbc] font-bold hover:bg-[#3a3849] hover:text-[#9fffdf] transition-colors duration-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li className="relative w-full lg:w-auto">
            <Link
              href="/ferramentas"
              className="block px-6 py-3 text-[#3affbc] font-bold hover:bg-[#3a3849] hover:text-[#9fffdf] transition-colors duration-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FERRAMENTAS
            </Link>
          </li>
          <li className="relative w-full lg:w-auto group">
            <span className="block px-6 py-3 text-[#3affbc] font-bold cursor-pointer hover:bg-[#3a3849] hover:text-[#9fffdf] transition-colors duration-100">
              DOCUMENTOS
            </span>
            <ul className="hidden lg:group-hover:flex group-hover:flex flex-col bg-[#2d2639] min-w-[250px] rounded-lg shadow-lg p-2 absolute top-full left-0 lg:left-1/2 lg:-translate-x-1/2 z-50">
              <li>
                <Link
                  href="/registro-atividades"
                  className="block px-4 py-2 text-[#3affbc] hover:text-[#9fffdf] hover:bg-[#3a3849] rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  REGISTRO DE ATIVIDADES
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative w-full lg:w-auto group">
            <span className="block px-6 py-3 text-[#3affbc] font-bold cursor-pointer hover:bg-[#3a3849] hover:text-[#9fffdf] transition-colors duration-100">
              PORTAL DE ACESSOS
            </span>
            <ul className="hidden lg:group-hover:flex group-hover:flex flex-col bg-[#2d2639] min-w-[250px] rounded-lg shadow-lg p-2 absolute top-full left-0 lg:left-1/2 lg:-translate-x-1/2 z-50">
              <li>
                <Link
                  href="/paineis-bi"
                  className="block px-4 py-2 text-[#3affbc] hover:text-[#9fffdf] hover:bg-[#3a3849] rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PAINÉIS BI
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative w-full lg:w-auto group">
            <span className="block px-6 py-3 text-[#3affbc] font-bold cursor-pointer hover:bg-[#3a3849] hover:text-[#9fffdf] transition-colors duration-100">
              OPÇÕES
            </span>
            <ul className="hidden lg:group-hover:flex group-hover:flex flex-col bg-[#2d2639] min-w-[250px] rounded-lg shadow-lg p-2 absolute top-full left-0 lg:left-1/2 lg:-translate-x-1/2 z-50">
              <li>
                <Link
                  href="/suporte"
                  className="block px-4 py-2 text-[#3affbc] hover:text-[#9fffdf] hover:bg-[#3a3849] rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  MELHORIAS
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}
