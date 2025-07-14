"use client"
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const texts = [
    "Spolehlivý partner pro technologie montáže a komerční stavby",
    "Zakládáme si na kvalitní práci a referencích"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTransitioning(false);
      }, 2000); // Half of the transition duration
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gray-50 py-56 overflow-hidden">
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
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-12 items-center justify-center">
          {/* Content */}
          <div className="space-y-8 max-w-4xl text-center">
            <h1 
              className={`text-5xl max-w-3xl font-semibold text-gray-100 leading-relaxed transition-opacity duration-2000 ease-in-out ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {texts[currentTextIndex]}
            </h1>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Kontaktujte nás
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">
                Více o nás
              </button>
            </div> */}
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