export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">AXIMO Group</div>
            <p className="text-gray-300 mb-4 max-w-md">
              Specialisté na průmyslové elektroinstalace, servis pohonů a dodávky značky PRO-MOTOR.
            </p>
            <div className="text-sm text-gray-400">
              <p>IČO: 11966301 | DIČ: CZ11966301</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li><a href="#o-nas" className="text-gray-300 hover:text-white transition-colors">O nás</a></li>
              <li><a href="#sluzby" className="text-gray-300 hover:text-white transition-colors">Služby</a></li>
              <li><a href="#kontakt" className="text-gray-300 hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#kariera" className="text-gray-300 hover:text-white transition-colors">Kariéra</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Služby</h3>
            <ul className="space-y-2">
              <li><a href="#pohony" className="text-gray-300 hover:text-white transition-colors">Pohony</a></li>
              <li><a href="#stavba" className="text-gray-300 hover:text-white transition-colors">Stavba</a></li>
              <li><a href="#komponenty" className="text-gray-300 hover:text-white transition-colors">Komponenty</a></li>
              <li><a href="#servis" className="text-gray-300 hover:text-white transition-colors">Servis</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AXIMO Group s.r.o. Všechna práva vyhrazena.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Ochrana osobních údajů
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Obchodní podmínky
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 