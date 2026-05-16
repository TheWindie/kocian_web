'use client';
import { useCartStore } from '@/components/CartProvider';

export default function AddToCartButton({ product }: { product: any }) {
  const addItem = useCartStore((s) => s.addItem);
  return (
    <button
      onClick={() => addItem({ productId: product.id, name: product.name, price: product.price, image: product.image })}
      className="bg-brand-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-700 transition"
    >
      Přidat do košíku
    </button>
  );
}
