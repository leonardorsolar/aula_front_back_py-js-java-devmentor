# Projeto E-commerce — Full Stack (Java | Node.js | Python | Frontend)

Projeto didático com três backends independentes e um frontend estático, todos conectados a um banco de dados SQLite local.

---

## Estrutura do Projeto

```
projeto01/
├── backend-java/      → API REST com Spring Boot (Java)
├── backend-node/      → API REST com Express (Node.js)
├── backend-python/    → API REST com FastAPI (Python)
└── frontend/          → Interface HTML/CSS/JS (estático)
```

---

## 🐍 Backend Python (FastAPI)

### Pré-requisitos
- Python 3.10+
- pip

### Instalar dependências

```bash
cd backend-python
pip install fastapi uvicorn sqlalchemy
```

### Rodar o servidor

```bash
uvicorn main:app --reload
```

Acesse: [http://localhost:8000](http://localhost:8000)  
Documentação automática: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🟩 Backend Node.js (Express)

### Pré-requisitos
- Node.js 18+
- npm

### Instalar dependências

```bash
cd backend-node
npm install
```

### Rodar o servidor

```bash
node server.js
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## ☕ Backend Java (Spring Boot)

### Pré-requisitos
- Java 17+
- Maven (ou usar o wrapper `mvnw` incluído no projeto)

### Instalar dependências e compilar

```bash
cd backend-java
./mvnw install
```

> No Windows: `mvnw.cmd install`

### Rodar o servidor

```bash
./mvnw spring-boot:run
```

> No Windows: `mvnw.cmd spring-boot:run`

Acesse: [http://localhost:8080](http://localhost:8080)

---

## 🌐 Frontend (HTML estático)

Não requer instalação. Abra diretamente no navegador:

```bash
cd frontend
# Abra o arquivo desejado no navegador:
# index.html    → versão atual
# indexV1.html  → versão 1
# indexV2.html  → versão 2
```

Ou use a extensão **Live Server** do VS Code para servir com hot-reload.

---

## Endpoints disponíveis (todos os backends)

| Método | Rota        | Descrição              |
|--------|-------------|------------------------|
| GET    | /products   | Lista todos os produtos|
| POST   | /products   | Cria um novo produto   |

---

## Observações

- Cada backend é independente; rode apenas o que for utilizar.
- O frontend consome a API via `fetch`. Altere a URL base no `index.html` conforme o backend em uso.
- O banco de dados SQLite é criado automaticamente na primeira execução (Python e Node.js). O Java utiliza `data.sql` para popular o banco H2/SQLite na inicialização.
