import Engine from './icons/Engine';
import Construction from './icons/Construction';
import Components from './icons/Components';
import Service from './icons/Service';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Pohony",
      description: "Kompletní řešení průmyslových pohonů včetně servisu a údržby. Zajišťujeme návrh, dodávku, montáž i následnou technickou podporu. Naše zkušenosti pokrývají široké spektrum aplikací v průmyslu.",
      icon: <Engine size={82} color="#374151" />,
      url: '/pohony',
      image: '/engine.png',
      imageWidth: 300,
      imageHeight: 350,
    },
    {
      title: "Stavba a elektro",
      description: "Stavební úpravy a elektroinstalace na klíč. Realizujeme kompletní rekonstrukce, nové instalace i modernizace stávajících systémů. Zajistíme projekt, dodávku, montáž i následný servis dle vašich potřeb.",
      icon: <Construction size={82} color="#374151" />,
      image: '/c.png',
      url: '/stavba-a-elektro',
      imageWidth: 650,
      imageHeight: 550,
    },
    {
      title: "Komponenty",
      description: "Dodávky kvalitních komponentů a náhradních dílů. Spolupracujeme s předními výrobci a garantujeme rychlé dodání i technickou podporu. Nabízíme řešení na míru pro různé průmyslové aplikace.",
      icon: <Components size={82} color="#374151" />,
      url: '/komponenty',
      image: '/bolts.png',
      imageWidth: 300,
      imageHeight: 350,
    },
    {
      title: "Servis",
      description: "Rychlý a spolehlivý servis včetně krizových situací. Zajišťujeme opravy, revize i modernizaci stávajících systémů. Nabízíme komplexní řešení pro různé průmyslové aplikace.",
      icon: <Service size={82} color="#374151" />,
      url: '/servis'
    }
  ];

  return (
    <>
      {services.map((service, index) => (
        <section 
          key={index}
          className={`py-10 ${index % 2 === 1 ? 'bg-white' : 'bg-gray-200'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex items-center space-x-12 ${
              index % 2 === 1 ? 'flex-row-reverse' : ''
            }`}>
              <div className={`w-1/2 flex justify-center ${
                index % 2 === 1 ? 'justify-center' : 'justify-center'
              }`}>
                {service.image ? (
                  <Image src={service.image} alt={service.title} width={service.imageWidth} height={service.imageHeight} />
                ) : (
                  service.icon
                )}
              </div>
              <div className="w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800 uppercase">
                  {service.title}
                </h2>
                <p className="text-xl text-gray-600">
                  {service.description}
                </p>
                <Link
                  href={service.url}
                  className="inline-block mt-6 px-5 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow hover:bg-gray-900 transition-colors"
                >
                  Zjistit více
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
} 