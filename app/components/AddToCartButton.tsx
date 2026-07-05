"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { addToCart } from "@/utils/cart";

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
  const pathname = usePathname();

  const locale = pathname.split("/")[1];

  const [showAlert, setShowAlert] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleAddToCart = () => {
    try {
      // Save using shared cart utility
      addToCart(product);

      setShowAlert(true);
      setIsClosing(false);

      // Auto close after 10 seconds
      setTimeout(() => {
        setIsClosing(true);

        setTimeout(() => {
          setShowAlert(false);
          setIsClosing(false);
        }, 400);
      }, 10000);
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  const closeAlert = () => {
    setIsClosing(true);

    setTimeout(() => {
      setShowAlert(false);
      setIsClosing(false);
    }, 400);
  };

  const viewCart = () => {
    closeAlert();

    router.push(`/${locale}/cart`);
  };

  return (
    <>
      <button
        className="cart-btn"
        onClick={handleAddToCart}
      >
        🛒 Add to Cart
      </button>

      {showAlert && (
        <div
          className={`cart-alert-overlay ${
            isClosing ? "fade-out" : ""
          }`}
        >
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
                onClick={closeAlert}
              >
                Continue Shopping
              </button>

              <button
                className="view-cart-btn"
                onClick={viewCart}
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