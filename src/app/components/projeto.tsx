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
    nome: "ElectroHub *",
    imagem: "/electrohub.png",
    descricao: "*Este site que desenvolvi é uma Loja de venda de eletrônicos, oferecendo uma ampla variedade de produtos para os consumidores. O design é moderno e responsivo, garantindo uma navegação intuitiva em dispositivos móveis e desktops. Utilizei as tecnologias React, Next.js, TypeScript e Tailwind CSS para construir o projeto. Meu foco foi proporcionar uma experiência de interface atrativa, eficiente e otimizada. A combinação dessas ferramentas resulta em um site rápido e fácil de usar.*",
    githubLink: "https://github.com/uPedroLima11/Next_Loja",
    liveDemoLink: "https://next-loja-nine.vercel.app",
  },


  {
    nome: "Sabor e Saúde",
    imagem: "/projeto2.png",
    descricao: "Este é um Site de Receitas desenvolvido no 2º semestre da faculdade utilizando apenas html e css. a pagina em si é um site de receitas que tem o intuito de ajudar as pessoas que desejam emagrecer ou apenas ter uma boa saude. com isso o site fornece diversas receitas para ajudar a quem quer emagrecer",
    githubLink: "https://github.com/uPedroLima11/Site-Receitas",
    liveDemoLink: "https://site-receitas-pedro.vercel.app",
  },
  
  {
    nome: "Projeto4 * Em Desenvolvimento *",
    imagem: "/verbalize.png",
    descricao: "* Em Desenvolvimento *",
    githubLink: "https://github.com/projeto4",
    liveDemoLink: "https://projeto4-demo.com",
  },
];
