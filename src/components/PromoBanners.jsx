import { ArrowRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function PromoBanners() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText('TASTY30');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="offers" className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 md:px-6 mb-12 scroll-mt-20">
      {/* Promo 1 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-orange-600 to-red-500 rounded-3xl p-6 md:p-8 text-white shadow-md">
        <div className="absolute -right-8 -top-8 w-44 h-44 bg-white/10 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-white/10 rounded-full pointer-events-none" />
        <div className="relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
            Limited Time Deal
          </span>
          <h3 className="text-2xl md:text-3xl font-black mt-3 mb-1.5">
            Flat 30% OFF
          </h3>
          <p className="text-white/90 text-sm mb-4">
            On your first order above ₦5,000 with code:
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-black/25 backdrop-blur-md border border-white/20 rounded-xl px-3.5 py-2">
              <code className="text-base font-black tracking-wider text-yellow-300">TASTY30</code>
              <button
                onClick={handleCopy}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
                title="Copy Code"
              >
                {copied ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4 text-white" />}
              </button>
            </div>
            {copied && (
              <span className="text-xs font-bold bg-white text-primary px-2.5 py-1 rounded-full animate-bounce">
                Copied to clipboard!
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Promo 2 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 rounded-3xl p-6 md:p-8 text-white shadow-md">
        <div className="absolute -left-8 -bottom-8 w-44 h-44 bg-white/10 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -left-4 -top-4 w-28 h-28 bg-white/10 rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
              Best Value Feasts
            </span>
            <h3 className="text-2xl md:text-3xl font-black mt-3 mb-1.5">
              Mega Family Combo Meals
            </h3>
            <p className="text-white/90 text-sm mb-4">
              Feast for 4-6 people with grilled meats, sides & drinks from only <span className="font-bold text-yellow-300">₦18,500</span>
            </p>
          </div>
          <div>
            <button
              onClick={scrollToMenu}
              className="inline-flex items-center gap-2 bg-white text-purple-800 font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-all shadow-md cursor-pointer hover:shadow-lg"
            >
              Explore Combos
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
