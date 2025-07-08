import Engine from './icons/Engine';

export default function Hero() {
  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/petro-plant.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Spolehlivé pohony a elektroinstalace na klíč
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Jsme specialisté na průmyslové elektroinstalace, servis pohonů a dodávky značky PRO-MOTOR. 
              Nabízíme kompletní řešení včetně stavebních úprav, revizí a technické podpory. 
              Působíme po celé ČR i v zahraničí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Kontaktujte nás
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">
                Více o nás
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          {/* <div className="relative">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-gray-600 text-center">
                <div className="mb-4 flex justify-center">
                  <Engine size={80} color="#6B7280" />
                </div>
                <p className="text-xl font-semibold">Průmyslové řešení</p>
                <p className="text-lg opacity-90">Servis • Montáž • Stavební úpravy</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
} 