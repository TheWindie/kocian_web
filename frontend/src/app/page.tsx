import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white dark:from-gray-900 dark:to-gray-950 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-brand-700 dark:text-brand-300 mb-6">
            Posouvám firmy dál
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Jmenuji se <strong>Radim Kocián</strong>. Pomohu vám definovat strategii,
            rozvíjet leadership a dosáhnout měřitelných výsledků.
          </p>
          <Link href="/sluzby" className="inline-block bg-brand-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-700 transition">
            Chci růst
          </Link>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {['Strategie', 'Koučink', 'Workshopy'].map((s, idx) => (
          <div key={idx} className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">{s}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {idx === 0 && 'Analýza trhu, vize, mise a exekuční plán.'}
              {idx === 1 && 'Individuální rozvoj lídrů a manažerů.'}
              {idx === 2 && 'Interaktivní tréninky šité na míru vaší firmě.'}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
