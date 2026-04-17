import { getProductById, updateProduct, deleteProduct } from "@/services/productService";

export async function GET(req, { params }) {
  const { id } = await params;
  if (!id) {
    return Response.json({ error: "Invalid ID" }, { status: 400 });
  }
  const data = await getProductById(id);
  if (!data) {
    return Response.json({ error: "Product not found" }, { status: 404 });
  }
  return Response.json(data);
}

export async function PUT(req, { params }) {
  const body = await req.json();
  await updateProduct(params.id, body);
  return Response.json({ message: "Updated" });
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  await deleteProduct(id);
  return Response.json({ message: "Deleted" });
}
