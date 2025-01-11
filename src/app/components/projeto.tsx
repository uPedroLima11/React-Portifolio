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
    nome: "ElectroHub",
    imagem: "/electrohub.png",
    descricao: "Este site que desenvolvi é uma Loja de venda de eletrônicos, oferecendo uma ampla variedade de produtos para os consumidores. O design é moderno e responsivo, garantindo uma navegação intuitiva em dispositivos móveis e desktops. Utilizei as tecnologias React, Next.js, TypeScript e Tailwind CSS para construir o projeto. Meu foco foi proporcionar uma experiência de interface atrativa, eficiente e otimizada.",
    githubLink: "https://github.com/uPedroLima11/Next_Loja",
    liveDemoLink: "https://next-loja-nine.vercel.app",
  },

  {
    nome: "Previsão do Tempo - App de Clima",
    imagem: "/previsaotempo1.png",
    descricao: "Este é um projeto de um site de previsão do tempo para oferecer uma experiência completa e fácil de usar, com informações detalhadas sobre o clima atual e futuro. Ele traz ícones personalizados, tornando a visualização mais intuitiva e envolvente. O design, moderno e responsivo, garante uma navegação tranquila tanto em dispositivos móveis quanto em desktops. Utilizei React, TypeScript e Tailwind CSS para dar vida ao projeto, com o objetivo de criar uma interface bonita e otimizada, além de traduzir as informações de clima de forma clara e acessível para o público.",
    githubLink: "https://github.com/uPedroLima11/Previsao-do-Tempo",
    liveDemoLink: "https://pedro-previsao-do-tempo.vercel.app",
  },

  {
    nome: "Sabor e Saúde",
    imagem: "/projeto2.png",
    descricao: "Este é um Site de Receitas desenvolvido no 2º semestre da faculdade utilizando apenas Html e Tailwind CSS. a pagina em si é um site de receitas que tem o intuito de ajudar as pessoas que desejam emagrecer ou apenas ter uma boa saude. com isso o site fornece diversas receitas para ajudar a quem quer emagrecer",
    githubLink: "https://github.com/uPedroLima11/Site-Receitas",
    liveDemoLink: "https://site-receitas-pedro.vercel.app",
  },

  
  {
    nome: "Verbalize",
    imagem: "/verbalize.png",
    descricao: "Este é o Verbalize. ele é um projeto em grupo que foi desenvolvido com o intuito de ser uma plataforma de chat bidirecional onde você ensina sua linguagem enquanto aprende a do outro. as linguagens que eu usei para fazer o Front-End dele foram: React | Next, Typescript e Tailwind CSS. Quanto ao Back-end optei por usar Mysql junto com Prisma",
    githubLink: "https://github.com/uPedroLima11/Next_Verbalise_Frontend",
    liveDemoLink: "https://verbalize-senac.vercel.app",
  },

];
