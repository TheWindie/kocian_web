import { CollectionConfig } from 'payload/types';

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'Produkt',
    plural: 'Produkty',
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'name', type: 'text', label: 'Název', required: true },
    { name: 'description', type: 'textarea', label: 'Popisek' },
    {
      name: 'type',
      type: 'select',
      options: ['sluzba', 'digitalni'],
      label: 'Typ produktu',
      required: true,
    },
    { name: 'price', type: 'number', label: 'Cena (Kč)', required: true },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Obrázek' },
    { name: 'slug', type: 'text', label: 'URL slug', required: true, unique: true },
    {
      name: 'stripePriceId',
      type: 'text',
      label: 'Stripe Price ID',
      admin: { condition: (data) => data.type === 'digitalni' },
    },
    { name: 'isActive', type: 'checkbox', label: 'Aktivní', defaultValue: true },
    { name: 'features', type: 'json', label: 'Vlastnosti (JSON pole)' },
  ],
};
