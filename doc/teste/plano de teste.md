# 🧪 Plano de Testes — Mini E-commerce

## 🎯 Objetivo

Validar o funcionamento completo do sistema de e-commerce, garantindo que:

* API funcione corretamente
* Banco de dados esteja consistente
* Frontend exiba dados corretamente
* Fluxo completo do usuário funcione (E2E)

---

## 📦 Escopo

### Inclui

* Backend (API REST)
* Banco de dados SQLite
* Frontend (HTML/CSS/JS)
* Integração completa

### Não inclui

* Testes de performance
* Testes de segurança avançados
* Testes automatizados (neste momento)

---

# 🧱 1. Testes de Setup

| ID   | Teste             | Resultado Esperado        |
| ---- | ----------------- | ------------------------- |
| TS01 | Servidor inicia   | Sem erros no console      |
| TS02 | Conexão com banco | "Banco conectado"         |
| TS03 | Tabelas existem   | products e orders criadas |

---

# 🔧 2. Testes Backend (API)

## 📦 Produtos

| ID   | Endpoint             | Cenário             | Resultado Esperado |
| ---- | -------------------- | ------------------- | ------------------ |
| TB01 | GET /products        | Produtos existem    | Retorna lista JSON |
| TB02 | GET /products        | Sem produtos        | Retorna []         |
| TB03 | GET /products/:id    | Produto válido      | Retorna produto    |
| TB04 | GET /products/:id    | Produto inexistente | 404                |
| TB05 | POST /products       | Dados válidos       | Produto criado     |
| TB06 | POST /products       | Dados inválidos     | 400                |
| TB07 | DELETE /products/:id | Produto existente   | Removido           |
| TB08 | DELETE /products/:id | Produto inexistente | Erro tratado       |

---

## 🧾 Pedidos

| ID   | Endpoint     | Cenário         | Resultado Esperado |
| ---- | ------------ | --------------- | ------------------ |
| TB09 | POST /orders | Dados válidos   | Pedido criado      |
| TB10 | POST /orders | Dados inválidos | 400                |

---

# 🗄️ 3. Testes de Banco de Dados

| ID   | Teste              | Resultado Esperado            |
| ---- | ------------------ | ----------------------------- |
| DB01 | Inserir produto    | Registro criado               |
| DB02 | Consultar produtos | Lista correta                 |
| DB03 | Inserir pedido     | Pedido salvo                  |
| DB04 | Persistência       | Dados permanecem após restart |

---

# 🎨 4. Testes Frontend

## Interface

| ID   | Teste             | Resultado Esperado |
| ---- | ----------------- | ------------------ |
| TF01 | Carregar página   | Sem erro JS        |
| TF02 | Layout aparece    | Estrutura visível  |
| TF03 | Produtos exibidos | Lista renderizada  |

---

## Funcionalidade

| ID   | Teste               | Resultado Esperado |
| ---- | ------------------- | ------------------ |
| TF04 | Buscar produtos API | Dados carregados   |
| TF05 | Lista vazia         | Mensagem exibida   |
| TF06 | Erro API            | Mensagem erro      |

---

# 🛒 5. Testes de Carrinho

| ID   | Teste                | Resultado Esperado |
| ---- | -------------------- | ------------------ |
| TC01 | Adicionar produto    | Item no carrinho   |
| TC02 | Remover produto      | Item removido      |
| TC03 | Atualizar quantidade | Valor correto      |
| TC04 | Calcular total       | Soma correta       |

---

# 🧾 6. Testes de Pedido

| ID   | Teste            | Resultado Esperado |
| ---- | ---------------- | ------------------ |
| TP01 | Finalizar compra | Pedido criado      |
| TP02 | Limpar carrinho  | Carrinho vazio     |
| TP03 | Mensagem sucesso | Feedback exibido   |

---

# 🔄 7. Testes End-to-End (E2E)

| ID    | Cenário                     |
| ----- | --------------------------- |
| E2E01 | Usuário acessa sistema      |
| E2E02 | Visualiza produtos          |
| E2E03 | Adiciona ao carrinho        |
| E2E04 | Verifica total              |
| E2E05 | Finaliza compra             |
| E2E06 | Pedido salvo no banco       |
| E2E07 | Mensagem de sucesso exibida |

---

# 🏁 8. Critérios de Sucesso

* Sistema não apresenta erros críticos
* Fluxo completo funciona
* Dados persistem corretamente
* Interface responde corretamente
* API retorna dados esperados

---

# ⚠️ 9. Possíveis Falhas a Observar

* Erro de conexão com banco
* API fora do ar
* Erros de CORS
* Falha no fetch frontend
* Total incorreto no carrinho

---

# 💡 10. Melhorias Futuras

* Testes automatizados (Jest / Supertest)
* Testes E2E com Playwright
* Testes de carga (k6)
* Testes de segurança (OWASP)

---

# 🏆 Resultado

Este plano demonstra:

```text
✔ Pensamento de QA
✔ Validação completa do sistema
✔ Estrutura profissional
✔ Preparação para entrevistas
```

