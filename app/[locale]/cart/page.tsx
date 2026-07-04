'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { createOrder } from "@/services/orderService";
import {
  CartItem,
  clearCart,
  decreaseQty,
  getCart,
  getCartTotal,
  increaseQty,
  removeFromCart,
} from '../../../utils/cart';

import './cart.css';

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const loadCart = () => {
    setCart(getCart());
  };

  useEffect(() => {
    loadCart();
  }, []);

  const handleIncrease = (id: number) => {
    increaseQty(id);
    loadCart();
  };

  const handleDecrease = (id: number) => {
    decreaseQty(id);
    loadCart();
  };

  const handleRemove = (id: number) => {
    removeFromCart(id);
    loadCart();
  };

  const handleClear = () => {
    if (!confirm('Clear your shopping cart?')) return;

    clearCart();
    loadCart();
  };

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    try {
      const order = await createOrder(cart, 101);

      alert(
        `🎉 Order #${order.id} placed successfully!\nTotal: ₹${order.total}`
      );

      clearCart();
      loadCart();
    } catch (error) {
      console.error(error);
      alert("Failed to place order");
    }
  };
  
  return (
    <main className="cart-container">

      <div className="cart-header">
        <h1>🛒 Shopping Cart</h1>

        <Link
          href="/category/item"
          className="continue-btn"
        >
          Continue Shopping
        </Link>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">

          <h2>Your Cart is Empty</h2>

          <p>
            Start shopping to add products.
          </p>

          <Link
            href="/category/item"
            className="shop-btn"
          >
            Browse Products
          </Link>

        </div>
      ) : (
        <>
          <div className="cart-list">

            {cart.map((item) => (
              <div
                key={item.id}
                className="cart-item"
              >
                <div className="cart-image">
                  <Image
                    src={
                      item.image ||
                      'https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp'
                    }
                    alt={item.name}
                    fill
                    className="product-image"
                  />
                </div>

                <div className="cart-info">

                  <h2>{item.name}</h2>

                  <p>{item.description}</p>

                  <p>
                    <strong>SKU:</strong> {item.sku}
                  </p>

                  <h3>${item.price}</h3>

                </div>

                <div className="cart-actions">

                  <div className="qty-box">

                    <button
                      onClick={() =>
                        handleDecrease(item.id)
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        handleIncrease(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                  <h3>
                    $
                    {(
                      item.price *
                      item.quantity
                    ).toFixed(2)}
                  </h3>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      handleRemove(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>
              </div>
            ))}

          </div>

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Total Items</span>

              <span>
                {cart.reduce(
                  (a, b) => a + b.quantity,
                  0
                )}
              </span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>

              <span>
                ${getCartTotal().toFixed(2)}
              </span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>

              <span>FREE</span>
            </div>

            <hr />

            <div className="summary-row total">
              <span>Grand Total</span>

              <span>
                ${getCartTotal().toFixed(2)}
              </span>
            </div>

            <button
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Place Order
            </button>

            <button
              className="clear-btn"
              onClick={handleClear}
            >
              Clear Cart
            </button>

          </div>
        </>
      )}

    </main>
  );
}