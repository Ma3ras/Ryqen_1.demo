"use client";


import React, { useState } from "react";
import { openCituroBooking } from "../utils/cituro";

export function Header30() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section id="relume" className="relative px-[5%]">
      <div className="relative z-10 container">
        <div className="flex max-h-[60rem] min-h-svh items-center justify-center py-16 text-center md:py-24 lg:py-28">
          <div className="w-full max-w-lg">
            <h1 className="mb-5 text-6xl font-medium text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              Dein Friseur für moderne Schnitte & natürliche Farben in [City]
            </h1>
            <p className="text-text-alternative md:text-md">
              Seit 2020 vereinen wir moderne Schnitttechniken mit persönlicher Beratung und natürlicher Farbgebung. Unser Salon steht für Qualität, Stil und echte Kundenzufriedenheit.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <button 
                className="rounded-lg bg-[#2E2E2E] px-8 py-4 text-base font-medium text-white hover:bg-[#404040] transition-colors"
                onClick={openCituroBooking}
              >
                Buchen & Preise erfahren
              </button>
              <button className="rounded-lg bg-white px-8 py-4 text-base font-medium text-gray-800 hover:bg-gray-100 transition-colors">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
        )}
        <picture>
          <source srcSet="/herosection3.avif" type="image/avif" />
          <source srcSet="/herosection3.webp" type="image/webp" />
          <img
            src="/herosection3.jpg"
            className={`size-full object-cover transition-all duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0 blur-sm'
            }`}
            style={{ objectPosition: 'center 30%' }}
            alt="Modern hair salon with professional styling"
            loading="eager"
            onLoad={handleImageLoad}
          />
        </picture>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
