import { Rocket, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">Loadify</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href="#cta" className="transition hover:text-white">Contact</a>
          <a
            href="#get-started"
            className="rounded-md bg-white px-4 py-2 font-medium text-black transition hover:bg-white/90"
          >
            Get Started
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 text-white/80">
            <a href="#features" className="py-2">Features</a>
            <a href="#pricing" className="py-2">Pricing</a>
            <a href="#cta" className="py-2">Contact</a>
            <a href="#get-started" className="mt-2 rounded-md bg-white px-4 py-2 text-black">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
