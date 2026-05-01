// app/api/orders/route.js
import { getDB } from "@/lib/db";

export async function POST(req) {
  const { total } = await req.json();
  const db = await getDB();

  const result = await db.run(
    "INSERT INTO orders (total) VALUES (?)",
    [total]
  );

  return Response.json({ id: result.lastID, total });
}