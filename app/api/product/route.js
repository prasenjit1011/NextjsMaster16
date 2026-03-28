import { getAllProducts, createProduct } from "@/services/productService";

export async function GET() {
  const data = await getAllProducts();
  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();
  const res = await createProduct(body);
  return Response.json({ id: res.insertId });
}
