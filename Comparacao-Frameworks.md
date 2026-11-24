# Comparação entre React, Vue, Angular e Next.js

Comparação da **atividade da Aula 03 (Projetos com Frameworks Front-end)**, feita a partir dos quatro projetos que desenvolvi sobre o mesmo tema: uma página que apresenta os **recursos de cada tecnologia**, com filtro por categoria e cards que mostram detalhes e um exemplo de código.

| Projeto | Repositório | Aplicação online |
|---------|-------------|------------------|
| 01 · React | [React](https://github.com/liviaghirardi/React) | https://react-landing-senai.vercel.app |
| 02 · Vue.js | [Vue](https://github.com/liviaghirardi/Vue) | https://vue-gold-alpha.vercel.app |
| 03 · Angular | [Angular](https://github.com/liviaghirardi/Angular) | https://angular-snowy-three.vercel.app |
| 04 · Next.js | [meu-next](https://github.com/liviaghirardi/meu-next) | https://meu-next-livia.vercel.app |
| 05 · Cópia de repositório | [react-tailwind-food-app](https://github.com/liviaghirardi/react-tailwind-food-app) | [Ver deploy](https://react-tailwind-food-app-fmee-el5i6regn.vercel.app/) |

---

## Visão geral

| | React | Vue.js | Angular | Next.js |
|---|---|---|---|---|
| **O que é** | Biblioteca de interface | Framework progressivo | Framework completo | Framework sobre o React |
| **Versão usada** | React 19 | Vue 3.5 | Angular 22 | Next 16 (React 19) |
| **Linguagem** | JavaScript + JSX | JavaScript | TypeScript (obrigatório) | JavaScript + JSX |
| **Como criar o projeto** | `npm create vite@latest` | `npm create vue@latest` | `ng new` (Angular CLI) | `npx create-next-app@latest` |
| **Ferramenta de build** | Vite | Vite | Angular CLI (esbuild) | Next.js (Turbopack) |
| **Onde roda** | Navegador | Navegador | Navegador | Servidor + navegador |

## Como cada um resolveu as mesmas tarefas

| Tarefa no projeto | React | Vue.js | Angular | Next.js |
|---|---|---|---|---|
| **Criar um componente** | Função que retorna JSX | Arquivo `.vue` com `<template>`, `<script setup>` e `<style>` | Classe com `@Component` + arquivos `.html`, `.css` e `.ts` separados | Função que retorna JSX (igual ao React) |
| **Guardar o filtro (estado)** | `useState` | `ref` | `signal` | `useState` em componente `'use client'` |
| **Lista filtrada** | Variável calculada a cada renderização | `computed` | `computed` | Variável calculada a cada renderização |
| **Pai → filho** | props | `defineProps` | `input()` | props |
| **Filho → pai** | Função passada por props (`onAlternar`) | `defineEmits` | `output()` | Função passada por props |
| **Repetir a lista** | `.map()` com `key` | `v-for` com `:key` | `@for` com `track` | `.map()` com `key` |
| **Mostrar/esconder** | `&&` e ternário | `v-if` | `@if` | `&&` e ternário |
| **Clique** | `onClick={...}` | `@click="..."` | `(click)="..."` | `onClick={...}` |
| **Estilos** | CSS global | `<style scoped>` por componente | CSS isolado por componente | CSS Modules (`.module.css`) |
| **Páginas e rotas** | Não usei (precisaria do React Router) | Não usei (precisaria do Vue Router) | Router já incluído no projeto | Rotas por pastas, incluindo rota dinâmica `/recursos/[slug]` |

## Números dos projetos

| | React | Vue.js | Angular | Next.js |
|---|---|---|---|---|
| Arquivos em `src` | 11 | 10 | 27 | 18 |
| Linhas de código em `src` | 570 | 553 | 609 | 655 |
| JavaScript enviado ao navegador (gzip) | 62 kB | 27 kB | 61 kB | — (páginas geradas no build) |

O Angular tem bem mais arquivos porque cada componente é dividido em `.ts`, `.html` e `.css`, além dos arquivos de teste. O Vue gerou o menor pacote para o navegador.

---

## Principais diferenças que senti no desenvolvimento

**React** foi o mais direto para começar: tudo é JavaScript, e o componente é só uma função. Em compensação, ele entrega pouca coisa pronta. Para ter rotas, por exemplo, seria preciso instalar outra biblioteca. Como a lista filtrada é recalculada a cada renderização, eu precisei entender quando o componente renderiza de novo.

**Vue.js** foi o que deixou o código mais organizado e legível. O arquivo `.vue` junta HTML, lógica e CSS, e o `scoped` evita que o estilo de um componente afete outro. As diretivas (`v-for`, `v-if`, `@click`) ficam parecidas com HTML comum, e o `computed` deixou claro o que depende do filtro.

**Angular** foi o mais trabalhoso e o mais estruturado. Ele exige TypeScript, decorators e um arquivo para cada parte do componente, e o CLI cria tudo isso automaticamente. Precisei corrigir um erro de build em que o nome da classe no `app.ts` não batia com o importado no `main.ts`: o TypeScript apontou o problema na hora. Os signals (`signal`, `computed`) e a nova sintaxe `@for`/`@if` tornaram o template mais simples que nas versões antigas.

**Next.js** usa o React, então os componentes são escritos do mesmo jeito, mas ele resolve o que falta no React: as rotas são criadas pelas pastas, e as páginas de detalhe são geradas no build (`generateStaticParams`). Foi preciso aprender a diferença entre componentes de servidor e de cliente: o filtro precisou do `'use client'`.

## Quando escolher cada um

| Situação | Melhor escolha |
|---|---|
| Interface interativa pequena ou média, com liberdade para escolher bibliotecas | **React** |
| Projeto que precisa ser fácil de aprender e de manter, ou adotado aos poucos | **Vue.js** |
| Sistema grande, com equipe grande e necessidade de padrão rígido e TypeScript | **Angular** |
| Site com várias páginas, que precisa de SEO e carregamento rápido | **Next.js** |
