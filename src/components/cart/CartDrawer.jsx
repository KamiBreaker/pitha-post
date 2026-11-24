import { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import OrderForm from './OrderForm';
import OrderReview from './OrderReview';
import OrderConfirmation from './OrderConfirmation';
import Button from '../ui/Button';
import { businessConfig } from '../../config/business';
import { Link } from 'react-router-dom';

const STEP_TITLES = {
  cart:         'Your pitha bag',
  form:         'Delivery details',
  review:       'Review your order',
  confirmation: 'Order confirmed!',
};

export default function CartDrawer() {
  const { isOpen, closeCart, items, step, setStep, total, itemCount } = useCart();
  const { currency } = businessConfig;

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') closeCart(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [closeCart]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-forest/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-full sm:max-w-md
          bg-cream shadow-float flex flex-col border-l border-forest/10
          transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-forest/10 bg-pale-green/40">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gold">✦</span>
              <span className="text-[10px] font-sans font-semibold tracking-label uppercase text-warm-gray">
                Pitha Post
              </span>
            </div>
            <h2 className="font-serif text-xl font-bold text-forest mt-0.5">
              {STEP_TITLES[step]}
            </h2>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close bag drawer"
            className="w-9 h-9 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:bg-pale-green hover:border-forest/40 transition-all text-sm font-semibold active:scale-95"
          >
            ✕
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto scrollbar-thin px-6 py-6">

          {/* Cart step */}
          {step === 'cart' && (
            <>
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[300px] gap-4 text-center py-12">
                  <span className="w-16 h-16 rounded-full bg-pale-green flex items-center justify-center text-3xl shadow-sm">
                    🫓
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-forest">Your bag is empty.</h3>
                    <p className="text-xs text-warm-gray mt-1 max-w-xs leading-relaxed">
                      Choose your favorite winter pitha kit to get started with this month&rsquo;s delivery.
                    </p>
                  </div>
                  <Button
                    as={Link}
                    to="/boxes"
                    variant="primary"
                    size="md"
                    onClick={closeCart}
                    className="mt-2"
                  >
                    Browse boxes &rarr;
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="divide-y divide-forest/10">
                    {items.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </div>

                  {/* Manual Renewal Notice */}
                  <div className="bg-peach rounded-2xl p-4 border border-terracotta/20 text-xs text-terracotta leading-relaxed flex items-start gap-3">
                    <span className="text-base shrink-0">🌿</span>
                    <div>
                      <strong className="font-semibold block text-forest">Zero auto-renewal.</strong>
                      You will confirm each month&rsquo;s fresh order separately on WhatsApp before delivery.
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {step === 'form' && <OrderForm />}
          {step === 'review' && <OrderReview />}
          {step === 'confirmation' && <OrderConfirmation />}
        </div>

        {/* Footer actions on cart step */}
        {step === 'cart' && items.length > 0 && (
          <div className="border-t border-forest/10 px-6 py-5 bg-pale-green/20 space-y-4">
            <div className="flex justify-between items-baseline">
              <div>
                <span className="text-xs text-warm-gray block">Subtotal</span>
                <span className="text-[11px] text-warm-gray-light">Delivery fee confirmed on WhatsApp</span>
              </div>
              <span className="font-serif text-2xl font-bold text-forest">
                {currency}{total.toLocaleString()}
              </span>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="w-full shadow-soft"
              onClick={() => setStep('form')}
            >
              Continue to delivery &rarr;
            </Button>
          </div>
        )}
      </aside>
    </>
  );
}
