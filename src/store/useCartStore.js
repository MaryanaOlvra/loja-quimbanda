import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  cartItems: [],

  // Adicionar item ao carrinho ou incrementar quantidade se já existir
  addToCart: (product) => {
    const currentItems = get().cartItems;
    const existingIndex = currentItems.findIndex((item) => item.id === product.id);

    if (existingIndex > -1) {
      const updatedItems = [...currentItems];
      updatedItems[existingIndex].quantity += 1;
      set({ cartItems: updatedItems });
    } else {
      set({ cartItems: [...currentItems, { ...product, quantity: 1 }] });
    }
  },

  // Remover item do carrinho
  removeFromCart: (productId) => {
    set({
      cartItems: get().cartItems.filter((item) => item.id !== productId)
    });
  },

  // Atualizar quantidade de um item específico
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }
    set({
      cartItems: get().cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    });
  },

  // Limpar todo o carrinho
  clearCart: () => set({ cartItems: [] }),

  // Getter para calcular o subtotal com precisão
  getSubtotal: () => {
    return get().cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));