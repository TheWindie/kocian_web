'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'qty'>) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (newItem) =>
        set((state) => {
          const existing = state.items.find((i) => i.productId === newItem.productId);
          if (existing) {
            return { items: state.items.map((i) => i.productId === newItem.productId ? { ...i, qty: i.qty + 1 } : i) };
          }
          return { items: [...state.items, { ...newItem, qty: 1 }] };
        }),
      removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.productId !== id) })),
      clearCart: () => set({ items: [] }),
    }),
    { name: 'kocian-cart' }
  )
);
