import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <section id="cta" className="border-t border-white/10 bg-black py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 text-center md:flex-row md:text-left">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Ready to turn wait time into wow time?</h3>
                <p className="mt-2 text-white/70">Integrate our interactive loading experience in minutes and ship with confidence.</p>
              </div>
              <div className="flex items-center gap-3">
                <a href="#pricing" className="rounded-md bg-white px-5 py-3 font-medium text-black hover:bg-white/90">Get started</a>
                <a href="#features" className="rounded-md border border-white/20 bg-white/5 px-5 py-3 font-medium text-white hover:border-white/30">Learn more</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Loadify. Built for modern SaaS.
      </footer>
    </div>
  );
}

export default App;
