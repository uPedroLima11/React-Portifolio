"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Header from "./components/header";
import Footer from "./components/footer";
import Revelar from "./components/Revelar";
import CartaoSpotlight from "./components/CartaoSpotlight";
import EditorCodigo from "./components/EditorCodigo";
import CartaoResumo from "./components/CartaoResumo";
import CartaoIdiomas from "./components/CartaoIdiomas";
import AtividadeGithub from "./components/AtividadeGithub";
import SecaoContato from "./components/SecaoContato";
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
      { nome: "Bootstrap" },
      { nome: "Figma", src: "/figma.svg" },
    ],
  },
  {
    chave: "stack.back",
    itens: [
      { nome: "Node.js", src: "/nodejsplain.svg" },
      { nome: "Express" },
      { nome: "PHP" },
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

export default function Home() {
  const { t, i18n } = useTranslation();
  const [projetoAberto, setProjetoAberto] = useState<Projeto | null>(null);

  const fecharModal = useCallback(() => setProjetoAberto(null), []);

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

  return (
    <>
      <Header />

      <main id="topo">
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 dot-grid fade-radial opacity-60"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 animate-aurora rounded-full bg-sand/10 blur-[90px]"
          />

          <div className="relative mx-auto max-w-content px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-44">
            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <div className="animate-rise">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-[0.7rem] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
                  {t("hero.disponivel")}
                </span>

                <p className="eyebrow mt-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-sand/60" />
                  {t("hero.eyebrow")}
                </p>

                <h1 className="mt-5 text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-lg font-normal text-zinc-500 sm:text-xl">
                    {t("hero.saudacao")}
                  </span>
                  <span className="text-gradient">Pedro Mendes Lima</span>
                  <span className="ml-1 inline-block animate-caret text-sand">_</span>
                </h1>

                <p className="mt-7 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                  {t("hero.resumo")}
                </p>

                <p className="mt-4 max-w-xl border-l-2 border-sand/40 pl-4 text-sm italic text-zinc-300">
                  {t("hero.destaque")}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Link href="/#contato" className="btn-primary">
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
                <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl border border-line bg-ink/90 px-3 py-2 backdrop-blur">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-sand"
                  >
                    <path d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.4" />
                  </svg>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-zinc-400">
                    Pelotas, RS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div aria-hidden="true" className="marquee fade-x overflow-hidden border-y border-line py-6">
          <div className="flex w-max animate-slide items-center gap-16 pr-16">
            {[...trilho, ...trilho].map((item, indice) => (
              <div
                key={`${item.nome}-${indice}`}
                className="flex shrink-0 items-center gap-3 opacity-50 transition-opacity hover:opacity-100"
              >
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
          <Revelar>
            <p className="eyebrow">{t("sobre.eyebrow")}</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight text-zinc-100 sm:text-4xl">
              {t("sobre.titulo")}
            </h2>
          </Revelar>

          <div className="mt-14 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="space-y-5">
              <Revelar>
                <EditorCodigo />
              </Revelar>
              <Revelar atraso={80}>
                <CartaoResumo />
              </Revelar>
              <Revelar atraso={140}>
                <CartaoIdiomas />
              </Revelar>
            </div>

            <div>
              <Revelar className="space-y-6 text-[0.975rem] leading-relaxed text-zinc-400">
                <p className="border-l-2 border-sand/40 pl-5 text-zinc-300">{t("sobre.p1")}</p>
                <p>{t("sobre.p2")}</p>
                <p>{t("sobre.p3")}</p>
                <p>{t("sobre.p4")}</p>
              </Revelar>

              <Revelar atraso={100}>
                <CartaoSpotlight className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface/70">
                  <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
                      {t("sobre.agora")}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full border border-sand/30 bg-sand/10 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-sand">
                      <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-sand" />
                      {t("sobre.agora_estado")}
                    </span>
                  </div>

                  <div className="px-5 py-5">
                    <h3 className="text-base font-medium text-zinc-100">
                      {t("sobre.agora_titulo")}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {t("sobre.agora_descricao")}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["React", "TypeScript", "Express", "Drizzle ORM", "PostgreSQL"].map(
                        (tecnologia) => (
                          <span key={tecnologia} className="tag">
                            {tecnologia}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </CartaoSpotlight>
              </Revelar>
            </div>
          </div>
        </section>

        <section id="stack" className="mx-auto max-w-content px-5 py-24 md:px-8 md:py-32">
          <Revelar>
            <p className="eyebrow">{t("stack.eyebrow")}</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-zinc-100 sm:text-4xl">
              {t("stack.titulo")}
            </h2>
            <p className="mt-4 max-w-xl text-zinc-400">{t("stack.descricao")}</p>
          </Revelar>

          <div className="mt-14 space-y-10">
            {grupos.map((grupo, indice) => (
              <Revelar
                key={grupo.chave}
                atraso={indice * 70}
                className="grid gap-5 border-t border-line pt-8 md:grid-cols-[200px_1fr]"
              >
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
              </Revelar>
            ))}
          </div>
        </section>

        <section id="projetos" className="mx-auto max-w-content px-5 py-24 md:px-8 md:py-32">
          <Revelar>
            <p className="eyebrow">{t("projetos.eyebrow")}</p>
            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-3xl font-medium tracking-tight text-zinc-100 sm:text-4xl">
                {t("projetos.titulo")}
              </h2>
              <p className="max-w-md text-sm text-zinc-500 md:text-right">
                {t("projetos.descricao")}
              </p>
            </div>
          </Revelar>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projetos.map((projeto, indice) => (
              <Revelar
                key={projeto.nome}
                atraso={(indice % 2) * 90}
                className={projeto.destaque ? "md:col-span-2" : ""}
              >
                <CartaoSpotlight className="h-full rounded-2xl">
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-sand/40">
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
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
                        {projeto.githubLink && (
                          <Link
                            href={projeto.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 transition-colors hover:text-zinc-100"
                          >
                            {t("projetos.codigo")}
                          </Link>
                        )}
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
                </CartaoSpotlight>
              </Revelar>
            ))}
          </div>
        </section>

        <AtividadeGithub />

        <SecaoContato />

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
                {projetoAberto.githubLink && (
                  <Link
                    href={projetoAberto.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost !px-5 !py-2.5 !text-xs"
                  >
                    {t("projetos.codigo")}
                  </Link>
                )}
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
