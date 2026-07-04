import axios from "axios";

const API = "http://localhost:3001/api/orders";

const ORDER_API = "http://localhost:3001/api/orders";

export async function createOrder(cart: any[], userId: number) {
  const response = await fetch(ORDER_API, {
    method: "POST",
    credentials: 'include',
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




export const getOrders = async (page = 1, limit = 10) => {
    const res = await axios.get(ORDER_API, {
        params: {
            page,
            limit,
        },
        withCredentials: true,
    });

    return res.data;
};

export const deleteOrder = async (id) => {
    const res = await axios.delete(`${ORDER_API}/${id}`, {
        withCredentials: true,
    });

    return res.data;
};