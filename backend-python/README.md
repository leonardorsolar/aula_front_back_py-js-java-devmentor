# Backend Python (FastAPI + SQLAlchemy)

API simples de e-commerce com produtos e pedidos.

## Requisitos

- Python 3.11+
- Poetry instalado

## Como rodar

1. Instale as dependências:

```bash
poetry install
```

2. Inicie a aplicação:

```bash
poetry run uvicorn app.main:app --reload --port 4000
```

3. Acesse:

- API: http://127.0.0.1:4000
- Swagger: http://127.0.0.1:4000/docs

## Endpoints

- `GET /products` → lista produtos
- `POST /orders` → cria pedido

Exemplo de body para `POST /orders`:

```json
{
  "total": 199.9
}
```

## Observações

- O banco SQLite é criado automaticamente.
- No startup, dois produtos são inseridos se a tabela estiver vazia (seed).
