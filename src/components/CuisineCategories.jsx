import { ChevronRight } from 'lucide-react';
import { cuisines } from '../data/menuData';

export default function CuisineCategories({ onSelectCuisine }) {
  const handleCuisineClick = (cuisineName) => {
    if (onSelectCuisine) {
      onSelectCuisine(cuisineName);
    }
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="categories" className="px-4 md:px-6 mb-8 scroll-mt-20">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">Explore Cuisines</h3>
          <p className="text-sm text-gray-400 mt-0.5">Browse hand-crafted recipes by culture & flavor</p>
        </div>
        <button
          onClick={() => {
            const menuEl = document.getElementById('menu');
            if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:underline cursor-pointer"
        >
          View All <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {cuisines.map((cuisine) => (
          <div
            key={cuisine.id}
            onClick={() => handleCuisineClick(cuisine.name)}
            className="flex-shrink-0 flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-3 border-transparent group-hover:border-primary transition-all duration-300 shadow-md group-hover:shadow-lg">
              <img
                src={cuisine.image}
                alt={cuisine.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h4 className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors">
              {cuisine.name}
            </h4>
            <span className="text-xs text-gray-400">{cuisine.dishes}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
