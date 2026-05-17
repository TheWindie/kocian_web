import { fetchAPI } from '@/lib/api';
import AddToCartButton from './AddToCartButton';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const data = await fetchAPI(`/products?where[slug][equals]=${params.slug}&depth=1`);
  if (!data.docs.length) notFound();
  const p = data.docs[0];
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{p.name}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{p.description}</p>
      <p className="text-3xl font-bold mb-8">{p.price} Kč</p>
      <AddToCartButton product={{ id: p.id, name: p.name, price: p.price, image: p.image?.url }} />
    </div>
  );
}
