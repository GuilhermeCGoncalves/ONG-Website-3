# Educa BR

Site institucional para ONG Educa BR (trabalho faculdade).

---

## 🧭 Visão Geral

Este projeto é um site estático para uma ONG. Ele serve como plataforma de apresentação institucional, incluindo páginas para:

- **Início (index.html)**  
- **Projetos (projetos.html)**  
- **Cadastro de usuários (cadastro.html)**  

O site ajuda a ONG a divulgar sua missão, projetos e formas de participação, além de permitir que novos apoiadores ou beneficiados façam um cadastro.

---

## ✅ Funcionalidades

- Design responsivo para diferentes tamanhos de tela  
- Menu de navegação simples  
- Formulário de cadastro com validação básica de campos  
- Estrutura organizada com HTML, CSS e JavaScript  
- Páginas separadas para conteúdo institucional e cadastro  

---

## 🛠️ Tecnologias Usadas

- **HTML5** — estrutura semântica das páginas  
- **CSS3** — estilização visual  
- **JavaScript** — lógica de validação do formulário  
- **Git / GitHub** — controle de versão
  
---

## ✅ Validação de Formulário
No arquivo cadastro.html, há um formulário para cadastro de novos usuários. A validação é feita por meio de JavaScript:

Verifica se todos os campos estão preenchidos;

Valida se o e-mail tem formato mínimo (contém @ e .);

Verifica se a senha tem tamanho mínimo (6 caracteres);

Exibe alertas para o usuário em caso de erro.

## 📁 Estrutura do Projeto

ONG-Website-3/
├── cadastro.html
├── index.html
├── projetos.html
├── style.css
├── scripts/
│   └── cadastro.js
└── images/

## 🎯 Roadmap
Adicionar autenticação de usuário (login/logout);

Criar painel administrativo para gerenciar projetos;

Inserir backend com banco de dados para persistir cadastros;

Adicionar seção de notícias ou blog para a ONG.
