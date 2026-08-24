'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { idiomas } from '../../../i18n';

export default function SelecionarLinguagem() {
  const { i18n, t } = useTranslation();
  const [aberto, setAberto] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const atual = idiomas.find((idioma) => i18n.language.startsWith(idioma.codigo)) ?? idiomas[0];

  useEffect(() => {
    if (!aberto) return;

    const clicarFora = (evento: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(evento.target as Node)) {
        setAberto(false);
      }
    };
    const pressionarEsc = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') setAberto(false);
    };

    document.addEventListener('mousedown', clicarFora);
    document.addEventListener('keydown', pressionarEsc);
    return () => {
      document.removeEventListener('mousedown', clicarFora);
      document.removeEventListener('keydown', pressionarEsc);
    };
  }, [aberto]);

  const trocarIdioma = (codigo: string) => {
    i18n.changeLanguage(codigo);
    document.documentElement.lang = codigo === 'pt' ? 'pt-BR' : codigo;
    setAberto(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setAberto((estado) => !estado)}
        aria-label={t('nav.idioma')}
        aria-haspopup="listbox"
        aria-expanded={aberto}
        className="flex h-10 items-center gap-2 rounded-xl border border-line px-3 text-zinc-300 transition-colors duration-200 hover:border-sand/60 hover:text-sand"
      >
        <Image src={atual.bandeira} alt="" width={18} height={18} className="rounded-sm" />
        <span className="font-mono text-[0.7rem] uppercase tracking-widest">{atual.codigo}</span>
      </button>

      {aberto && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-line bg-elevated shadow-2xl shadow-black/50"
        >
          {idiomas.map((idioma) => (
            <li key={idioma.codigo}>
              <button
                type="button"
                role="option"
                aria-selected={idioma.codigo === atual.codigo}
                onClick={() => trocarIdioma(idioma.codigo)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors duration-150 hover:bg-white/5 ${
                  idioma.codigo === atual.codigo ? 'text-sand' : 'text-zinc-300'
                }`}
              >
                <Image src={idioma.bandeira} alt="" width={20} height={20} className="rounded-sm" />
                {idioma.nome}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
