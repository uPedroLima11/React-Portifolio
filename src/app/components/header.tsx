'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import SelecionarLinguagem from './SelecionarLinguagem';
import '../../../i18n';

const secoes = [
  { id: 'sobre', chave: 'nav.sobre' },
  { id: 'stack', chave: 'nav.stack' },
  { id: 'projetos', chave: 'nav.projetos' },
  { id: 'github', chave: 'nav.github' },
  { id: 'contato', chave: 'nav.contato' },
];

export default function Header() {
  const { t } = useTranslation();
  const [menuAberto, setMenuAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const [ativa, setAtiva] = useState('');

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  useEffect(() => {
    const alvos = secoes
      .map((secao) => document.getElementById(secao.id))
      .filter((elemento): elemento is HTMLElement => Boolean(elemento));

    if (alvos.length === 0) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        const visivel = entradas
          .filter((entrada) => entrada.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visivel) setAtiva(visivel.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    alvos.forEach((alvo) => observador.observe(alvo));
    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuAberto]);

  return (
    <nav
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        rolou
          ? 'border-b border-line bg-ink/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-elevated font-mono text-sm text-sand transition-colors duration-300 group-hover:border-sand/60">
            PL
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-medium text-zinc-100">Pedro Mendes Lima</span>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500">
              {t('hero.eyebrow')}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {secoes.map((secao) => (
            <Link
              key={secao.id}
              href={`/#${secao.id}`}
              className={`relative py-1 text-sm transition-colors duration-200 ${
                ativa === secao.id ? 'text-sand' : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              {t(secao.chave)}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-sand transition-all duration-300 ${
                  ativa === secao.id ? 'w-full' : 'w-0'
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <SelecionarLinguagem />
          <Link
            href="/curriculo.pdf"
            download="Curriculo-Pedro-Mendes-Lima.pdf"
            className="hidden rounded-full border border-line px-4 py-2 text-xs font-medium text-zinc-200 transition-colors duration-200 hover:border-sand/60 hover:text-sand md:inline-flex"
          >
            {t('hero.cta_cv')}
          </Link>
          <button
            type="button"
            onClick={() => setMenuAberto((aberto) => !aberto)}
            aria-label={t('nav.menu')}
            aria-expanded={menuAberto}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-zinc-300 transition-colors hover:text-sand lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                  menuAberto ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-full bg-current transition-opacity duration-200 ${
                  menuAberto ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                  menuAberto ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-line bg-ink/95 backdrop-blur-xl transition-[max-height] duration-300 ease-out lg:hidden ${
          menuAberto ? 'max-h-96' : 'max-h-0 border-t-transparent'
        }`}
      >
        <ul className="mx-auto flex max-w-content flex-col px-5 py-2">
          {secoes.map((secao) => (
            <li key={secao.id}>
              <Link
                href={`/#${secao.id}`}
                onClick={() => setMenuAberto(false)}
                className="block border-b border-line py-4 text-sm text-zinc-300 transition-colors hover:text-sand"
              >
                {t(secao.chave)}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/curriculo.pdf"
              download="Curriculo-Pedro-Mendes-Lima.pdf"
              onClick={() => setMenuAberto(false)}
              className="block py-4 text-sm text-sand"
            >
              {t('hero.cta_cv')}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
