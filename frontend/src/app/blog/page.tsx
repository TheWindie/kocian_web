import { fetchAPI } from '@/lib/api';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Blog() {
  const data = await fetchAPI('/blog?sort=-publishedDate&depth=1');
  const posts = data.docs;
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-6">
        {posts.map((post: any) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="block border rounded-lg p-6 hover:shadow-md transition">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="text-gray-500">{post.perex}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
