from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.api import api_router
from app.db.base_class import Base
from app.db.db import engine 
import logging
from app.models.transaction import Transaction

app = FastAPI()

@app.on_event("startup")
def on_startup():
    logging.info("Forçando a criação das tabelas no Banco de Dados...")
    Base.metadata.create_all(bind=engine)
    logging.info("Tabelas criadas com sucesso!")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://penny-budget-tracker.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)