import { Truck, RotateCcw, ShieldCheck, Headphones } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'On orders over ₦15,000',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: RotateCcw,
    title: 'Freshness Guarantee',
    description: '100% hot & fresh food',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payment',
    description: 'Debit cards, transfer & USSD',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Lagos & Abuja support desk',
    color: 'bg-orange-50 text-orange-600',
  },
];

export default function FeatureBar() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-6 my-6 md:my-8">
      {features.map((feat) => {
        const Icon = feat.icon;
        return (
          <div
            key={feat.title}
            className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-md transition-shadow"
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${feat.color}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">{feat.title}</h4>
              <p className="text-xs text-gray-400">{feat.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
