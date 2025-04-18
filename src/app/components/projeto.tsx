"use client";

export interface Projeto {
  nome: string;
  imagem: string;
  descricao: {
    pt: string;
    en: string;
    es: string;
  };
  githubLink: string;
  liveDemoLink: string;
}



export const projetos: Projeto[] = [

  {
    nome: "Relato Cidadão",
    imagem: "/relatocidadao.png",
    descricao: {
      pt: "O Relato Cidadão é uma plataforma social que conecta cidadãos e prefeituras na resolução de problemas urbanos, como buracos em vias públicas. Usuários registram relatos com fotos e localização, enquanto as prefeituras acessam o feed para identificar e priorizar reparos. A aplicação foi desenvolvida com React + Next.js, TypeScript e Tailwind CSS no front-end, proporcionando uma interface moderna e responsiva. No back-end, utilizei PostgreSQL e Prisma para garantir escalabilidade e performance. Além disso, integrei a API do IBGE para buscar estados e cidades, e a API da Cloudinary para upload de imagens, oferecendo uma experiência eficiente.",
      en: "Relato Cidadão is a social platform that connects citizens and city halls in solving urban problems, such as potholes on public roads. Users report incidents with photos and location, while city halls access the feed to identify and prioritize repairs. The application was developed with React + Next.js, TypeScript, and Tailwind CSS on the front-end, providing a modern and responsive interface. On the back-end, I used PostgreSQL and Prisma to ensure scalability and performance. In addition, I integrated the IBGE API to fetch states and cities, and the Cloudinary API for image upload, offering an efficient experience.",
      es: "Relato Cidadão es una plataforma social que conecta a ciudadanos y ayuntamientos en la resolución de problemas urbanos, como baches en vías públicas. Los usuarios informan incidentes con fotos y ubicación, mientras que los ayuntamientos acceden al feed para identificar y priorizar reparaciones. La aplicación se desarrolló con React + Next.js, TypeScript y Tailwind CSS en el front-end, proporcionando una interfaz moderna y receptiva. En el back-end, utilicé PostgreSQL y Prisma para garantizar escalabilidad y rendimiento. Además, integré la API del IBGE para buscar estados y ciudades, y la API de Cloudinary para la carga de imágenes, ofreciendo una experiencia eficiente."
    },
    githubLink: "https://github.com/uPedroLima11/RelatoCidadao",
    liveDemoLink: "https://relato-cidadao.vercel.app",
  },
  
  {
    nome: "Verbalize",
    imagem: "/verbalize.png",
    descricao: {
      pt: "Este é o Verbalize. ele é um projeto desenvolvido em grupo com o intuito de ser uma plataforma de chat bidirecional onde você ensina sua linguagem enquanto aprende a do outro. as linguagens que eu usei para fazer o Front-End dele foram: React | Next, Typescript e Tailwind CSS. Quanto ao Back-end optei por usar Mysql junto com Prisma",
      en: "This is Verbalize. It is a group project developed to be a bidirectional chat platform where you teach your language while learning the other's. The languages I used to build its Front-End were: React | Next, Typescript, and Tailwind CSS. For the Back-end, I chose to use Mysql along with Prisma.",
      es: "Este es Verbalize. Es un proyecto grupal desarrollado para ser una plataforma de chat bidireccional donde enseñas tu idioma mientras aprendes el del otro. Los lenguajes que utilicé para construir su Front-End fueron: React | Next, Typescript y Tailwind CSS. Para el Back-end, opté por usar Mysql junto con Prisma."
    },
    githubLink: "https://github.com/uPedroLima11/Next_Verbalise_Frontend",
    liveDemoLink: "https://verbalize-senac.vercel.app",
  },

  {
    nome: "ElectroHub",
    imagem: "/electrohub.png",
    descricao: {
      pt: "Este site que desenvolvi é uma Loja de venda de eletrônicos, oferecendo uma ampla variedade de produtos para os consumidores. O design é moderno e responsivo, garantindo uma navegação intuitiva em dispositivos móveis e desktops. Utilizei as tecnologias React, Next.js, TypeScript e Tailwind CSS para construir o projeto. Meu foco foi proporcionar uma experiência de interface atrativa, eficiente e otimizada.",
      en: "This site I developed is an electronics store, offering a wide variety of products for consumers. The design is modern and responsive, ensuring intuitive navigation on mobile and desktop devices. I used React, Next.js, TypeScript, and Tailwind CSS technologies to build the project. My focus was to provide an attractive, efficient, and optimized interface experience.",
      es: "Este sitio que desarrollé es una tienda de electrónica, ofreciendo una amplia variedad de productos para los consumidores. El diseño es moderno y receptivo, asegurando una navegación intuitiva en dispositivos móviles y de escritorio. Utilicé las tecnologías React, Next.js, TypeScript y Tailwind CSS para construir el proyecto. Mi enfoque fue proporcionar una experiencia de interfaz atractiva, eficiente y optimizada."
    },
    githubLink: "https://github.com/uPedroLima11/Next_Loja",
    liveDemoLink: "https://next-loja-nine.vercel.app",
  },

  {
    nome: "Previsão do Tempo - App de Clima",
    imagem: "/previsaotempo1.png",
    descricao: {
      pt: "Este é um projeto de um site de previsão do tempo para oferecer uma experiência completa e fácil de usar, com informações detalhadas sobre o clima atual e futuro. Ele traz ícones personalizados, tornando a visualização mais intuitiva e envolvente. O design, moderno e responsivo, garante uma navegação tranquila tanto em dispositivos móveis quanto em desktops. Utilizei React, TypeScript e Tailwind CSS para dar vida ao projeto, com o objetivo de criar uma interface bonita e otimizada, além de traduzir as informações de clima de forma clara e acessível para o público.",
      en: "This is a weather forecast website project to offer a complete and easy-to-use experience, with detailed information about current and future weather. It features custom icons, making the visualization more intuitive and engaging. The modern and responsive design ensures smooth navigation on both mobile and desktop devices. I used React, TypeScript, and Tailwind CSS to bring the project to life, aiming to create a beautiful and optimized interface, as well as translating weather information clearly and accessibly for the public.",
      es: "Este es un proyecto de un sitio web de pronóstico del tiempo para ofrecer una experiencia completa y fácil de usar, con información detallada sobre el clima actual y futuro. Presenta íconos personalizados, lo que hace que la visualización sea más intuitiva y atractiva. El diseño moderno y receptivo garantiza una navegación fluida tanto en dispositivos móviles como en computadoras de escritorio. Utilicé React, TypeScript y Tailwind CSS para dar vida al proyecto, con el objetivo de crear una interfaz hermosa y optimizada, además de traducir la información meteorológica de manera clara y accesible para el público."
    },
    githubLink: "https://github.com/uPedroLima11/Previsao-do-Tempo",
    liveDemoLink: "https://pedro-previsao-do-tempo.vercel.app",
  },

  

];