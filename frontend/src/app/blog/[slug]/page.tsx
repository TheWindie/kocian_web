import { fetchAPI } from '@/lib/api';
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const data = await fetchAPI(`/blog?where[slug][equals]=${params.slug}&depth=2`);
  if (!data.docs.length) notFound();
  const post = data.docs[0];
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">{new Date(post.publishedDate).toLocaleDateString('cs')}</p>
      <div className="prose dark:prose-invert max-w-none">
        {/* render rich text as HTML */}
        <div dangerouslySetInnerHTML={{ __html: post.content?.[0]?.children?.[0]?.text || '' }} />
      </div>
    </article>
  );
}
