# DevStore — Frontend React

Loja virtual estilo Amazon construída com **React + Vite**, com suporte a múltiplos backends (Node.js, Python, Java) e fallback para dados mock.

---

## 🚀 Como iniciar a aplicação

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm v9 ou superior

### 1. Instalar as dependências

```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em: **http://localhost:5173**

---

## 🔧 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção na pasta `dist/` |
| `npm run preview` | Pré-visualiza a build de produção |
| `npm run lint` | Verifica erros de lint no código |

---

## 🌐 Backends suportados

A aplicação tenta se conectar ao backend selecionado. Se não estiver disponível, usa dados **mock** automaticamente.

| Backend | URL padrão |
|---|---|
| Node.js | http://localhost:3000 |
| Python | http://localhost:4000 |
| Java | http://localhost:8080/api |

O backend selecionado é salvo no `localStorage` e pode ser trocado pelo switcher no cabeçalho da página.

---

## 📁 Estrutura do projeto

```
src/
├── App.jsx              # Componente raiz e lógica principal
├── styles.css           # Estilos globais
└── components/
    ├── Header.jsx       # Cabeçalho com busca, carrinho e backend switcher
    ├── ProductCard.jsx  # Card de produto
    └── CartModal.jsx    # Modal do carrinho de compras
```

