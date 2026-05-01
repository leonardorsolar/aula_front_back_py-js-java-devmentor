# 📄 SPEC — MINI E-COMMERCE (PROJETO COMPLETO)

---

# 🧾 PRD — Product Requirements Document

## 🎯 Objetivo

Criar um **mini e-commerce full stack funcional** que permita visualizar produtos, adicionar ao carrinho e finalizar um pedido simples.

---

## 🧩 Context / Problema

Desenvolvedores iniciantes precisam demonstrar habilidades práticas em:

* Backend (API REST)
* Banco de dados
* Frontend
* Integração completa

Este projeto resolve isso criando uma aplicação real, porém simplificada.

---

## 📦 Product Scope

### ✅ In Scope

* Listagem de produtos
* Visualização de produto
* Adição ao carrinho
* Cálculo de total
* Finalização de pedido
* Persistência no banco

### ❌ Out of Scope

* Login/autenticação
* Pagamento real (Stripe)
* Upload de imagens
* Dashboard admin completo
* Deploy em produção

---

## ⚙️ Functional Requirements

| ID   | Prioridade | Descrição                                  |
| ---- | ---------- | ------------------------------------------ |
| FR01 | shall      | Sistema deve listar produtos               |
| FR02 | shall      | Sistema deve retornar produto por ID       |
| FR03 | shall      | Sistema deve permitir criar produto        |
| FR04 | shall      | Sistema deve permitir deletar produto      |
| FR05 | shall      | Usuário deve adicionar produto ao carrinho |
| FR06 | shall      | Sistema deve calcular total do carrinho    |
| FR07 | shall      | Sistema deve criar pedido                  |
| FR08 | shall      | Sistema deve salvar pedido no banco        |
| FR09 | should     | Sistema deve mostrar mensagem de sucesso   |
| FR10 | should     | Sistema deve ter layout simples            |

---

## 📏 Business Rules

| ID   | Regra                            |
| ---- | -------------------------------- |
| BR01 | Produto deve ter nome e preço    |
| BR02 | Preço deve ser maior que zero    |
| BR03 | Pedido deve ter total            |
| BR04 | Carrinho não persiste no banco   |
| BR05 | Pedido é criado apenas com total |

---

## ✅ Acceptance Criteria

| ID   | Cenário                                                    |
| ---- | ---------------------------------------------------------- |
| AC01 | Dado acesso ao sistema, quando abrir, então lista produtos |
| AC02 | Dado clique em produto, então adiciona ao carrinho         |
| AC03 | Dado itens no carrinho, então total é calculado            |
| AC04 | Dado clique em finalizar, então pedido é criado            |
| AC05 | Dado sucesso, então exibe mensagem                         |
| AC06 | Dado erro, então exibe mensagem de erro                    |

---




