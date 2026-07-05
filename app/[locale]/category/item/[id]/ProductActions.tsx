"use client";

import Swal from "sweetalert2";
import AddToCartButton from "@/app/components/AddToCartButton";

interface Product {
  id: number;
  name: string;
  description: string;
  sku: string;
  price: number;
  image: string;
}

interface Props {
  product: Product;
}

export default function ProductActions({
  product,
}: Props) {
  const handleBuyNow = async () => {
    const result = await Swal.fire({
      title: "Buy this product?",
      text: product.name,
      icon: "question",
      confirmButtonText: "Buy Now",
      cancelButtonText: "Cancel",
      showCancelButton: true,
      confirmButtonColor: "#1976d2",
    });

    if (!result.isConfirmed) return;

    await Swal.fire({
      icon: "success",
      title: "Order Confirmed 🎉",
      text: "Your order has been placed successfully.",
      confirmButtonColor: "#1976d2",
    });
  };

  const handleWishlist = async () => {
    const wishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );

    const exists = wishlist.find(
      (item: Product) => item.id === product.id
    );

    if (exists) {
      Swal.fire({
        icon: "info",
        title: "Already Added",
        text: "This product is already in your wishlist.",
      });

      return;
    }

    wishlist.push(product);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

    Swal.fire({
      icon: "success",
      title: "Added to Wishlist ❤️",
      timer: 1800,
      showConfirmButton: false,
      toast: true,
      position: "top-end",
    });
  };

  return (
    <div className="action-buttons">
      <AddToCartButton product={product} />

      <button
        className="buy-btn"
        onClick={handleBuyNow}
      >
        ⚡ Buy Now
      </button>

      <button
        className="wishlist-btn"
        onClick={handleWishlist}
      >
        ❤️ Wishlist
      </button>
    </div>
  );
}