"use client";

import React, { useState } from "react";
import { openCituroBooking } from "../utils/cituro";
import { RxChevronRight } from "react-icons/rx";

export function Layout22() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section id="relume" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
        {/* Left side - Text content with white background */}
        <div className="px-[5%] md:pr-16 lg:pr-20 bg-white h-full flex flex-col justify-center py-20 md:py-32">

          <h2
            className="mb-8 text-5xl leading-[1.1] font-medium md:mb-10 md:text-6xl lg:text-7xl text-[#2E2E2E]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Mehr als ein Schnitt – ein Ort, an dem Sie sich wohlfühlen.
          </h2>
          <p
            className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <button 
              className="rounded-lg bg-[#2E2E2E] px-10 py-5 text-lg font-medium text-white hover:bg-[#404040] transition-colors"
              onClick={openCituroBooking}
            >
              Buchen & Preise ansehen
            </button>
          </div>
        </div>
        {/* Right side - Image extending to edge */}
        <div className="w-full h-full relative">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10">
              <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
            </div>
          )}
          <picture>
            <source srcSet="/ueber_uns1.avif" type="image/avif" />
            <source srcSet="/ueber_uns1.webp" type="image/webp" />
            <img
              src="/ueber_uns1.jpg"
              className={`w-full h-full object-cover transition-all duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0 blur-sm'
              }`}
              alt="Salon interior - modern hair salon with professional styling stations"
              loading="lazy"
              onLoad={handleImageLoad}
            />
          </picture>
        </div>
      </div>
      <div style={{ width: '100%', height: '2px', backgroundColor: '#9CA3AF', position: 'relative', top: '0px', opacity: '0.5' }}></div>
    </section>
  );
}
