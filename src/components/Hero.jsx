import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate min-h-[86vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center text-white md:pt-36">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur">
          <Sparkles size={14} />
          Modern SaaS starter designed for speed
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Launch your product while it’s still loading
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">
          Turn the wait into a wow. Our minimalist, tech-forward experience keeps users engaged from 0% to 100% — so your product feels fast, polished, and premium.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90"
          >
            Start free
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:border-white/30"
          >
            See features
          </a>
        </div>
      </div>
    </section>
  );
}
