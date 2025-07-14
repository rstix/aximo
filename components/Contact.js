"use client"

import {
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Building2 as BuildingOfficeIcon,
  Linkedin,
  Facebook,
} from "lucide-react";
import { useState } from "react";
import CzechMap from "./maps/Czech";

export default function Contact() {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <section id="kontakt" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Map and Addresses Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-6 gap-4 mb-12">
          {/* Map on the left */}
          <div className="w-full h-full lg:col-span-3">
            <CzechMap hoveredLocation={hoveredLocation} />
          </div>

          {/* Addresses on the right */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-1 md:gap-2 lg:col-span-2">
            {/* Fakturační */}
            <div 
              className="rounded-lg p-2 md:p-3 hover:bg-gray-800 transition-all duration-200 min-w-[150px]"
              onMouseEnter={() => setHoveredLocation("fakturacni")}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              <h3 className="font-semibold text-lg mb-3">
                Fakturační
              </h3>
              <div className="text-sm text-gray-300 space-y-1">
                <p className="font-medium">AXIMO Group s.r.o.</p>
                <p>Nádražní 879/27, 702 00</p>
                <p>Ostrava - Moravská Ostrava</p>
                <p className="mt-2">IČO: 11966301</p>
                <p>DIČ: CZ11966301</p>
              </div>
            </div>

            {/* Sklad */}
            <div 
              className="rounded-lg p-2 md:p-3 hover:bg-gray-800 transition-all duration-200 min-w-[150px]"
              onMouseEnter={() => setHoveredLocation("sklad")}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              <h3 className="font-semibold text-lg mb-3">Sklad</h3>
              <div className="text-sm text-gray-300 space-y-1">
                <p className="font-medium">AXIMO Group s.r.o.</p>
                <p>ČS. armády 415/6</p>
                <p>743 01 Bílovec</p>
              </div>
            </div>

            {/* Stavba */}
            <div 
              className="rounded-lg p-2 md:p-3 hover:bg-gray-800 transition-all duration-200 min-w-[150px]"
              onMouseEnter={() => setHoveredLocation("stavba")}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              <h3 className="font-semibold text-lg mb-3">
                Stavba
              </h3>
              <div className="text-sm text-gray-300 space-y-1">
                <p className="font-medium">AXIMO Group s.r.o.</p>
                <p>Domažlická 1053/15</p>
                <p>130 00 Praha 3</p>
              </div>
            </div>

            {/* Servis */}
            <div 
              className="rounded-lg p-2 md:p-3 hover:bg-gray-800 transition-all duration-200 min-w-[150px]"
              onMouseEnter={() => setHoveredLocation("servis")}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              <h3 className="font-semibold text-lg mb-3">
                Servis
              </h3>
              <div className="text-sm text-gray-300 space-y-1">
                <p className="font-medium">AXIMO Group s.r.o.</p>
                <p>ThDr. Metoděje Mičoly 44</p>
                <p>756 54 Zubří</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Kontaktujte nás
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Rádi vám připravíme nabídku na míru
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">
                  <MailIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-300">office@aximogroup.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">
                  <PhoneIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefon</h3>
                  <p className="text-gray-300">+420 608 600 745</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">
                  <MapPinIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Adresa</h3>
                  <p className="text-gray-300">
                    AXIMO Group s.r.o.
                    <br />
                    Nádražní 879/27
                    <br />
                    702 00 Ostrava – Moravská Ostrava
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">
                  <BuildingOfficeIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">IČO / DIČ</h3>
                  <p className="text-gray-300">
                    IČO: 11966301
                    <br />
                    DIČ: CZ11966301
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6">
              <h3 className="font-semibold text-lg mb-4">Sledujte nás</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                >
                  <Linkedin />
                </a>
                {/* <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">
                  💼
                </a> */}
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          {/* CTA and Map */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-2xl p-8 text-center border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">
                Máte zájem o spolupráci?
              </h3>
              <p className="text-gray-300 mb-6">
                Kontaktujte nás a my vám připravíme individuální nabídku
              </p>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Kontaktujte nás
              </button>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-800 rounded-2xl h-64 flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-gray-400">
                  Mapa - Ostrava, Moravská Ostrava
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
