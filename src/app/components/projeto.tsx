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
      imagem: "/verbalize.png",
      descricao: "Este é o projeto Verbalize. ele é um projeto feito em grupo com o intuito de ser uma plataforma de chat bidirecional onde você ensina sua linguagem enquanto aprende a do outro. as linguagens que eu usei para fazer o Front-End dele foram: React | Next, utilizando MySQL, Typescript e Tailwind CSS.",
      githubLink: "https://github.com/uPedroLima11/Next_Verbalise_Frontend",
      liveDemoLink: "https://verbalize-senac.vercel.app",
    },
    {
      nome: "Sabor e Saúde",
      imagem: "/projeto2.png",
      descricao: "Esse é um Site de Receitas desenvolvido no 2 semestre da faculdade. a pagina é um site de receitas que tem o intuito de ajudar as pessoas que desejam emagrecer ou também ter uma boa saude. com isso o site fornece diversas receitas para ajudar a quem quer emagrecer",
      githubLink: "https://github.com/uPedroLima11/App-Restaurante",
      liveDemoLink: "https://app-restaurante-nu.vercel.app",
    },
    {
      nome: "Projeto3",
      imagem: "/verbalize.png",
      descricao: "Projeto 3 explora integrações de APIs.",
      githubLink: "https://github.com/projeto3",
      liveDemoLink: "https://projeto3-demo.com",
    },
    {
      nome: "Projeto4",
      imagem: "/verbalize.png",
      descricao: "Projeto 4 é uma aplicação completa com Next.js.",
      githubLink: "https://github.com/projeto4",
      liveDemoLink: "https://projeto4-demo.com",
    },
  ];
  