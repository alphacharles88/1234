import { ArrowRight, Play, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { dishes } from '../data/menuData';
import { useState } from 'react';

export default function HeroSection() {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const featuredBurger = dishes.find((d) => d.id === 6) || {
    id: 6,
    name: 'Spicy Zinger Burger & Fries',
    price: 5500,
    originalPrice: 7000,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=350&fit=crop',
  };

  const handleAddFeatured = () => {
    addToCart(featuredBurger);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-orange-50/70 border border-orange-100/60 rounded-3xl mx-4 md:mx-6 mt-4 md:mt-6 shadow-xs scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10 lg:p-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full w-fit">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            #1 Food Delivery in Nigeria
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
            Delicious Food{' '}
            <span className="text-primary block sm:inline">Delivered Fast.</span>
          </h2>

          <p className="text-gray-500 text-base md:text-lg max-w-md leading-relaxed">
            Discover the best African delicacies, gourmet continental grills, and exclusive offers near
            you. Fresh, hot, and straight to your doorstep.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection('menu')}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 cursor-pointer"
            >
              Order Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3.5 rounded-xl border border-gray-200 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <Play className="w-4 h-4 text-primary fill-primary" />
              Explore Menu
            </button>
          </div>

          {/* Trust Indicator */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex -space-x-2">
              {[
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Customer"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-9 h-9 rounded-full border-2 border-white bg-primary text-white text-xs font-bold flex items-center justify-center">
                50K+
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">50,000+ Happy Foodies</p>
              <p className="text-xs text-gray-400">Loving fast deliveries in Lagos & Abuja</p>
            </div>
          </div>
        </div>

        {/* Right — Featured Meal Card */}
        <div className="relative flex items-center justify-center">
          {/* Decorative circles */}
          <div className="absolute w-72 h-72 bg-primary/15 rounded-full -top-10 -right-10 blur-3xl" />
          <div className="absolute w-48 h-48 bg-orange-200/50 rounded-full bottom-0 left-0 blur-2xl" />

          <div className="relative bg-white rounded-3xl shadow-2xl shadow-gray-200/80 border border-gray-100 p-5 max-w-sm w-full">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=350&fit=crop"
              alt="Spicy Zinger Burger"
              className="w-full h-48 object-cover rounded-2xl"
            />
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="bg-red-100 text-red-600 text-xs font-semibold px-2.5 py-0.5 rounded-md">
                  🔥 Hot Deal
                </span>
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-md">
                  Free Fries & Drink
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Spicy Zinger Burger & Fries</h3>
              <p className="text-xs text-gray-400 mt-1">
                With crunchy coleslaw, fries & cold drink
              </p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                <div>
                  <span className="text-xl font-black text-primary">₦5,500</span>
                  <span className="text-xs text-gray-400 line-through ml-2">₦7,000</span>
                </div>
                <button
                  onClick={handleAddFeatured}
                  className="bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-primary/20 flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" /> Added!
                    </>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
