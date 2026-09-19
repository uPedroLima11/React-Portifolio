'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

const niveis = [
  { nome: 'idiomas.portugues', nivel: 'idiomas.portugues_nivel', percentual: 100 },
  { nome: 'idiomas.ingles', nivel: 'idiomas.ingles_nivel', percentual: 45 },
  { nome: 'idiomas.espanhol', nivel: 'idiomas.espanhol_nivel', percentual: 30 },
];

export default function CartaoIdiomas() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = containerRef.current;
    if (!elemento) return;

    if (!('IntersectionObserver' in window)) {
      setVisivel(true);
      return;
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          observador.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observador.observe(elemento);
    return () => observador.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-2xl border border-line bg-surface/70"
    >
      <h3 className="border-b border-line px-5 py-4 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-zinc-300">
        {t('idiomas.titulo')}
      </h3>

      <div className="space-y-5 px-5 py-5">
        {niveis.map((idioma) => (
          <div key={idioma.nome}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm text-zinc-200">{t(idioma.nome)}</span>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-zinc-500">
                {t(idioma.nivel)}
              </span>
            </div>
            <div
              role="progressbar"
              aria-label={t(idioma.nome)}
              aria-valuenow={idioma.percentual}
              aria-valuemin={0}
              aria-valuemax={100}
              className="mt-2 h-1.5 overflow-hidden rounded-full bg-elevated"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-sand-dim via-sand to-sand-soft transition-[width] duration-[1200ms] ease-out"
                style={{ width: visivel ? `${idioma.percentual}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
