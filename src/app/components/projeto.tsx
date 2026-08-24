export type Idioma = "pt" | "en" | "es";

export type Texto = Record<Idioma, string>;

export interface Projeto {
  nome: string;
  imagem: string;
  resumo: Texto;
  descricao: Texto;
  tecnologias: string[];
  githubLink: string;
  liveDemoLink?: string;
  figmaLink?: string;
  destaque?: boolean;
}

export const projetos: Projeto[] = [
  {
    nome: "StockControl",
    imagem: "/stock2.png",
    destaque: true,
    resumo: {
      pt: "Sistema web multitenant de gestão de estoque, desenvolvido em dupla como TCC.",
      en: "Multitenant inventory management web system, built as a two-person final degree project.",
      es: "Sistema web multitenant de gestión de inventario, desarrollado en dupla como TCC.",
    },
    descricao: {
      pt: "O StockControl é um sistema web multitenant desenvolvido em dupla durante o meu TCC para gestão de estoque de produtos em empresas. Ele permite que os usuários gerenciem itens, realizem baixas e acompanhem todas as informações através de uma dashboard intuitiva e moderna. O front-end foi construído com React, Next.js e Tailwind CSS, enquanto o back-end utiliza Fastify para desempenho e escalabilidade. O projeto foi desafiador e enriquecedor, contando com feedback de professores para aprimorar cada detalhe.",
      en: "StockControl is a multitenant web system developed as a duo project during our TCC for managing product inventory in companies. It allows users to manage items, record stock reductions, and access all information through an intuitive and modern dashboard. The front-end was built with React, Next.js, and Tailwind CSS, while the back-end uses Fastify for performance and scalability. The project was challenging and enriching, benefiting from professors' feedback to refine every detail.",
      es: "StockControl es un sistema web multitenant desarrollado en dupla durante nuestro TCC para la gestión de inventario de productos en empresas. Permite a los usuarios administrar artículos, registrar disminuciones de stock y acceder a toda la información a través de un panel intuitivo y moderno. El front-end se construyó con React, Next.js y Tailwind CSS, mientras que el back-end utiliza Fastify para garantizar rendimiento y escalabilidad. El proyecto fue desafiante y enriquecedor, contando con la retroalimentación de los profesores para perfeccionar cada detalle.",
    },
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Fastify"],
    githubLink: "https://github.com/uPedroLima11/StockControl---Frontend",
    liveDemoLink: "https://stockcontrol-six.vercel.app",
    figmaLink:
      "https://www.figma.com/design/K0KzZU3f6R2OBYCeu1kqIp/StockControl?node-id=0-1&t=hXdvxeHPK1mwWVZv-1",
  },

  {
    nome: "Verbalize",
    imagem: "/verbalize.png",
    resumo: {
      pt: "Chat bidirecional onde você ensina o seu idioma enquanto aprende o do outro.",
      en: "Two-way chat where you teach your language while learning someone else's.",
      es: "Chat bidireccional donde enseñas tu idioma mientras aprendes el del otro.",
    },
    descricao: {
      pt: "Este é o Verbalize, um projeto desenvolvido em grupo com o intuito de ser uma plataforma de chat bidirecional onde você ensina a sua linguagem enquanto aprende a do outro. As tecnologias que usei no front-end foram React com Next.js, TypeScript e Tailwind CSS. No back-end, optei por MySQL junto com Prisma.",
      en: "This is Verbalize, a group project built as a bidirectional chat platform where you teach your language while learning someone else's. On the front-end I used React with Next.js, TypeScript and Tailwind CSS. On the back-end, I chose MySQL together with Prisma.",
      es: "Este es Verbalize, un proyecto grupal desarrollado como una plataforma de chat bidireccional donde enseñas tu idioma mientras aprendes el del otro. En el front-end usé React con Next.js, TypeScript y Tailwind CSS. En el back-end opté por MySQL junto con Prisma.",
    },
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL", "Prisma"],
    githubLink: "https://github.com/uPedroLima11/Next_Verbalise_Frontend",
    liveDemoLink: "https://verbalize-senac.vercel.app",
    figmaLink:
      "https://www.figma.com/design/WLSzp1o00xLrcfVHQfCqYJ/Verbalize-Projeto-Integrador?node-id=0-1&t=gAPgOhjzVjV009iu-1",
  },

  {
    nome: "Relato Cidadão",
    imagem: "/relatocidadao.png",
    resumo: {
      pt: "Plataforma social que conecta cidadãos e prefeituras na resolução de problemas urbanos.",
      en: "Social platform connecting citizens and city halls to solve urban problems.",
      es: "Plataforma social que conecta a ciudadanos y ayuntamientos para resolver problemas urbanos.",
    },
    descricao: {
      pt: "O Relato Cidadão é uma plataforma social que conecta cidadãos e prefeituras na resolução de problemas urbanos, como buracos em vias públicas. Usuários registram relatos com fotos e localização, enquanto as prefeituras acessam o feed para identificar e priorizar reparos. A aplicação foi desenvolvida com React + Next.js, TypeScript e Tailwind CSS no front-end, proporcionando uma interface moderna e responsiva. No back-end, utilizei PostgreSQL e Prisma para garantir escalabilidade e performance. Além disso, integrei a API do IBGE para buscar estados e cidades, e a API da Cloudinary para upload de imagens, oferecendo uma experiência eficiente.",
      en: "Relato Cidadão is a social platform that connects citizens and city halls in solving urban problems, such as potholes on public roads. Users report incidents with photos and location, while city halls access the feed to identify and prioritize repairs. The application was developed with React + Next.js, TypeScript, and Tailwind CSS on the front-end, providing a modern and responsive interface. On the back-end, I used PostgreSQL and Prisma to ensure scalability and performance. In addition, I integrated the IBGE API to fetch states and cities, and the Cloudinary API for image upload, offering an efficient experience.",
      es: "Relato Cidadão es una plataforma social que conecta a ciudadanos y ayuntamientos en la resolución de problemas urbanos, como baches en vías públicas. Los usuarios informan incidentes con fotos y ubicación, mientras que los ayuntamientos acceden al feed para identificar y priorizar reparaciones. La aplicación se desarrolló con React + Next.js, TypeScript y Tailwind CSS en el front-end, proporcionando una interfaz moderna y receptiva. En el back-end, utilicé PostgreSQL y Prisma para garantizar escalabilidad y rendimiento. Además, integré la API del IBGE para buscar estados y ciudades, y la API de Cloudinary para la carga de imágenes, ofreciendo una experiencia eficiente.",
    },
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Cloudinary"],
    githubLink: "https://github.com/uPedroLima11/RelatoCidadao",
    liveDemoLink: "https://relato-cidadao.vercel.app",
  },

  {
    nome: "Previsão do Tempo",
    imagem: "/previsaotempo1.png",
    resumo: {
      pt: "App de clima com previsão detalhada, ícones próprios e layout responsivo.",
      en: "Weather app with detailed forecasts, custom icons and a responsive layout.",
      es: "App del clima con pronóstico detallado, íconos propios y diseño responsivo.",
    },
    descricao: {
      pt: "Este é um projeto de um site de previsão do tempo para oferecer uma experiência completa e fácil de usar, com informações detalhadas sobre o clima atual e futuro. Ele traz ícones personalizados, tornando a visualização mais intuitiva e envolvente. O design, moderno e responsivo, garante uma navegação tranquila tanto em dispositivos móveis quanto em desktops. Utilizei React, TypeScript e Tailwind CSS para dar vida ao projeto, com o objetivo de criar uma interface bonita e otimizada, além de traduzir as informações de clima de forma clara e acessível para o público.",
      en: "This is a weather forecast website project to offer a complete and easy-to-use experience, with detailed information about current and future weather. It features custom icons, making the visualization more intuitive and engaging. The modern and responsive design ensures smooth navigation on both mobile and desktop devices. I used React, TypeScript, and Tailwind CSS to bring the project to life, aiming to create a beautiful and optimized interface, as well as translating weather information clearly and accessibly for the public.",
      es: "Este es un proyecto de un sitio web de pronóstico del tiempo para ofrecer una experiencia completa y fácil de usar, con información detallada sobre el clima actual y futuro. Presenta íconos personalizados, lo que hace que la visualización sea más intuitiva y atractiva. El diseño moderno y responsivo garantiza una navegación fluida tanto en dispositivos móviles como en computadoras de escritorio. Utilicé React, TypeScript y Tailwind CSS para dar vida al proyecto, con el objetivo de crear una interfaz hermosa y optimizada, además de traducir la información meteorológica de manera clara y accesible para el público.",
    },
    tecnologias: ["React", "TypeScript", "Tailwind CSS", "API REST"],
    githubLink: "https://github.com/uPedroLima11/Previsao-do-Tempo",
    liveDemoLink: "https://pedro-previsao-do-tempo.vercel.app",
  },

  {
    nome: "Tradutor de Memória",
    imagem: "/tradutormemoria.png",
    resumo: {
      pt: "Simulador interativo de como int, char e float são armazenados em 16 bits.",
      en: "Interactive simulator of how int, char and float are stored in 16 bits.",
      es: "Simulador interactivo de cómo int, char y float se almacenan en 16 bits.",
    },
    descricao: {
      pt: "O Tradutor de Memória é uma aplicação educacional interativa que simula como diferentes tipos de dados são armazenados na memória do computador. Desenvolvido em React com Vite, o projeto permite visualizar em tempo real como variáveis dos tipos int, char e float são representadas em binário usando 16 bits. Os usuários podem clicar nos bits para alternar entre 0 e 1 e observar instantaneamente como as mudanças afetam o valor da variável selecionada. Para o tipo float, implementei um sistema personalizado de ponto flutuante onde os primeiros 4 bits representam o expoente e os 12 bits restantes a mantissa. Esta ferramenta é ideal para estudantes de ciência da computação entenderem conceitos fundamentais de representação de dados na memória.",
      en: "The Memory Translator is an interactive educational application that simulates how different data types are stored in computer memory. Developed in React with Vite, the project allows real-time visualization of how int, char, and float variables are represented in binary using 16 bits. Users can click on bits to toggle between 0 and 1 and instantly observe how changes affect the value of the selected variable. For the float type, I implemented a custom floating-point system where the first 4 bits represent the exponent and the remaining 12 bits the mantissa. This tool is ideal for computer science students to understand fundamental concepts of data representation in memory.",
      es: "El Traductor de Memoria es una aplicación educativa interactiva que simula cómo diferentes tipos de datos se almacenan en la memoria del computador. Desarrollado en React con Vite, el proyecto permite visualizar en tiempo real cómo las variables de tipo int, char y float se representan en binario usando 16 bits. Los usuarios pueden hacer clic en los bits para alternar entre 0 y 1 y observar instantáneamente cómo los cambios afectan el valor de la variable seleccionada. Para el tipo float, implementé un sistema personalizado de punto flotante donde los primeros 4 bits representan el exponente y los 12 bits restantes la mantisa. Esta herramienta es ideal para estudiantes de ciencias de la computación para entender conceptos fundamentales de representación de datos en la memoria.",
    },
    tecnologias: ["React", "Vite", "JavaScript"],
    githubLink: "https://github.com/uPedroLima11/Seletor-de-Memoria",
  },
];

export function obterTexto(texto: Texto, idioma: string): string {
  if (idioma.startsWith("en")) return texto.en;
  if (idioma.startsWith("es")) return texto.es;
  return texto.pt;
}
