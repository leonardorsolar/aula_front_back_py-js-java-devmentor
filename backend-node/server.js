const express = require("express");
const cors = require("cors");
const db = require("./database/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API E-commerce funcionando!");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/products", (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao buscar produtos" });
    }
    res.json(rows);
  });
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  db.get("SELECT * FROM products WHERE id = ?", [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao buscar produto" });
    }

    if (!row) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.json(row);
  });
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;

  db.run(
    "INSERT INTO products (name, price) VALUES (?, ?)",
    [name, price],
    function (err) {
      if (err) {
        return res.status(500).json({ error: "Erro ao criar produto" });
      }

      res.json({
        id: this.lastID,
        name,
        price
      });
    }
  );
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM products WHERE id = ?", [id], function (err) {
    if (err) {
      return res.status(500).json({ error: "Erro ao deletar produto" });
    }

    res.json({ message: "Produto deletado com sucesso" });
  });
});

app.post("/orders", (req, res) => {
  const { total } = req.body;

  db.run(
    "INSERT INTO orders (total) VALUES (?)",
    [total],
    function (err) {
      if (err) {
        return res.status(500).json({ error: "Erro ao criar pedido" });
      }

      res.json({
        id: this.lastID,
        total
      });
    }
  );
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});