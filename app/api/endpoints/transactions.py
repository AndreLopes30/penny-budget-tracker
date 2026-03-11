from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.transaction import listarTransacoes, transacaoCreate 
from app.db.db import get_db
from app.models.transaction import Transaction

router = APIRouter()

@router.get("/", response_model=list[listarTransacoes])
def list_transactions(db: Session = Depends(get_db)):
    return db.query(Transaction).all()

@router.post("/", response_model=listarTransacoes)
def create_transaction(transaction_in: transacaoCreate, db: Session = Depends(get_db)):
    try:
        new_transaction = Transaction(**transaction_in.model_dump())
        
        db.add(new_transaction)
        db.commit()
        db.refresh(new_transaction)
        
        return new_transaction
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=400, detail=str(e))
    
@router.delete("/{transaction_id}")
def delete_transaction(transaction_id: int, db: Session = Depends(get_db)):
    transaction = db.query(Transaction).filter(Transaction.id == transaction_id).first()
    try:
        db.delete(transaction)
        db.commit()
        return {"detail": "Transação excluída com sucesso"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=400, detail=str(e))    