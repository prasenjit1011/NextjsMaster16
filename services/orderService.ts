import axios from "axios";

const ORDER_API = process.env.NEXT_PUBLIC_BACKEND_API + "/api/orders";

export interface CartItem {
  id: number;
  quantity: number;
  price: number;
}

export async function createOrder(
  cart: CartItem[],
  userId: number
) {
  const response = await fetch(ORDER_API, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify({
      userId,
      items: cart.map((item) => ({
        productId: item.id,
        qty: item.quantity,
        price: item.price,
      })),
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to create order");
  }

  return result.data;
}

export const getOrders = async (
  page: number = 1,
  limit: number = 10
) => {
  const res = await axios.get(ORDER_API, {
    params: {
      page,
      limit,
    },
    withCredentials: true,
  });

  return res.data;
};

export const deleteOrder = async (
  id: number | string
) => {
  const res = await axios.delete(`${ORDER_API}/${id}`, {
    withCredentials: true,
  });

  return res.data;
};