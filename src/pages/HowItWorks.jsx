import HowItWorksSection from '../components/sections/HowItWorksSection';
import SectionLabel from '../components/ui/SectionLabel';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function HowItWorks() {
  return (
    <main>
      {/* Page header */}
      <div className="bg-pale-green border-b border-forest/10">
        <div className="max-w-content mx-auto px-6 py-16">
          <SectionLabel>A simple way to order</SectionLabel>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-forest mt-3 text-balance">
            Your pitha month starts with a message.
          </h1>
          <p className="text-warm-gray mt-4 max-w-xl text-lg leading-relaxed">
            Choose how many kits you'd like, share your delivery details, and
            confirm everything through WhatsApp. Fresh order each month — no
            auto-renewal, ever.
          </p>
          <Button as={Link} to="/boxes" variant="primary" size="md" className="mt-6">
            Order this month →
          </Button>
        </div>
      </div>

      {/* Journey + business model */}
      <HowItWorksSection />

      {/* Delivery & Policy callout */}
      <section className="bg-pale-green">
        <div className="max-w-content mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-2xl p-8">
              <SectionLabel className="mb-4">Delivery</SectionLabel>
              <h3 className="font-serif text-xl font-semibold text-forest mb-3">Within Dhaka</h3>
              <ul className="text-sm text-warm-gray space-y-2">
                <li>· Boxes ship in small weekly batches.</li>
                <li>· Delivery fee confirmed per order via WhatsApp.</li>
                <li>· Exact timing shared after order confirmation.</li>
                <li>· Currently Dhaka only — more areas coming.</li>
              </ul>
            </div>
            <div className="bg-cream rounded-2xl p-8">
              <SectionLabel className="mb-4">Subscription policy</SectionLabel>
              <h3 className="font-serif text-xl font-semibold text-forest mb-3">Your terms, your pace</h3>
              <ul className="text-sm text-warm-gray space-y-2">
                <li>· No automatic renewal — ever.</li>
                <li>· Place a fresh order before the 25th each month.</li>
                <li>· Skip any month simply by not ordering.</li>
                <li>· Payment arranged through WhatsApp (bKash or cash).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
