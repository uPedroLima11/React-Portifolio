# Portfólio — Pedro Mendes Lima

Portfólio pessoal desenvolvido com Next.js (App Router), TypeScript e Tailwind CSS, com suporte a português, inglês e espanhol.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- i18next / react-i18next

## Rodando localmente

```bash
npm install
npm run dev
```

A aplicação sobe em [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção |
| `npm run lint` | ESLint |

## Estrutura

```
src/app
├── components      Header, Footer, seletor de idioma e dados dos projetos
├── contatos        Página de contato
├── globals.css     Estilos base e utilitários
├── layout.tsx      Metadados, fontes e shell da aplicação
└── page.tsx        Página inicial
i18n.ts             Traduções (pt, en, es)
```

## Traduções

Todos os textos ficam em `i18n.ts`, organizados por seção (`hero`, `sobre`, `stack`, `projetos`, `contato`, `footer`). Para adicionar um idioma, basta criar um novo objeto seguindo o formato de `pt` e registrá-lo em `idiomas` e em `resources`.

## Projetos

Os cards da seção de projetos são gerados a partir do array `projetos` em `src/app/components/projeto.tsx`. Cada item tem nome, imagem, resumo e descrição nos três idiomas, lista de tecnologias e links para código, deploy e protótipo.

## Contato

- [LinkedIn](https://www.linkedin.com/in/upedrolima/)
- [GitHub](https://github.com/uPedroLima11)
