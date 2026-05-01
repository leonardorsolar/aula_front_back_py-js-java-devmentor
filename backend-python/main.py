from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import models, database

app = FastAPI()

# Configuração do CORS para o seu index.html
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cria as tabelas no SQLite
models.Base.metadata.create_all(bind=database.engine)

@app.get("/products")
def get_products(db: Session = Depends(database.get_db)):
    return db.query(models.Product).all()

@app.post("/orders")
def create_order(order_data: dict, db: Session = Depends(database.get_db)):
    new_order = models.Order(total=order_data['total'])
    db.add(new_order)
    db.commit()
    return {"status": "sucesso", "id": new_order.id}

# Script para popular o banco se estiver vazio (Seed)
@app.on_event("startup")
def seed_data():
    db = database.SessionLocal()
    if db.query(models.Product).count() == 0:
        products = [
            models.Product(name="Setup Gamer", price=4500.0, image_url="https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500"),
            models.Product(name="Teclado Mecânico", price=350.0, image_url="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500")
        ]
        db.add_all(products)
        db.commit()
    db.close()