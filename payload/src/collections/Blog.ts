import { CollectionConfig } from 'payload/types';

export const Blog: CollectionConfig = {
  slug: 'blog',
  labels: { singular: 'Článek', plural: 'Blog' },
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'perex', type: 'textarea', label: 'Perex' },
    { name: 'content', type: 'richText' },
    { name: 'publishedDate', type: 'date', required: true },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
};
