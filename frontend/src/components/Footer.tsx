export default function Footer() {
  return (
    <footer className="border-t py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Radim Kocián. Všechna práva vyhrazena.
      </div>
    </footer>
  );
}
