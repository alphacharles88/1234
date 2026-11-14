import { useEffect, useState } from 'react';
import {
  Home,
  UtensilsCrossed,
  LayoutGrid,
  Tag,
  CalendarCheck,
  ClipboardList,
  Star,
  Headphones,
  ChefHat,
  X,
} from 'lucide-react';
import { navItems } from '../data/menuData';

const iconMap = {
  Home,
  UtensilsCrossed,
  LayoutGrid,
  Tag,
  CalendarCheck,
  ClipboardList,
  Star,
  Headphones,
};

export default function Sidebar({ isOpen, onClose }) {
  const [activeItem, setActiveItem] = useState('Home');

  // Scroll spy: observe sections to update active nav item on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.sectionId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveItem(item.label);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setActiveItem(item.label);
    const target = document.getElementById(item.sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (onClose) onClose();
  };

  const handlePromoClick = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveItem('Menu');
    if (onClose) onClose();
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white/95 backdrop-blur-md border-r border-gray-200 z-50 flex flex-col transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen lg:z-30`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md shadow-primary/25">
            <ChefHat className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-gray-900 leading-tight tracking-tight">
              Chop <span className="text-primary">Life</span>
            </h1>
            <p className="text-xs text-primary font-medium">Fine Food & Grill</p>
          </div>
          <button
            onClick={onClose}
            className="ml-auto lg:hidden p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = iconMap[item.icon] || Home;
              const isActive = activeItem === item.label;
              return (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer text-left
                      ${
                        isActive
                          ? 'bg-primary text-white shadow-md shadow-primary/25 font-semibold translate-x-1'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Promo Card */}
        <div className="mx-4 mb-4 p-4 bg-gradient-to-br from-primary to-primary-dark rounded-2xl text-white shadow-lg shadow-primary/20">
          <div className="text-2xl font-extrabold mb-1">20% OFF</div>
          <p className="text-xs text-white/90 mb-3">on your first food delivery in Lagos & Abuja</p>
          <button
            onClick={handlePromoClick}
            className="w-full bg-white text-primary font-bold text-xs py-2.5 rounded-xl hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
          >
            Order Now &rarr;
          </button>
        </div>
      </aside>
    </>
  );
}
