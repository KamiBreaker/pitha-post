import { Link } from 'react-router-dom';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';

// Customer purchase journey stages
const STEPS = [
  {
    num: '01',
    title: 'Choose your kit',
    body: 'Select your preferred winter assortment: Bhapa, Malpoa, Teler, Pakon, the Winter Trio, or a one-time Gift Box.',
    icon: '📦',
    tag: 'Discovery',
  },
  {
    num: '02',
    title: 'Share delivery details',
    body: 'Provide your name, phone number, and Dhaka neighborhood. No complex account creation or passwords needed.',
    icon: '📱',
    tag: 'Cart & Form',
  },
  {
    num: '03',
    title: 'Confirm on WhatsApp',
    body: 'Our system prepares a structured WhatsApp message. You confirm delivery day, bKash or cash, and special requests.',
    icon: '💬',
    tag: 'Direct Checkout',
  },
  {
    num: '04',
    title: 'We mill & dispatch',
    body: 'Fresh date molasses and stone-ground rice flour are packed in small weekly batches for weekend delivery in Dhaka.',
    icon: '🛵',
    tag: 'Fulfillment',
  },
  {
    num: '05',
    title: 'Renew on your terms',
    body: 'No sneaky credit card rebilling. Before the next 25th, we ping you on WhatsApp: confirm, customize, or pause.',
    icon: '🔄',
    tag: 'Manual Renewal',
  },
];

// Business Model Framework
const CANVAS = [
  {
    label: 'Customer Segments',
    value: 'Urban Dhaka families seeking nostalgic winter traditions without market hassle; busy food enthusiasts; diaspora gifting loved ones back home.',
    icon: '👥',
  },
  {
    label: 'Value Proposition',
    value: 'Pre-portioned, farm-sourced ingredients and fool-proof heritage recipes that transform an intimidating kitchen process into a delightful 30-minute family tradition.',
    icon: '🌾',
  },
  {
    label: 'Channels & Journey',
    value: 'Responsive web catalogue for frictionless product discovery + WhatsApp business messaging for customer service, payment coordination, and order confirmation.',
    icon: '📲',
  },
  {
    label: 'Revenue Model',
    value: 'Subscription boxes (৳600 to ৳1,150/mo) with manual opt-in renewal, alongside one-time gift boxes (৳900 to ৳950). Zero payment gateway transaction fees.',
    icon: '💳',
  },
  {
    label: 'Key Activities & Sourcing',
    value: 'Direct partnership with date palm jaggery tappers in Jessore, fresh small-batch milling of aromatic rice, recipe card printing, and weekly batch distribution across Dhaka.',
    icon: '🍯',
  },
  {
    label: 'Core KPIs',
    value: 'Monthly Active Subscribers, Re-order Rate (retention without auto-renew), Average Order Value (৳1,150 target), and WhatsApp Conversion Rate.',
    icon: '📊',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="max-w-content mx-auto px-6 lg:px-10">

        {/* 1. Customer Purchase Journey */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <SectionLabel>The customer purchase journey</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest mt-3 text-balance">
                Your pitha month, step by step.
              </h2>
            </div>
            <p className="text-sm text-warm-gray max-w-md">
              Designed specifically for Dhaka: minimal friction, zero unexpected charges, and human confirmation on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="bg-parchment rounded-3xl p-6 border-2 border-forest shadow-stamp flex flex-col justify-between gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-rich"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-cream border-2 border-forest flex items-center justify-center text-2xl shadow-sm">
                      {step.icon}
                    </span>
                    <span className="font-mono text-xs font-bold text-parchment bg-forest px-2.5 py-1 rounded-sm border border-forest-deep">
                      {step.num}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-terracotta">
                    {step.tag}
                  </span>

                  <h3 className="font-serif text-lg font-bold text-forest mt-1">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-forest/80 leading-relaxed mt-2">
                    {step.body}
                  </p>
                </div>

                <div className="pt-3 border-t border-forest/10 flex items-center text-[11px] font-mono font-bold text-terracotta">
                  <span>Step {step.num} of 05</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Business Model Canvas Overview */}
        <div className="bg-forest text-parchment rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-forest-deep shadow-stamp-mustard relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-forest-light/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-mustard mb-3">
              <span className="text-sm">✦</span>
              <span>Academic E-Business Framework</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-parchment text-balance mb-4">
              The Pitha Post E-Business Model
            </h2>

            <p className="text-parchment/70 text-sm sm:text-base max-w-2xl leading-relaxed mb-12">
              How a seasonal Bengali cultural staple is transformed into a modern, low-overhead D2C e-business with high customer trust and zero payment gateway friction.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CANVAS.map(({ label, value, icon }) => (
                <div
                  key={label}
                  className="bg-parchment/10 hover:bg-parchment/15 rounded-2xl p-6 border border-parchment/15 backdrop-blur-sm transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="text-lg">{icon}</span>
                      <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-mustard">
                        {label}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-parchment/80 leading-relaxed">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-parchment/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-3 text-xs text-parchment/60 font-mono">
                <span className="w-2 h-2 rounded-full bg-mustard" />
                <span>Designed for submission in the E-Business Strategy course (Dec 2026).</span>
              </div>

              <Button
                as={Link}
                to="/boxes"
                variant="secondary"
                size="md"
                className="bg-mustard text-forest hover:bg-mustard-light font-bold border-2 border-forest shadow-stamp"
              >
                Explore the box catalogue &rarr;
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
