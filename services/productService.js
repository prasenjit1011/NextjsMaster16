import pool from "@/lib/db";

export async function getAllProducts() {
  const conn = await pool.getConnection();
  try {
    return await conn.query("SELECT * FROM product");
  } finally {
    conn.release();
  }
}

export async function getProductById(id) {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query("SELECT * FROM product WHERE id=?", [id]);
    return rows[0];
  } finally {
    conn.release();
  }
}

export async function createProduct({ name, price, status }) {
  const conn = await pool.getConnection();
  try {
    const res = await conn.query(
      "INSERT INTO product (name, price, status) VALUES (?, ?, ?)",
      [name, price, status]
    );
    return res;
  } finally {
    conn.release();
  }
}

export async function updateProduct(id, { name, price, status }) {
  const conn = await pool.getConnection();
  try {
    await conn.query(
      "UPDATE product SET name=?, price=?, status=? WHERE id=?",
      [name, price, status, id]
    );
  } finally {
    conn.release();
  }
}

export async function deleteProduct(id) {
  const conn = await pool.getConnection();
  try {
    await conn.query("DELETE FROM product WHERE id=?", [id]);
  } finally {
    conn.release();
  }
}
