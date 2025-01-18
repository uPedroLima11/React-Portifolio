import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Olá,": "Hello,",
            "Sou": "I am",
            "Desenvolvedor Front-End": "Front-End Developer",
            "Converse Comigo": "Talk to Me",
            "Sobre Mim": "About Me",
            "Olá!": "Hello!",
            "Meu": "My",
            "Tech Stack": "Tech Stack",
            "Alguns Projetos Desenvolvidos": "Some Developed Projects",
            "Mais Informações": "More Information",
            "Descrição": "Description",
            "Focado em criar interfaces intuitivas": "Focused on creating intuitive",
            "e responsivas. Utilizo React, TypeScript e Tailwind CSS": "and responsive. i use React, TypeScript and Tailwind CSS",
            "para transformar ideias em experiências digitais fluidas.": "to turn ideas into fluid digital experiences.",
            "Sou estudante de Análise e Desenvolvimento de Sistemas no Senac-RS e, desde pequeno, tenho uma paixão por tecnologia. Atualmente, estou focado no desenvolvimento front-end, utilizando minhas habilidades em": "I am a student of Systems Analysis and Development at Senac-RS and, since I was a child, I have had a passion for technology. Currently, I am focused on front-end development, using my skills in",
            "para criar interfaces atraentes e funcionais.": "to create attractive and functional interfaces.",
            "principal objetivo é transformar ideias em experiências digitais memoráveis. Cada projeto representa uma nova oportunidade de aprendizado e crescimento, e estou sempre em busca das últimas inovações do setor. Estou animado para contribuir com soluções que melhorem a vida das pessoas no ambiente digital!": "My main goal is to turn ideas into memorable digital experiences. Each project represents a new opportunity for learning and growth, and I am always looking for the latest innovations in the sector. I am excited to contribute solutions that improve people's lives in the digital environment!",
            "Projetos": "Project",
            "Entre em Contato": "Contact Me"
        }
    },
    es: {
        translation: {
            "Olá,": "Hola,",
            "Sou": "Soy",
            "Desenvolvedor Front-End": "Desarrollador Front-End",
            "Converse Comigo": "Habla Conmigo",
            "Sobre Mim": "Sobre Mí",
            "Olá!": "¡Hola!",
            "Meu": "Mi",
            "Tech Stack": "Tech Stack",
            "Alguns Projetos Desenvolvidos": "Algunos Proyectos Desarrollados",
            "Mais Informações": "Más Información",
            "Descrição": "Descripción",
            "Focado em criar interfaces intuitivas": "Enfocado en crear interfaces intuitivas",
            "e responsivas. Utilizo React, TypeScript e Tailwind CSS": "y responsivas. Utilizo React, TypeScript y Tailwind CSS",
            "para transformar ideias em experiências digitais fluidas.": "para transformar ideas en experiencias digitales fluidas.",
            "Sou estudante de Análise e Desenvolvimento de Sistemas no Senac-RS e, desde pequeno, tenho uma paixão por tecnologia. Atualmente, estou focado no desenvolvimento front-end, utilizando minhas habilidades em": "Soy estudiante de Análisis y Desarrollo de Sistemas en Senac-RS y, desde pequeño, tengo una pasión por la tecnología. Actualmente, estoy enfocado en el desarrollo front-end, utilizando mis habilidades en",
            "para criar interfaces atraentes e funcionais.": "para crear interfaces atractivas y funcionales.",
            "principal objetivo é transformar ideias em experiências digitais memoráveis. Cada projeto representa uma nova oportunidade de aprendizado e crescimento, e estou sempre em busca das últimas inovações do setor. Estou animado para contribuir com soluções que melhorem a vida das pessoas no ambiente digital!": "Mi principal objetivo es transformar ideas en experiencias digitales memorables. Cada proyecto representa una nueva oportunidad de aprendizaje y crecimiento, y siempre estoy en busca de las últimas innovaciones del sector. ¡Estoy emocionado de contribuir con soluciones que mejoren la vida de las personas en el entorno digital!",
            "Projetos": "Proyectos",
            "Entre em Contato": "Contáctame"
        }
    },
    pt: {
        translation: {
            "Olá,": "Olá,",
            "Sou": "Sou",
            "Desenvolvedor Front-End": "Desenvolvedor Front-End",
            "Converse Comigo": "Converse Comigo",
            "Sobre Mim": "Sobre Mim",
            "Olá!": "Olá!",
            "Meu": "Meu",
            "Tech Stack": "Tech Stack",
            "Alguns Projetos Desenvolvidos": "Alguns Projetos Desenvolvidos",
            "Mais Informações": "Mais Informações",
            "Descrição": "Descrição",
            "Focado em criar interfaces intuitivas e responsivas. Utilizo React, TypeScript e Tailwind CSS para transformar ideias em experiências digitais fluidas.": "Focado em criar interfaces intuitivas e responsivas. Utilizo React, TypeScript e Tailwind CSS para transformar ideias em experiências digitais fluidas.",
            "Sou estudante de Análise e Desenvolvimento de Sistemas no Senac-RS e, desde pequeno, tenho uma paixão por tecnologia. Atualmente, estou focado no desenvolvimento front-end, utilizando minhas habilidades em React, TypeScript, JavaScript, Tailwind e Figma para criar interfaces atraentes e funcionais. Meu principal objetivo é transformar ideias em experiências digitais memoráveis. Cada projeto representa uma nova oportunidade de aprendizado e crescimento, e estou sempre em busca das últimas inovações do setor. Estou animado para contribuir com soluções que melhorem a vida das pessoas no ambiente digital!": "Sou estudante de Análise e Desenvolvimento de Sistemas no Senac-RS e, desde pequeno, tenho uma paixão por tecnologia. Atualmente, estou focado no desenvolvimento front-end, utilizando minhas habilidades em React, TypeScript, JavaScript, Tailwind e Figma para criar interfaces atraentes e funcionais. Meu principal objetivo é transformar ideias em experiências digitais memoráveis. Cada projeto representa uma nova oportunidade de aprendizado e crescimento, e estou sempre em busca das últimas inovações do setor. Estou animado para contribuir com soluções que melhorem a vida das pessoas no ambiente digital!"
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