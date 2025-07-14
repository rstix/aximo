export default function AboutUs() {
  return (
    <section id="o-nas" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            O nás
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            AXIMO Group je spolehlivý partner pro průmyslové technologie, montáže a komerční stavby
          </p>
          <div className="flex justify-center">
            <a 
              href="#kontakt" 
              className="inline-flex items-center px-8 py-3 bg-white hover:bg-gray-100 text-black font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Zjistit víc o nás
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Naše specializace
            </h3>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Jsme specialisté na průmyslové elektroinstalace, servis pohonů a dodávky značky PRO-MOTOR. 
                Naše zkušenosti pokrývají široké spektrum aplikací v průmyslu.
              </p>
              <p>
                Zajišťujeme kompletní řešení včetně návrhu, dodávky, montáže i následné technické podpory. 
                Naše služby zahrnují stavební úpravy, elektroinstalace, servis a dodávky komponentů.
              </p>
              <p>
                Zakládáme si na kvalitní práci a dlouhodobých vztazích se zákazníky. 
                Naše reference mluví za vše - důvěřují nám desítky průmyslových firem z Česka i Evropy.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🏭</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Průmyslové řešení
              </h4>
              <p className="text-gray-600">
                Servis • Montáž • Stavební úpravy
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
} 