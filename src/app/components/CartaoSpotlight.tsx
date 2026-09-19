'use client';

import type { MouseEvent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function CartaoSpotlight({ children, className = '' }: Props) {
  const acompanharCursor = (evento: MouseEvent<HTMLDivElement>) => {
    const area = evento.currentTarget.getBoundingClientRect();
    evento.currentTarget.style.setProperty('--mx', `${evento.clientX - area.left}px`);
    evento.currentTarget.style.setProperty('--my', `${evento.clientY - area.top}px`);
  };

  return (
    <div onMouseMove={acompanharCursor} className={`spotlight glow-border ${className}`}>
      {children}
    </div>
  );
}
