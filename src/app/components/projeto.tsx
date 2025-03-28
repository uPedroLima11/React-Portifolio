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
      pt: "O Relato Cidadão é uma plataforma social desenvolvida para conectar cidadãos e prefeituras na resolução de problemas urbanos, como buracos em vias públicas. Usuários podem registrar relatos com fotos e localização, enquanto as prefeituras têm acesso ao feed para identificar e priorizar reparos. Para fazer a aplicação, utilizei React + Next.js, TypeScript e Tailwind CSS no front-end, oferecendo uma interface moderna, responsiva e intuitiva. No back-end, optei por utilizar PostgreSQL e Prisma, garantindo escalabilidade e performance do projeto. Além disso, integrei a API do IBGE para busca de estados e cidades e a API da Cloudinary para upload e armazenamento de imagens, garantindo uma experiência completa e eficiente.",
      en: "Relato Cidadão is a social platform developed to connect citizens and municipalities in solving urban problems, such as potholes in public roads. Users can register reports with photos and location, while municipalities have access to the feed to identify and prioritize repairs. To build the application, I used React + Next.js, TypeScript, and Tailwind CSS on the front-end, offering a modern, responsive, and intuitive interface. On the back-end, I chose to use PostgreSQL and Prisma, ensuring scalability and performance of the project. Additionally, I integrated the IBGE API for state and city search and the Cloudinary API for image upload and storage, ensuring a complete and efficient experience.",
      es: "Relato Cidadão es una plataforma social desarrollada para conectar a los ciudadanos y los municipios en la resolución de problemas urbanos, como baches en las vías públicas. Los usuarios pueden registrar informes con fotos y ubicación, mientras que los municipios tienen acceso al feed para identificar y priorizar reparaciones. Para construir la aplicación, utilicé React + Next.js, TypeScript y Tailwind CSS en el front-end, ofreciendo una interfaz moderna, receptiva e intuitiva. En el back-end, opté por usar PostgreSQL y Prisma, asegurando la escalabilidad y el rendimiento del proyecto. Además, integré la API del IBGE para la búsqueda de estados y ciudades y la API de Cloudinary para la carga y almacenamiento de imágenes, asegurando una experiencia completa y eficiente."
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