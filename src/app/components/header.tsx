'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-5 font-sans bg-gradient-to-r from-[#24242c] to-[#1a1a1f] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] fixed w-full z-20 top-0">
      <div className="w-full flex items-center justify-between px-4 md:px-6 lg:px-10">
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/desenvolvedor.png"
            className="w-8 sm:w-10 md:w-12 invert"
            alt="Logo"
          />
          <h1 className="text-white text-sm sm:text-base md:text-xl font-serif">
            Pedro Mendes Lima
          </h1>
        </a>

        

        <div
          ref={navbarRef}
          className={`lg:flex  items-center justify-end lg:w-auto transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <ul className="flex flex-col lg:flex-row gap-5 lg:gap-10 p-4 lg:p-0">
            <li>
              <Link
                href="/#sobremim"
                className="text-white text-xs md:text-sm lg:text-base font-bold hover:text-[#B38000]"
              >
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link
                href="/#projetos"
                className="text-white text-xs md:text-sm lg:text-base font-bold hover:text-[#B38000]"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="/contatos"
                className="text-white text-xs md:text-sm lg:text-base font-bold hover:text-[#B38000]"
              >
                Entre em Contato
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    
    </nav>
  );
};

export default Header;
