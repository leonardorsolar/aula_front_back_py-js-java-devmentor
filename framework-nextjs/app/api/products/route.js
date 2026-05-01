// app/api/products/route.js
import { getDB } from "@/lib/db";
import { initDB } from "@/lib/init";

export async function GET() {
  await initDB();
  const db = await getDB();
  const products = await db.all("SELECT * FROM products");

  return Response.json(products);
}

export async function POST(req) {
  const { name, price } = await req.json();

  const db = await getDB();

  const result = await db.run(
    "INSERT INTO products (name, price) VALUES (?, ?)",
    [name, price]
  );

  return Response.json({
    id: result.lastID,
    name,
    price
  });
}