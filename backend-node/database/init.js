const db = require("./db.js");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      total REAL NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    INSERT INTO products (name, price)
    VALUES
    ('Notebook Gamer', 3500),
    ('Mouse RGB', 120),
    ('Teclado Mecânico', 250)
  `);

  console.log("Banco iniciado com sucesso");
});