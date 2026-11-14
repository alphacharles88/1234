import { useState } from 'react';
import {
  ChefHat,
  Globe,
  MessageCircle,
  Camera,
  Play,
  Send,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError('');
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto relative z-10">
      <div className="px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">Chop <span className="text-primary">Life</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-sm text-gray-400">
              Delivering premium culinary happiness across Lagos and Abuja. Fresh ingredients,
              flavourful spices, and lightning-fast delivery to your doorstep.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Globe, href: 'https://choplife.ng', title: 'Website' },
                { Icon: MessageCircle, href: 'https://wa.me/2348012345678', title: 'WhatsApp' },
                { Icon: Camera, href: '#', title: 'Instagram' },
                { Icon: Play, href: '#', title: 'YouTube' },
              ].map(({ Icon, href, title }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  title={title}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('menu')} className="hover:text-white transition-colors cursor-pointer">
                  Explore Menu
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('categories')} className="hover:text-white transition-colors cursor-pointer">
                  Cuisines
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('offers')} className="hover:text-white transition-colors cursor-pointer">
                  Discounts & Offers
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reservations')} className="hover:text-white transition-colors cursor-pointer">
                  Table Reservations
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Orders */}
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => scrollToSection('orders')} className="hover:text-white transition-colors cursor-pointer">
                  Track Active Order
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reviews')} className="hover:text-white transition-colors cursor-pointer">
                  Customer Reviews
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('support')} className="hover:text-white transition-colors cursor-pointer">
                  24/7 Help Desk & FAQ
                </button>
              </li>
              <li>
                <a href="#support" onClick={() => scrollToSection('support')} className="hover:text-white transition-colors cursor-pointer">
                  WhatsApp Support
                </a>
              </li>
              <li>
                <span className="text-xs text-gray-500">Terms & Privacy Policy</span>
              </li>
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-3">Get VIP discounts and new dish alerts.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white p-2.5 rounded-lg transition-colors cursor-pointer"
                title="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
            {subscribed && (
              <p className="text-green-400 text-xs mt-2">🎉 Subscribed successfully!</p>
            )}

            <div className="mt-6 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Admiralty Way, Lekki Phase 1, Lagos</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+234 801 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>hello@choplife.ng</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 px-4 md:px-6 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Chop Life Restaurant & Food Delivery. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-gray-500">
            <span>Prices in Nigerian Naira (₦)</span>
            <span>Lagos • Abuja • Port Harcourt</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
