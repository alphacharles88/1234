import { useState } from 'react';
import { Search, Heart, ShoppingCart, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header({ onToggleSidebar, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount, toggleCart } = useCart();
  const [favorites] = useState(3);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch?.(value);

    // If searching, bring menu into view if scrolled above it
    if (value.trim().length === 1) {
      const menuEl = document.getElementById('menu');
      if (menuEl && window.scrollY < menuEl.offsetTop - 300) {
        menuEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const scrollToOrders = () => {
    const ordersEl = document.getElementById('orders');
    if (ordersEl) {
      ordersEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white/85 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="flex items-center gap-4 px-4 md:px-6 py-3">
        {/* Mobile Menu Toggle */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for dishes, cuisines, ingredients..."
            className="w-full pl-9 pr-4 py-2 bg-gray-50/90 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Favorites */}
          <button
            onClick={scrollToMenu}
            className="relative p-2.5 rounded-xl hover:bg-gray-100 transition-colors hidden sm:flex cursor-pointer"
            title="Saved Favorites (Click to view Menu)"
          >
            <Heart className="w-5 h-5 text-gray-600" />
            {favorites > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {favorites}
              </span>
            )}
          </button>

          {/* Cart */}
          <button
            onClick={toggleCart}
            className="relative p-2.5 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
            title="Open Shopping Cart"
          >
            <ShoppingCart className="w-5 h-5 text-gray-600" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Account */}
          <button
            onClick={scrollToOrders}
            className="p-1 rounded-xl hover:bg-gray-100 transition-colors hidden sm:flex cursor-pointer"
            title="Account & Orders"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white shadow-xs">
              <User className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
