import { BarChart3, Gauge, Shield, Layers } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Funnels & conversion',
    desc: 'Visualize drop‑offs across journeys and optimize the steps that matter most.'
  },
  {
    icon: Layers,
    title: 'Cohorts & segmentation',
    desc: 'Slice users by behavior or attributes to uncover patterns and drive retention.'
  },
  {
    icon: Gauge,
    title: 'Real‑time events',
    desc: 'Stream events as they happen. Answer questions in seconds, not days.'
  },
  {
    icon: Shield,
    title: 'Privacy built‑in',
    desc: 'Regional data controls, role‑based access, and audit trails for peace of mind.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Answer product questions fast</h2>
          <p className="mt-3 text-slate-600">
            Everything you need to go from raw events to clear insight—without the busywork.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 text-white">
                <f.icon size={18} />
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
