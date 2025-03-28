'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import SelecionarLinguagem from './SelecionarLinguagem';

export default function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-5 font-sans bg-gradient-to-r bg-[#24242c] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] fixed w-full z-20 top-0">
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-10">
        <a href="/" className="flex items-center space-x-3">
          <div className="flex flex-col items-center">
            <img
              src="/desenvolvedor.png"
              className="w-8 sm:w-10 md:w-12 invert"
              alt="Logo"
            />
            <h1 className="text-white sm:text-base md:text-base font-serif text-center">
              Pedro Mendes Lima
            </h1>
          </div>
        </a>

        <div className="hidden lg:flex items-center justify-center space-x-10">
          <Link
            href="/#sobremim"
            className="text-white text-sm sm:text-base font-bold hover:text-[#B38000]"
          >
            {t('Sobre Mim')}
          </Link>
          <Link
            href="/#projetos"
            className="text-white text-sm sm:text-base font-bold hover:text-[#B38000]"
          >
            {t('Projetos')}
          </Link>
          <Link
            href="/contatos"
            className="text-white text-sm sm:text-base font-bold hover:text-[#B38000]"
          >
            {t('Entre em Contato')}
          </Link>
        </div>

        <div className="flex items-center"> 
          <SelecionarLinguagem /> 
          <button
            className="lg:hidden focus:outline-none ml-2" 
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
      </div> 

      <div
        ref={navbarRef}
        className={`flex flex-col items-end transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'flex' : 'hidden'
        } bg-[#24242c] p-4 rounded-md w-full`}
      >
        <ul className="flex flex-col gap-4 w-full text-center">
          <li>
            <Link
              href="/#sobremim"
              className="text-white text-sm sm:text-base font-bold hover:text-[#B38000]"
            >
              {t('Sobre Mim')}
            </Link>
          </li>
          <li>
            <Link
              href="/#projetos"
              className="text-white text-sm sm:text-base font-bold hover:text-[#B38000]"
            >
              {t('Projetos')}
            </Link>
          </li>
          <li>
            <Link
              href="/contatos"
              className="text-white text-sm sm:text-base font-bold hover:text-[#B38000]"
            >
              {t('Entre em Contato')}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
