import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate min-h-[86vh] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Light overlays to ensure readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center text-slate-900 md:pt-36">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs text-slate-700 shadow-sm">
          <Sparkles size={14} />
          Product analytics for teams that ship
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Understand the why behind every click
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-600 md:text-lg">
          Metricly pairs a delightful, interactive loading experience with enterprise‑grade product analytics. Track events, build funnels, analyze cohorts, and ship with confidence.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800"
          >
            Start free
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 font-medium text-slate-900 transition hover:bg-slate-50"
          >
            See features
          </a>
        </div>
      </div>
    </section>
  );
}
