import { Payload } from 'payload';

export async function seed(payload: Payload) {
  // Check if already seeded
  const existing = await payload.find({ collection: 'users', depth: 0 });
  if (existing.totalDocs > 0) return;

  // Admin user
  await payload.create({
    collection: 'users',
    data: {
      email: 'radim@radimkocian.cz',
      password: 'change-me-first',
      name: 'Radim Kocián',
      role: 'admin',
    },
  });

  // Media placeholder
  const media = await payload.create({
    collection: 'media',
    data: {},
    file: {
      data: Buffer.from(
        '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"><rect width="400" height="200" fill="#1e293b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="24">Radim Kocián</text></svg>',
      ),
      mimetype: 'image/svg+xml',
      name: 'hero.svg',
      size: 0,
    },
  });

  // Products
  const d1 = await payload.create({ collection: 'products', data: { name: 'Strategické konzultace', description: 'Balíček 3 hodinových konzultací', type: 'sluzba', price: 5000, slug: 'strategicke-konzultace', image: media.id, isActive: true } });
  const d2 = await payload.create({ collection: 'products', data: { name: 'Koučink leadershipu', description: 'Měsíční program 4 setkání', type: 'sluzba', price: 12000, slug: 'koucink-leadershipu', image: media.id, isActive: true } });
  const d3 = await payload.create({ collection: 'products', data: { name: 'Workshop na míru', description: 'Celodenní workshop pro váš tým', type: 'sluzba', price: 25000, slug: 'workshop-na-miru', image: media.id, isActive: true } });
  const d4 = await payload.create({ collection: 'products', data: { name: 'E-book: Moderní leadership', description: 'PDF s praktickými nástroji', type: 'digitalni', price: 299, slug: 'e-book-moderni-leadership', image: media.id, isActive: true, stripePriceId: 'price_xxx' } });
  const d5 = await payload.create({ collection: 'products', data: { name: 'Šablona: Strategie 2025', description: 'Strukturovaná šablona pro tvorbu strategie', type: 'digitalni', price: 499, slug: 'sablona-strategie', image: media.id, isActive: true, stripePriceId: 'price_yyy' } });

  // Blog
  await payload.create({ collection: 'blog', data: { title: '5 kroků k úspěšné transformaci', slug: '5-kroku-transformace', perex: 'V článku se dozvíte...', content: [{ children: [{ text: 'Zde bude obsah článku...' }] }], publishedDate: '2024-12-01' } });

  // Page O mně
  await payload.create({ collection: 'pages', data: { title: 'O mně', slug: 'o-mne', content: [{ children: [{ text: 'Radim Kocián je...' }] }] } });
}
