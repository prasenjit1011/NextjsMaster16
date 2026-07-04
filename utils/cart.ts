export interface CartItem {
  id: number;
  name: string;
  description?: string;
  sku?: string;
  price: number;
  image?: string;
  quantity: number;
}

const CART_KEY = "shopping_cart";

/**
 * Get all cart items
 */
export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const cart = localStorage.getItem(CART_KEY);

    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error("Unable to read cart:", error);
    return [];
  }
}

/**
 * Save cart
 */
function saveCart(cart: CartItem[]) {
  if (typeof window === "undefined") return;

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

/**
 * Add item to cart
 */
export function addToCart(
  product: Omit<CartItem, "quantity">
) {
  const cart = getCart();

  const existing = cart.find(
    (item) => item.id === product.id
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  saveCart(cart);
}

/**
 * Remove item
 */
export function removeFromCart(id: number) {
  const cart = getCart().filter(
    (item) => item.id !== id
  );

  saveCart(cart);
}

/**
 * Increase quantity
 */
export function increaseQty(id: number) {
  const cart = getCart();

  const item = cart.find((x) => x.id === id);

  if (item) {
    item.quantity++;
  }

  saveCart(cart);
}

/**
 * Decrease quantity
 */
export function decreaseQty(id: number) {
  const cart = getCart();

  const item = cart.find((x) => x.id === id);

  if (!item) return;

  item.quantity--;

  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }

  saveCart(cart);
}

/**
 * Update quantity
 */
export function updateQuantity(
  id: number,
  quantity: number
) {
  const cart = getCart();

  const item = cart.find((x) => x.id === id);

  if (!item) return;

  if (quantity <= 0) {
    removeFromCart(id);
    return;
  }

  item.quantity = quantity;

  saveCart(cart);
}

/**
 * Clear cart
 */
export function clearCart() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(CART_KEY);
}

/**
 * Total number of items
 */
export function getCartCount(): number {
  const cart = getCart();

  return cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
}

/**
 * Total price
 */
export function getCartTotal(): number {
  const cart = getCart();

  return cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

/**
 * Get single cart item
 */
export function getCartItem(id: number) {
  return getCart().find(
    (item) => item.id === id
  );
}

/**
 * Check if product already exists
 */
export function isInCart(id: number): boolean {
  return getCart().some(
    (item) => item.id === id
  );
}