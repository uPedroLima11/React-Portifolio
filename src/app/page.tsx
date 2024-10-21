"use client";
import Link from "next/link";
import Header from "./components/header";
import Image from "next/image";
import { useState } from "react";
import { Projeto, projetos} from "./components/projeto"
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
      <section className="flex items-center justify-between py-48 px-6 md:px-32 space-y-10 w-full">
        <div className="-mt-40 px-6 text-7xl font-light ">
          <h1 className="text-7xl mt-40 font-light"> Olá,</h1> <br />
          <h2 className="-mt-16">Sou <span className="font-semibold">Pedro</span> <span className=" text-5xl mb-10 animate-fade">|</span> </h2>
          <h1 className="text-lg mt-4">✨ Desenvolvedor Front-End ✨
            Focado em criar interfaces intuitivas <br />e responsivas, costumo utilizar React, TypeScript e Tailwind CSS para transformar
            <br />minhas ideias  em experiências digitais fluidas. </h1>
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-14 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Converse Comigo</button>
        </div>

        <Image src="/Logos/MinhaFoto.png" alt='eu' width={250} height={10} className=' mr-14 -rotate-6' />
      </section>
      <div className="flex justify-end -mt-80 mr-52 gap-10">
        <div className="mt-14 -mr-4"><Link href='https://www.linkedin.com/in/upedrolima/'><Image src="/Logos/linkedin.png" alt="linkedin" width={50} height={50} className='py-14' /></Link></div>
        <div className="mt-14 -mr-3"><Link href='https://www.instagram.com/upedro_lima/'><Image src="/Logos/instagram1.png" alt='linkedin' width={50} height={50} className='py-14' /></Link></div>
        <div className="mt-14 "><Link href='https://github.com/uPedroLima11'><Image src="/Logos/github.png" alt='linkedin' width={50} height={50} className='py-14' /></Link></div>
      </div>

      <section className="p-12">
        <div className="flex justify-center"> <h1 className="text-3xl font-bold">Sobre Mim</h1></div>
        <div className="mt-32 ml-12"> <Image src="/Logos/programador.jpg" alt="sobremim" width="450" height="400" className="rounded-xl border-4 border-[#101013]" />
        </div>
        <div className="flex justify-end -mt-[312px] mr-32">
          <h1 className="rounded-lg font-light bg-[#1a1a1f] -mr-24 p-14 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
            <span className="ml-4">Olá!</span> Sou estudante do Senac-RS e estou cursando Análise e Desenvolvimento de Sistemas <br />e, se tem uma coisa que eu amo desde pequeno,
            é tecnologia! Atualmente, estou focado <br /> no mundo do desenvolvimento front-end, onde gosto usar minhas habilidades em <span className="font-bold">
              React | <br /> TypeScript | JavaScript | Tailwind </span>para criar interfaces atrativas e interessante para o mundo <br /> <br /> <span className="ml-4">Meu</span> maior objetivo é
            transformar ideias em experiências digitais que as pessoas possam <br /> adorar. Cada projeto que eu faço é uma nova oportunidade de aprender e crescer,
            e eu <br /> estou sempre em busca das últimas novidades no mundo da tecnologia. Estou animado <br /> para contribuir com soluções que melhorem
            a vida das pessoas no ambiente digital!
          </h1>
        </div>
      </section>
      <section className="mt-16">
      <h1 className="text-center text-3xl font-bold">Tech Stack</h1>

      <div className="mt-32 flex lg:flex-wrap items-center justify-center gap-20 px-4 lg:px-16 md:grid-cols-2 xl:grid-cols-4 ">
      <div className="relative pb-24 bg-[#1a1a1f] mb-10 flex flex-col items-center justify-center rounded-lg py-2 px-4 hover:scale-105 transition delay-150 duration-150 ease-in-out shadow-lg flex-grow overflow-hidden">
        <div className="absolute inset-0 border-2 border-transparent rounded-lg loading-border-blue"></div>
        <Image src="/Logos/typescript.png" alt="typescript" width={60} height={40} className="mt-20" />
        <p className="text-white font-bold mt-10">TypeScript</p>
      </div>

      <div className="relative pb-24 bg-[#1a1a1f] mb-10 flex flex-col items-center justify-center rounded-lg py-2 px-4 hover:scale-105 transition delay-150 duration-150 ease-in-out shadow-lg flex-grow overflow-hidden">
        <div className="absolute inset-0 border-2 border-transparent rounded-lg loading-border-cyan"></div>
        <Image src="/Logos/react.png" alt="react" width={60} height={40} className="mt-20" />
        <p className="text-white font-bold mt-10">React</p>
      </div>

      <div className="relative pb-24 bg-[#1a1a1f] mb-10 flex flex-col items-center justify-center rounded-lg py-2 px-4 hover:scale-105 transition delay-150 duration-150 ease-in-out shadow-lg flex-grow overflow-hidden">
        <div className="absolute inset-0 border-2 border-transparent rounded-lg loading-border-yellow"></div>
        <Image src="/Logos/javascript.png" alt="javascript" width={60} height={40} className="mt-20" />
        <p className="text-white font-bold mt-10">JavaScript</p>
      </div>

      <div className="relative pb-24 bg-[#1a1a1f] mb-10 flex flex-col items-center justify-center rounded-lg py-2 px-4 hover:scale-105 transition delay-150 duration-150 ease-in-out shadow-lg flex-grow overflow-hidden">
        <div className="absolute inset-0 border-2 border-transparent rounded-lg loading-border-green"></div>
        <Image src="/Logos/tailwind.png" alt="tailwind" width={60} height={40} className="mt-20" />
        <p className="text-white font-bold mt-10">Tailwind CSS</p>
      </div>
      </div>

      <div className="mt-32 flex lg:flex-wrap items-center justify-center gap-20 px-4 lg:px-16 md:grid-cols-2 xl:grid-cols-4 ">
      <div className="relative pb-24 bg-[#1a1a1f] mb-10 flex flex-col items-center justify-center rounded-lg py-2 px-4 hover:scale-105 transition delay-150 duration-150 ease-in-out shadow-lg flex-grow overflow-hidden">
        <div className="absolute inset-0 border-2 border-transparent rounded-lg loading-border-blue"></div>
        <Image src="/Logos/mysql1.png" alt="mysql1" width={60} height={40} className="mt-20" />
        <p className="text-white font-bold mt-10">MySQL</p>
      </div>

      <div className="relative pb-24 bg-[#1a1a1f] mb-10 flex flex-col items-center justify-center rounded-lg py-2 px-4 hover:scale-105 transition delay-150 duration-150 ease-in-out shadow-lg flex-grow overflow-hidden">
        <div className="absolute inset-0 border-2 border-transparent rounded-lg loading-border-cyan"></div>
        <Image src="/Logos/python.png" alt="react" width={60} height={40} className="mt-20" />
        <p className="text-white font-bold mt-10">Python</p>
      </div>

      <div className="relative pb-24 bg-[#1a1a1f] mb-10 flex flex-col items-center justify-center rounded-lg py-2 px-4 hover:scale-105 transition delay-150 duration-150 ease-in-out shadow-lg flex-grow overflow-hidden">
        <div className="absolute inset-0 border-2 border-transparent rounded-lg loading-border-black"></div>
        <Image src="/Logos/git.png" alt="nodejs" width={60} height={40} className="mt-20" />
        <p className="text-white font-bold mt-10">NextJS</p>
      </div>
