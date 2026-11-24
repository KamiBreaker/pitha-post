import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import OrderForm from './OrderForm';
import OrderReview from './OrderReview';
import OrderConfirmation from './OrderConfirmation';
import Button from '../ui/Button';
import { businessConfig } from '../../config/business';
import { Link } from 'react-router-dom';
import AlpanaMotif from '../ui/AlpanaMotif';

const STEP_TITLES = {
  cart:         'Your Pitha Bag / পিঠার ঝুলি',
  form:         'Delivery Address / ঠিকানা',
  review:       'Review Parcel / যাচাই করুন',
  confirmation: 'Order Dispatched / সম্পন্ন!',
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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fluid Backdrop Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-forest-deep/60 backdrop-blur-sm cursor-pointer"
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Fluid Drawer Slide-in with Spring Physics */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-50 h-full w-full sm:max-w-md bg-parchment shadow-rich flex flex-col border-l-2 border-forest"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b-2 border-forest/15 bg-parchment-light">
              <div>
                <div className="flex items-center gap-1.5">
                  <AlpanaMotif className="w-3 h-3 text-terracotta" />
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-terracotta">
                    PITHA POST &bull; DHAKA
                  </span>
                </div>
                <h2 className="font-serif text-xl font-black text-forest mt-0.5">
                  {STEP_TITLES[step]}
                </h2>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeCart}
                aria-label="Close bag drawer"
                className="w-9 h-9 rounded-full border-2 border-forest flex items-center justify-center text-forest hover:bg-forest hover:text-parchment transition-colors text-sm font-bold cursor-pointer shadow-sm"
              >
                ✕
              </motion.button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto scrollbar-thin px-6 py-6">

              {/* Cart step */}
              {step === 'cart' && (
                <>
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full min-h-[300px] gap-4 text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-forest text-mustard flex items-center justify-center text-2xl border-2 border-forest shadow-stamp">
                        🫓
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-black text-forest">Your bag is empty.</h3>
                        <p className="text-xs text-forest/70 mt-1.5 max-w-xs leading-relaxed">
                          Choose your favorite winter pitha kit to get started with this month&rsquo;s fresh Dhaka delivery.
                        </p>
                      </div>
                      <Link
                        to="/boxes"
                        onClick={closeCart}
                        className="mt-3 bg-terracotta hover:bg-terracotta-deep text-parchment-light font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full border-2 border-forest shadow-stamp active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                      >
                        Browse Boxes &rarr;
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="divide-y-2 divide-forest/10">
                        {items.map((item) => (
                          <CartItem key={item.id} item={item} />
                        ))}
                      </div>

                      {/* Manual Renewal Notice Badge */}
                      <div className="bg-mustard/20 rounded-2xl p-4 border-2 border-mustard/60 text-xs text-forest leading-relaxed flex items-start gap-3">
                        <span className="text-lg shrink-0">✋</span>
                        <div>
                          <strong className="font-bold block text-forest">No automated rebilling.</strong>
                          You will confirm each month&rsquo;s order separately on WhatsApp before delivery.
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
              <div className="border-t-2 border-forest/15 px-6 py-5 bg-parchment-light space-y-4">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-xs font-mono font-bold text-forest/70 block uppercase">Subtotal</span>
                    <span className="text-[10px] text-warm-gray">Flat delivery fee confirmed on WhatsApp</span>
                  </div>
                  <span className="font-serif text-2xl font-black text-forest">
                    {currency}{total.toLocaleString()}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStep('form')}
                  className="w-full py-4 rounded-full font-bold text-sm tracking-wide bg-terracotta hover:bg-terracotta-deep text-parchment-light border-2 border-forest shadow-stamp active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Continue to Delivery Details</span>
                  <span className="font-mono">&rarr;</span>
                </motion.button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
