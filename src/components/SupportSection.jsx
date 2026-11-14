import { useState } from 'react';
import { Headphones, MessageCircle, Phone, Mail, ChevronDown, ChevronUp, Send, CheckCircle2 } from 'lucide-react';

const faqs = [
  {
    q: 'How fast is food delivered in Lagos & Abuja?',
    a: 'Average delivery takes 25 to 45 minutes depending on your location. Our dispatch fleet uses temperature-controlled hot boxes to ensure your food arrives steaming hot.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all Nigerian Debit cards (Mastercard, Visa, Verve), instant Bank Transfers (via Paystack/Monnify), USSD, and POS on delivery.',
  },
  {
    q: 'How do I claim the 30% OFF promo code?',
    a: 'Simply copy the promo code TASTY30 from the Offers section and apply it at checkout. It applies immediately to orders above ₦5,000.',
  },
  {
    q: 'Can I schedule orders in advance?',
    a: 'Yes! When reserving a table or checking out, you can set a pre-order delivery time up to 7 days ahead for office lunches or parties.',
  },
  {
    q: 'What if my meal arrives late or incorrect?',
    a: 'We operate a 100% satisfaction guarantee. Contact our 24/7 WhatsApp desk immediately with your order reference for an instant replacement or refund.',
  },
];

export default function SupportSection() {
  const [openFaq, setOpenFaq] = useState(0);
  const [supportMessage, setSupportMessage] = useState('');
  const [ticketSent, setTicketSent] = useState(false);

  const handleSendTicket = (e) => {
    e.preventDefault();
    if (!supportMessage.trim()) return;
    setTicketSent(true);
    setSupportMessage('');
    setTimeout(() => setTicketSent(false), 5000);
  };

  return (
    <section id="support" className="px-4 md:px-6 mb-12 scroll-mt-20">
      <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-10 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
            <Headphones className="w-4 h-4" />
            Always Here For You
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            24/7 Customer Care & Help Center
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Have questions about an order, restaurant bookings, or dietary requirements? Our Lagos-based support team is active 24/7.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <a
            href="https://wa.me/2348012345678?text=Hello%20Chop%20Life%20Food%20Support"
            target="_blank"
            rel="noreferrer"
            className="group p-5 rounded-2xl bg-green-50/70 border border-green-100 hover:border-green-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-green-500 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm">WhatsApp Priority Chat</h4>
              <p className="text-xs text-gray-500 mt-1">Average reply in 2 minutes</p>
            </div>
            <span className="text-xs font-bold text-green-700 mt-3 inline-block">
              Chat on WhatsApp &rarr;
            </span>
          </a>

          <a
            href="tel:+2348012345678"
            className="group p-5 rounded-2xl bg-orange-50/70 border border-orange-100 hover:border-orange-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm">Direct Phone Line</h4>
              <p className="text-xs text-gray-500 mt-1">+234 801 234 5678</p>
            </div>
            <span className="text-xs font-bold text-primary mt-3 inline-block">
              Call Hotline &rarr;
            </span>
          </a>

          <a
            href="mailto:support@choplife.ng"
            className="group p-5 rounded-2xl bg-blue-50/70 border border-blue-100 hover:border-blue-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm">Email Support</h4>
              <p className="text-xs text-gray-500 mt-1">support@choplife.ng</p>
            </div>
            <span className="text-xs font-bold text-blue-700 mt-3 inline-block">
              Send Email &rarr;
            </span>
          </a>
        </div>

        {/* FAQs & Instant Query */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* FAQ Accordion */}
          <div className="lg:col-span-7 space-y-3">
            <h4 className="font-bold text-gray-900 text-base mb-3">Frequently Asked Questions</h4>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50/50"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 text-sm font-semibold text-gray-800 hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-100 bg-white leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Message Box */}
          <div className="lg:col-span-5 bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h4 className="font-bold text-gray-900 text-base mb-2">Send an Instant Message</h4>
            <p className="text-xs text-gray-500 mb-4">
              Need special catering or have feedback? Type your message below and a representative will reply immediately.
            </p>

            {ticketSent ? (
              <div className="bg-green-100/70 border border-green-200 text-green-800 rounded-xl p-4 text-center">
                <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-xs font-bold">Message Delivered!</p>
                <p className="text-[11px] text-green-700 mt-1">Our support agent is reviewing your query.</p>
              </div>
            ) : (
              <form onSubmit={handleSendTicket} className="space-y-3">
                <textarea
                  rows={4}
                  required
                  placeholder="How can we help you today?"
                  value={supportMessage}
                  onChange={(e) => setSupportMessage(e.target.value)}
                  className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold text-sm py-3 rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
