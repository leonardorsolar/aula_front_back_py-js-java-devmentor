const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const databasePath = path.join(__dirname, "db.sqlite");

const db = new sqlite3.Database(databasePath, (err) => {
  if (err) {
    console.error("Erro ao conectar banco:", err.message);
  } else {
    console.log("Banco conectado com sucesso");
  }
});

module.exports = db;