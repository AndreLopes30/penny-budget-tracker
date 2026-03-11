from sqlalchemy import Column, Integer, String
from app.db.base_class import Base

class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    tipo = Column(String, nullable=False)
    nome = Column(String, nullable=True)
    valor = Column(Integer, nullable=False)
    categoria = Column(String, nullable=True)
    data = Column(String, nullable=False)
