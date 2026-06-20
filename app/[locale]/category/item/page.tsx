import Image from "next/image";
import "./item.css";

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!res.ok) {
      const errorBody = await res.text();

      return {
        products: [],
        error: {
          status: res.status,
          statusText: res.statusText,
          body: errorBody,
        },
      };
    }

    const products = await res.json();

    return {
      products,
      error: null,
    };
  } catch (error) {
    return {
      products: [],
      error: {
        status: "FETCH_ERROR",
        statusText: "Request Failed",
        body:
          error instanceof Error
            ? error.message
            : "Unknown error occurred",
      },
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
            background: "#fff3f3",
            border: "1px solid #ff4d4f",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "24px",
            color: "#d32f2f",
          }}
        >
          <h2>❌ API Request Failed</h2>

          <p>
            <strong>Status:</strong> {error.status}
          </p>

          <p>
            <strong>Status Text:</strong> {error.statusText}
          </p>

          <p>
            <strong>Response:</strong>
          </p>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              overflowX: "auto",
              background: "#f5f5f5",
              padding: "12px",
              borderRadius: "6px",
              color: "#333",
            }}
          >
            {error.body}
          </pre>
        </div>
      )}

      {!error && (
        <div className="product-grid">
          {products.map((product: any) => (
            <article
              key={product.id}
              className="product-card"
            >
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