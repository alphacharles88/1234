import { useState } from 'react';
import { ClipboardList, Clock, Bike, CheckCircle2, ChevronRight, RotateCcw, PackageCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { dishes } from '../data/menuData';

export default function OrdersSection() {
  const { addToCart } = useCart();
  const [reorderedAlert, setReorderedAlert] = useState(null);

  const activeOrder = {
    id: 'CL-8941',
    placedAt: '22 minutes ago',
    eta: '12 - 18 mins',
    status: 'Out for Delivery',
    step: 3, // 1 to 4
    courier: {
      name: 'Babajide Samuel',
      vehicle: 'TVS Apache 160 (LA-492-EKY)',
      phone: '+234 812 345 6789',
    },
    items: [
      { name: 'Spicy Zinger Burger & Fries', qty: 1, price: 5500 },
      { name: 'Chocolate Lava Cake', qty: 1, price: 4200 },
    ],
    total: 9700,
    deliveryFee: 0,
  };

  const pastOrders = [
    {
      id: 'CL-7712',
      date: 'Yesterday at 7:45 PM',
      itemsSummary: 'Grilled Chicken with Veggies, Margherita Pizza',
      itemsCount: 2,
      total: 16000,
      status: 'Delivered',
      itemIds: [1, 2],
    },
    {
      id: 'CL-6430',
      date: 'May 10, 2026 at 1:15 PM',
      itemsSummary: 'Sushi Platter Deluxe, Kung Pao Chicken',
      itemsCount: 2,
      total: 22300,
      status: 'Delivered',
      itemIds: [4, 8],
    },
    {
      id: 'CL-5119',
      date: 'April 28, 2026 at 8:30 PM',
      itemsSummary: 'Paneer Butter Masala, Chocolate Lava Cake',
      itemsCount: 2,
      total: 11000,
      status: 'Delivered',
      itemIds: [3, 5],
    },
  ];

  const handleReorder = (order) => {
    order.itemIds.forEach((id) => {
      const dish = dishes.find((d) => d.id === id);
      if (dish) addToCart(dish);
    });
    setReorderedAlert(order.id);
    setTimeout(() => setReorderedAlert(null), 3000);
  };

  return (
    <section id="orders" className="px-4 md:px-6 mb-12 scroll-mt-20">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-1">
            <ClipboardList className="w-4 h-4" />
            Live Delivery Tracker
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">Your Orders & Tracking</h3>
          <p className="text-sm text-gray-400 mt-0.5">Track your active meals and reorder favorites in 1-click</p>
        </div>
      </div>

      {reorderedAlert && (
        <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm flex items-center justify-between animate-fade-in">
          <span>Items from order <strong>#{reorderedAlert}</strong> added to your cart!</span>
          <span className="font-semibold text-xs bg-green-200 px-2 py-0.5 rounded-full">Success</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Active Order Live Tracker */}
        <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-4 mb-4">
              <div>
                <span className="text-xs text-gray-400">Active Order</span>
                <h4 className="text-lg font-bold text-gray-900 font-mono">#{activeOrder.id}</h4>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1.5 bg-orange-100 text-primary text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  <Bike className="w-3.5 h-3.5" />
                  {activeOrder.status}
                </span>
                <p className="text-xs text-gray-500 mt-1">ETA: <strong>{activeOrder.eta}</strong></p>
              </div>
            </div>

            {/* Stepper Progress */}
            <div className="py-4">
              <div className="relative flex justify-between items-center mb-2">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2 z-0" />
                <div
                  className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-500"
                  style={{ width: '75%' }}
                />

                {[
                  { label: 'Confirmed', done: true },
                  { label: 'Cooking', done: true },
                  { label: 'On Way', done: true, active: true },
                  { label: 'Delivered', done: false },
                ].map((st, i) => (
                  <div key={st.label} className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all
                        ${
                          st.active
                            ? 'bg-primary text-white ring-4 ring-primary/20 scale-110'
                            : st.done
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 text-gray-500'
                        }`}
                    >
                      {st.done && !st.active ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                    </div>
                    <span className="text-[11px] font-medium text-gray-600 mt-1.5">{st.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Items summary */}
            <div className="bg-gray-50 rounded-2xl p-4 my-4 space-y-2 text-sm">
              {activeOrder.items.map((it, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-gray-700">
                    <span className="font-semibold text-primary">{it.qty}x</span> {it.name}
                  </span>
                  <span className="font-semibold text-gray-900">₦{it.price.toLocaleString()}</span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-2 flex justify-between items-center text-sm font-bold text-gray-900">
                <span>Total Amount Paid</span>
                <span className="text-primary text-base">₦{activeOrder.total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Courier Card */}
          <div className="flex items-center justify-between bg-orange-50/60 border border-orange-100 rounded-2xl p-3.5 mt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                BS
              </div>
              <div>
                <p className="text-xs text-gray-400">Rider Contact</p>
                <h5 className="text-sm font-bold text-gray-800">{activeOrder.courier.name}</h5>
                <p className="text-[11px] text-gray-500">{activeOrder.courier.vehicle}</p>
              </div>
            </div>
            <a
              href={`tel:${activeOrder.courier.phone}`}
              className="bg-white hover:bg-gray-50 text-primary border border-primary/20 text-xs font-bold px-3 py-2 rounded-xl transition-colors"
            >
              Call Rider
            </a>
          </div>
        </div>

        {/* Past Orders History */}
        <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-900 text-base">Past Orders</h4>
              <span className="text-xs text-gray-400">{pastOrders.length} completed</span>
            </div>

            <div className="space-y-3">
              {pastOrders.map((ord) => (
                <div
                  key={ord.id}
                  className="p-3.5 border border-gray-100 rounded-2xl hover:border-gray-200 transition-colors bg-gray-50/50"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold font-mono text-gray-700">#{ord.id}</span>
                    <span className="text-[10px] font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <PackageCheck className="w-3 h-3" />
                      {ord.status}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-gray-800 line-clamp-1 mb-1">
                    {ord.itemsSummary}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-gray-400">{ord.date}</span>
                    <span className="text-sm font-extrabold text-gray-900">
                      ₦{ord.total.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => handleReorder(ord)}
                    className="w-full mt-2.5 bg-white hover:bg-primary hover:text-white text-gray-700 text-xs font-semibold py-1.5 rounded-xl border border-gray-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reorder Dishes
                  </button>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            Need an invoice or VAT receipt? Contact support.
          </p>
        </div>
      </div>
    </section>
  );
}
