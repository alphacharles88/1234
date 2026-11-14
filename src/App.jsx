import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureBar from './components/FeatureBar';
import CuisineCategories from './components/CuisineCategories';
import PopularDishes from './components/PopularDishes';
import PromoBanners from './components/PromoBanners';
import ReservationsSection from './components/ReservationsSection';
import OrdersSection from './components/OrdersSection';
import ReviewsSection from './components/ReviewsSection';
import SupportSection from './components/SupportSection';
import PartnerLogos from './components/PartnerLogos';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import InteractiveBackground from './components/InteractiveBackground';
import { ScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="relative min-h-screen bg-gray-50/70 font-sans text-gray-900 selection:bg-primary selection:text-white">
      {/* Interactive Floating Particle Background with Cursor Physics */}
      <InteractiveBackground />

      <div className="relative z-10 flex min-h-screen">
        {/* Sidebar Navigation */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <Header
            onToggleSidebar={() => setSidebarOpen((o) => !o)}
            onSearch={setSearchQuery}
          />

          <main className="flex-1 pb-10">
            {/* 1. Home Section */}
            <ScrollReveal direction="up" delay="100ms">
              <HeroSection />
            </ScrollReveal>

            {/* Feature Perks */}
            <ScrollReveal direction="up" delay="150ms">
              <FeatureBar />
            </ScrollReveal>

            {/* 2. Categories Section */}
            <ScrollReveal direction="up" delay="150ms">
              <CuisineCategories onSelectCuisine={(cat) => setSelectedCategory(cat)} />
            </ScrollReveal>

            {/* 3. Menu / Popular Dishes Section */}
            <ScrollReveal direction="up" delay="150ms">
              <PopularDishes
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </ScrollReveal>

            {/* 4. Offers & Promotions Section */}
            <ScrollReveal direction="up" delay="150ms">
              <PromoBanners />
            </ScrollReveal>

            {/* 5. Reservations Section */}
            <ScrollReveal direction="up" delay="150ms">
              <ReservationsSection />
            </ScrollReveal>

            {/* 6. Orders Tracker & History Section */}
            <ScrollReveal direction="up" delay="150ms">
              <OrdersSection />
            </ScrollReveal>

            {/* 7. Reviews & Ratings Section */}
            <ScrollReveal direction="up" delay="150ms">
              <ReviewsSection />
            </ScrollReveal>

            {/* 8. Support & FAQ Section */}
            <ScrollReveal direction="up" delay="150ms">
              <SupportSection />
            </ScrollReveal>

            {/* Trust Partner Logos */}
            <ScrollReveal direction="up" delay="150ms">
              <PartnerLogos />
            </ScrollReveal>
          </main>

          <Footer />
        </div>
      </div>

      {/* Slide-out Cart Drawer */}
      <CartDrawer />
    </div>
  );
}
