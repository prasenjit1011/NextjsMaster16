import Image from "next/image";
import Link from "next/link";
import "./details.css";
import AddToCartButton from "@/app/components/AddToCartButton";

const API_URL = process.env.BACKEND_API + "/api/items";

async function getProduct(id: string) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      return {
        product: null,
        error: {
          status: res.status,
          statusText: res.statusText,
        },
      };
    }

    const json = await res.json();

    return {
      product: json.data,
      error: null,
    };
  } catch (error) {
    return {
      product: null,
      error: {
        status: "FETCH_ERROR",
        statusText:
          error instanceof Error
            ? error.message
            : "Unknown Error",
      },
    };
  }
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { product, error } = await getProduct(id);

  if (error) {
    return (
      <main className="details-container">
        <div className="error-card">
          <h2>❌ Unable to Load Product</h2>

          <p>
            <strong>Status:</strong> {String(error.status)}
          </p>

          <p>
            <strong>Message:</strong> {error.statusText}
          </p>

          <Link href="/category/item" className="back-btn">
            ← Back to Products
          </Link>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="details-container">
        <div className="error-card">
          <h2>Product Not Found</h2>

          <Link href="/category/item" className="back-btn">
            ← Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="details-container">




      <div className="details-card">
        <div className="details-image">
          <Image
            src="https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp"
            alt={product.name}
            fill
            priority
            className="product-image"
            sizes="(max-width:768px) 100vw, 450px"
          />
        </div>

        <div className="product-info">


<div className="details-header">
  <span className="badge">
    Premium Product
  </span>

  <Link href="/category/item" className="back-btn">
    ← Back to Products
  </Link>
</div>






          <h1>{product.name}</h1>

          <div className="rating">
            ⭐⭐⭐⭐⭐
            <span>(4.8)</span>
          </div>

          <p className="sku">
            <strong>SKU:</strong> {product.sku}
          </p>

          <p className="stock">
            ✅ In Stock
          </p>

          <div className="price">
            ${product.price}
          </div>

          <div className="description">
            <h3>Description</h3>

            <p>
              {product.description}
            </p>
          </div>

          <div className="action-buttons">
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

            <button className="buy-btn">
              ⚡ Buy Now
            </button>

            <button className="wishlist-btn">
              ❤️ Wishlist
            </button>
          </div>

          <div className="features">
            <div className="feature">
              🚚 Free Delivery
            </div>

            <div className="feature">
              🔄 7 Days Return
            </div>

            <div className="feature">
              🔒 Secure Payment
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}