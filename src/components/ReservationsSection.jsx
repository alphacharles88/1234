import { useState } from 'react';
import { CalendarCheck, Users, Clock, MapPin, Sparkles, CheckCircle2, PhoneCall } from 'lucide-react';

export default function ReservationsSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '2 Guests',
    date: '',
    time: '19:00',
    seating: 'VIP Lounge',
    notes: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert('Please fill in your name, phone number, and reservation date.');
      return;
    }

    const refNumber = 'CL-' + Math.floor(1000 + Math.random() * 9000);
    setBookingConfirmed({
      refNumber,
      ...formData,
    });
  };

  return (
    <section id="reservations" className="px-4 md:px-6 mb-12 scroll-mt-20">
      <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column: Form or Success */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
              <CalendarCheck className="w-4 h-4" />
              Dine-in Experience
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Reserve a Table
            </h3>
            <p className="text-gray-500 text-sm md:text-base mt-1 mb-6">
              Experience authentic African & Continental fine dining at Chop Life Restaurant & Lounge.
            </p>

            {bookingConfirmed ? (
              <div className="bg-primary-50/70 border border-primary/20 rounded-2xl p-6 md:p-8 text-center animate-fade-in">
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">Reservation Confirmed!</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Booking Reference: <span className="font-mono font-bold text-primary">{bookingConfirmed.refNumber}</span>
                </p>
                <div className="bg-white rounded-xl p-4 text-left text-sm space-y-2 border border-gray-100 mb-5">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Name:</span>
                    <span className="font-semibold text-gray-900">{bookingConfirmed.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Party Size:</span>
                    <span className="font-semibold text-gray-900">{bookingConfirmed.guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date & Time:</span>
                    <span className="font-semibold text-gray-900">{bookingConfirmed.date} at {bookingConfirmed.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Seating Area:</span>
                    <span className="font-semibold text-primary">{bookingConfirmed.seating}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-5">
                  A confirmation SMS has been sent to {bookingConfirmed.phone}. We look forward to hosting you!
                </p>
                <button
                  onClick={() => setBookingConfirmed(null)}
                  className="bg-primary text-white font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-primary-dark transition-colors shadow-md shadow-primary/25"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Babatunde Adeleke"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 801 234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option>1 Person</option>
                        <option>2 Guests</option>
                        <option>3-4 Guests</option>
                        <option>5-8 Guests (Group)</option>
                        <option>10+ Banquet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Time Slot
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="12:30">12:30 PM (Lunch)</option>
                      <option value="14:00">02:00 PM (Late Lunch)</option>
                      <option value="18:30">06:30 PM (Dinner)</option>
                      <option value="19:30">07:30 PM (Prime Dinner)</option>
                      <option value="21:00">09:00 PM (Night Lounge)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Seating Preference
                    </label>
                    <select
                      value={formData.seating}
                      onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option>VIP Private Lounge</option>
                      <option>Rooftop Terrace</option>
                      <option>Indoor Main Hall</option>
                      <option>Chef's Table</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Special Request / Celebration
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Birthday, Anniversary, quiet corner"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Confirm Table Reservation
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Restaurant Experience & Details */}
          <div className="lg:w-80 flex flex-col justify-between bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
            <div>
              <div className="relative h-44 rounded-xl overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop"
                  alt="Restaurant Ambiance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> 5-Star Ambiance
                </div>
              </div>

              <h4 className="font-bold text-lg mb-2">Exclusive Dining Hall</h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Enjoy world-class dining, live acoustic sets on weekends, and an intimate lounge setting curated by Chop Life master chefs.
              </p>

              <div className="space-y-2.5 text-xs text-gray-300 border-t border-gray-700/80 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Open Daily: 10:00 AM – 11:30 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Admiralty Way, Lekki Phase 1, Lagos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Dress Code: Smart Casual / Elegant</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-700/80">
              <p className="text-[11px] text-gray-400">Need immediate VIP or event reservations?</p>
              <a
                href="tel:+2348012345678"
                className="mt-2 inline-flex items-center gap-2 text-primary hover:text-primary-light font-bold text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                +234 801 234 5678
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
