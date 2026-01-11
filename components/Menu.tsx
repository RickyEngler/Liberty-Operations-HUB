'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Menu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNewReport = () => {
    window.open(
      'https://libertyti.atlassian.net/servicedesk/customer/portals',
      '_blank'
    );
    setIsMobileMenuOpen(false);
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
      {/* Backdrop/Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Botão Hambúrguer Animado */}
      <button
        className="lg:hidden fixed right-5 top-5 z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 bg-[#322b44] rounded-lg shadow-lg border border-[#3affbc]/30 hover:bg-[#3a3849] transition-all duration-300"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-[#3affbc] rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#3affbc] rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#3affbc] rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      <nav
        className={`bg-[#322b44] shadow-[0_3px_40px_rgba(0,0,0,0.4)] border-b border-[#3affbc]/30 w-full lg:static lg:w-full lg:flex lg:justify-center lg:overflow-visible transition-transform duration-300 ${
          isMobileMenuOpen ? 'fixed inset-0 w-[75%] max-w-[280px] right-0 top-0 z-40 flex flex-col translate-x-0' : 'fixed right-0 top-0 z-40 translate-x-full lg:translate-x-0 lg:flex hidden lg:flex-row'
        }`}
      >
        {/* Header do Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden flex items-center justify-between p-4 border-b border-[#3affbc]/20">
            <span className="text-[#3affbc] font-bold text-lg">MENU</span>
          </div>
        )}

        <ul className="flex flex-col lg:flex-row justify-center items-start lg:items-center list-none m-0 p-0 w-full lg:w-auto overflow-y-auto lg:overflow-visible">
          <li className="relative w-full lg:w-auto lg:border-none">
            <Link
              href="/"
              className="group block px-6 py-4 lg:py-3 text-[#3affbc] font-semibold hover:bg-gradient-to-r hover:from-[#3a3849] hover:to-[#322b44] hover:text-[#9fffdf] transition-all duration-200 border-b border-[#3affbc]/10 lg:border-none lg:hover:from-transparent lg:hover:to-transparent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
          </li>

          <li className="relative w-full lg:w-auto lg:border-none">
            <Link
              href="/ferramentas"
              className="group block px-6 py-4 lg:py-3 text-[#3affbc] font-semibold hover:bg-gradient-to-r hover:from-[#3a3849] hover:to-[#322b44] hover:text-[#9fffdf] transition-all duration-200 border-b border-[#3affbc]/10 lg:border-none lg:hover:from-transparent lg:hover:to-transparent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FERRAMENTAS
            </Link>
          </li>

          <li className="relative w-full lg:w-auto group lg:border-none">
            <span className="block px-6 py-4 lg:py-3 text-[#3affbc] font-semibold cursor-pointer hover:bg-gradient-to-r hover:from-[#3a3849] hover:to-[#322b44] lg:hover:bg-none lg:hover:from-transparent lg:hover:to-transparent hover:text-[#9fffdf] transition-all duration-200 border-b border-[#3affbc]/10 lg:border-none">
              DOCUMENTOS
            </span>
            <ul className="hidden lg:group-hover:flex flex-col bg-[#2d2639] min-w-[250px] rounded-lg shadow-[3px_3px_20px_rgba(0,0,0,0.5)] p-2 absolute top-full left-0 lg:left-1/2 lg:-translate-x-1/2 z-50 border border-[#3affbc]/20">
              <li>
                <Link
                  href="/registro-atividades"
                  className="block px-4 py-2 text-[#3affbc] hover:text-[#9fffdf] hover:bg-[#3a3849] rounded transition-colors text-nowrap"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  REGISTRO DE ATIVIDADES
                </Link>
              </li>
            </ul>
            {/* Submenu mobile */}
            <ul className="lg:hidden bg-[#2d2639]/80 backdrop-blur-sm">
              <li className="border-b border-[#3affbc]/10 last:border-none">
                <Link
                  href="/registro-atividades"
                  className="group block px-10 py-3 text-[#3affbc] text-sm hover:text-[#9fffdf] hover:bg-gradient-to-r hover:from-[#3a3849] hover:to-[#2d2639] transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs">•</span>
                    REGISTRO DE ATIVIDADES
                  </span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="relative w-full lg:w-auto group lg:border-none">
            <span className="block px-6 py-4 lg:py-3 text-[#3affbc] font-semibold cursor-pointer hover:bg-gradient-to-r hover:from-[#3a3849] hover:to-[#322b44] lg:hover:bg-none lg:hover:from-transparent lg:hover:to-transparent hover:text-[#9fffdf] transition-all duration-200 border-b border-[#3affbc]/10 lg:border-none">
              PORTAL DE ACESSOS
            </span>
            <ul className="hidden lg:group-hover:flex flex-col bg-[#2d2639] min-w-[250px] rounded-lg shadow-[3px_3px_20px_rgba(0,0,0,0.5)] p-2 absolute top-full left-0 lg:left-1/2 lg:-translate-x-1/2 z-50 border border-[#3affbc]/20">
              <li>
                <Link
                  href="/paineis-bi"
                  className="block px-4 py-2 text-[#3affbc] hover:text-[#9fffdf] hover:bg-[#3a3849] rounded transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PAINÉIS BI
                </Link>
              </li>
            </ul>
            {/* Submenu mobile */}
            <ul className="lg:hidden bg-[#2d2639]/80 backdrop-blur-sm">
              <li className="border-b border-[#3affbc]/10 last:border-none">
                <Link
                  href="/paineis-bi"
                  className="group block px-10 py-3 text-[#3affbc] text-sm hover:text-[#9fffdf] hover:bg-gradient-to-r hover:from-[#3a3849] hover:to-[#2d2639] transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs">•</span>
                    PAINÉIS BI
                  </span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="relative w-full lg:w-auto group lg:border-none">
            <span className="block px-6 py-4 lg:py-3 text-[#3affbc] font-semibold cursor-pointer hover:bg-gradient-to-r hover:from-[#3a3849] hover:to-[#322b44] lg:hover:bg-none lg:hover:from-transparent lg:hover:to-transparent hover:text-[#9fffdf] transition-all duration-200 border-b border-[#3affbc]/10 lg:border-none">
              OPÇÕES
            </span>
            <ul className="hidden lg:group-hover:flex flex-col bg-[#2d2639] min-w-[250px] rounded-lg shadow-[3px_3px_20px_rgba(0,0,0,0.5)] p-2 absolute top-full left-0 lg:left-1/2 lg:-translate-x-1/2 z-50 border border-[#3affbc]/20">
              <li>
                <Link
                  href="/suporte"
                  className="block px-4 py-2 text-[#3affbc] hover:text-[#9fffdf] hover:bg-[#3a3849] rounded transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  MELHORIAS
                </Link>
              </li>
            </ul>
            {/* Submenu mobile */}
            <ul className="lg:hidden bg-[#2d2639]/80 backdrop-blur-sm">
              <li className="border-b border-[#3affbc]/10 last:border-none">
                <Link
                  href="/suporte"
                  className="group block px-10 py-3 text-[#3affbc] text-sm hover:text-[#9fffdf] hover:bg-gradient-to-r hover:from-[#3a3849] hover:to-[#2d2639] transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs">•</span>
                    MELHORIAS
                  </span>
                </Link>
              </li>
            </ul>
          </li>

          {/* Novo Report - Apenas Mobile */}
          <li className="relative w-full lg:hidden mt-4">
            <button
              onClick={handleNewReport}
              className="w-full mx-4 px-6 py-4 text-black font-bold bg-gradient-to-r from-[#3affbc] to-[#2de9a8] hover:from-[#9fffdf] hover:to-[#3affbc] transition-all duration-300 flex items-center justify-center gap-2 rounded-lg shadow-[0_4px_15px_rgba(58,255,188,0.4)] hover:shadow-[0_6px_20px_rgba(58,255,188,0.6)] hover:-translate-y-0.5"
              style={{ width: 'calc(100% - 2rem)' }}
            >
              <span className="text-xl font-bold">+</span>
              NOVO REPORT
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
