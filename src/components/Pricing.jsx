import { CheckCircle2 } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    highlight: false,
    features: ['Interactive loader', 'Basic customization', 'Email support']
  },
  {
    name: 'Pro',
    price: '$19/mo',
    highlight: true,
    features: ['Everything in Starter', 'Brand kit & themes', 'Analytics & events', 'Priority support']
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    highlight: false,
    features: ['Custom SLAs', 'Security reviews', 'Dedicated success manager']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Simple pricing, clear value</h2>
          <p className="mt-3 text-white/70">Start free. Upgrade when you’re ready to impress at scale.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 ${
                tier.highlight
                  ? 'border-white/20 bg-white text-black shadow-[0_0_0_1px_rgba(255,255,255,0.2)]'
                  : 'border-white/10 bg-white/5 text-white'
              }`}
            >
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="mt-2 text-3xl font-bold">{tier.price}</p>

              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className={tier.highlight ? 'text-black' : 'text-white'} size={18} />
                    <span className={tier.highlight ? 'text-black/80' : 'text-white/80'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#get-started"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-medium transition ${
                  tier.highlight
                    ? 'bg-black text-white hover:bg-black/90'
                    : 'bg-white text-black hover:bg-white/90'
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
