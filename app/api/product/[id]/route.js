import { getProductById, updateProduct, deleteProduct } from "@/services/productService";

export async function GET(req, { params }) {
  const data = await getProductById(params.id);
  return Response.json(data);
}

export async function PUT(req, { params }) {
  const body = await req.json();
  await updateProduct(params.id, body);
  return Response.json({ message: "Updated" });
}

export async function DELETE(req, { params }) {
  await deleteProduct(params.id);
  return Response.json({ message: "Deleted" });
}
