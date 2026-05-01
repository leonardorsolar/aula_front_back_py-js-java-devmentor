# Projeto E-commerce — Full Stack (Java | Node.js | Python | Web | Mobile)

Projeto didático de e-commerce com múltiplos backends e múltiplos frontends no mesmo repositório.

---

## Estrutura atual

```
projeto01/
├── backend-java/         # API REST com Spring Boot
├── backend-node/         # API REST com Express + SQLite
├── backend-python/       # API REST com FastAPI + SQLAlchemy
├── frontend-html/        # Frontend HTML/CSS/JS puro
├── frontend-react/       # Frontend React + Vite
├── framework-nextjs/     # App Next.js com rotas API internas
├── mobile-react-native/  # App mobile com Expo/React Native
└── doc/geral/            # PRD, sprint, tarefas e tech spec
```

---

## Backends

### 1) Node.js (Express)

Pré-requisitos:
- Node.js 18+
- npm

Execução:

```bash
cd backend-node
npm install
node server.js
```

URL base: http://localhost:3000

Endpoints:
- `GET /health`
- `GET /products`
- `GET /products/:id`
- `POST /products`
- `DELETE /products/:id`
- `POST /orders`

---

### 2) Python (FastAPI)

Pré-requisitos:
- Python 3.11+
- Poetry

Execução:

```bash
cd backend-python
poetry install
poetry run uvicorn app.main:app --reload --port 4000
```

URL base: http://127.0.0.1:4000  
Swagger: http://127.0.0.1:4000/docs

Endpoints principais:
- `GET /products`
- `POST /orders`

---

### 3) Java (Spring Boot)

Pré-requisitos:
- Java 17+

Execução:

```bash
cd backend-java
./mvnw spring-boot:run
```

No Windows:

```bash
mvnw.cmd spring-boot:run
```

URL base: http://localhost:8080

Endpoints principais:
- `GET /api/products`
- `GET /api/products/{id}`
- `POST /api/products`
- `DELETE /api/products/{id}`

---

## Frontends

### 1) HTML estático

```bash
cd frontend-html
```

Abrir no navegador:
- `index.html` (principal)
- `indexV1.html`
- `indexV2.html`

> Dica: usar Live Server no VS Code.

---

### 2) React + Vite

```bash
cd frontend-react
npm install
npm run dev
```

URL: http://localhost:5173

Observação:
- Possui seletor de backend (Node, Python, Java).
- Usa fallback com dados mock quando a API não responde.

---

### 3) Next.js

```bash
cd framework-nextjs
npm install
npm run dev
```

URL: http://localhost:3000

Rotas API internas:
- `GET /api/products`
- `POST /api/products`
- `POST /api/orders`

---

### 4) Mobile (Expo / React Native)

```bash
cd mobile-react-native
npm install
npm run start
```

Também disponível:
- `npm run android`
- `npm run ios`
- `npm run web`

---

## Documentação do projeto

Arquivos de apoio em `doc/geral/`:
- `prd.md`
- `Sprint.md`
- `tasks.md`
- `techspec.md`

---

## Observações importantes

- Cada backend é independente.
- O frontend React foi preparado para integração com os 3 backends.
- Node, Python e Java usam SQLite no projeto (com configuração específica por stack).
- Para evitar conflito de porta, rode os módulos conforme necessidade (ex.: Node e Next usam `3000`).
