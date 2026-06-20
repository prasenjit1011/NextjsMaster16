import Image from "next/image";
import "./item.css";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ItemPage() {
  const products = await getProducts();

  return (
    <main className="item-container">
      <div className="page-header">
        <h1>🛍️ Product Catalog</h1>
        <p>
          Explore our curated collection of premium products across multiple
          categories.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product: any) => (
          <article key={product.id} className="product-card">
            <div className="image-wrapper">
              
            </div>

            <div className="product-content">
              <span className="category-badge">
                {product.category}
              </span>

              <h3>{product.title}</h3>

              <p>
                {product.description.slice(0, 90)}
                ...
              </p>

              <div className="product-footer">
                <span className="price">
                  ${product.price}
                </span>

                <button>View Details</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}