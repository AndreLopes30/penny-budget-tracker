# 💰 Penny — Budget Tracker

![Python](https://img.shields.io/badge/Python-3670A0?style=flat&logo=python&logoColor=ffdd54)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=flat&logo=fastapi)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23316192.svg?style=flat&logo=postgresql&logoColor=white)
![React](https://img.shields.io/badge/React-19.x-61dafb?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat&logo=typescript)

> [Português](#) | [English version below](#-penny--budget-tracker--english)

Aplicação Full-Stack de controle financeiro pessoal — backend em FastAPI, PostgreSQL, frontend React com TypeScript.

**[🟢 Demo — Render](https://penny-budget-tracker.onrender.com)**  
**[🟢 Demo — Vercel](https://penny-budget-tracker.vercel.app)**

---

## 📖 Sobre o projeto

O Penny é uma aplicação Full-Stack de controle financeiro pessoal desenvolvida para consolidar experiência prática com arquitetura de APIs REST, banco de dados relacional e deploy em nuvem.

O projeto passou por duas fases de infraestrutura:

**Fase 1 — AWS (educacional, desativada):** o ambiente foi provisionado manualmente na AWS com EC2, RDS (PostgreSQL), S3, CloudFront, ACM, IAM e Security Groups — com o objetivo de aprender como funciona uma infraestrutura de produção real. Essa fase foi desativada por questão de custos.

**Fase 2 — Render + Vercel (atual):** backend hospedado no Render, frontend no Vercel. Deploy simples, gratuito e acessível para demonstração.

---

## ✨ Funcionalidades

- Adicionar e excluir receitas e despesas (CRUD via API REST)
- Categorizar transações (Alimentação, Transporte, Lazer, etc.)
- Visualizar saldo atual em tempo real
- Histórico completo de movimentações
- Interface responsiva para mobile e desktop
- Formatação automática em Real (R$)
- Documentação interativa via Swagger/OpenAPI (`/docs`)

---

## 🛠️ Stack tecnológica

| Camada | Tecnologias |
|--------|------------|
| **Backend** | Python, FastAPI, SQLAlchemy, Pydantic, Uvicorn |
| **Banco de dados** | PostgreSQL |
| **Frontend** | React 19, TypeScript, Vite, Axios, CSS Modules |
| **Deploy atual** | Render (backend) + Vercel (frontend) |
| **Versionamento** | Git / GitHub |

---

## ☁️ Infraestrutura AWS (fase educacional — desativada)

Durante o desenvolvimento, o projeto foi hospedado integralmente na AWS para fins de aprendizado. O ambiente foi desativado por questão de custos, mas a experiência de provisionamento manual foi o principal aprendizado de cloud deste projeto.

```
                    ┌─────────────────────────────┐
  Usuário ──HTTPS──▶│  CloudFront (CDN + SSL/ACM) │
                    └────────────┬────────────────┘
                                 │
                    ┌────────────▼────────────────┐
                    │   S3 Bucket (React build)   │
                    └─────────────────────────────┘

  React ──HTTP──▶  Nginx (EC2) ──▶ FastAPI (Uvicorn)
                                        │
                                   ┌────▼────┐
                                   │   RDS   │
                                   │ (PgSQL) │
                                   └─────────┘
```

| Serviço AWS | Uso |
|-------------|-----|
| **EC2 (t2.micro)** | Backend FastAPI + Nginx |
| **RDS (PostgreSQL)** | Banco de dados gerenciado |
| **S3** | Hosting do build React |
| **CloudFront** | CDN global + HTTPS |
| **ACM** | Certificado SSL/TLS |
| **IAM + Security Groups** | Permissões e controle de acesso de rede |

---

## 📁 Estrutura do projeto

```
penny/
├── app/                        # Backend (FastAPI)
│   ├── api/
│   │   ├── endpoints/
│   │   │   └── transactions.py
│   │   └── api.py
│   ├── db/
│   │   ├── base_class.py
│   │   └── db.py
│   ├── models/
│   │   └── transaction.py
│   ├── schemas/
│   │   └── transaction.py
│   └── main.py
│
├── src/                        # Frontend (React + TypeScript)
│   ├── Components/
│   │   ├── Forms.tsx
│   │   ├── Header.tsx
│   │   └── List.tsx
│   ├── App.tsx
│   ├── types.ts
│   └── main.tsx
│
├── requirements.txt
├── package.json
└── vite.config.ts
```

---

## 🚀 Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/transactions/` | Listar todas as transações |
| `POST` | `/transactions/` | Criar nova transação |
| `DELETE` | `/transactions/{id}` | Deletar transação por ID |

> Documentação interativa em `/docs` (Swagger UI) e `/redoc`.

---

## ⚙️ Como rodar localmente

### Backend

```bash
git clone https://github.com/AndreLopes30/penny-budget-tracker.git
cd penny-budget-tracker

python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows

pip install -r requirements.txt
```

Crie o arquivo `.env`:

```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/penny
```

> Para desenvolvimento rápido sem PostgreSQL local, use `sqlite:///./penny.db`.

```bash
uvicorn app.main:app --reload
```

API em: `http://localhost:8000` | Swagger: `http://localhost:8000/docs`

### Frontend

```bash
npm install
npm run dev
```

Frontend em: `http://localhost:5173`

---

## 🔐 Variáveis de ambiente

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `DATABASE_URL` | String de conexão com o banco | `postgresql://user:pass@host:5432/db` |

---

## 🧭 Decisões técnicas

**FastAPI:** performance superior ao Flask para APIs REST, tipagem nativa com Pydantic e geração automática de documentação OpenAPI.

**PostgreSQL:** banco relacional com suporte a queries complexas, constraints e integridade referencial — escolha natural para dados financeiros.

**AWS (fase educacional):** EC2, RDS, S3, CloudFront, ACM, IAM e Security Groups foram provisionados manualmente para simular um ambiente real de produção e aprender como cada camada da infraestrutura funciona. Ambiente desativado por questão de custos.

**Render + Vercel (fase atual):** deploy gratuito e acessível para manter a aplicação disponível para demonstração.

---

## 📌 Próximas melhorias

- Autenticação com JWT (isolamento de dados por usuário)
- Paginação e filtros por categoria e período
- Gráficos de evolução de saldo
- Pipeline CI/CD com GitHub Actions

---

## 👤 Autor

**André Ferreira**
[GitHub](https://github.com/AndreLopes30) · [LinkedIn](https://www.linkedin.com/in/andre-ferreira30)

---

## 📄 Licença

MIT

---

---

# 💰 Penny — Budget Tracker — English

Full-Stack personal finance tracker — FastAPI backend, PostgreSQL, React + TypeScript frontend.

**[🟢 Live — Render](https://penny-budget-tracker.onrender.com)**  
**[🟢 Live — Vercel](https://penny-budget-tracker.vercel.app)**

---

## 📖 About

Penny is a Full-Stack personal finance application built to consolidate hands-on experience with REST API architecture, relational databases, and cloud deployment.

The project went through two infrastructure phases:

**Phase 1 — AWS (educational, deactivated):** the environment was manually provisioned on AWS using EC2, RDS (PostgreSQL), S3, CloudFront, ACM, IAM, and Security Groups — to learn how a real production infrastructure works. Deactivated due to cost.

**Phase 2 — Render + Vercel (current):** backend on Render, frontend on Vercel. Simple, free, and accessible for demonstration.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Backend** | Python, FastAPI, SQLAlchemy, Pydantic, Uvicorn |
| **Database** | PostgreSQL |
| **Frontend** | React 19, TypeScript, Vite, Axios, CSS Modules |
| **Current deploy** | Render (backend) + Vercel (frontend) |

---

## ☁️ AWS Infrastructure (educational phase — deactivated)

| AWS Service | Usage |
|-------------|-------|
| **EC2 (t2.micro)** | FastAPI backend + Nginx |
| **RDS (PostgreSQL)** | Managed relational database |
| **S3** | React build hosting |
| **CloudFront** | Global CDN + HTTPS |
| **ACM** | SSL/TLS certificate |
| **IAM + Security Groups** | Permissions and network access control |

Manually provisioned to simulate a real production environment. Deactivated due to cost — migrated to Render + Vercel for free hosting.

---

## 🚀 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/transactions/` | List all transactions |
| `POST` | `/transactions/` | Create a new transaction |
| `DELETE` | `/transactions/{id}` | Delete a transaction by ID |

---

## ⚙️ Running locally

```bash
git clone https://github.com/AndreLopes30/penny-budget-tracker.git
cd penny-budget-tracker

python -m venv venv
source venv/bin/activate

pip install -r requirements.txt
```

Create a `.env` file:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/penny
```

> For quick local dev, use `sqlite:///./penny.db`.

```bash
uvicorn app.main:app --reload
# API at http://localhost:8000/docs

npm install && npm run dev
# Frontend at http://localhost:5173
```

---

## 👤 Author

**André Ferreira**
[GitHub](https://github.com/AndreLopes30) · [LinkedIn](https://www.linkedin.com/in/andre-ferreira30)

---

## 📄 License

MIT
