'use client';
import Link from 'next/link';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCartStore } from './CartProvider';

export default function Navbar() {
  const items = useCartStore((s) => s.items);
  const count = items.reduce((sum, i) => sum + i.qty, 0);
  return (
    <nav className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-2xl text-brand-600">Radim Kocián</Link>
        <div className="hidden md:flex space-x-6 text-sm">
          <Link href="/sluzby">Služby</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/obchod">Obchod</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/kosik" className="relative">
            <ShoppingCart className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <button className="md:hidden"><Menu /></button>
        </div>
      </div>
    </nav>
  );
}
