import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function SelecionarLinguagem() {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const trocarLinguagem = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
  };

  const handleClicarFora = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClicarFora);
    } else {
      document.removeEventListener('mousedown', handleClicarFora);
    }

    return () => {
      document.removeEventListener('mousedown', handleClicarFora);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative flex ml-4" ref={dropdownRef}>
      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <Image src="/globo.png" className='invert' alt="Selecionar Idioma" width={24} height={24} />
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-6 w-32 bg-[#1a1a1f] rounded-md shadow-lg">
          <button onClick={() => trocarLinguagem('pt')} className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-800">
            <Image src="/brasil.png" alt="Português" width={20} height={20} className="mr-2" />
            Português
          </button>
          <button onClick={() => trocarLinguagem('en')} className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-800">
            <Image src="/estados-unidos.png" alt="English" width={20} height={20} className="mr-2" />
            English
          </button>
          <button onClick={() => trocarLinguagem('es')} className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-800">
            <Image src="/espanha.png" alt="Español" width={20} height={20} className="mr-2" />
            Español
          </button>
        </div>
      )}
    </div>
  );
}