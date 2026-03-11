💰 Penny - Budget Tracker (Full-Stack)
"Cada centavo conta" - Um rastreador de finanças pessoais simples e intuitivo.

React
TypeScript
FastAPI
Python

📖 Sobre o Projeto
O Penny é uma aplicação Full-Stack de controle financeiro.
Nascido como um projeto React, ele evoluiu para possuir uma API robusta em Python, garantindo persistência de dados, segurança e processamento em tempo real.

✨ Funcionalidades
CRUD Completo: Adicionar, listar e excluir receitas e despesas.
Persistência de Dados: Integração com API RESTful e Banco de Dados.
Cálculo Automático: Saldo atualizado em tempo real baseado no histórico.
Categorização: Filtro visual rápido (Alimentação, Transporte, Lazer, etc.).
UX/UI: Interface responsiva, tratamento de estados vazios (Empty States) e formatação automática em Real (R$).
🛠️ Tecnologias
Frontend
React com TypeScript
Vite (Build tool)
Axios (Consumo de API)
CSS Modules (Estilização local)
Backend
Python com FastAPI
SQLAlchemy (ORM)
Pydantic (Validação de Dados)
🚀 Como Rodar o Projeto Localmente
Para que o sistema funcione perfeitamente, você precisa rodar o Backend e o Frontend simultaneamente.

1️⃣ Rodando o Backend (API)
Abra um terminal e execute:

Bash

# Clone o repositório do backend (se estiver em outro repositório, insira o link real)
# cd penny-api

# Crie seu ambiente virtual e ative-o
python -m venv venv
source venv/Scripts/activate # (No Windows)

# Instale as dependências
pip install -r requirements.txt

# Rode a API
uvicorn app.main:app --reload
A API estará rodando em: http://localhost:8000

2️⃣ Rodando o Frontend (React)
Abra um NOVO terminal e execute:

Bash

git clone https://github.com/AndreLopes30/penny-budget-tracker.git
cd penny-budget-tracker

# Instale as dependências
npm install

# Rode a aplicação
npm run dev
Acesse no navegador: http://localhost:5173

👤 Autor
André Ferreira

GitHub
LinkedIn
📄 Licença
MIT
