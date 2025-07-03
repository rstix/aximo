export default function References() {
  const customers = [
    "HYUNDAI",
    "ŠKODA VAGONKA", 
    "ŽDAS",
    "KOVODRUŽSTVO STRÁŽOV",
    "FERRIT",
    "Lukrom",
    "Ferona",
    "Vacutec",
    "Mahle SK",
    "Plakor",
    "ČEZ"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Reference a zákazníci
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Důvěřují nám desítky průmyslových firem z Česka i Evropy
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-scroll">
            {/* First set of logos */}
            {customers.map((customer, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-gray-100 rounded-lg px-8 py-6 min-w-[200px] flex items-center justify-center"
              >
                <span className="text-lg font-semibold text-gray-700 text-center">
                  {customer}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {customers.map((customer, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 bg-gray-100 rounded-lg px-8 py-6 min-w-[200px] flex items-center justify-center"
              >
                <span className="text-lg font-semibold text-gray-700 text-center">
                  {customer}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 