"use client";

import React, { useState } from "react";

export function Layout24() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section id="relume" className="py-2 md:py-3 lg:py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
        <div className="px-[5%] md:pr-12 lg:pr-16 bg-[#2E2E2E] h-full flex flex-col justify-center hidden md:flex">
          <div className="max-w-lg">
            <h2 className="mb-4 text-4xl font-medium text-white md:mb-6 md:text-5xl lg:text-6xl">
              Zeitlose Schnitte. Natürliche Farben. Persönlicher Stil.
            </h2>
            <p className="text-white md:text-lg">
              Individuelle Beratung und moderne Techniken in einem Salon, der auf Qualität und Wohlfühlatmosphäre setzt.
            </p>
          </div>
        </div>
        <div className="w-full relative">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10">
              <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
            </div>
          )}
          <picture>
            <source srcSet="/herosection2.avif" type="image/avif" />
            <source srcSet="/herosection2.webp" type="image/webp" />
            <img
              src="/herosection2.jpg"
              className={`w-full h-[36.45rem] md:h-[45.36rem] lg:h-[55.08rem] object-cover transition-opacity duration-200 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              alt="Professional hair salon interior with modern styling"
              loading="lazy"
              onLoad={handleImageLoad}
            />
          </picture>
          {/* Mobile text on image */}
          <div className="absolute top-0 left-0 right-0 md:hidden">
            <div className="p-4">
              <h3
                className="text-white text-3xl font-bold leading-tight drop-shadow-2xl"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Zeitlose Schnitte.<br />
                Natürliche Farben.<br />
                Persönlicher Stil.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
