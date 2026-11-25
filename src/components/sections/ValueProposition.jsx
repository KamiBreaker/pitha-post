import SectionLabel from '../ui/SectionLabel';

const PILLARS = [
  {
    icon: '🌾',
    title: 'Small-batch ingredients',
    body:  'We source stone-ground aromatic rice flour, pure khejur gur from Jessore, and fresh grated coconut in small weekly batches for true seasonal flavor.',
  },
  {
    icon: '📜',
    title: 'Keepsake recipe cards',
    body:  'Each kit includes a durable step-by-step card with exact proportions and family timing tips for every pitha variety.',
  },
  {
    icon: '🛵',
    title: 'Delivered across Dhaka',
    body:  'We ship right to your doorstep in weekend batches across Dhaka. You confirm or skip each monthly delivery before the 25th on WhatsApp.',
  },
];

export default function ValueProposition() {
  return (
    <section className="bg-pale-green/70 border-b border-forest/10 py-16 lg:py-24">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-label uppercase text-warm-gray mb-2">
            <span className="text-gold">✦</span>
            <span>Why Pitha Post</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest text-balance">
            Everything you need. Nothing you don&rsquo;t.
          </h2>
          <p className="text-warm-gray text-sm sm:text-base mt-3 leading-relaxed">
            Eliminating the four-market run so you can jump straight to the joy of making traditional winter delicacies together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PILLARS.map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-cream rounded-3xl p-8 border border-forest/10 shadow-soft hover:shadow-lift transition-all duration-300 flex flex-col gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-pale-green border border-forest/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-forest">
                {title}
              </h3>
              <p className="text-sm text-warm-gray leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
