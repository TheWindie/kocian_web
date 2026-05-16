'use client';
import { useCartStore } from '@/components/CartProvider';
import Link from 'next/link';

export default function Kosik() {
  const { items, removeItem } = useCartStore();
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  const checkout = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  if (items.length === 0) return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <p className="text-xl mb-4">Košík je prázdný</p>
      <Link href="/obchod" className="text-brand-600 underline">Zpět do obchodu</Link>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Váš košík</h1>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.productId} className="flex justify-between border-b pb-2">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.price} Kč × {item.qty}</p>
            </div>
            <button onClick={() => removeItem(item.productId)} className="text-red-500">Odstranit</button>
          </li>
        ))}
      </ul>
      <div className="text-right text-2xl font-bold mt-6 mb-8">Celkem: {total} Kč</div>
      <button onClick={checkout} className="w-full bg-brand-600 text-white py-3 rounded-lg font-semibold hover:bg-brand-700">
        Pokračovat k platbě
      </button>
    </div>
  );
}
