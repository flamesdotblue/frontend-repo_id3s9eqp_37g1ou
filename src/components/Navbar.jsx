import { Rocket, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">Metricly</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
          <a href="#features" className="transition hover:text-slate-900">Features</a>
          <a href="#pricing" className="transition hover:text-slate-900">Pricing</a>
          <a href="#cta" className="transition hover:text-slate-900">Contact</a>
          <a
            href="#get-started"
            className="rounded-md bg-slate-900 px-4 py-2 font-medium text-white transition hover:bg-slate-800"
          >
            Get Started
          </a>
        </nav>

        <button
          className="md:hidden text-slate-900"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 text-slate-700">
            <a href="#features" className="py-2">Features</a>
            <a href="#pricing" className="py-2">Pricing</a>
            <a href="#cta" className="py-2">Contact</a>
            <a href="#get-started" className="mt-2 rounded-md bg-slate-900 px-4 py-2 text-white">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
