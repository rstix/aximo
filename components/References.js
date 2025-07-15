import Image from "next/image";

export default function References() {
  const logos = [
    { src: "/logos/mahle-logo.png", alt: "Mahle" },
    { src: "/logos/ferrona-logo.png", alt: "Ferrona" },
    { src: "/logos/plakor-logo.png", alt: "Plakor" },
    { src: "/logos/kovo-logo.png", alt: "Kovodruzstvo" },
    { src: "/logos/cez-logo.png", alt: "ČEZ" },
    { src: "/logos/skoda-logo.png", alt: "Škoda" },
    { src: "/logos/vacutec-logo.png", alt: "Vacutec" },
    { src: "/logos/zdas-logo.png", alt: "ŽDAS" },
    { src: "/logos/hyundai-logo.png", alt: "Hyundai" },
    { src: "/logos/ferrit-logo.png", alt: "Ferrit" },
  ];

  return (
    <section className="py-20 bg-gray-100">
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
          <div className="flex gap-8 flex-wrap">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-gray-50 rounded-lg px-6 py-1 min-w-[200px] flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={80}
                  className="object-contain h-18 w-auto"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
} 