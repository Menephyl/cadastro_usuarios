# 📌 Projeto: Cadastro de Usuários (Node + React)

## 🖥️ Mini aplicação Full Stack
![cadastro](image-7.png)

Repositório unificado que reúne anotações e práticas de **back-end** com [node-notes](https://github.com/Menephyl/node-notes) (Express + Prisma) e **front-end** com [cadastro_usuarios](https://github.com/Menephyl/cadastro_usuarios) (React + Vite).  

O objetivo é demonstrar um **mini CRUD completo** para cadastro e listagem de sócios/clientes.

## SPA List Sócios page
![alt text](image-8.png)

---

# 📖 Descrição

Este projeto mostra como criar uma aplicação de **cadastro de clientes/usuarios** por  meio de uma single page aplication com:

### Front-end
- React + Vite + YARN
- styled-components para estilos  
- axios para chamadas à API interna  
- React Router para navegação SPA  
- React Hooks (`useRef`, `useState`, `useEffect`)  

### Back-end
- Node.js  
- Express  
- Prisma ORM (com MongoDB Atlas)  
- Cors  

---

# 🚀 Tecnologias

### Back-end
- Node.js  
- Express  
- Prisma ORM  
- Cors  
- MongoDB Atlas  

### Front-end
- React  
- Vite  
- styled-components  
- axios  
- react-router-dom  
- prop-types  

---
# Instalaçao do Front End

# Clone o repositório
git clone https://github.com/Menephyl/cadastro_usuarios

# Acesse a pasta
cd cadastro_usuarios

# Instale dependências
npm install

# Inicie o servidor de desenvolvimento
yarn run dev
---
# RESPONSIVIDADE 

![alt text](image-6.png) 

# 🗂 Estrutura de Pastas
````
bash

└── cadastro_usuarios/        # Front-end (React + Vite)
    ├── public/
    ├── src/
    │   ├── assets/           # Imagens e ícones
    │   ├── components/       # Button, TopBackground, etc.
    │   ├── pages/
    │   │   ├── Home/
    │   │   └── ListUsers/
    │   ├── services/         # Cliente axios
    │   ├── styles/           # Styled-components e temas
    │   └── App.jsx
    ├── package.json
    └── vite.config.js
    ```



```
````
# ⚙️ Back-end

### Instalação e configuração
```bash
# Clone o repositório
git clone https://github.com/Menephyl/node-notes

# Acesse a pasta
cd node-notes

# Instale dependências
npm install

---
````
# ⚙️ Configuração do Banco de Dados (MongoDB Atlas)

1. Crie um cluster no **MongoDB Atlas** (ex.: `project-0`).  
2. Em **Network Access**, adicione seu IP público (ou `0.0.0.0/0` em desenvolvimento).  
3. Copie a connection string e configure no arquivo `.env`:

```env
DATABASE_URL="mongodb+srv://<usuário>:<senha>@cluster0.mongodb.net/project-0?retryWrites=true&w=majority"
---
npx prisma migrate dev --name init
npx prisma generate
---


---

````
<img width="991" height="377" alt="image" src="https://github.com/user-attachments/assets/a5bc6f05-56f1-4078-a2bc-c395f15568db" />
