import Image from "next/image";
import Link from "next/link";
import "./item.css";
import AddToCartButton from "@/app/components/AddToCartButton";

const API_URL = process.env.BACKEND_API + "/api/items";

async function getProducts() {
  try {
    const res = await fetch(API_URL, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      return {
        products: [],
        error: {
          status: res.status,
          statusText: res.statusText,
          body: await res.text(),
        },
      };
    }

    const json = await res.json();

    return {
      products: json.data || [],
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
        <h1>🛍️ Product Catalog</h1>
        <h5>{API_URL}</h5>
        <h3>{process.env.BACKEND_API}</h3>
        <h3>{process.env.NEXT_PUBLIC_BACKEND_API}</h3>

        <p>
          Discover our latest collection of premium products at the best prices.
          Browse product details and add your favorite items to the cart.
        </p>
      </div>

      {error && (
        <div className="error-card">
          <h2>❌ Failed to Load Products</h2>

          <p>
            <strong>Status:</strong> {String(error.status)}
          </p>

          <p>
            <strong>Status Text:</strong> {error.statusText}
          </p>

          <pre>{error.body}</pre>
        </div>
      )}

      {!error && products.length === 0 && (
        <div className="error-card">
          <h2>No Products Found</h2>

          <p>There are currently no products available.</p>
        </div>
      )}

      {!error && products.length > 0 && (
        <div className="product-grid">
          {products.map((product: any) => (
            <article
              key={product.id}
              className="product-card"
            >
              <div className="image-wrapper">
                <Image
                  src="https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp"
                  alt={product.name}
                  fill
                  className="product-image"
                  sizes="(max-width:768px)100vw,350px"
                />
              </div>

              <div className="product-content">
                <span className="category-badge">
                  Premium Product
                </span>

                <h3>{product.name}</h3>

                {/* <p className="description">
                  {product.description?.length > 90
                    ? `${product.description.substring(0, 90)}...`
                    : product.description}
                </p> */}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "2px",
                  }}
                >
                  <span className="price">
                    ${product.price}
                  </span>

                  <span
                    style={{
                      color: "#16a34a",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    In Stock
                  </span>
                </div>

                <div className="product-footer">
                  <Link
                    href={`/category/item/${product.id}`}
                    className="details-btn"
                  >
                    View Details
                  </Link>

                  <AddToCartButton
                    product={{
                      id: product.id,
                      name: product.name,
                      description: product.description,
                      sku: product.sku,
                      price: product.price,
                      image:
                        "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp",
                    }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}