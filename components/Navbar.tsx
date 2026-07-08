export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="text-xl font-bold text-white">DreamForge</div>

        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#">Create</a>
          <a href="#">Models</a>
          <a href="#">Pricing</a>
        </nav>

        <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">
          Sign In
        </button>
      </div>
    </header>
  );
}