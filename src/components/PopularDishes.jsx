import { useState, useEffect } from 'react';
import { Star, Plus, ChevronRight, Check } from 'lucide-react';
import { dishes } from '../data/menuData';
import { useCart } from '../context/CartContext';

const categories = ['All', 'Non-Veg', 'Italian', 'Indian', 'Japanese', 'Burgers', 'Chinese', 'Desserts', 'Salads'];

export default function PopularDishes({ searchQuery, selectedCategory, onSelectCategory }) {
  const [activeCategory, setActiveCategory] = useState(selectedCategory || 'All');
  const [justAddedId, setJustAddedId] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (onSelectCategory) onSelectCategory(cat);
  };

  const handleAdd = (dish) => {
    addToCart(dish);
    setJustAddedId(dish.id);
    setTimeout(() => setJustAddedId(null), 1200);
  };

  const filteredDishes = dishes.filter((dish) => {
    const matchesCategory = activeCategory === 'All' || dish.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="px-4 md:px-6 mb-12 scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">Popular Dishes & Full Menu</h3>
          <p className="text-sm text-gray-400 mt-0.5">Most loved dishes ordered in Lagos & Abuja</p>
        </div>
        <button
          onClick={() => handleCategoryChange('All')}
          className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:underline cursor-pointer"
        >
          Reset Filter <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-5 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer
              ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-md shadow-primary/25 font-semibold'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Dishes Grid */}
      {filteredDishes.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
          <p className="text-gray-400 text-lg">No dishes found matching your search.</p>
          <button
            onClick={() => handleCategoryChange('All')}
            className="mt-3 text-primary text-sm font-semibold underline cursor-pointer"
          >
            Show all available meals
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredDishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              isAdded={justAddedId === dish.id}
              onAdd={() => handleAdd(dish)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function DishCard({ dish, isAdded, onAdd }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Image */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-1.5">
            {dish.badge && (
              <span className="bg-primary text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-md shadow-xs">
                {dish.badge}
              </span>
            )}
            {dish.discount && (
              <span className="bg-red-500 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-md shadow-xs">
                {dish.discount}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h4 className="text-base font-semibold text-gray-900 mb-1 line-clamp-1">
            {dish.name}
          </h4>
          <p className="text-sm text-gray-400 mb-3 line-clamp-2 leading-relaxed">
            {dish.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-800">{dish.rating}</span>
            <span className="text-xs text-gray-400">({dish.reviews})</span>
          </div>
        </div>
      </div>

      {/* Price & Add */}
      <div className="p-4 pt-0">
        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <div>
            <span className="text-lg font-extrabold text-gray-900">
              ₦{dish.price.toLocaleString()}
            </span>
            {dish.originalPrice && (
              <span className="text-xs text-gray-400 line-through ml-1.5">
                ₦{dish.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button
            onClick={onAdd}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer active:scale-90
              ${
                isAdded
                  ? 'bg-green-600 text-white shadow-md shadow-green-600/30'
                  : 'bg-primary hover:bg-primary-dark text-white shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30'
              }`}
            title="Add to Cart"
          >
            {isAdded ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
