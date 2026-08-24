'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

const redes = [
  { nome: 'LinkedIn', href: 'https://www.linkedin.com/in/upedrolima/', icone: '/linkedin.png' },
  { nome: 'GitHub', href: 'https://github.com/uPedroLima11', icone: '/github.png' },
  { nome: 'Instagram', href: 'https://www.instagram.com/upedro_lima/', icone: '/instagram1.png' },
];

export default function Footer() {
  const { t } = useTranslation();
  const ano = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-surface/40">
      <div className="mx-auto max-w-content px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="text-lg font-medium text-zinc-100">
              Pedro Mendes Lima
            </Link>
            <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              {t('hero.eyebrow')}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {redes.map((rede) => (
              <Link
                key={rede.nome}
                href={rede.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={rede.nome}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-elevated transition-all duration-200 hover:-translate-y-0.5 hover:border-sand/60"
              >
                <Image src={rede.icone} alt="" width={20} height={20} />
              </Link>
            ))}
          </div>
        </div>

        <hr className="rule my-10" />

        <div className="flex flex-col gap-3 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {ano} Pedro Mendes Lima. {t('footer.direitos')}
          </span>
          <span className="font-mono tracking-wide">{t('footer.feito')}</span>
        </div>
      </div>
    </footer>
  );
}
