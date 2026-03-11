from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.db.base_class import Base 
from app.models.transaction import Transaction
import os

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:@localhost:5432/Penny")

engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def create_tables():
    Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    print("⏳ Criando tabelas...")
    create_tables()
    print("✅ Sucesso!")