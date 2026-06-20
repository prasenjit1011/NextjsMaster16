import Image from "next/image";
import "./item.css";

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    const products = await res.json();

    return {
      products,
      error: null,
    };
  } catch (error) {
    return {
      products: [],
      error:
        error instanceof Error
          ? error.message
          : "Unknown error occurred",
    };
  }
}

export default async function ItemPage() {
  const { products, error } = await getProducts();

  return (
    <main className="item-container">
      <div className="page-header">
        <h1>🛍️ Product Catalog Page</h1>
        <p>
          Explore our curated collection of premium products across multiple
          categories.
        </p>
      </div>

      {error && (
        <div
          style={{
            background: "#ffe5e5",
            color: "#d32f2f",
            padding: "16px",
            borderRadius: "8px",
            marginBottom: "20px",
            border: "1px solid #d32f2f",
          }}
        >
          <h3>❌ Failed to Load Products</h3>
          <p>{error}</p>
        </div>
      )}

      {!error && (
        <div className="product-grid">
          {products.map((product: any) => (
            <article key={product.id} className="product-card">
              <div className="image-wrapper">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="300px"
                  className="product-image"
                />
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
      )}
    </main>
  );
}