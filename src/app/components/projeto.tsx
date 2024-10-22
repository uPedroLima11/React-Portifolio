"use client";

  export interface Projeto {
    nome: string;
    imagem: string;
    descricao: string;
    githubLink: string;
    liveDemoLink: string;
  }
  
  export const projetos: Projeto[] = [
    {
      nome: "Verbalize",
      imagem: "/Navbar.png",
      descricao: "Este é o projeto Verbalize. ele é um projeto feito em grupo com o intuito de ser uma plataforma de chat bidirecional onde você ensina sua linguagem enquanto aprende a do outro. as linguagens que eu usei para fazer o Front-End dele foram: React | Next, utilizando MySQL, Typescript e Tailwind CSS.",
      githubLink: "https://github.com/uPedroLima11/Next_Verbalise_Frontend",
      liveDemoLink: "https://verbalize-senac.vercel.app",
    },
    {
      nome: "Projeto2",
      imagem: "/programadorr.ico",
      descricao: "Projeto 2 foca em interfaces com React.",
      githubLink: "https://github.com/projeto2",
      liveDemoLink: "https://projeto2-demo.com",
    },
    {
      nome: "Projeto3",
      imagem: "/Navbar.png",
      descricao: "Projeto 3 explora integrações de APIs.",
      githubLink: "https://github.com/projeto3",
      liveDemoLink: "https://projeto3-demo.com",
    },
    {
      nome: "Projeto4",
      imagem: "/Navbar.png",
      descricao: "Projeto 4 é uma aplicação completa com Next.js.",
      githubLink: "https://github.com/projeto4",
      liveDemoLink: "https://projeto4-demo.com",
    },
  ];
  