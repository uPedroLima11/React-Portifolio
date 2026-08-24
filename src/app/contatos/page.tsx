"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Header from "../components/header";
import Footer from "../components/footer";
import "../../../i18n";

const EMAIL = "Pedromendeslima2016@gmail.com";

const canais = [
  {
    rotulo: "E-mail",
    valor: EMAIL,
    href: `mailto:${EMAIL}`,
    icone: "/gmail.png",
    copiavel: true,
  },
  {
    rotulo: "LinkedIn",
    valor: "in/upedrolima",
    href: "https://www.linkedin.com/in/upedrolima/",
    icone: "/linkedin.png",
  },
  {
    rotulo: "GitHub",
    valor: "uPedroLima11",
    href: "https://github.com/uPedroLima11",
    icone: "/github.png",
  },
  {
    rotulo: "Instagram",
    valor: "@upedro_lima",
    href: "https://www.instagram.com/upedro_lima/",
    icone: "/instagram1.png",
  },
];

export default function Contatos() {
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
    <>
      <Header />

      <main className="mx-auto min-h-[70vh] max-w-content px-5 pb-16 pt-36 md:px-8 md:pt-48">
        <div className="animate-rise">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-sand/60" />
            {t("contato.eyebrow")}
          </p>
          <h1 className="mt-6 max-w-2xl text-4xl font-medium leading-tight tracking-tight text-zinc-100 sm:text-5xl">
            {t("contato.titulo")}
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-zinc-400">{t("contato.descricao")}</p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {canais.map((canal) => (
            <div
              key={canal.rotulo}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-sand/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-elevated">
                <Image src={canal.icone} alt="" width={22} height={22} />
              </span>

              <div className="min-w-0 flex-1">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500">
                  {canal.rotulo}
                </p>
                <Link
                  href={canal.href}
                  target={canal.href.startsWith("http") ? "_blank" : undefined}
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
                  {copiado ? t("contato.copiado") : t("contato.copiar")}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <Link href={`mailto:${EMAIL}`} className="btn-primary">
            {t("contato.enviar_email")}
          </Link>
          <Link href="/" className="text-sm text-zinc-500 transition-colors hover:text-sand">
            ← {t("contato.voltar")}
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
