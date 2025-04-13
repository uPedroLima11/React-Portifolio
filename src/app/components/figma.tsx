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
    nome: "StockControl",
    imagem: "/stockcontrol.png",
    descricao: {
      pt: "Sistema de Gestão de Produtos com Licença é uma aplicação web em desenvolvimento como parte do meu TCC. Voltada para o controle de produtos, a plataforma permite cadastro, edição e visualização com gráficos, filtros e relatórios. Um dos diferenciais é a ativação por chave de licença. As prototipações foram feitas no Figma e o sistema está sendo desenvolvido com Next.js, TypeScript e Tailwind CSS, com foco em responsividade, usabilidade e experiência moderna.",
      en: "Product Management System with License is a web application in development as part of my TCC. Focused on product control, the platform allows registration, editing, and visualization with graphs, filters, and reports. One of the differentiators is activation by license key. The prototypes were made in Figma and the system is being developed with Next.js, TypeScript, and Tailwind CSS, focusing on responsiveness, usability, and modern experience.",
      es: "Sistema de Gestión de Productos con Licencia es una aplicación web en desarrollo como parte de mi TCC. Enfocado en el control de productos, la plataforma permite el registro, edición y visualización con gráficos, filtros e informes. Uno de los diferenciadores es la activación por clave de licencia. Los prototipos fueron hechos en Figma y el sistema se está desarrollando con Next.js, TypeScript y Tailwind CSS, centrándose en la capacidad de respuesta, usabilidad y experiencia moderna."
    },
    prototipacaoLink: "https://www.figma.com/design/K0KzZU3f6R2OBYCeu1kqIp/StockControl?node-id=0-1&t=hXdvxeHPK1mwWVZv-1",
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