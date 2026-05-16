export default function Kontakt() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Kontakt</h1>
      <p className="mb-8">Napište mi nebo si rovnou rezervujte konzultaci.</p>
      <form className="space-y-4">
        <input type="text" placeholder="Jméno" className="w-full border px-4 py-2 rounded" />
        <input type="email" placeholder="E-mail" className="w-full border px-4 py-2 rounded" />
        <textarea placeholder="Vaše zpráva" rows={5} className="w-full border px-4 py-2 rounded" />
        <button type="submit" className="bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold">Odeslat</button>
      </form>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Kalendář</h2>
        <iframe src="https://cal.com/radim-kocian/30min" className="w-full h-[600px] border rounded-lg" />
      </div>
    </div>
  );
}
