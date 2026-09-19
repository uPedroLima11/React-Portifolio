'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  atraso?: number;
}

export default function Revelar({ children, className = '', atraso = 0 }: Props) {
  const elementoRef = useRef<HTMLDivElement | null>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = elementoRef.current;
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
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    );

    observador.observe(elemento);
    return () => observador.disconnect();
  }, []);

  return (
    <div
      ref={elementoRef}
      data-visivel={visivel}
      style={atraso ? { transitionDelay: `${atraso}ms` } : undefined}
      className={`revelar ${className}`}
    >
      {children}
    </div>
  );
}
