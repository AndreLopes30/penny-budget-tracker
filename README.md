# 💰 Penny — Budget Tracker

![Python](https://img.shields.io/badge/Python-3670A0?style=flat&logo=python&logoColor=ffdd54)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=flat&logo=fastapi)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23316192.svg?style=flat&logo=postgresql&logoColor=white)
![React](https://img.shields.io/badge/React-19.x-61dafb?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat&logo=typescript)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat&logo=amazon-aws&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)

Aplicação Full-Stack de controle financeiro pessoal com infraestrutura real na AWS — backend em FastAPI, banco gerenciado em RDS, frontend em S3 com CDN via CloudFront.

**[🟢 Acessar aplicação online](https://d2a8265yk391np.cloudfront.net/)**

---

## 📌 Sobre o projeto

O Penny nasceu para praticar arquitetura Full-Stack em ambiente próximo ao de produção. O backend expõe uma API REST com FastAPI e persiste os dados em PostgreSQL gerenciado pelo Amazon RDS. O frontend React consome a API via Axios, é hospedado em S3 e distribuído globalmente com CloudFront e HTTPS via ACM.

A infraestrutura foi provisionada e configurada manualmente via SSH, IAM e Security Groups — sem serviços gerenciados de deploy — para consolidar experiência real com AWS.

---

## ✨ Funcionalidades

- Adicionar e excluir receitas e despesas (CRUD via API REST)
- Categorizar transações (Alimentação, Transporte, Lazer, etc.)
- Visualizar saldo atual em tempo real
- Histórico completo de movimentações
- Interface responsiva para mobile e desktop
- Formatação automática em Real (R$)
- Documentação interativa da API via Swagger/OpenAPI (`/docs`)

---

## 🛠️ Stack tecnológica

| Camada | Tecnologias |
|--------|------------|
| **Backend** | Python, FastAPI, SQLAlchemy, Pydantic, Uvicorn |
| **Banco de dados** | PostgreSQL (Amazon RDS) |
| **Frontend** | React 19, TypeScript, Vite, Axios, CSS Modules |
| **Infra / Cloud** | AWS EC2, RDS, S3, CloudFront, ACM, IAM, Security Groups |
| **Servidor** | Nginx (proxy reverso) |
| **Versionamento** | Git / GitHub |

---

## ☁️ Infraestrutura AWS

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
| **EC2 (t2.micro)** | Hospedagem do backend FastAPI + Nginx |
| **RDS (PostgreSQL)** | Banco de dados relacional gerenciado |
| **S3** | Armazenamento e serving do build React |
| **CloudFront** | CDN global + HTTPS |
| **ACM** | Certificado SSL/TLS |
| **IAM + Security Groups** | Gerenciamento de permissões e acesso de rede |

---

## 📁 Estrutura do projeto

```
penny/
├── app/                        # Backend (FastAPI)
│   ├── api/
│   │   ├── endpoints/
│   │   │   └── transactions.py # Rotas de transações
│   │   └── api.py              # Registro de routers
│   ├── db/
│   │   ├── base_class.py       # Base declarativa SQLAlchemy
│   │   └── db.py               # Sessão e engine do banco
│   ├── models/
│   │   └── transaction.py      # Modelo ORM de transação
│   ├── schemas/
│   │   └── transaction.py      # Schemas Pydantic (request/response)
│   └── main.py                 # Entry point FastAPI + CORS
│
├── src/                        # Frontend (React + TypeScript)
│   ├── Components/
│   │   ├── Forms.tsx           # Formulário de nova transação
│   │   ├── Header.tsx          # Cabeçalho com saldo
│   │   └── List.tsx            # Lista de transações
│   ├── App.tsx
│   ├── types.ts                # Tipagem TypeScript
│   └── main.tsx
│
├── requirements.txt            # Dependências Python
├── package.json                # Dependências Node
└── vite.config.ts
```

---

## 🚀 Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/transactions/` | Listar todas as transações |
| `POST` | `/transactions/` | Criar nova transação |
| `DELETE` | `/transactions/{id}` | Deletar transação por ID |

> Documentação interativa disponível em `/docs` (Swagger UI) e `/redoc`.

---

## ⚙️ Como rodar localmente

### Pré-requisitos

- Python 3.10+
- Node.js 18+
- PostgreSQL rodando localmente (ou ajustar `DATABASE_URL` para SQLite)

### Backend

```bash
# Clone o repositório
git clone https://github.com/AndreLopes30/penny-budget-tracker.git
cd penny-budget-tracker

# Crie e ative o ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows

# Instale as dependências
pip install -r requirements.txt
```

Crie o arquivo `.env` na raiz com:

```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/penny
```

> Para desenvolvimento rápido, substitua por `sqlite:///./penny.db` sem precisar de PostgreSQL local.

Inicie o backend:

```bash
uvicorn app.main:app --reload
```

API disponível em: `http://localhost:8000`
Swagger em: `http://localhost:8000/docs`

---

### Frontend

```bash
npm install
npm run dev
```

Frontend disponível em: `http://localhost:5173`

> Por padrão o frontend aponta para a API em produção (EC2). Para apontar para o backend local, edite a variável de base URL no `App.tsx` ou crie um `.env` de desenvolvimento.

---

## 🔐 Variáveis de ambiente

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `DATABASE_URL` | String de conexão com o banco | `postgresql://user:pass@host:5432/db` |

---

## 🧭 Decisões técnicas

**Por que FastAPI?** Performance superior ao Flask para APIs REST, tipagem nativa com Pydantic, geração automática de documentação OpenAPI e suporte a async — alinhado com o mercado atual de backend Python.

**Por que PostgreSQL no RDS?** Banco relacional gerenciado elimina overhead de configuração de backup, failover e updates — padrão em ambientes de produção.

**Por que CloudFront na frente do S3?** Redução de latência global, HTTPS nativo via ACM e possibilidade de regras de cache sem necessidade de servidor dedicado para o frontend.

**Por que Nginx no EC2?** Proxy reverso entre a internet e o Uvicorn, gerenciamento de CORS no nível de servidor e controle de conexões simultâneas.

---

## 📌 Próximas melhorias

- Autenticação com JWT (isolamento de dados por usuário)
- Paginação e filtros por categoria e período
- Gráficos de evolução de saldo ao longo do tempo
- Pipeline CI/CD com GitHub Actions para deploy automático no EC2

---

## 👤 Autor

**André Ferreira**
[GitHub](https://github.com/AndreLopes30) · [LinkedIn](https://www.linkedin.com/in/andre-ferreira30)

---

## 📄 Licença

MIT
