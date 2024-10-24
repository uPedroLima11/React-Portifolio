"use client";
import Link from "next/link";
import Header from "./components/header";
import Image from "next/image";
import { useState } from "react";
import { Projeto, projetos } from "./components/projeto"
import Footer from "./components/footer";
const Home = () => {

  const [selectedProject, setSelectedProject] = useState<Projeto | null>(null);

  const handleOpenModal = (projeto: Projeto) => setSelectedProject(projeto);
  const handleCloseModal = () => setSelectedProject(null);


  return (
    <div>
      <header>
        <Header />
      </header>

      <section className="flex flex-col-reverse md:flex-row items-center justify-between py-24 px-6 md:px-32 space-y-10 md:space-y-0 w-full">
        <div className="px-6 text-center md:text-left text-4xl md:text-7xl font-light flex-col">
          <h1 className="mt-16 md:mt-40">Olá,</h1>
          <h2 className="flex items-center justify-center md:justify-start mt-4">
            Sou <span className="font-semibold ml-4">Pedro</span>
            <span className="text-3xl md:text-5xl animate-fade relative translate-y-0 ml-3">|</span>
          </h2>
          <h1 className="text-base md:text-lg mt-4">
            ✨ Desenvolvedor Front-End ✨ Focado em criar interfaces intuitivas <br />
            e responsivas. Utilizo React, TypeScript e Tailwind CSS <br />
            para transformar ideias em experiências digitais fluidas.
          </h1>
          <Link
            href="/contatos">
            <button
              type="button"
              className="mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-14 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Converse Comigo
            </button></Link>
        </div>

        <div className="mt-10 md:mt-0 flex flex-col items-center">
          <Image
            src="/MinhaFoto.png"
            alt="eu"
            width={250}
            height={250}
            quality={100}
            className="mr-0 md:mr-14 -rotate-6 animate-move"
          />

          <div className="flex gap-6 mt-2  md:mt-10 mr-0 lg:mr-12">
            <Link href="https://www.linkedin.com/in/upedrolima/">
              <Image src="/linkedin.png" alt="linkedin" width={50} height={50} />
            </Link>
            <Link href="https://www.instagram.com/upedro_lima/">
              <Image src="/instagram1.png" alt="instagram" width={50} height={50} />
            </Link>
            <Link href="https://github.com/uPedroLima11">
              <Image src="/github.png" alt="github" width={50} height={50} />
            </Link>
          </div><div id="sobremim"></div>
        </div>
      </section>
      <section className="p-12">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold">Sobre Mim</h1>
        </div>


        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-12">

          <div>
            <Image
              src="/tela.png"
              alt="Sobre mim"
              width={450}
              height={400}
              quality={100}
              className="rounded-xl mr-16  border-4 border-[#101013]"
            />
          </div>


          <div className="max-w-xl bg-[#1a1a1f] p-8 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <h1 className="font-light">
              <span className="ml-4">Olá!</span> Sou estudante de Análise e Desenvolvimento de Sistemas no Senac-RS e, desde pequeno,
              tenho uma paixão por tecnologia. Atualmente, estou focado no desenvolvimento front-end, utilizando minhas habilidades
              em <span className="font-bold">React, TypeScript, JavaScript, Tailwind e Figma </span>para criar interfaces atraentes e funcionais.
              <br /> <span className="ml-4">Meu </span> principal objetivo é transformar ideias em experiências digitais memoráveis. Cada projeto
              representa uma nova oportunidade de aprendizado e crescimento, e estou sempre em busca das últimas
              inovações do setor. Estou animado para contribuir com soluções que melhorem a vida das pessoas no
              ambiente digital!
            </h1>
          </div>
        </div>
      </section>



      <section className="mt-16">
        <h1 className="text-center text-3xl font-bold">Tech Stack</h1>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 px-4 lg:px-16">
          <div className="relative bg-[#1a1a1f] flex flex-col items-center justify-center rounded-lg py-8 px-6 hover:scale-105 transition duration-150 shadow-lg overflow-hidden">
            <div className="absolute inset-0 border-2 border-transparent rounded-lg loading-border-blue"></div>
            <Image src="/typescript.png" alt="typescript" width={60} height={40} quality={100} className="mt-10" />
            <p className="text-white font-bold mt-6">TypeScript</p>
          </div>

          <div className="relative bg-[#1a1a1f] flex flex-col items-center justify-center rounded-lg py-8 px-6 hover:scale-105 transition duration-150 shadow-lg overflow-hidden">
            <div className="absolute inset-0 border-2 border-transparent rounded-lg loading-border-cyan"></div>
            <Image src="/react.svg" alt="react" width={60} height={40} quality={100} className="mt-10" />
            <p className="text-white font-bold mt-6">React</p>
          </div>

          <div className="relative bg-[#1a1a1f] flex flex-col items-center justify-center rounded-lg py-8 px-6 hover:scale-105 transition duration-150 shadow-lg overflow-hidden">
            <div className="absolute inset-0 border-2 border-transparent rounded-lg loading-border-yellow"></div>
            <Image src="/javascript.png" alt="javascript" width={60} height={40} quality={100} className="mt-10" />
            <p className="text-white font-bold mt-6">JavaScript</p>
          </div>

          <div className="relative bg-[#1a1a1f] flex flex-col items-center justify-center rounded-lg py-8 px-6 hover:scale-105 transition duration-150 shadow-lg overflow-hidden">
            <div className="absolute inset-0 border-2 border-transparent rounded-lg loading-border-green"></div>
            <Image src="/tailwind.png" alt="tailwind" width={60} height={40} quality={100} className="mt-10" />
            <p className="text-white font-bold mt-6">Tailwind CSS</p>
          </div>

          <div className="relative bg-[#1a1a1f] flex flex-col items-center justify-center rounded-lg py-8 px-6 hover:scale-105 transition duration-150 shadow-lg overflow-hidden">
            <div className="absolute inset-0 border-2 border-transparent rounded-lg loading-border-blue"></div>
            <Image src="/mysql1.png" alt="mysql" width={60} height={40} quality={100} className="mt-10" />
            <p className="text-white font-bold mt-6">MySQL</p>
          </div>

          <div className="relative bg-[#1a1a1f] flex flex-col items-center justify-center rounded-lg py-8 px-6 hover:scale-105 transition duration-150 shadow-lg overflow-hidden">
            <div className="absolute inset-0 border-2 border-transparent rounded-lg loading-border-yellow"></div>
            <Image src="/python.svg" alt="python" width={60} height={40} quality={100} className="mt-10" />
            <p className="text-white font-bold mt-6">Python</p>
          </div>

          <div className="relative bg-[#1a1a1f] flex flex-col items-center justify-center rounded-lg py-8 px-6 hover:scale-105 transition duration-150 shadow-lg overflow-hidden">
            <div className="absolute inset-0 border-2 border-transparent rounded-lg loading-border-black"></div>
            <Image src="/next.svg" alt="nextjs" width={60} height={40} quality={100} className="mt-10" />
            <p className="text-white font-bold mt-6">NextJS</p>
          </div>

          <div className="relative bg-[#1a1a1f] flex flex-col items-center justify-center rounded-lg py-8 px-6 hover:scale-105 transition duration-150 shadow-lg overflow-hidden">
            <div className="absolute inset-0 border-2 border-transparent rounded-lg loading-border-red"></div>
            <Image src="/git.png" alt="git" width={60} height={40} quality={100} className="mt-10" />
            <p className="text-white font-bold mt-6">Git</p>
          </div>
        </div>

        <div className="-mt-24" id="projetos"></div>
      </section>

      <section className="mt-40">
        <h1 className="text-center text-3xl font-bold">Alguns Projetos Desenvolvidos</h1>

        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-10 lg:px-16">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="relative pb-11 bg-[#1a1a1f] mb-10 flex flex-col items-center justify-center rounded-lg py-2 hover:scale-105 transition delay-150 duration-150 ease-in-out shadow-2xl overflow-hidden"
            >
              <Image
                src={projeto.imagem}
                alt={projeto.nome}
                width={480}
                height={420}
                quality={100}
                className="mt-8 hidden md:block"
              />
              <Image
                src={projeto.imagem}
                alt={projeto.nome}
                width={300}
                height={200}
                quality={100}
                className="mt-8 block md:hidden w-full max-w-xs border border-gray-500 rounded-lg "
              />

              <p className="text-white text-xl font-bold mt-10">{projeto.nome}</p>

              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <Link href={projeto.githubLink} target="_blank">
                  <button className="py-2 px-4 bg-gray-300 font-semibold text-black rounded-lg hover:bg-gray-400">
                    Github
                  </button>
                </Link>
                <Link href={projeto.liveDemoLink} target="_blank">
                  <button className="py-2 px-4 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-600">
                    Live Demo
                  </button>
                </Link>

                <button
                  onClick={() => handleOpenModal(projeto)}
                  className="py-2 px-4 text-white rounded-lg font-bold bg-slate-800 hover:text-[#B38000]"
                >
                  Mais Informações
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-[#1a1a1f] p-8 rounded-lg w-96 relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-white font-light hover:text-gray-700"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedProject.nome}</h2>
              <Image
                src={selectedProject.imagem}
                alt={selectedProject.nome}
                width={400}
                height={300}
                quality={100}
                className="border border-gray-500 rounded-lg"
              />
              <p className="mt-4 text-white font-light">{selectedProject.descricao}</p>
            </div>
          </div>
        )}
      </section>

      <div className="mt-10"></div>
      <Footer />
    </div>


  );
}
export default Home; 