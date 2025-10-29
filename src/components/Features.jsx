import { Zap, Shield, Gauge, Layers } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant impact',
    desc: 'Engage users from the first frame with a responsive, interactive loading experience.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade',
    desc: 'Built with accessibility, performance, and reliability baked in from day one.'
  },
  {
    icon: Gauge,
    title: 'Performance tuned',
    desc: 'Optimized assets, smart lazy-loading, and best practices out of the box.'
  },
  {
    icon: Layers,
    title: 'Plug-and-play',
    desc: 'Flexible components that drop into any stack with minimal configuration.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything you need to look fast</h2>
          <p className="mt-3 text-white/70">
            A focused toolkit that makes your SaaS feel modern, premium, and lightning quick — before users even log in.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white text-black">
                <f.icon size={18} />
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
