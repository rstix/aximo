import Engine from './icons/Engine';
import Construction from './icons/Construction';
import Components from './icons/Components';
import Service from './icons/Service';

export default function Services() {
  const services = [
    {
      title: "Pohony",
      description: "Kompletní řešení průmyslových pohonů včetně servisu a údržby",
      icon: <Engine size={32} color="#374151" />
    },
    {
      title: "Stavba a elektro",
      description: "Stavební úpravy a elektroinstalace na klíč",
      icon: <Construction size={32} color="#374151" />
    },
    {
      title: "Komponenty",
      description: "Dodávky kvalitních komponentů a náhradních dílů",
      icon: <Components size={32} color="#374151" />
    },
    {
      title: "Servis",
      description: "Rychlý a spolehlivý servis včetně krizových situací",
      icon: <Service size={32} color="#374151" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Naše hlavní služby
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kompletní portfolio služeb pro průmyslové aplikace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 h-full"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200 h-full flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center text-2xl mb-6 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 