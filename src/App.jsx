import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <section id="cta" className="border-t border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-8 text-center md:flex-row md:text-left">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Power your product decisions with data</h3>
                <p className="mt-2 text-slate-600">Ship confidently with funnels, cohorts, and real-time event analytics designed for modern teams.</p>
              </div>
              <div className="flex items-center gap-3">
                <a href="#pricing" className="rounded-md bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-800">Get started</a>
                <a href="#features" className="rounded-md border border-slate-300 bg-white px-5 py-3 font-medium text-slate-900 hover:bg-slate-50">Explore features</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Metricly. Product analytics for teams that ship.
      </footer>
    </div>
  );
}

export default App;
