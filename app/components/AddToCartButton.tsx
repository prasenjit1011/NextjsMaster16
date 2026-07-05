"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./AddToCartButton.css";

interface Product {
  id: number;
  name: string;
  description: string;
  sku: string;
  price: number;
  image: string;
}

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const router = useRouter();

  const [showAlert, setShowAlert] = useState(false);

  const addToCart = () => {
    try {
      const existingCart = localStorage.getItem("cart");

      let cart: Product[] = existingCart
        ? JSON.parse(existingCart)
        : [];

      const existingItem = cart.find(
        (item) => item.id === product.id
      );

      if (!existingItem) {
        cart.push(product);

        localStorage.setItem(
          "cart",
          JSON.stringify(cart)
        );
      }

      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  return (
    <>
      <button
        className="cart-btn"
        onClick={addToCart}
      >
        🛒 Add to Cart
      </button>

      {showAlert && (
        <div className="cart-alert-overlay">
          <div className="cart-alert">
            <div className="success-circle">
              ✓
            </div>

            <h2>Added to Cart</h2>

            <p>
              <strong>{product.name}</strong>
              <br />
              has been added successfully.
            </p>

            <div className="cart-alert-price">
              ${product.price.toFixed(2)}
            </div>

            <div className="cart-alert-actions">
              <button
                className="continue-btn"
                onClick={() =>
                  setShowAlert(false)
                }
              >
                Continue Shopping
              </button>

              <button
                className="view-cart-btn"
                onClick={() => {
                  setShowAlert(false);
                  router.push("/cart");
                }}
              >
                View Cart 🛒
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}