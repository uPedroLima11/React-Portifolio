"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Header from "./components/header";
import Footer from "./components/footer";
import { Projeto, projetos, obterTexto } from "./components/projeto";
import "../../i18n";

const redes = [
  { nome: "LinkedIn", href: "https://www.linkedin.com/in/upedrolima/", icone: "/linkedin.png" },
  { nome: "GitHub", href: "https://github.com/uPedroLima11", icone: "/github.png" },
  { nome: "Instagram", href: "https://www.instagram.com/upedro_lima/", icone: "/instagram1.png" },
];

type Tecnologia = { nome: string; src?: string; inverter?: boolean };

const trilho: { nome: string; src: string; inverter?: boolean }[] = [
  { nome: "React", src: "/react.svg" },
  { nome: "Next.js", src: "/next.svg", inverter: true },
  { nome: "TypeScript", src: "/typescript.png" },
  { nome: "JavaScript", src: "/javascript.png" },
  { nome: "Tailwind CSS", src: "/tailwind.png" },
  { nome: "Node.js", src: "/nodejsplain.svg" },
  { nome: "MySQL", src: "/mysql1.png" },
  { nome: "Python", src: "/python.svg" },
  { nome: "Git", src: "/git.png" },
  { nome: "Figma", src: "/figma.svg" },
];

const grupos: { chave: string; itens: Tecnologia[] }[] = [
  {
    chave: "stack.front",
    itens: [
      { nome: "React", src: "/react.svg" },
      { nome: "Next.js", src: "/next.svg", inverter: true },
      { nome: "TypeScript", src: "/typescript.png" },
      { nome: "JavaScript", src: "/javascript.png" },
      { nome: "Tailwind CSS", src: "/tailwind.png" },
      { nome: "Figma", src: "/figma.svg" },
    ],
  },
  {
    chave: "stack.back",
    itens: [
      { nome: "Node.js", src: "/nodejsplain.svg" },
      { nome: "Express" },
      { nome: "Java" },
      { nome: "Spring Boot" },
      { nome: "MySQL", src: "/mysql1.png" },
      { nome: "PostgreSQL" },
      { nome: "Prisma" },
    ],
  },
  {
    chave: "stack.ferramentas",
    itens: [
      { nome: "Git", src: "/git.png" },
      { nome: "GitHub", src: "/github.png" },
      { nome: "Python", src: "/python.svg" },
      { nome: "Vercel" },
    ],
  },
];

const fatos = [
  { rotulo: "sobre.fato_formacao", valor: "sobre.fato_formacao_valor" },
  { rotulo: "sobre.fato_foco", valor: "sobre.fato_foco_valor" },
  { rotulo: "sobre.fato_local", valor: "sobre.fato_local_valor" },
  { rotulo: "sobre.fato_idiomas", valor: "sobre.fato_idiomas_valor" },
];