<br />
      <div className="relative pb-24 bg-[#1a1a1f] mb-10 flex flex-col items-center justify-center rounded-lg py-2 px-4 hover:scale-105 transition delay-150 duration-150 ease-in-out shadow-lg flex-grow overflow-hidden">
        <div className="absolute inset-0 border-2 border-transparent rounded-lg loading-border-red"></div>
        <Image src="/Logos/tecnologias/git-plain.svg" alt="" width={60} height={40} className="mt-20" />
        <p className="text-white font-bold mt-10">Git</p>
      </div>
          </div>
      </section>


      <section className="mt-16">
      <h1 className="text-center text-3xl font-bold">Alguns Projetos Desenvolvidos</h1>

      <div className="mt-32 grid grid-cols-2 gap-20 px-4 lg:px-16">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="relative pb-24 bg-[#1a1a1f] mb-10 flex flex-col items-center justify-center rounded-lg py-2 px-4 hover:scale-105 transition delay-150 duration-150 ease-in-out shadow-2xl overflow-hidden"
          >
            <Image
              src={projeto.imagem}
              alt={projeto.nome}
              width={300}
              height={40}
              className="mt-20"
            />
            <p className="text-white font-bold mt-10">{projeto.nome}</p>

            <div className="flex gap-4 mt-6">
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
            </div>

            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => handleOpenModal(projeto)}
                className="py-2 px-4  text-white rounded-lg font-bold bg-slate-800 hover:text-[#B38000] "
              >
                Mais Informações
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg w-96 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {selectedProject.nome}
            </h2>
            <Image
              src={selectedProject.imagem}
              alt={selectedProject.nome}
              width={300}
              height={200}
            />
            <p className="mt-4 text-gray-600">
              {selectedProject.descricao}
            </p>
          </div>
        </div>
      )}
    </section>
    <div className="mt-10"></div>
    <Footer/>
    </div>
    
  );
}
export default Home; 