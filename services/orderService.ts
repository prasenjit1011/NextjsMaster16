const API_BASE =
        process.env.NODE_ENV == 'production'
          ? process.env.NEXT_PUBLIC_BACKEND_API
          : process.env.NEXT_PUBLIC_BACKEND_API_LOCAL;

const ORDER_API = `${API_BASE}/api/orders`;

export interface CartItem {
  id: number;
  quantity: number;
  price: number;
}

const defaultOptions: RequestInit = {
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export async function createOrder(
  cart: CartItem[],
  userId: number
) {
  const response = await fetch(ORDER_API, {
    ...defaultOptions,
    method: "POST",
    body: JSON.stringify({
      userId,
      items: cart.map(({ id, quantity, price }) => ({
        productId: id,
        qty: quantity,
        price,
      })),
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.message || "Failed to create order");
  }

  return result.data;
}

export async function getOrders(
  page = 1,
  limit = 10
) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  const response = await fetch(`${ORDER_API}?${params}`, {
    ...defaultOptions,
    method: "GET",
    cache: "no-store",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.message || "Failed to fetch orders");
  }

  return result.data;
}

export async function deleteOrder(
  id: number | string
) {
  const response = await fetch(`${ORDER_API}/${id}`, {
    ...defaultOptions,
    method: "DELETE",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.message || "Failed to delete order");
  }

  return result.data;
}