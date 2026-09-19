'use client';

import { useEffect, useRef, useState } from 'react';

const DURACAO = 1400;

export default function Contador({ valor }: { valor: number }) {
  const elementoRef = useRef<HTMLSpanElement | null>(null);
  const [atual, setAtual] = useState(0);
  const [iniciou, setIniciou] = useState(false);

  useEffect(() => {
    const elemento = elementoRef.current;
    if (!elemento) return;

    if (!('IntersectionObserver' in window)) {
      setIniciou(true);
      return;
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setIniciou(true);
          observador.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observador.observe(elemento);
    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    if (!iniciou) return;

    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduzido || valor === 0) {
      setAtual(valor);
      return;
    }

    let quadro = 0;
    const inicio = performance.now();

    const animar = (agora: number) => {
      const progresso = Math.min((agora - inicio) / DURACAO, 1);
      const suavizado = 1 - Math.pow(1 - progresso, 3);
      setAtual(Math.round(valor * suavizado));
      if (progresso < 1) quadro = requestAnimationFrame(animar);
    };

    quadro = requestAnimationFrame(animar);
    return () => cancelAnimationFrame(quadro);
  }, [iniciou, valor]);

  return (
    <span ref={elementoRef} className="numeric">
      {atual.toLocaleString('pt-BR')}
    </span>
  );
}
