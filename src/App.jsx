import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Home from './pages/Home';
import Boxes from './pages/Boxes';
import HowItWorks from './pages/HowItWorks';
import OurStory from './pages/OurStory';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <CartDrawer />

          <div className="flex-1">
            <Routes>
              <Route path="/"              element={<Home />} />
              <Route path="/boxes"         element={<Boxes />} />
              <Route path="/how-it-works"  element={<HowItWorks />} />
              <Route path="/our-story"     element={<OurStory />} />
              {/* Catch-all → Home */}
              <Route path="*"              element={<Home />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
