<div align="center">

# Foco Já

**"Pequenos passos, grandes conquistas."**

Aplicação web de apoio aos estudos, feita para ajudar estudantes a manterem o foco e acompanharem a própria evolução.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

</div>

---

## Sobre o projeto

O **Foco Já** é um projeto pessoal criado para resolver um problema real: manter a constância nos estudos.

A ideia é oferecer um espaço simples e agradável onde a pessoa possa organizar a rotina de estudo, acompanhar o progresso e celebrar as pequenas conquistas do dia a dia.

### Escopo

O Foco Já é um projeto **full stack**, pensado para cobrir o ciclo completo de uma aplicação web:

- **Front-end** em React, com interface responsiva e navegação entre telas
- **Back-end** em C# com ASP.NET Core, expondo uma API REST
- **Integração com APIs**, tanto a própria API do projeto quanto serviços externos
- **Banco de dados SQL Server** para armazenar os dados da aplicação
- **Autenticação** de usuários com Firebase (usado apenas para login e cadastro)
- **Deploy** em produção, com o projeto acessível online

---

## Tecnologias

| Tecnologia | Para que serve |
| --- | --- |
| [React](https://react.dev/) | Construção da interface com componentes |
| [React Router](https://reactrouter.com/) | Navegação entre páginas e rotas aninhadas |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização com classes utilitárias |
| [Vite](https://vite.dev/) | Ambiente de desenvolvimento e build do front-end |
| [Firebase Authentication](https://firebase.google.com/docs/auth) | Cadastro e login de usuários |
| JavaScript (JSX) | Linguagem do projeto |
| [C#](https://learn.microsoft.com/dotnet/csharp/) e [ASP.NET Core](https://dotnet.microsoft.com/apps/aspnet) | Back-end e API REST |
| API REST | Comunicação entre o front-end e o back-end |
| [SQL Server](https://www.microsoft.com/sql-server) | Banco de dados relacional da aplicação |
| [Vercel](https://vercel.com/) | Deploy da aplicação |

---

## Como instalar e rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- npm (já vem com o Node.js)
- [Git](https://git-scm.com/)
- Uma conta Google para criar o projeto no Firebase

### Passo a passo

**1. Clone o repositório**

```bash
git clone https://github.com/victorflx7/foco-ja.git
cd foco-ja
```

**2. Instale as dependências**

```bash
npm install
```

**3. Configure o Firebase**

1. Acesse o [Console do Firebase](https://console.firebase.google.com/) e crie um projeto.
2. Adicione um app **Web** ao projeto e copie as credenciais fornecidas.
3. No menu **Authentication**, abra a aba **Sign-in method** e ative o provedor **E-mail/senha**.
4. Na raiz do projeto, crie um arquivo `.env` com as suas credenciais. O arquivo `firebase.js` já lê essas variáveis:

```env
VITE_FIREBASE_API_KEY=sua_api_key
VITE_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu_projeto
VITE_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
VITE_FIREBASE_APP_ID=seu_app_id
VITE_FIREBASE_MEASUREMENT_ID=seu_measurement_id
```

> **Importante:** o `.env` já está no `.gitignore`, então suas credenciais não vão para o GitHub. Nunca coloque essas chaves direto no código.

**4. Rode o projeto**

```bash
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`) no navegador.

---

## Estrutura do projeto

```
foco-ja/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── SideMenu.jsx
├── public/              # Logo e ícones SVG
├── src/
│   ├── assets/          # Imagens do projeto
│   ├── pages/           # Telas do app
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Dashboard.jsx
│   ├── App.jsx          # Mapa de rotas da aplicação
│   ├── App.css
│   ├── index.css        # Estilos globais e Tailwind
│   └── main.jsx         # Ponto de entrada
├── firebase.js          # Configuração do Firebase (lê as variáveis do .env)
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

### Rotas

| Rota | Tela | Acesso |
| --- | --- | --- |
| `/` | Home | Público |
| `/login` | Login e cadastro | Público |
| `/dashboard` | Dashboard | Área do usuário |

---

## Como contribuir

Por ser um projeto de estudo, sugestões e feedbacks são muito bem-vindos.

1. Faça um fork do projeto
2. Crie uma branch para a sua alteração (`git checkout -b feat/minha-ideia`)
3. Faça o commit (`git commit -m "feat: descrição da mudança"`)
4. Envie para a sua branch (`git push origin feat/minha-ideia`)
5. Abra um Pull Request

---

## Autor

**Victor**
Estudante de tecnologia, brasileiro, morando em Bragança, Portugal.

- GitHub: [@victorflx7](https://github.com/victorflx7)
