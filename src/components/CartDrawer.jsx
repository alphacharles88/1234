import { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Tag, Check, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cartItems, cartTotal, cartCount, isCartOpen, toggleCart, updateQuantity, removeFromCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');

    if (promoCode.trim().toUpperCase() === 'TASTY30') {
      setDiscountPercent(30);
      setPromoSuccess('30% OFF discount applied!');
    } else {
      setPromoError('Invalid coupon code. Try TASTY30');
    }
  };

  const freeDeliveryThreshold = 15000;
  const isFreeDelivery = cartTotal >= freeDeliveryThreshold;
  const deliveryFee = cartTotal > 0 ? (isFreeDelivery ? 0 : 1500) : 0;
  const discountAmount = Math.round((cartTotal * discountPercent) / 100);
  const finalTotal = Math.max(0, cartTotal - discountAmount + deliveryFee);

  const handleProceedCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 1200);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity"
        onClick={toggleCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900 leading-tight">Your Cart</h2>
              <p className="text-xs text-gray-400">{cartCount} {cartCount === 1 ? 'dish' : 'dishes'} selected</p>
            </div>
          </div>
          <button
            onClick={toggleCart}
            className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-500 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Tracker Bar */}
        {cartItems.length > 0 && (
          <div className="bg-orange-50/80 px-6 py-2.5 border-b border-orange-100 text-xs">
            {isFreeDelivery ? (
              <span className="text-green-700 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Congratulations! You unlocked FREE Delivery
              </span>
            ) : (
              <div className="space-y-1">
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>Add <strong>₦{(freeDeliveryThreshold - cartTotal).toLocaleString()}</strong> more for FREE delivery</span>
                  <span>{Math.round((cartTotal / freeDeliveryThreshold) * 100)}%</span>
                </div>
                <div className="h-1.5 w-full bg-orange-200/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (cartTotal / freeDeliveryThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Cart Items or Checkout Success */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {checkoutComplete ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-green-100">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Order Confirmed!</h3>
              <p className="text-sm text-gray-500 mb-6 max-w-xs">
                Your order is now being freshly prepared in the kitchen. Track delivery in the <strong>Orders</strong> section.
              </p>
              <button
                onClick={() => {
                  setCheckoutComplete(false);
                  toggleCart();
                  const ordersEl = document.getElementById('orders');
                  if (ordersEl) ordersEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-colors cursor-pointer"
              >
                Track My Order &rarr;
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center text-primary/40 mb-4">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">Your cart is empty</h3>
              <p className="text-sm text-gray-400 max-w-xs mb-6">
                Explore our mouth-watering menu and treat yourself to good food!
              </p>
              <button
                onClick={() => {
                  toggleCart();
                  const menuEl = document.getElementById('menu');
                  if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md cursor-pointer"
              >
                Explore Dishes
              </button>
            </div>
          ) : (
            <div className="space-y-3.5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 bg-gray-50/80 border border-gray-100 rounded-2xl p-3 hover:border-gray-200 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-18 h-18 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs font-black text-primary mt-0.5">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600 cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-gray-800 w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1.5 self-start rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Promo input */}
              <div className="pt-2">
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Promo Code (e.g. TASTY30)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs uppercase font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </form>
                {promoSuccess && <p className="text-[11px] text-green-600 font-medium mt-1">{promoSuccess}</p>}
                {promoError && <p className="text-[11px] text-red-500 font-medium mt-1">{promoError}</p>}
              </div>
            </div>
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cartItems.length > 0 && !checkoutComplete && (
          <div className="border-t border-gray-100 bg-white px-6 py-4 space-y-2.5 shadow-lg">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-800">
                ₦{cartTotal.toLocaleString()}
              </span>
            </div>

            {discountAmount > 0 && (
              <div className="flex items-center justify-between text-xs text-green-600 font-medium">
                <span>Discount ({discountPercent}% OFF)</span>
                <span>-₦{discountAmount.toLocaleString()}</span>
              </div>
            )}

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Delivery Fee</span>
              <span className={`font-semibold ${isFreeDelivery ? 'text-green-600' : 'text-gray-800'}`}>
                {isFreeDelivery ? 'FREE' : `₦${deliveryFee.toLocaleString()}`}
              </span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <div>
                <span className="text-xs text-gray-400 block">Total Amount</span>
                <span className="text-xl font-black text-gray-900">
                  ₦{finalTotal.toLocaleString()}
                </span>
              </div>

              <button
                onClick={handleProceedCheckout}
                disabled={isCheckingOut}
                className="bg-primary hover:bg-primary-dark text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-primary/25 transition-all hover:shadow-xl flex items-center gap-2 cursor-pointer active:scale-95 disabled:opacity-75"
              >
                {isCheckingOut ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
