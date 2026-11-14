const partners = [
  { name: 'Zomato', letter: 'Z' },
  { name: 'Swiggy', letter: 'S' },
  { name: 'Uber Eats', letter: 'U' },
  { name: 'DoorDash', letter: 'D' },
  { name: 'Google', letter: 'G' },
];

export default function PartnerLogos() {
  return (
    <section className="px-4 md:px-6 mb-10">
      <div className="bg-gray-50 rounded-2xl py-8 px-6">
        <p className="text-center text-sm font-medium text-gray-400 mb-6 tracking-wide uppercase">
          Trusted by Thousands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-lg font-extrabold text-gray-600">{p.letter}</span>
              </div>
              <span className="text-base font-bold text-gray-600 hidden sm:inline">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
