'use client';

import { useTranslation } from 'react-i18next';
import CartaoSpotlight from './CartaoSpotlight';
import '../../../i18n';

const fatos = [
  { rotulo: 'resumo.local', valor: 'resumo.local_valor' },
  { rotulo: 'resumo.empresa', valor: 'resumo.empresa_valor' },
  { rotulo: 'resumo.modelo', valor: 'resumo.modelo_valor' },
  { rotulo: 'resumo.cargo', valor: 'resumo.cargo_valor' },
  { rotulo: 'resumo.formacao', valor: 'resumo.formacao_valor' },
];

export default function CartaoResumo() {
  const { t } = useTranslation();

  return (
    <CartaoSpotlight className="overflow-hidden rounded-2xl border border-line bg-surface/70">
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-zinc-300">
          {t('resumo.titulo')}
        </h3>
        <span className="flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-emerald-400/80">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
          {t('resumo.disponivel')}
        </span>
      </div>

      <dl className="divide-y divide-line">
        {fatos.map((fato) => (
          <div
            key={fato.rotulo}
            className="flex flex-col gap-1 px-5 py-3.5 transition-colors hover:bg-white/[0.02] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-zinc-500">
              {t(fato.rotulo)}
            </dt>
            <dd className="text-sm text-zinc-200 sm:text-right">{t(fato.valor)}</dd>
          </div>
        ))}
      </dl>
    </CartaoSpotlight>
  );
}
