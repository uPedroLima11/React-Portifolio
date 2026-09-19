'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Revelar from './Revelar';
import CartaoSpotlight from './CartaoSpotlight';
import '../../../i18n';

const EMAIL = 'Pedromendeslima2016@gmail.com';

const canais = [
  {
    rotulo: 'E-mail',
    valor: EMAIL,
    href: `mailto:${EMAIL}`,
    icone: '/gmail.png',
    copiavel: true,
  },
  {
    rotulo: 'LinkedIn',
    valor: 'in/upedrolima',
    href: 'https://www.linkedin.com/in/upedrolima/',
    icone: '/linkedin.png',
  },
  {
    rotulo: 'GitHub',
    valor: 'uPedroLima11',
    href: 'https://github.com/uPedroLima11',
    icone: '/github.png',
  },
  {
    rotulo: 'Instagram',
    valor: '@upedro_lima',
    href: 'https://www.instagram.com/upedro_lima/',
    icone: '/instagram1.png',
  },
];

export default function SecaoContato() {
  const { t } = useTranslation();
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      setCopiado(false);
    }
  };

  return (
    <section id="contato" className="mx-auto max-w-content px-5 pb-8 md:px-8">
      <Revelar>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-5 py-14 md:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 dot-grid fade-radial opacity-50"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 animate-aurora rounded-full bg-sand/10 blur-3xl"
          />

          <div className="relative">
            <div className="text-center">
              <p className="eyebrow">{t('contato.eyebrow')}</p>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-medium tracking-tight text-zinc-100 sm:text-4xl">
                {t('contato.titulo')}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-zinc-400">{t('contato.descricao')}</p>
            </div>

            <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
              {canais.map((canal) => (
                <CartaoSpotlight key={canal.rotulo} className="rounded-2xl">
                  <div className="flex items-center gap-4 rounded-2xl border border-line bg-elevated/60 p-5 transition-colors duration-300 hover:border-sand/40">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-surface">
                      <Image src={canal.icone} alt="" width={22} height={22} />
                    </span>

                    <div className="min-w-0 flex-1 text-left">
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500">
                        {canal.rotulo}
                      </p>
                      <Link
                        href={canal.href}
                        target={canal.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="mt-1 block truncate text-sm text-zinc-200 transition-colors hover:text-sand"
                      >
                        {canal.valor}
                      </Link>
                    </div>

                    {canal.copiavel && (
                      <button
                        type="button"
                        onClick={copiarEmail}
                        className="shrink-0 rounded-lg border border-line px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-zinc-400 transition-colors hover:border-sand/60 hover:text-sand"
                      >
                        {copiado ? t('contato.copiado') : t('contato.copiar')}
                      </button>
                    )}
                  </div>
                </CartaoSpotlight>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <Link href={`mailto:${EMAIL}`} className="btn-primary">
                {t('contato.enviar_email')}
              </Link>
              <Link
                href="https://www.linkedin.com/in/upedrolima/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </Revelar>
    </section>
  );
}
