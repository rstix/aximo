import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">AXIMO Group</div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#o-nas" className="text-gray-700 hover:text-gray-900 transition-colors">O nás</a>
            <a href="#servis" className="text-gray-700 hover:text-gray-900 transition-colors">Servis</a>
            <a href="#pohony" className="text-gray-700 hover:text-gray-900 transition-colors">Pohony</a>
            <a href="#stavba" className="text-gray-700 hover:text-gray-900 transition-colors">Stavba</a>
            <a href="#komponenty" className="text-gray-700 hover:text-gray-900 transition-colors">Komponenty</a>
            <a href="#kontakt" className="text-gray-700 hover:text-gray-900 transition-colors">Kontakt</a>
          </nav>

          {/* Contact Info */}
          <button className="bg-gray-900 text-white px-4 py-2 rounded-md">Kontaktujte nás</button>
          {/* <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="text-gray-600">
              <div>+420 608 600 745</div>
              <div>office@aximogroup.com</div>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
} 