'use client';

import { addToCart } from '@/utils/cart';

interface Props {
  product: {
    id: number;
    name: string;
    description?: string;
    sku?: string;
    price: number;
    image?: string;
  };
}

export default function AddToCartButton({ product }: Props) {
  const handleAddToCart = () => {
    addToCart(product);

    alert(`${product.name} added to cart.`);
  };

  return (
    <button
      className="cart-btn"
      onClick={handleAddToCart}
    >
      🛒 Add to Cart
    </button>
  );
}