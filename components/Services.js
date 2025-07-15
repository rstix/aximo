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
      image: '/pohony_1.png',
      id: 'pohony',
      btnText: 'Nabídka pohonů',
    },
    {
      title: "Stavba a elektro",
      description: "Stavební úpravy a elektroinstalace na klíč. Realizujeme kompletní rekonstrukce, nové instalace i modernizace stávajících systémů. Zajistíme projekt, dodávku, montáž i následný servis dle vašich potřeb.",
      icon: <Construction size={82} color="#374151" />,
      image: '/stavba_2.png',
      url: '/stavba-a-elektro',
      id: 'stavba',
      btnText: 'Zjistit více',
    },
    {
      title: "Komponenty",
      description: "Dodávky kvalitních komponentů a náhradních dílů. Spolupracujeme s předními výrobci a garantujeme rychlé dodání i technickou podporu. Nabízíme řešení na míru pro různé průmyslové aplikace.",
      icon: <Components size={82} color="#374151" />,
      url: '/komponenty',
      image: '/komponenty_3.png',
      id: 'komponenty',
      btnText: 'Přehled komponent',
    },
    {
      title: "Servis",
      description: "Rychlý a spolehlivý servis včetně krizových situací. Zajišťujeme opravy, revize i modernizaci stávajících systémů. Nabízíme komplexní řešení pro různé průmyslové aplikace.",
      icon: <Service size={82} color="#374151" />,
      url: '/servis',
      image: '/servis_3.png',
      id: 'servis',
      btnText: 'Více o servisu',
    },
  ];

  return (
    <>
      {services.map((service, index) => (
        <section 
          key={index}
          id={service.id}
          className={`py-8 sm:py-10 lg:py-12 ${index % 2 === 1 ? 'bg-white' : 'bg-gray-200'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="w-full lg:w-1/2 flex justify-center">
                {service.image ? (
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    width={service.imageWidth || 300} 
                    height={service.imageHeight || 350}
                    className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto"
                  />
                ) : (
                  <div className="flex justify-center">
                    {service.icon}
                  </div>
                )}
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800 uppercase">
                  {service.title}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.url}
                  className="inline-block px-5 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow hover:bg-gray-900 transition-colors"
                >
                    {service.btnText}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
} 