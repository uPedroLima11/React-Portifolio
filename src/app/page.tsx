"use client";
import Link from "next/link";
import Header from "./components/header";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Projeto, projetos } from "./components/projeto";
import Footer from "./components/footer";
import { useTranslation } from 'react-i18next';
import '../../i18n';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [visivel, setVisivel] = useState(false);

  const projectsPerPage = 4;
  const totalPages = Math.ceil(projetos.length / projectsPerPage);

  const handleAbrirModal = (projeto: Projeto) => setProjetoSelecionado(projeto);
  const handleFecharModal = () => setProjetoSelecionado(null);

  const obterDescricao = (descricao: { pt: string; en: string; es: string }) => {
    switch (i18n.language) {
      case 'en':
        return descricao.en;
      case 'es':
        return descricao.es;
      default:
        return descricao.pt;
    }
  };

  const currentProjects = projetos.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  useEffect(() => {
    setVisivel(true);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#24242c]">
      <header>
        <Header />
      </header>

      <section className="flex flex-col-reverse md:flex-row items-center justify-between py-24 px-6 md:px-32 space-y-10 md:space-y-0 w-full">
        <div className="px-6 text-center md:text-left text-4xl md:text-7xl font-light flex-col">
          <h1 className="mt-16 md:mt-40">{t('Olá,')}</h1>
          <h2 className="flex items-center justify-center md:justify-start mt-4">
            {t('Sou')} <span className="font-semibold ml-4">Pedro</span>
            <span className="text-3xl md:text-5xl animate-fade relative translate-y-0 ml-3">|</span>
          </h2>
          <h1 className="text-base md:text-lg mt-4">
            <span className="font-semibold">{t('Fullstack Developer')} </span>{t('com grande experiência em Front-End')} <br />
            {t('Crio interfaces intuitivas e responsivas utilizando')} <span className="font-bold">React, Next.js, TypeScript e Tailwind CSS</span> <br />
            {t('e construo back-ends escaláveis com Fastify e bancos de dados como MySQL e PostgreSQL.')}
          </h1>

          <div className="flex gap-4 justify-center md:justify-start mt-8">
            <Link href="/contatos">
              <button
                type="button"
                className="mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-8 py-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 transition-colors duration-300"
              >
                {t('Converse Comigo')}
              </button>
            </Link>
            <Link href="/curriculo.pdf" download="Curriculo_Pedro.pdf">
              <button
                type="button"
                className="mt-6 text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-3 dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300"
              >
                {t('Baixar Currículo')}
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-10 md:mt-0 flex flex-col items-center">
          <Image
            src="/linkedinphoto2.png"
            alt="eu"
            width={250}
            height={250}
            quality={100}
            className="mr-0 md:mr-14 animate-move rounded-full border-4"
          />

          <div className="flex gap-6 mt-2 md:mt-10 mr-0 lg:mr-12">
            <Link href="https://www.linkedin.com/in/upedrolima/">
              <Image src="/linkedin.png" alt="linkedin" width={50} height={50} />
            </Link>
            <Link href="https://www.instagram.com/upedro_lima/">
              <Image src="/instagram1.png" alt="instagram" width={50} height={50} />
            </Link>
            <Link href="https://github.com/uPedroLima11">
              <Image src="/github.png" alt="github" width={50} height={50} />
            </Link>
          </div>
          <div id="sobremim"></div>
        </div>
      </section>

      <section className="p-12">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold">{t('Sobre Mim')}</h1>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-12">
          <div>
            <Image
              src="/tela.png"
              alt="Sobre mim"
              width={450}
              height={400}
              quality={100}
              className="rounded-xl mr-16 border-4 border-[#101013]"
            />
          </div>

          <div className="max-w-xl bg-[#1a1a1f] p-8 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <h1 className="font-light">
              <span className="ml-4">{t('Olá!')}</span> {t('Sou estudante de Análise e Desenvolvimento de Sistemas no Senac-RS e, desde pequeno, tenho uma paixão por tecnologia. Atualmente, estou focado no desenvolvimento front-end, utilizando minhas habilidades em')} <span className="font-bold">React, TypeScript, JavaScript, Tailwind e Figma </span> {t('para criar interfaces atraentes e funcionais.')} <br /> <span className="ml-4">{t('Meu')}</span> {t('principal objetivo é transformar ideias em experiências digitais memoráveis. Cada projeto representa uma nova oportunidade de aprendizado e crescimento, e estou sempre em busca das últimas inovações do setor. Estou animado para contribuir com soluções que melhorem a vida das pessoas no ambiente digital!')}
            </h1>
          </div>
        </div>
      </section>

      <section className="mt-16 px-6 md:px-16">
        <h1 className="text-center text-3xl font-bold">{t('Tech Stack')}</h1>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {[
            { name: "TypeScript", src: "/typescript.png", color: "blue" },
            { name: "React", src: "/react.svg", color: "cyan" },
            { name: "JavaScript", src: "/javascript.png", color: "yellow" },
            { name: "Tailwind CSS", src: "/tailwind.png", color: "green" },
            { name: "MySQL", src: "/mysql1.png", color: "blue" },
            { name: "Python", src: "/python.svg", color: "yellow" },
            { name: "NextJS", src: "/next.svg", color: "black" },
            { name: "Git", src: "/git.png", color: "red" }
          ].map((tech, index) => (
            <div
              key={index}
              className="relative bg-[#1a1a1f] flex flex-col items-center justify-center rounded-lg py-6 px-4 hover:scale-105 transition duration-300 shadow-lg overflow-hidden border border-gray-800"
            >
              <div className={`absolute inset-0 border-2 border-transparent rounded-lg loading-border-${tech.color}`}></div>
              <Image
                src={tech.src}
                alt={tech.name}
                width={50}
                height={40}
                quality={100}
                className="transition duration-300"
              />
              <p className="text-white font-semibold mt-4 text-sm text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-32 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            GitHub Insights
          </h2>
          <p className="text-gray-400 mt-2">{t('estatisticas.minha_atividade')}</p>
        </div>

        <div className={`flex flex-col md:flex-row justify-center items-center gap-8 transition-all duration-1000 delay-500 ${visivel ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          <div className="text-center bg-[#1a1a1f] p-6 rounded-xl shadow-lg border border-gray-800">
            <img
              width="400"
              src="https://github-readme-stats.vercel.app/api?username=upedrolima11&show_icons=true&rank_icon=github&ring_color=E49B0F&theme=transparent&border_color=808080&icon_color=E49B0F&include_all_commits=true&count_private=true&title_color=808080&text_color=808080"
              alt="GitHub Stats"
              className="mx-auto"
            />
            <div className="text-blue-300 text-sm font-medium mt-2">{t('estatisticas.estatisticas_gerais')}</div>
          </div>

          <div className="text-center bg-[#1a1a1f] p-6 rounded-xl shadow-lg border border-gray-800">
            <img
              height="167"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=upedrolima11&border_color=808080&layout=compact&theme=transparent&title_color=808080&text_color=808080"
              alt="Top Languages"
              className="mx-auto"
            />
            <div className="text-blue-300 text-sm font-medium mt-2">{t('estatisticas.linguagens_mais_usadas')}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
          {[
            {
              valor: 29,
              label: t("estatisticas.repositorios_publicos"),
              sufixo: '+',
              icon: "📂",
              color: "from-blue-500 to-cyan-500"
            },
            {
              valor: 731,
              label: t("estatisticas.commits_realizados"),
              sufixo: '+',
              icon: "💾",
              color: "from-green-500 to-emerald-500"
            },
            {
              valor: "TypeScript",
              label: t("estatisticas.linguagem_principal"),
              sufixo: '',
              icon: "🚀",
              color: "from-purple-500 to-pink-500"
            },
            {
              valor: 73,
              label: t("estatisticas.contribuicoes_recentes"),
              sufixo: '',
              icon: "📊",
              color: "from-orange-500 to-red-500"
            }
          ].map((estatistica, index) => (
            <div
              key={index}
              className="text-center bg-[#1a1a1f] p-4 md:p-6 rounded-xl shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-2xl mb-2">{estatistica.icon}</div>
              <div id="projetos2" className={`text-xl md:text-2xl font-bold text-white mb-2 bg-gradient-to-r ${estatistica.color} bg-clip-text text-transparent`}>
                {estatistica.valor}{estatistica.sufixo}
              </div>
              <div className="text-blue-300 text-xs md:text-sm font-medium">{estatistica.label}</div>
            </div>
          ))}
        </div>
      </section>
      <section className=" px-4 md:px-8 lg:px-16" id="projetos">
        <h1 className="text-center text-3xl font-bold mb-16">{t('Alguns Projetos Desenvolvidos')}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {currentProjects.map((projeto, index) => (
            <div
              key={index}
              className="cursor-pointer relative bg-[#1a1a1f] rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-2xl overflow-hidden border border-gray-800 hover:border-blue-500/30 group"
            >
              <div className="relative w-full h-56 md:h-60 lg:h-64 overflow-hidden rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src={projeto.imagem}
                  alt={projeto.nome}
                  fill
                  quality={100}
                  className="cursor-pointer object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-white text-xl font-bold text-center group-hover:text-blue-400 transition-colors duration-300">
                  {projeto.nome}
                </h3>
                <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
                  <Link href={projeto.githubLink} target="_blank">
                    <button className="flex items-center gap-2 py-2 px-4 bg-gray-700 hover:bg-gray-600 font-semibold text-white rounded-lg text-sm transition-all duration-300 hover:scale-105 shadow-lg">
                      <Image src="/github.png" alt="GitHub" width={16} height={16} className="invert" />
                      GitHub
                    </button>
                  </Link>

                   {projeto.liveDemoLink && (
                    <Link href={projeto.liveDemoLink} target="_blank">
                      <button className="flex items-center gap-2 py-2 px-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg text-sm transition-all duration-300 hover:scale-105 shadow-lg">
                        <span className="text-lg">🌐</span>
                        Live Demo
                      </button></Link>
                  )}
                  {projeto.figmaLink && (
                    <Link href={projeto.figmaLink} target="_blank">
                      <button className="flex items-center gap-2 py-2 px-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg text-sm transition-all duration-300 hover:scale-105 shadow-lg">
                        <span className="text-lg">🎨</span>
                        Prototipação
                      </button>
                    </Link>
                  )}

                  <button
                    onClick={() => handleAbrirModal(projeto)}
                    className="flex items-center gap-2 py-2 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 hover:text-blue-400 shadow-lg"
                  >
                    <span className="text-lg">ℹ️</span>
                    {t('Mais Informações')}
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-5 py-2.5 bg-gray-800 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-all duration-300 text-sm font-medium shadow-lg"
            >
              ← Anterior
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium shadow-lg ${currentPage === page
                    ? 'bg-blue-600 text-white shadow-blue-500/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-5 py-2.5 bg-gray-800 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-all duration-300 text-sm font-medium shadow-lg"
            >
              Próxima →
            </button>
          </div>
        )}
      </section>
      {projetoSelecionado && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4">
          <div className="bg-[#1a1a1f] p-6 rounded-xl w-full max-w-md relative border border-gray-700 max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={handleFecharModal}
              className="absolute top-3 right-3 text-white hover:text-gray-400 text-xl font-light transition-colors duration-300 z-10 bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {projetoSelecionado.nome}
            </h2>
            <div className="relative w-full h-48 mb-4 rounded-lg border border-gray-600 overflow-hidden bg-gray-900">
              <Image
                src={projetoSelecionado.imagem}
                alt={projetoSelecionado.nome}
                fill
                quality={100}
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <p className="text-gray-300 font-light leading-relaxed">
              {obterDescricao(projetoSelecionado.descricao)}
            </p>
          </div>
        </div>
      )}

      <div className="mt-20"></div>
      <Footer />
    </div>
  );
}