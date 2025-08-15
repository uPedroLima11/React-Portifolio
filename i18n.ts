import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Olá,": "Hello,",
            "Sou": "I am",
            "Desenvolvedor Front-End": "Fullstack Developer",
            "Converse Comigo": "Talk to Me",
            "Sobre Mim": "About Me",
            "Olá!": "Hello!",
            "Meu": "My",
            "Tech Stack": "Tech Stack",
            "Alguns Projetos Desenvolvidos": "Some Developed Projects",
            "Mais Informações": "More Information",
            "Descrição": "Description",
            "Focado em criar interfaces intuitivas": "Focused on creating intuitive",
            "e responsivas. Utilizo React, TypeScript e Tailwind CSS": "and responsive front-ends. I use React, TypeScript, Tailwind CSS",
            "para transformar ideias em experiências digitais fluidas.": "to turn ideas into smooth digital experiences.",
            "Sou estudante de Análise e Desenvolvimento de Sistemas no Senac-RS e, desde pequeno, tenho uma paixão por tecnologia. Atualmente, estou focado no desenvolvimento front-end, utilizando minhas habilidades em": "I am a Systems Analysis and Development student at Senac-RS and have loved technology since I was a child. Currently, I focus on front-end development using my skills in",
            "para criar interfaces atraentes e funcionais.": "to create attractive and functional interfaces.",
            "principal objetivo é transformar ideias em experiências digitais memoráveis. Cada projeto representa uma nova oportunidade de aprendizado e crescimento, e estou sempre em busca das últimas inovações do setor. Estou animado para contribuir com soluções que melhorem a vida das pessoas no ambiente digital!": "My main goal is to turn ideas into memorable digital experiences. Each project is a new opportunity for learning and growth, and I am always looking for the latest innovations. I am excited to contribute with solutions that improve people's lives digitally!",
            "Projetos": "Projects",
            "Entre em Contato": "Contact Me",
            "Baixar Currículo": "Download Resume",
            "Prototipação": "Prototyping",
            "com grande experiência em Front-End": "with great experience in Front-End",
            "Crio interfaces intuitivas e responsivas utilizando": "I create intuitive and responsive interfaces using",
            "e construo back-ends escaláveis com Fastify e bancos de dados como MySQL e PostgreSQL.": "and build scalable back-ends with Fastify and databases like MySQL and PostgreSQL.",
        }
    },
    es: {
        translation: {
            "Olá,": "Hola,",
            "Sou": "Soy",
            "Desenvolvedor Front-End": "Desarrollador Fullstack",
            "Converse Comigo": "Habla Conmigo",
            "Sobre Mim": "Sobre Mí",
            "Olá!": "¡Hola!",
            "Meu": "Mi",
            "Tech Stack": "Tech Stack",
            "Alguns Projetos Desenvolvidos": "Algunos Proyectos Desarrollados",
            "Mais Informações": "Más Información",
            "Descrição": "Descripción",
            "Focado em criar interfaces intuitivas": "Enfocado en crear interfaces intuitivas",
            "e responsivas. Utilizo React, TypeScript e Tailwind CSS": "y responsivas en front-end. Uso React, TypeScript y Tailwind CSS",
            "para transformar ideias em experiências digitais fluidas.": "para convertir ideas en experiencias digitales fluidas.",
            "Sou estudante de Análise e Desenvolvimento de Sistemas no Senac-RS e, desde pequeno, tenho uma paixão por tecnologia. Atualmente, estou focado no desenvolvimento front-end, utilizando minhas habilidades em": "Soy estudiante de Análisis y Desarrollo de Sistemas en Senac-RS y desde pequeño me apasiona la tecnología. Actualmente me enfoco en desarrollo front-end usando mis habilidades en",
            "para criar interfaces atraentes e funcionais.": "para crear interfaces atractivas y funcionales.",
            "principal objetivo é transformar ideias em experiências digitais memoráveis. Cada projeto representa uma nova oportunidade de aprendizado e crescimento, e estou sempre em busca das últimas inovações do setor. Estou animado para contribuir com soluções que melhorem a vida das pessoas no ambiente digital!": "Mi objetivo principal es convertir ideas en experiencias digitales memorables. Cada proyecto representa una nueva oportunidad de aprendizaje y crecimiento, y siempre busco las últimas innovaciones. Estoy emocionado de contribuir con soluciones que mejoren la vida de las personas digitalmente!",
            "Projetos": "Proyectos",
            "Entre em Contato": "Contáctame",
            "Baixar Currículo": "Descargar Currículum",
            "Prototipação": "Prototipación",
            "com grande experiência em Front-End": "con gran experiencia en Front-End",
            "Crio interfaces intuitivas e responsivas utilizando": "Creo interfaces intuitivas y responsivas utilizando",
            "e construo back-ends escaláveis com Fastify e bancos de dados como MySQL e PostgreSQL.": "y construyo back-ends escalables con Fastify y bases de datos como MySQL y PostgreSQL.",
            
        }
    },
    pt: {
        translation: {
            "Olá,": "Olá,",
            "Sou": "Sou",
            "Desenvolvedor Front-End": "Fullstack Developer",
            "Converse Comigo": "Converse Comigo",
            "Sobre Mim": "Sobre Mim",
            "Olá!": "Olá!",
            "Meu": "Meu",
            "Tech Stack": "Tech Stack",
            "Alguns Projetos Desenvolvidos": "Alguns Projetos Desenvolvidos",
            "Mais Informações": "Mais Informações",
            "Descrição": "Descrição",
            "Focado em criar interfaces intuitivas e responsivas. Utilizo React, TypeScript e Tailwind CSS para transformar ideias em experiências digitais fluidas.": "Focado em criar interfaces intuitivas e responsivas. Utilizo React, TypeScript e Tailwind CSS para transformar ideias em experiências digitais fluidas.",
            "Sou estudante de Análise e Desenvolvimento de Sistemas no Senac-RS e, desde pequeno, tenho uma paixão por tecnologia. Atualmente, estou focado no desenvolvimento front-end, utilizando minhas habilidades em React, TypeScript, JavaScript, Tailwind e Figma para criar interfaces atraentes e funcionais. Meu principal objetivo é transformar ideias em experiências digitais memoráveis. Cada projeto representa uma nova oportunidade de aprendizado e crescimento, e estou sempre em busca das últimas inovações do setor. Estou animado para contribuir com soluções que melhorem a vida das pessoas no ambiente digital!": "Sou estudante de Análise e Desenvolvimento de Sistemas no Senac-RS e, desde pequeno, tenho uma paixão por tecnologia. Atualmente, atuo como fullstack, com grande experiência em front-end, utilizando React, Next.js, TypeScript, Tailwind e Figma para criar interfaces atraentes e funcionais. Meu principal objetivo é transformar ideias em experiências digitais memoráveis. Cada projeto representa uma nova oportunidade de aprendizado e crescimento, e estou sempre em busca das últimas inovações do setor. Estou animado para contribuir com soluções que melhorem a vida das pessoas no ambiente digital!",
            "Prototipação": "Prototipação",
            "com grande experiência em Front-End": "com grande experiência em Front-End",
            "Crio interfaces intuitivas e responsivas utilizando": "Crio interfaces intuitivas e responsivas utilizando",
            "e construo back-ends escaláveis com Fastify e bancos de dados como MySQL e PostgreSQL.": "e construo back-ends escaláveis com Fastify e bancos de dados como MySQL e PostgreSQL.",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'pt',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
