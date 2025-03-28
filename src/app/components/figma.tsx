"use client";

export interface Prototipo {
  nome: string;
  imagem: string;
  descricao: {
    pt: string;
    en: string;
    es: string;
  };
  prototipacaoLink: string;
}



export const figma: Prototipo[] = [

  {
    nome: "Diário Digital",
    imagem: "/figma1.png",
    descricao: {
      pt: "Diário Digital é uma plataforma em desenvolvimento que permite aos usuários registrar e compartilhar seus pensamentos e experiências diárias de forma interativa. Com acesso a notícias reais, os usuários podem comentar e compartilhar informações relevantes, promovendo discussões saudáveis. Atualmente em desenvolvimento utilizando React Native, com TypeScript e Tailwind CSS, o aplicativo oferece uma experiência fluida e responsiva. A funcionalidade de autenticação permite que os usuários acessem seus diários de qualquer lugar, contribuindo para uma comunidade mais informada e conectada.",
      en: "Digital Diary is a platform in development that allows users to record and share their daily thoughts and experiences interactively. With access to real news, users can comment and share relevant information, promoting healthy discussions. Currently under development using React Native, with TypeScript and Tailwind CSS, the app offers a smooth and responsive experience. The authentication feature allows users to access their diaries from anywhere, contributing to a more informed and connected community.",
      es: "Diario Digital es una plataforma en desarrollo que permite a los usuarios registrar y compartir sus pensamientos y experiencias diarias de forma interactiva. Con acceso a noticias reales, los usuarios pueden comentar y compartir información relevante, promoviendo discusiones saludables. Actualmente en desarrollo utilizando React Native, con TypeScript y Tailwind CSS, la aplicación ofrece una experiencia fluida y receptiva. La funcionalidad de autenticación permite a los usuarios acceder a sus diarios desde cualquier lugar, contribuyendo a una comunidad más informada y conectada."
    },
    prototipacaoLink: "https://www.figma.com/design/UYKxJa5zQmBXoBiwGD7YHR/Wireframe-Di%C3%A1rio-Digital?node-id=0-1&t=0QkADsBVkL4Ja8xh-1",
  },
  
  {
    nome: "Verbalize",
    imagem: "/figma2.png",
    descricao: {
      pt: "Este é o Verbalize. ele é um projeto desenvolvido com o intuito de ser uma plataforma de chat bidirecional onde você ensina sua linguagem enquanto aprende a do outro. as linguagens que eu usei para fazer o Front-End dele foram: React | Next, Typescript e Tailwind CSS. Quanto ao Back-end optei por usar Mysql junto com Prisma",
      en: "This is Verbalize. It is a project developed to be a bidirectional chat platform where you teach your language while learning the other's. The languages I used to build its Front-End were: React | Next, Typescript, and Tailwind CSS. For the Back-end, I chose to use Mysql along with Prisma.",
      es: "Este es Verbalize. Es un proyecto desarrollado para ser una plataforma de chat bidireccional donde enseñas tu idioma mientras aprendes el del otro. Los lenguajes que utilicé para construir su Front-End fueron: React | Next, Typescript y Tailwind CSS. Para el Back-end, opté por usar Mysql junto con Prisma."
    },
    prototipacaoLink: "https://www.figma.com/design/WLSzp1o00xLrcfVHQfCqYJ/Verbalize-Projeto-Integrador?node-id=0-1&t=gAPgOhjzVjV009iu-1",
  },

];