import { CheckCircle2 } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    highlight: false,
    blurb: 'Event tracking, basic funnels, email support',
    features: ['Unlimited projects', '3 team members', 'Core dashboards']
  },
  {
    name: 'Pro',
    price: '$29/mo',
    highlight: true,
    blurb: 'Advanced analysis for growing teams',
    features: ['Cohorts & retention', 'Unlimited funnels', 'Data export & API', 'SSO & role-based access']
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    highlight: false,
    blurb: 'Scale with confidence',
    features: ['Custom SLAs', 'VPC & SSO', 'Security reviews', 'Dedicated success']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Pricing that scales with you</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you’re ready to go deeper.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 ${
                tier.highlight
                  ? 'border-slate-900 bg-slate-900 text-white shadow-[0_0_0_1px_rgba(15,23,42,1)]'
                  : 'border-slate-200 bg-white text-slate-900 shadow-sm'
              }`}
            >
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className={`mt-1 text-sm ${tier.highlight ? 'text-white/80' : 'text-slate-600'}`}>{tier.blurb}</p>
              <p className="mt-3 text-3xl font-bold">{tier.price}</p>

              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className={tier.highlight ? 'text-white' : 'text-slate-900'} size={18} />
                    <span className={tier.highlight ? 'text-white/90' : 'text-slate-700'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#get-started"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-medium transition ${
                  tier.highlight
                    ? 'bg-white text-slate-900 hover:bg-slate-100'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {tier.highlight ? 'Start Pro' : 'Choose plan'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
