import HowItWorksSection from '../components/sections/HowItWorksSection';
import { Link } from 'react-router-dom';
import AlpanaMotif from '../components/ui/AlpanaMotif';

export default function HowItWorks() {
  return (
    <main className="bg-parchment min-h-screen">
      {/* 1. Page Header (Muted Cream) */}
      <div className="bg-cream border-b-2 border-forest/15 py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="bg-forest text-mustard px-3 py-1 rounded-sm text-xs font-mono font-bold uppercase tracking-widest inline-flex items-center gap-1.5 mb-3">
              <AlpanaMotif className="w-3 h-3 text-mustard" />
              THE PITHA POST DISPATCH ROUTE &bull; কাজের পদ্ধতি
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-black text-forest leading-tight">
              A modern D2C food model built on human trust.
            </h1>
            <p className="text-forest/80 text-base sm:text-lg mt-4 leading-relaxed">
              Built for Dhaka: no payment gateway hassle, no auto-rebilling, and fresh ingredients sourced straight from Jessore date palm tappers.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/boxes"
                className="bg-terracotta hover:bg-terracotta-deep text-parchment-light font-bold text-sm px-7 py-3.5 rounded-full border-2 border-forest shadow-stamp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
              >
                Order This Month&rsquo;s Parcel &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Journey & Framework Section */}
      <HowItWorksSection />

      {/* 3. Delivery & Policies Breakdown */}
      <section className="bg-cream py-16 lg:py-24 border-t-2 border-forest/15">
        <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-parchment rounded-3xl p-8 border-2 border-forest shadow-stamp">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-terracotta block mb-2">
                DELIVERY SCHEDULE &bull; ঢাকা মহানগরী
              </span>
              <h3 className="font-serif text-2xl font-bold text-forest mb-4">
                Dhaka-Wide Dispatch Log
              </h3>
              <ul className="space-y-3 text-sm text-forest/80">
                <li className="flex items-start gap-3">
                  <span className="text-forest font-bold text-base">&bull;</span>
                  <span><strong>Weekly Batch Dispatches:</strong> Boxes are assembled every Thursday evening and dispatched on Friday/Saturday mornings for weekend breakfast.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-forest font-bold text-base">&bull;</span>
                  <span><strong>Coverage:</strong> All sectors of Uttara, Mirpur, Dhanmondi, Gulshan, Banani, Bashundhara, Mohakhali, and Old Dhaka.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-forest font-bold text-base">&bull;</span>
                  <span><strong>Delivery Fee:</strong> Flat local delivery fee confirmed per area over WhatsApp during order preparation.</span>
                </li>
              </ul>
            </div>

            <div className="bg-parchment rounded-3xl p-8 border-2 border-forest shadow-stamp">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-terracotta block mb-2">
                HONEST SUBSCRIPTION POLICY
              </span>
              <h3 className="font-serif text-2xl font-bold text-forest mb-4">
                Manual Renewal Terms
              </h3>
              <ul className="space-y-3 text-sm text-forest/80">
                <li className="flex items-start gap-3">
                  <span className="text-forest font-bold text-base">&bull;</span>
                  <span><strong>No Automated Billing:</strong> Your credit card or bank credentials are never stored. Zero unauthorized renewals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-forest font-bold text-base">&bull;</span>
                  <span><strong>25th Cutoff Date:</strong> Before the 25th of every month, we send a WhatsApp reminder to confirm your upcoming parcel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-forest font-bold text-base">&bull;</span>
                  <span><strong>Skip or Pause Anytime:</strong> Simply decline or ignore the WhatsApp reminder to skip that month with zero penalties.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
