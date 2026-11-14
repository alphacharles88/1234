import { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle2, PlusCircle, ThumbsUp } from 'lucide-react';
import { initialReviews } from '../data/menuData';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(initialReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    rating: 5,
    dish: 'Spicy Zinger Burger & Fries',
    comment: '',
  });

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) {
      alert('Please fill in your name and review message.');
      return;
    }

    const created = {
      id: Date.now(),
      name: newReview.name,
      location: newReview.location || 'Lagos, Nigeria',
      avatar: `https://images.unsplash.com/photo-${1534528741775 + (reviews.length * 1000)}?w=100&h=100&fit=crop&crop=face`,
      rating: Number(newReview.rating),
      date: 'Just now',
      dish: newReview.dish,
      comment: newReview.comment,
    };

    setReviews([created, ...reviews]);
    setNewReview({
      name: '',
      location: '',
      rating: 5,
      dish: 'Spicy Zinger Burger & Fries',
      comment: '',
    });
    setShowReviewForm(false);
  };

  return (
    <section id="reviews" className="px-4 md:px-6 mb-12 scroll-mt-20">
      <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-10 shadow-sm">
        {/* Header & Stats Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-gray-100 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
              <Star className="w-4 h-4 fill-primary" />
              Verified Foodie Reviews
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              What Customers Are Saying
            </h3>
            <p className="text-sm text-gray-500 mt-1 max-w-lg">
              Read real feedback from over 50,000 satisfied foodies across Lagos, Abuja, and Port Harcourt.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-orange-50 border border-orange-100 rounded-2xl px-5 py-3 text-center">
              <div className="text-3xl font-black text-primary flex items-center justify-center gap-1">
                4.9 <Star className="w-5 h-5 fill-primary text-primary" />
              </div>
              <p className="text-[11px] font-semibold text-gray-500 mt-0.5">1,420+ Reviews</p>
            </div>

            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-5 py-3.5 rounded-xl shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              {showReviewForm ? 'Close Form' : 'Write a Review'}
            </button>
          </div>
        </div>

        {/* Write a Review Collapsible Form */}
        {showReviewForm && (
          <form
            onSubmit={handleAddReview}
            className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-200 animate-fade-in"
          >
            <h4 className="font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
              <MessageSquareQuote className="w-5 h-5 text-primary" />
              Share Your Dining or Delivery Experience
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Obioma Adeleke"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">City / Area</label>
                <input
                  type="text"
                  placeholder="e.g. Lekki, Lagos"
                  value={newReview.location}
                  onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Rating</label>
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ 5 Stars - Exceptional</option>
                  <option value={4}>⭐⭐⭐⭐ 4 Stars - Very Good</option>
                  <option value={3}>⭐⭐⭐ 3 Stars - Average</option>
                  <option value={2}>⭐⭐ 2 Stars - Below Average</option>
                  <option value={1}>⭐ 1 Star - Terrible</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Dish Ordered</label>
              <input
                type="text"
                placeholder="e.g. Grilled Chicken with Veggies"
                value={newReview.dish}
                onChange={(e) => setNewReview({ ...newReview, dish: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Your Review</label>
              <textarea
                required
                rows={3}
                placeholder="How was the taste, packaging, and delivery speed?"
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-md transition-colors"
            >
              Post My Review
            </button>
          </form>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-gray-50/70 border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face';
                      }}
                      className="w-10 h-10 rounded-full object-cover border border-white shadow-sm"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                        {rev.name}
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" title="Verified Customer" />
                      </h4>
                      <p className="text-[11px] text-gray-400">{rev.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-200/60 text-xs text-gray-400">
                <span className="font-medium text-primary">Dish: {rev.dish}</span>
                <span className="flex items-center gap-1 text-gray-400">
                  <ThumbsUp className="w-3 h-3" /> Helpful
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
