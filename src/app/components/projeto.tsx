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
      descricao: "Este é o projeto Verbalize. ele é um projeto em grupo que ainda está em desenvolvimento com o intuito de ser uma plataforma de chat bidirecional onde você ensina sua linguagem enquanto aprende a do outro. as linguagens que eu usei para fazer o Front-End dele foram: React | Next, utilizando MySQL, Typescript e Tailwind CSS.",
      githubLink: "https://github.com/uPedroLima11/Next_Verbalise_Frontend",
      liveDemoLink: "https://verbalize-senac.vercel.app",
    },
    {
      nome: "Sabor e Saúde",
      imagem: "/projeto2.png",
      descricao: "Esse é um Site de Receitas desenvolvido no 2º semestre da faculdade utilizando apenas html e css. a pagina em si é um site de receitas que tem o intuito de ajudar as pessoas que desejam emagrecer ou apenas ter uma boa saude. com isso o site fornece diversas receitas para ajudar a quem quer emagrecer",
      githubLink: "https://github.com/uPedroLima11/Site-Receitas",
      liveDemoLink: "https://site-receitas-pedro.vercel.app",
    },
    {
      nome: "Projeto3 * Em Desenvolvimento *",
      imagem: "/verbalize.png",
      descricao: "* Em Desenvolvimento *",
      githubLink: "https://github.com/projeto3",
      liveDemoLink: "https://projeto3-demo.com",
    },
    {
      nome: "Projeto4 * Em Desenvolvimento *",
      imagem: "/verbalize.png",
      descricao: "* Em Desenvolvimento *",
      githubLink: "https://github.com/projeto4",
      liveDemoLink: "https://projeto4-demo.com",
    },
  ];
  