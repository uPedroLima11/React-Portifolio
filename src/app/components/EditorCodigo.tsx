'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Token = { texto: string; cor?: string };

const chave = 'text-sky-300';
const valor = 'text-sand-soft';
const palavra = 'text-violet-400';
const nome = 'text-emerald-300';
const pontuacao = 'text-zinc-600';
const comentario = 'text-zinc-600 italic';

const linhas: Token[][] = [
  [{ texto: '// dev.ts', cor: comentario }],
  [],
  [
    { texto: 'export const ', cor: palavra },
    { texto: 'pedro', cor: nome },
    { texto: ' = {', cor: pontuacao },
  ],
  [
    { texto: '  nome', cor: chave },
    { texto: ': ', cor: pontuacao },
    { texto: "'Pedro Mendes Lima'", cor: valor },
    { texto: ',', cor: pontuacao },
  ],
  [
    { texto: '  base', cor: chave },
    { texto: ': ', cor: pontuacao },
    { texto: "'Pelotas, RS — Brasil'", cor: valor },
    { texto: ',', cor: pontuacao },
  ],
  [
    { texto: '  cargo', cor: chave },
    { texto: ': ', cor: pontuacao },
    { texto: "'Suporte Técnico @ D9Tech'", cor: valor },
    { texto: ',', cor: pontuacao },
  ],
  [
    { texto: '  stack', cor: chave },
    { texto: ': [', cor: pontuacao },
    { texto: "'React'", cor: valor },
    { texto: ', ', cor: pontuacao },
    { texto: "'Next.js'", cor: valor },
    { texto: ', ', cor: pontuacao },
    { texto: "'TypeScript'", cor: valor },
    { texto: '],', cor: pontuacao },
  ],
  [
    { texto: '  tambem', cor: chave },
    { texto: ': [', cor: pontuacao },
    { texto: "'PHP'", cor: valor },
    { texto: ', ', cor: pontuacao },
    { texto: "'Bootstrap'", cor: valor },
    { texto: ', ', cor: pontuacao },
    { texto: "'MySQL'", cor: valor },
    { texto: '],', cor: pontuacao },
  ],
  [
    { texto: '  gosta', cor: chave },
    { texto: ': ', cor: pontuacao },
    { texto: "'resolver o problema dos outros'", cor: valor },
    { texto: ',', cor: pontuacao },
  ],
  [
    { texto: '  disponivel', cor: chave },
    { texto: ': ', cor: pontuacao },
    { texto: 'true', cor: palavra },
    { texto: ',', cor: pontuacao },
  ],
  [{ texto: '};', cor: pontuacao }],
];

const comprimento = (linha: Token[]) =>
  linha.reduce((total, token) => total + token.texto.length, 0);

function recortar(linha: Token[], limite: number) {
  let restante = limite;

  return linha.map((token, indice) => {
    const visivel = token.texto.slice(0, Math.max(restante, 0));
    restante -= token.texto.length;
    return (
      <span key={indice} className={token.cor}>
        {visivel}
      </span>
    );
  });
}

export default function EditorCodigo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [linhaAtual, setLinhaAtual] = useState(0);
  const [caracteres, setCaracteres] = useState(0);
  const [rodando, setRodando] = useState(false);

  const totais = useMemo(() => linhas.map(comprimento), []);
  const concluido = linhaAtual >= linhas.length;

  useEffect(() => {
    const elemento = containerRef.current;
    if (!elemento) return;

    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduzido || !('IntersectionObserver' in window)) {
      setLinhaAtual(linhas.length);
      return;
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setRodando(true);
          observador.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observador.observe(elemento);
    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    if (!rodando || concluido) return;

    const totalDaLinha = totais[linhaAtual];

    if (caracteres >= totalDaLinha) {
      const pausa = setTimeout(() => {
        setLinhaAtual((linha) => linha + 1);
        setCaracteres(0);
      }, 120);
      return () => clearTimeout(pausa);
    }

    const passo = setTimeout(() => setCaracteres((quantidade) => quantidade + 2), 18);
    return () => clearTimeout(passo);
  }, [rodando, concluido, caracteres, linhaAtual, totais]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl border border-line bg-[#0c0c11] shadow-[0_24px_60px_-28px_rgba(0,0,0,0.9)]"
    >
      <div className="pointer-events-none absolute -left-16 -top-20 h-48 w-48 animate-aurora rounded-full bg-sand/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 dot-grid fade-radial opacity-40" />

      <div className="relative flex items-center gap-2 border-b border-line bg-white/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[0.68rem] text-zinc-500">dev.ts</span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-widest text-zinc-600">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
          live
        </span>
      </div>

      <div className="relative overflow-x-auto px-4 py-5 font-mono text-[0.72rem] leading-[1.75] sm:text-[0.8rem]">
        {linhas.map((linha, indice) => {
          const digitando = indice === linhaAtual;
          const pronta = indice < linhaAtual;
          if (!digitando && !pronta) {
            return (
              <div key={indice} className="flex gap-4 opacity-0" aria-hidden="true">
                <span className="w-4 shrink-0 text-right text-zinc-700">{indice + 1}</span>
                <span>&nbsp;</span>
              </div>
            );
          }

          return (
            <div key={indice} className="flex gap-4">
              <span className="w-4 shrink-0 select-none text-right text-zinc-700">{indice + 1}</span>
              <span className="whitespace-pre">
                {recortar(linha, pronta ? Infinity : caracteres)}
                {digitando && <span className="animate-caret text-sand">▌</span>}
              </span>
            </div>
          );
        })}
        {concluido && (
          <div className="mt-3 flex items-center gap-2 border-t border-line/60 pt-3 text-[0.65rem] text-zinc-600">
            <span className="text-emerald-400">✓</span> compilado sem erros
            <span className="ml-auto">UTF-8 · TypeScript</span>
          </div>
        )}
      </div>
    </div>
  );
}
