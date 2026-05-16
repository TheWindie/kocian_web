import { fetchAPI } from '@/lib/api';
import Link from 'next/link';

export default async function Obchod() {
  const data = await fetchAPI('/products?where[type][equals]=digitalni&depth=1');
  const produkty = data.docs;
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Digitální produkty</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {produkty.map((p: any) => (
          <div key={p.id} className="border rounded-xl p-6 flex flex-col">
            <h2 className="text-2xl font-bold mb-2">{p.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{p.description}</p>
            <p className="text-3xl font-bold text-brand-600 mb-6">{p.price} Kč</p>
            <Link href={`/obchod/${p.slug}`} className="mt-auto text-center bg-brand-600 text-white py-2 rounded-lg hover:bg-brand-700">
              Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