export default function Home() {
  const { t, i18n } = useTranslation();
  const [projetoAberto, setProjetoAberto] = useState<Projeto | null>(null);
  const [repositorios, setRepositorios] = useState(29);

  const fecharModal = useCallback(() => setProjetoAberto(null), []);

  useEffect(() => {
    let ativo = true;

    fetch("https://api.github.com/users/uPedroLima11")
      .then((resposta) => (resposta.ok ? resposta.json() : null))
      .then((dados) => {
        if (ativo && dados?.public_repos) setRepositorios(dados.public_repos);
      })
      .catch(() => null);

    return () => {
      ativo = false;
    };
  }, []);

  useEffect(() => {
    if (!projetoAberto) return;

    const fecharComEsc = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") fecharModal();
    };

    document.addEventListener("keydown", fecharComEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", fecharComEsc);
      document.body.style.overflow = "";
    };
  }, [projetoAberto, fecharModal]);

  const numeros = [
    { valor: `${repositorios}`, rotulo: t("github.repos") },
    { valor: "731+", rotulo: t("github.commits") },
    { valor: "TypeScript", rotulo: t("github.linguagem") },
    { valor: "73", rotulo: t("github.contribuicoes") },
  ];

  return (
    <>
      <Header />

      <main id="topo">
        <section className="mx-auto max-w-content px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-44">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div className="animate-rise">
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-sand/60" />
                {t("hero.eyebrow")}
              </p>

              <h1 className="mt-7 text-4xl font-medium leading-[1.05] tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
                <span className="block text-lg font-normal text-zinc-500 sm:text-xl">
                  {t("hero.saudacao")}
                </span>
                Pedro Mendes Lima
                <span className="ml-1 inline-block animate-caret text-sand">_</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                {t("hero.resumo")}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link href="/contatos" className="btn-primary">
                  {t("hero.cta_contato")}
                </Link>
                <Link
                  href="/curriculo.pdf"
                  download="Curriculo-Pedro-Mendes-Lima.pdf"
                  className="btn-ghost"
                >
                  {t("hero.cta_cv")}
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-3">
                {redes.map((rede) => (
                  <Link
                    key={rede.nome}
                    href={rede.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={rede.nome}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:border-sand/60"
                  >
                    <Image src={rede.icone} alt="" width={20} height={20} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[340px] lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] bg-sand/10 blur-2xl" />
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-sand/30" />
              <Image
                src="/eu2.jpg"
                alt="Pedro Mendes Lima"
                width={1931}
                height={1787}
                quality={95}
                priority
                sizes="(max-width: 1024px) 340px, 420px"
                className="relative aspect-square w-full rounded-3xl border border-line object-cover object-top grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </div>
        </section>

        <div aria-hidden="true" className="marquee fade-x overflow-hidden border-y border-line py-6">
          <div className="flex w-max animate-slide items-center gap-16 pr-16">
            {[...trilho, ...trilho].map((item, indice) => (
              <div key={`${item.nome}-${indice}`} className="flex shrink-0 items-center gap-3 opacity-50 transition-opacity hover:opacity-100">
                <Image
                  src={item.src}
                  alt=""
                  width={26}
                  height={26}
                  className={item.inverter ? "invert" : undefined}
                />
                <span className="whitespace-nowrap font-mono text-xs uppercase tracking-widest text-zinc-400">
                  {item.nome}
                </span>
              </div>
            ))}
          </div>
        </div>

        <section id="sobre" className="mx-auto max-w-content px-5 py-24 md:px-8 md:py-32">
          <p className="eyebrow">{t("sobre.eyebrow")}</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight text-zinc-100 sm:text-4xl">
            {t("sobre.titulo")}
          </h2>

          <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="relative">
              <Image
                src="/tela.png"
                alt=""
                width={1500}
                height={1000}
                quality={90}
                sizes="(max-width: 1024px) 100vw, 520px"
                className="w-full rounded-2xl border border-line object-cover"
              />
              <dl className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface/60">
                {fatos.map((fato) => (
                  <div key={fato.rotulo} className="px-5 py-4">
                    <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500">
                      {t(fato.rotulo)}
                    </dt>
                    <dd className="mt-1.5 text-sm text-zinc-300">{t(fato.valor)}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="space-y-6 text-[0.975rem] leading-relaxed text-zinc-400">
              <p className="border-l-2 border-sand/40 pl-5 text-zinc-300">{t("sobre.p1")}</p>
              <p>{t("sobre.p2")}</p>
              <p>{t("sobre.p3")}</p>

              <div className="!mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
                {numeros.map((numero) => (
                  <div key={numero.rotulo} className="bg-surface px-4 py-6 text-center">
                    <p className="numeric text-xl font-medium text-zinc-100 sm:text-2xl">
                      {numero.valor}
                    </p>
                    <p className="mt-2 text-[0.7rem] leading-snug text-zinc-500">{numero.rotulo}</p>
                  </div>
                ))}
              </div>
              <p className="!mt-4 text-center text-xs text-zinc-600 sm:text-left">
                <Link
                  href="https://github.com/uPedroLima11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-sand"
                >
                  {t("github.perfil")} →
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section id="stack" className="mx-auto max-w-content px-5 py-24 md:px-8 md:py-32">
          <p className="eyebrow">{t("stack.eyebrow")}</p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-zinc-100 sm:text-4xl">
            {t("stack.titulo")}
          </h2>
          <p className="mt-4 max-w-xl text-zinc-400">{t("stack.descricao")}</p>

          <div className="mt-14 space-y-10">
            {grupos.map((grupo) => (
              <div key={grupo.chave} className="grid gap-5 border-t border-line pt-8 md:grid-cols-[200px_1fr]">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {t(grupo.chave)}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {grupo.itens.map((item) => (
                    <div
                      key={item.nome}
                      className="group flex items-center gap-2.5 rounded-xl border border-line bg-surface px-4 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-sand/50"
                    >
                      {item.src ? (
                        <Image
                          src={item.src}
                          alt=""
                          width={20}
                          height={20}
                          className={item.inverter ? "invert" : undefined}
                        />
                      ) : (
                        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-sand/15 font-mono text-[0.6rem] text-sand">
                          {item.nome.charAt(0)}
                        </span>
                      )}
                      <span className="text-sm text-zinc-300 transition-colors group-hover:text-zinc-100">
                        {item.nome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projetos" className="mx-auto max-w-content px-5 py-24 md:px-8 md:py-32">
          <p className="eyebrow">{t("projetos.eyebrow")}</p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-medium tracking-tight text-zinc-100 sm:text-4xl">
              {t("projetos.titulo")}
            </h2>
            <p className="max-w-md text-sm text-zinc-500 md:text-right">{t("projetos.descricao")}</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projetos.map((projeto) => (
              <article
                key={projeto.nome}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-sand/40 ${
                  projeto.destaque ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden border-b border-line bg-ink ${
                    projeto.destaque ? "aspect-[16/7]" : "aspect-[16/9]"
                  }`}
                >
                  <Image
                    src={projeto.imagem}
                    alt={projeto.nome}
                    fill
                    quality={95}
                    sizes={
                      projeto.destaque
                        ? "(max-width: 1200px) 100vw, 1120px"
                        : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
                    }
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-medium text-zinc-100">{projeto.nome}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-400">
                    {obterTexto(projeto.resumo, i18n.language)}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {projeto.tecnologias.map((tecnologia) => (
                      <span key={tecnologia} className="tag">
                        {tecnologia}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-7 text-sm">
                    <button
                      type="button"
                      onClick={() => setProjetoAberto(projeto)}
                      className="font-medium text-sand transition-opacity hover:opacity-70"
                    >
                      {t("projetos.detalhes")}
                    </button>
                    <Link
                      href={projeto.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 transition-colors hover:text-zinc-100"
                    >
                      {t("projetos.codigo")}
                    </Link>
                    {projeto.liveDemoLink && (
                      <Link
                        href={projeto.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 transition-colors hover:text-zinc-100"
                      >
                        {t("projetos.demo")}
                      </Link>
                    )}
                    {projeto.figmaLink && (
                      <Link
                        href={projeto.figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 transition-colors hover:text-zinc-100"
                      >
                        {t("projetos.prototipo")}
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-content px-5 pb-8 md:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center md:px-16 md:py-20">
            <div className="absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-sand/10 blur-3xl" />
            <div className="relative">
              <p className="eyebrow">{t("contato.eyebrow")}</p>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-medium tracking-tight text-zinc-100 sm:text-4xl">
                {t("contato.titulo")}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-zinc-400">{t("contato.descricao")}</p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link href="/contatos" className="btn-primary">
                  {t("contato.enviar_email")}
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
        </section>
      </main>

      {projetoAberto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={projetoAberto.nome}
          onClick={fecharModal}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <div
            onClick={(evento) => evento.stopPropagation()}
            className="max-h-[88vh] w-full max-w-2xl animate-rise overflow-y-auto rounded-t-3xl border border-line bg-surface sm:rounded-3xl"
          >
            <div className="relative aspect-[16/8] w-full overflow-hidden border-b border-line bg-ink">
              <Image
                src={projetoAberto.imagem}
                alt={projetoAberto.nome}
                fill
                quality={90}
                sizes="672px"
                className="object-cover object-top"
              />
              <button
                type="button"
                onClick={fecharModal}
                aria-label={t("projetos.fechar")}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-ink/80 text-zinc-300 backdrop-blur transition-colors hover:text-sand"
              >
                ✕
              </button>
            </div>

            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-medium text-zinc-100">{projetoAberto.nome}</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {projetoAberto.tecnologias.map((tecnologia) => (
                  <span key={tecnologia} className="tag">
                    {tecnologia}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-zinc-400">
                {obterTexto(projetoAberto.descricao, i18n.language)}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={projetoAberto.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost !px-5 !py-2.5 !text-xs"
                >
                  {t("projetos.codigo")}
                </Link>
                {projetoAberto.liveDemoLink && (
                  <Link
                    href={projetoAberto.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !px-5 !py-2.5 !text-xs"
                  >
                    {t("projetos.demo")}
                  </Link>
                )}
                {projetoAberto.figmaLink && (
                  <Link
                    href={projetoAberto.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost !px-5 !py-2.5 !text-xs"
                  >
                    {t("projetos.prototipo")}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
