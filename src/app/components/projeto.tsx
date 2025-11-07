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
  liveDemoLink?: string;
  figmaLink?: string;
}

export const projetos: Projeto[] = [
  {
    nome: "StockControl",
    imagem: "/stock2.png",
    descricao: {
      pt: "O StockControl é um sistema web multitenant desenvolvido em dupla durante o meu TCC para gestão de estoque de produtos em empresas. Ele permite que os usuários gerenciem itens, realizem baixas e acompanhem todas as informações através de uma dashboard intuitiva e moderna. O front-end foi construído com React, Next.js e Tailwind CSS, enquanto o back-end utiliza Fastify para desempenho e escalabilidade. O projeto foi desafiador e enriquecedor, contando com feedback de professores para aprimorar cada detalhe.",
      en: "StockControl is a multitenant web system developed as a duo project during our TCC for managing product inventory in companies. It allows users to manage items, record stock reductions, and access all information through an intuitive and modern dashboard. The front-end was built with React, Next.js, and Tailwind CSS, while the back-end uses Fastify for performance and scalability. The project was challenging and enriching, benefiting from professors' feedback to refine every detail.",
      es: "StockControl es un sistema web multitenant desarrollado en dupla durante nuestro TCC para la gestión de inventario de productos en empresas. Permite a los usuarios administrar artículos, registrar disminuciones de stock y acceder a toda la información a través de un panel intuitivo y moderno. El front-end se construyó con React, Next.js y Tailwind CSS, mientras que el back-end utiliza Fastify para garantizar rendimiento y escalabilidad. El proyecto fue desafiante y enriquecedor, contando con la retroalimentación de los profesores para perfeccionar cada detalle."
    },
    githubLink: "https://github.com/uPedroLima11/StockControl---Frontend",
    liveDemoLink: "https://stockcontrol-six.vercel.app",
    figmaLink: "https://www.figma.com/design/K0KzZU3f6R2OBYCeu1kqIp/StockControl?node-id=0-1&t=hXdvxeHPK1mwWVZv-1" 
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
    figmaLink: "https://www.figma.com/design/WLSzp1o00xLrcfVHQfCqYJ/Verbalize-Projeto-Integrador?node-id=0-1&t=gAPgOhjzVjV009iu-1" 
  },

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
    nome: "Previsão do Tempo - App de Clima",
    imagem: "/previsaotempo1.png",
    descricao: {
      pt: "Este é um projeto de um site de previsão do tempo para oferecer uma experiência completa e fácil de usar, com informações detalhadas sobre o clima atual e futuro. Ele traz ícones personalizados, tornando a visualização mais intuitiva e envolvente. O design, moderno e responsivo, garante uma navegação tranquila tanto em dispositivos móveis quanto em desktops. Utilizei React, TypeScript e Tailwind CSS para dar vida ao projeto, com o objetivo de criar uma interface bonita e otimizada, além de traduzir as informações de clima de forma clara e acessível para o público.",
      en: "This is a weather forecast website project to offer a complete and easy-to-use experience, with detailed information about current and future weather. It features custom icons, making the visualization more intuitive and engaging. The modern and responsive design ensures smooth navigation on both mobile and desktop devices. I used React, TypeScript, and Tailwind CSS to bring the project to life, aiming to create a beautiful and optimized interface, as well as translating weather information clearly and accessibly for the public.",
      es: "Este es un proyecto de un sitio web de pronóstico del tiempo para ofrecer una experiencia completa y fácil de usar, con información detallada sobre el clima actual y futuro. Presenta íconos personalizados, lo que hace que la visualización sea más intuitiva y atractiva. El diseño moderno y receptivo garantiza una navegación fluida tanto en dispositivos móviles como en computadoras de escritorio. Utilicé React, TypeScript y Tailwind CSS para dar vida al proyecto, com el objetivo de crear una interfaz hermosa y optimizada, además de traducir la información meteorológica de manera clara y accesible para el público."
    },
    githubLink: "https://github.com/uPedroLima11/Previsao-do-Tempo",
    liveDemoLink: "https://pedro-previsao-do-tempo.vercel.app",
  },

   {
    nome: "Tradutor de Memoria",
    imagem: "/tradutormemoria.png",
    descricao: {
    pt: "O Tradutor de Memória é uma aplicação educacional interativa que simula como diferentes tipos de dados são armazenados na memória do computador. Desenvolvido em React com Vite, o projeto permite visualizar em tempo real como variáveis dos tipos int, char e float são representadas em binário usando 16 bits. Os usuários podem clicar nos bits para alternar entre 0 e 1 e observar instantaneamente como as mudanças afetam o valor da variável selecionada. Para o tipo float, implementei um sistema personalizado de ponto flutuante onde os primeiros 4 bits representam o expoente e os 12 bits restantes a mantissa. Esta ferramenta é ideal para estudantes de ciência da computação entenderem conceitos fundamentais de representação de dados na memória.",
    en: "The Memory Translator is an interactive educational application that simulates how different data types are stored in computer memory. Developed in React with Vite, the project allows real-time visualization of how int, char, and float variables are represented in binary using 16 bits. Users can click on bits to toggle between 0 and 1 and instantly observe how changes affect the value of the selected variable. For the float type, I implemented a custom floating-point system where the first 4 bits represent the exponent and the remaining 12 bits the mantissa. This tool is ideal for computer science students to understand fundamental concepts of data representation in memory.",
    es: "El Traductor de Memoria es una aplicación educativa interactiva que simula cómo diferentes tipos de datos se almacenan en la memoria del computador. Desarrollado en React con Vite, el proyecto permite visualizar en tiempo real cómo las variables de tipo int, char y float se representan en binario usando 16 bits. Los usuarios pueden hacer clic en los bits para alternar entre 0 y 1 y observar instantáneamente cómo los cambios afectan el valor de la variable seleccionada. Para el tipo float, implementé un sistema personalizado de punto flotante donde los primeros 4 bits representan el exponente y los 12 bits restantes la mantisa. Esta herramienta es ideal para estudiantes de ciencias de la computación para entender conceptos fundamentales de representación de datos en la memoria."
  },
    githubLink: "https://github.com/uPedroLima11/StockControl---Frontend",
    liveDemoLink: "",
    figmaLink: "" 
  },
];