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
      nome: "Projeto1",
      imagem: "/Logos/wireframe.png",
      descricao: "Este é o Projeto 1, focado em desenvolvimento web.",
      githubLink: "https://github.com/projeto1",
      liveDemoLink: "https://projeto1-demo.com",
    },
    {
      nome: "Projeto2",
      imagem: "/Logos/wireframe.png",
      descricao: "Projeto 2 foca em interfaces com React.",
      githubLink: "https://github.com/projeto2",
      liveDemoLink: "https://projeto2-demo.com",
    },
    {
      nome: "Projeto3",
      imagem: "/Logos/wireframe.png",
      descricao: "Projeto 3 explora integrações de APIs.",
      githubLink: "https://github.com/projeto3",
      liveDemoLink: "https://projeto3-demo.com",
    },
    {
      nome: "Projeto4",
      imagem: "/Logos/wireframe.png",
      descricao: "Projeto 4 é uma aplicação completa com Next.js.",
      githubLink: "https://github.com/projeto4",
      liveDemoLink: "https://projeto4-demo.com",
    },
  ];
  