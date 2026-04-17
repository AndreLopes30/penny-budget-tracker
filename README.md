# 💰 Penny - Budget Tracker

**[🟢 Acessar Aplicação Online](https://d2a8265yk391np.cloudfront.net/)**

> "Cada centavo conta" - Um rastreador de finanças pessoais simples e intuitivo.

![React](https://img.shields.io/badge/React-19.2.4-61dafb?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646cff?style=flat&logo=vite)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=flat&logo=fastapi)
![Python](https://img.shields.io/badge/Python-3670A0?style=flat&logo=python&logoColor=ffdd54)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat&logo=amazon-aws&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23316192.svg?style=flat&logo=postgresql&logoColor=white)

## 📖 Sobre o Projeto

O **Penny** é meu primeiro projeto desenvolvido com React, evoluído para uma aplicação Full-Stack com infraestrutura em nuvem.

Um rastreador de orçamento pessoal que permite controlar receitas e despesas de forma visual e prática, com os dados sendo salvos em um banco de dados via API.

## ✨ Funcionalidades

- Adicionar e Excluir receitas e despesas (CRUD via API)
- Visualizar saldo atual em tempo real
- Categorizar transações (Alimentação, Transporte, Lazer, etc.)
- Acompanhar histórico completo de transações
- Interface responsiva para mobile e desktop
- Formatação automática em Real (R$)

## 🛠️ Tecnologias

- **React** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **CSS Modules** - Estilização com escopo local
- **Vite** - Build tool
- **FastAPI (Python)** - Backend (API REST)
- **PostgreSQL** - Banco de dados relacional
- **Axios** - Consumo de API

## ☁️ Infraestrutura AWS

| Serviço | Uso |
|---------|-----|
| **EC2 (t2.micro)** | Hospedagem do backend FastAPI |
| **RDS (PostgreSQL)** | Banco de dados gerenciado |
| **S3** | Armazenamento do build React |
| **CloudFront** | CDN + HTTPS para o frontend |

## 🚀 Como Rodar Localmente

### Backend (API)
```bash
# Navegue até a pasta da API
cd penny-api

# Instale as dependências
pip install -r requirements.txt

# Rode o servidor
uvicorn app.main:app --reload
A API rodará em: http://localhost:8000
```
Frontend (React)
```bash
git clone https://github.com/AndreLopes30/penny-budget-tracker.git
cd penny-budget-tracker
npm install
npm run dev
Acesse: http://localhost:5173
```

📂 Estrutura (Frontend)
```bash
src/
├── Components/
│   ├── Header.tsx
│   ├── Forms.tsx
│   └── List.tsx
├── types.ts
├── App.tsx
└── main.tsx
```

👤 Autor

**André Ferreira**

- [GitHub](https://github.com/AndreLopes30)
- [LinkedIn](https://www.linkedin.com/in/andre-ferreira30)

## 📄 Licença

MIT
