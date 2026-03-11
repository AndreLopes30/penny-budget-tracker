from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.db.base_class import Base 
import os

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:@localhost:5432/Penny")

if DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

print("⏳ Verificando/Criando tabelas no banco de dados...")
Base.metadata.create_all(bind=engine)
print("✅ Tabelas prontas!")