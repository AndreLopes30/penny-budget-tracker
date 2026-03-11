from pydantic import BaseModel
from typing import Optional

class listarTransacoes(BaseModel):
    id: int
    tipo: str
    nome: Optional[str] = None
    valor: int
    categoria: Optional[str] = None
    data: str

    class Config:
        from_attributes = True

class transacaoCreate(BaseModel):
    tipo: str
    nome: Optional[str] = None
    valor: int
    categoria: Optional[str] = None
    data: str