'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Contador from './Contador';
import Revelar from './Revelar';
import CartaoSpotlight from './CartaoSpotlight';
import '../../../i18n';

const USUARIO = 'uPedroLima11';

interface Perfil {
  avatar_url: string;
  public_repos: number;
  created_at: string;
}

interface Repositorio {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}

const coresLinguagem: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  PHP: '#4F5D95',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  Python: '#3572A5',
  'C#': '#178600',
  Dart: '#00B4AB',
  Shell: '#89e051',
};

function linguagemMaisUsada(repos: Repositorio[]) {
  const contagem: Record<string, number> = {};

  repos.forEach((repo) => {
    if (!repo.language) return;
    contagem[repo.language] = (contagem[repo.language] ?? 0) + 1;
  });

  const ordenadas = Object.entries(contagem).sort((a, b) => b[1] - a[1]);
  return ordenadas[0]?.[0] ?? '';
}

const localePorIdioma: Record<string, string> = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es-ES',
};

export default function AtividadeGithub() {
  const { t, i18n } = useTranslation();
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [repositorios, setRepositorios] = useState<Repositorio[]>([]);
  const [linguagem, setLinguagem] = useState('');
  const [commits, setCommits] = useState<number | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [falhou, setFalhou] = useState(false);

  useEffect(() => {
    let ativo = true;

    const buscar = async () => {
      try {
        const [respostaPerfil, respostaRepos] = await Promise.all([
          fetch(`https://api.github.com/users/${USUARIO}`),
          fetch(`https://api.github.com/users/${USUARIO}/repos?sort=updated&per_page=100`),
        ]);

        if (!respostaPerfil.ok || !respostaRepos.ok) throw new Error('github indisponivel');

        const dadosPerfil: Perfil = await respostaPerfil.json();
        const dadosRepos: Repositorio[] = await respostaRepos.json();
        if (!ativo) return;

        const proprios = dadosRepos.filter(
          (repo) => !repo.fork && repo.name.toLowerCase() !== USUARIO.toLowerCase()
        );

        setPerfil(dadosPerfil);
        setLinguagem(linguagemMaisUsada(proprios));
        setRepositorios(proprios.slice(0, 6));
      } catch {
        if (ativo) setFalhou(true);
      } finally {
        if (ativo) setCarregando(false);
      }
    };

    buscar();
    return () => {
      ativo = false;
    };
  }, []);

  useEffect(() => {
    let ativo = true;

    fetch('/api/github')
      .then((resposta) => (resposta.ok ? resposta.json() : null))
      .then((dados) => {
        if (ativo && typeof dados?.commits === 'number') setCommits(dados.commits);
      })
      .catch(() => null);

    return () => {
      ativo = false;
    };
  }, []);

  const locale = localePorIdioma[i18n.language.slice(0, 2)] ?? 'pt-BR';

  const formatarData = (iso: string) =>
    new Date(iso).toLocaleDateString(locale, {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

  const numeros: { rotulo: string; valor?: number; texto?: string; aguardando?: boolean }[] = [
    { rotulo: t('github.repos'), valor: perfil?.public_repos ?? 0 },
    { rotulo: t('github.commits'), valor: commits ?? 0, aguardando: commits === null },
    { rotulo: t('github.linguagem'), texto: linguagem || '—' },
    {
      rotulo: t('github.desde'),
      texto: perfil ? String(new Date(perfil.created_at).getFullYear()) : '—',
    },
  ];

  return (
    <section id="github" className="mx-auto max-w-content px-5 py-24 md:px-8 md:py-32">
      <Revelar>
        <p className="eyebrow">{t('github.eyebrow')}</p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-100 sm:text-4xl">
            {t('github.titulo')}
          </h2>
          <p className="max-w-md text-sm text-zinc-500 md:text-right">{t('github.descricao')}</p>
        </div>
      </Revelar>

      <Revelar atraso={80}>
        <CartaoSpotlight className="mt-12 overflow-hidden rounded-3xl border border-line bg-surface/60">
          <div className="flex flex-col gap-6 border-b border-line px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
            <div className="flex items-center gap-4">
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-line bg-elevated">
                {perfil ? (
                  <Image
                    src={perfil.avatar_url}
                    alt=""
                    width={56}
                    height={56}
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image src="/github.png" alt="" width={24} height={24} className="opacity-60" />
                )}
              </span>
              <div>
                <p className="font-mono text-sm text-zinc-100">@{USUARIO}</p>
                <p className="mt-1 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      falhou ? 'bg-zinc-600' : 'animate-pulse-soft bg-emerald-400'
                    }`}
                  />
                  {falhou ? t('github.offline') : t('github.ao_vivo')}
                </p>
              </div>
            </div>

            <Link
              href={`https://github.com/${USUARIO}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost self-start !px-5 !py-2.5 !text-xs sm:self-auto"
            >
              {t('github.perfil')}
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
            {numeros.map((numero) => (
              <div key={numero.rotulo} className="bg-surface px-4 py-7 text-center">
                <p
                  className={`font-medium text-zinc-100 ${
                    numero.texto ? 'text-lg sm:text-2xl' : 'text-2xl sm:text-3xl'
                  }`}
                >
                  {carregando || numero.aguardando ? (
                    <span className="inline-block h-7 w-12 animate-pulse rounded bg-line align-middle" />
                  ) : numero.texto ? (
                    <span className="numeric">{numero.texto}</span>
                  ) : (
                    <Contador valor={numero.valor ?? 0} />
                  )}
                </p>
                <p className="mt-2 text-[0.7rem] leading-snug text-zinc-500">{numero.rotulo}</p>
              </div>
            ))}
          </div>

          <div className="px-6 py-7 md:px-8">
            <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-zinc-500">
              {t('github.ultimos')}
            </h3>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {carregando &&
                Array.from({ length: 4 }).map((_, indice) => (
                  <div
                    key={indice}
                    className="h-[104px] animate-pulse rounded-xl border border-line bg-elevated/40"
                  />
                ))}

              {!carregando && falhou && (
                <p className="text-sm text-zinc-500 md:col-span-2">{t('github.erro')}</p>
              )}

              {repositorios.map((repo) => (
                <Link
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-line bg-elevated/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-sand/40"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="truncate font-mono text-sm text-zinc-200 transition-colors group-hover:text-sand">
                      {repo.name}
                    </span>
                    {repo.stargazers_count > 0 && (
                      <span className="shrink-0 font-mono text-[0.65rem] text-zinc-500">
                        {repo.stargazers_count} ★
                      </span>
                    )}
                  </div>

                  <p className="mt-2 line-clamp-2 min-h-[2.3rem] text-xs leading-relaxed text-zinc-500">
                    {repo.description ?? '—'}
                  </p>

                  <div className="mt-3 flex items-center gap-3 font-mono text-[0.62rem] text-zinc-600">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: coresLinguagem[repo.language] ?? '#8b8b96' }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="ml-auto">
                      {t('github.atualizado')} {formatarData(repo.updated_at)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </CartaoSpotlight>
      </Revelar>
    </section>
  );
}
