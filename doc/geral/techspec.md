# ⚙️ TECHSPEC — Technical Specification

---

## 🧱 Stack

| Camada   | Tecnologia              |
| -------- | ----------------------- |
| Frontend | HTML + CSS + JavaScript |
| Backend  | Node.js + Express       |
| Banco    | SQLite                  |
| ORM      | Sem ORM (sqlite3)       |

---

# 🖥️ Backend

---

## 📌 Endpoints

### 🔹 Produtos

```http
GET /products
GET /products/:id
POST /products
DELETE /products/:id
```

---

### 🔹 Pedido

```http
POST /orders
```

---

## 📥 Request Body

### Criar Produto

```json
{
  "name": "Mouse",
  "price": 120
}
```

---

### Criar Pedido

```json
{
  "total": 3870
}
```

---

## 📤 Responses

| Status | Descrição       |
| ------ | --------------- |
| 200    | Sucesso         |
| 201    | Criado          |
| 400    | Dados inválidos |
| 404    | Não encontrado  |
| 500    | Erro interno    |

---

## 🗄️ Banco de Dados

```sql
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price REAL NOT NULL
);

CREATE TABLE orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  total REAL NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🔄 Lógica do Backend

### Produtos

1. Buscar todos produtos
2. Buscar por ID
3. Inserir novo produto
4. Deletar produto

### Pedido

1. Receber total
2. Inserir no banco
3. Retornar ID

---

# 🎨 Frontend

---

## 📄 Estrutura

```text
index.html
css/style.css
js/script.js
```

---

## 🧩 Componentes

| Componente        | Função                |
| ----------------- | --------------------- |
| Lista de produtos | Mostrar produtos      |
| Botão adicionar   | Adicionar ao carrinho |
| Carrinho          | Mostrar itens         |
| Total             | Mostrar valor         |
| Botão finalizar   | Criar pedido          |

---

## 🔄 Fluxo de UI

```text
Carregar página
   ↓
Buscar produtos (API)
   ↓
Renderizar produtos
   ↓
Usuário clica "Adicionar"
   ↓
Adicionar no carrinho (JS)
   ↓
Atualizar total
   ↓
Clicar "Finalizar"
   ↓
POST /orders
   ↓
Mostrar sucesso
```

---

# 🧪 Testes

---

## 🔹 Unitários (opcional)

* Criar produto
* Criar pedido
* Validar erro

---

## 🔹 Integração

* GET /products retorna lista
* POST /products cria item
* POST /orders cria pedido

---

## 🔹 E2E (manual)

* Ver produtos
* Adicionar ao carrinho
* Finalizar pedido

---

# 🏁 Definição de Pronto

```text
[ ] API funcionando
[ ] Banco funcionando
[ ] Frontend consumindo API
[ ] Carrinho funcional
[ ] Pedido salvo
[ ] Projeto documentado
```
