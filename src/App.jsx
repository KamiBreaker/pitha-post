import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import ScrollToTop from './components/layout/ScrollToTop';
import PageTransition from './components/layout/PageTransition';
import Home from './pages/Home';
import Boxes from './pages/Boxes';
import HowItWorks from './pages/HowItWorks';
import OurStory from './pages/OurStory';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"              element={<PageTransition><Home /></PageTransition>} />
        <Route path="/boxes"         element={<PageTransition><Boxes /></PageTransition>} />
        <Route path="/how-it-works"  element={<PageTransition><HowItWorks /></PageTransition>} />
        <Route path="/our-story"     element={<PageTransition><OurStory /></PageTransition>} />
        {/* Catch-all → Home */}
        <Route path="*"              element={<PageTransition><Home /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-parchment-light">
          <Navbar />
          <CartDrawer />

          <div className="flex-1">
            <AnimatedRoutes />
          </div>

          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
