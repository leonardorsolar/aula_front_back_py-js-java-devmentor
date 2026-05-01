# 🧱 TAREFA 1 — LISTAR PRODUTOS (BACKEND)

## 📝 Título

Listagem de Produtos — API

## 📄 Descrição

Implementar endpoint para retornar todos os produtos cadastrados no banco.

## ⚙️ Requisitos Funcionais

* Criar `GET /products`
* Buscar produtos no SQLite
* Retornar JSON com `id`, `name`, `price`

## 🔄 Comportamentos Esperados

* Retorna lista de produtos
* Retorna `[]` se vazio
* Retorna `500` em erro

## ✅ Critérios de Aceite

* [ ] Endpoint funcionando
* [ ] JSON correto
* [ ] Testado via Postman

---

# 🎨 TAREFA 2 — LISTAR PRODUTOS (FRONTEND)

## 📝 Título

Listagem de Produtos — Interface

## 📄 Descrição

Consumir API e renderizar produtos na tela.

## ⚙️ Requisitos Funcionais

* Fazer `GET /products`
* Renderizar produtos
* Exibir nome e preço
* Botão "Adicionar"

## 🔄 Comportamentos Esperados

* Carrega ao abrir página
* Mostra lista
* Mostra erro se falhar

## ✅ Critérios de Aceite

* [ ] Produtos aparecem
* [ ] Sem erro no console
* [ ] Botão presente

---

# 🧩 TAREFA 3 — BUSCAR PRODUTO POR ID (BACKEND)

## 📝 Título

Detalhe de Produto — API

## 📄 Descrição

Criar endpoint para buscar produto específico.

## ⚙️ Requisitos Funcionais

* Criar `GET /products/:id`
* Buscar por ID

## 🔄 Comportamentos Esperados

* Retorna produto
* Retorna 404 se não existir

## ✅ Critérios de Aceite

* [ ] Endpoint funciona
* [ ] Retorna 404 corretamente

---

# 🧩 TAREFA 4 — CRIAR PRODUTO (BACKEND)

## 📝 Título

Cadastro de Produto — API

## 📄 Descrição

Permitir criação de novos produtos.

## ⚙️ Requisitos Funcionais

* Criar `POST /products`
* Receber `name` e `price`

## 🔄 Comportamentos Esperados

* Salva no banco
* Retorna produto criado
* Retorna erro se inválido

## ✅ Critérios de Aceite

* [ ] Produto salvo
* [ ] Retorna ID
* [ ] Validação básica funciona

---

# 🧩 TAREFA 5 — DELETAR PRODUTO (BACKEND)

## 📝 Título

Remoção de Produto — API

## 📄 Descrição

Permitir remover produto do sistema.

## ⚙️ Requisitos Funcionais

* Criar `DELETE /products/:id`

## 🔄 Comportamentos Esperados

* Remove produto
* Retorna sucesso

## ✅ Critérios de Aceite

* [ ] Produto deletado
* [ ] Retorna mensagem

---

# 🛒 TAREFA 6 — CARRINHO (FRONTEND)

## 📝 Título

Carrinho de Compras — Lógica

## 📄 Descrição

Implementar estrutura de carrinho no frontend.

## ⚙️ Requisitos Funcionais

* Criar array de carrinho
* Adicionar produtos
* Remover produtos

## 🔄 Comportamentos Esperados

* Produto entra no carrinho
* Quantidade atualiza

## ✅ Critérios de Aceite

* [ ] Adiciona item
* [ ] Remove item
* [ ] Estado atualizado

---

# 💰 TAREFA 7 — TOTAL DO CARRINHO (FRONTEND)

## 📝 Título

Cálculo de Total do carrinho

## 📄 Descrição

Calcular valor total do carrinho.

## ⚙️ Requisitos Funcionais

* Somar preços
* Atualizar ao adicionar/remover

## 🔄 Comportamentos Esperados

* Total sempre correto

## ✅ Critérios de Aceite

* [ ] Soma correta
* [ ] Atualiza automaticamente

---

# 🧾 TAREFA 8 — CRIAR PEDIDO (BACKEND)

## 📝 Título

Criação de Pedido — API

## 📄 Descrição

Salvar pedido no banco.

## ⚙️ Requisitos Funcionais

* Criar `POST /orders`
* Receber total

## 🔄 Comportamentos Esperados

* Salva pedido
* Retorna ID

## ✅ Critérios de Aceite

* [ ] Pedido salvo
* [ ] Retorna ID

---

# 🧾 TAREFA 9 — FINALIZAR COMPRA (FRONTEND)

## 📝 Título

Finalização de Pedido

## 📄 Descrição

Enviar carrinho para API e concluir compra.

## ⚙️ Requisitos Funcionais

* Enviar `POST /orders`
* Limpar carrinho

## 🔄 Comportamentos Esperados

* Pedido criado
* Carrinho limpo
* Mostrar sucesso

## ✅ Critérios de Aceite

* [ ] Pedido enviado
* [ ] Mensagem exibida
* [ ] Carrinho zerado

---

# 🎨 TAREFA 10 — INTERFACE (FRONTEND)

## 📝 Título

Layout da Aplicação

## 📄 Descrição

Criar layout simples do e-commerce.

## ⚙️ Requisitos Funcionais

* Listagem de produtos
* Área do carrinho

## 🔄 Comportamentos Esperados

* Interface organizada
* Fácil uso

## ✅ Critérios de Aceite

* [ ] Layout funcional
* [ ] Responsivo básico

---

# 🧪 TAREFA 11 — TESTES MANUAIS

## 📝 Título

Validação do Sistema

## 📄 Descrição

Testar fluxo completo do sistema.

## ⚙️ Requisitos Funcionais

* Testar API
* Testar frontend

## 🔄 Comportamentos Esperados

* Fluxo completo funciona

## ✅ Critérios de Aceite

* [ ] Sem erros
* [ ] Fluxo completo OK

---

# 📄 TAREFA 12 — DOCUMENTAÇÃO

## 📝 Título

README do Projeto

## 📄 Descrição

Documentar projeto para portfólio.

## ⚙️ Requisitos Funcionais

* Explicar projeto
* Explicar como rodar

## 🔄 Comportamentos Esperados

* Qualquer dev consegue rodar

## ✅ Critérios de Aceite

* [ ] README claro
* [ ] Passos corretos

---

# 🏁 RESULTADO

Você agora tem um:

```text
✔ Backlog completo estilo empresa
✔ Separação backend/frontend
✔ Critérios de aceite claros
✔ Estrutura para entrevista técnica
```

