import Experience from './icons/Experience';
import Delivery from './icons/Delivery';
import FastService from './icons/FastService';
import Network from './icons/Network';
import Partnership from './icons/Partnership';

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "X let zkušeností",
      description: "Dlouholeté zkušenosti v oboru průmyslových pohonů a elektroinstalací",
      icon: <Experience size={48} color="#374151" />
    },
    {
      title: "Expresní dodávky",
      description: "Rychlé dodávky z vlastních skladů pro minimalizaci prostojů",
      icon: <Delivery size={48} color="#374151" />
    },
    {
      title: "Rychlý servis",
      description: "Okamžitá reakce i v krizových situacích 24/7",
      icon: <FastService size={48} color="#374151" />
    },
    {
      title: "Mezinárodní síť",
      description: "Spolehlivá síť partnerů po celé Evropě",
      icon: <Network size={48} color="#374151" />
    },
    {
      title: "Dlouhodobé vztahy",
      description: "Budujeme trvalé partnerství se zákazníky",
      icon: <Partnership size={48} color="#374151" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Proč si vybrat nás
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naše výhody, které zajišťují spolehlivost a kvalitu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-6 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 