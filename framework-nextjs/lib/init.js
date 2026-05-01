// lib/init.js
import { getDB } from "./db.js";

export async function initDB() {
  const db = await getDB();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      price REAL
    );

    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      total REAL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  const products = await db.all("SELECT * FROM products");

  if (products.length === 0) {
    await db.exec(`
      INSERT INTO products (name, price) VALUES
      ('Notebook Gamer', 3500),
      ('Mouse RGB', 120),
      ('Teclado Mecânico', 250);
    `);
  }
}