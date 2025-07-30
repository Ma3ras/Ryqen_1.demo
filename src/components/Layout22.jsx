"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout22() {
  return (
    <section id="relume" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
        {/* Left side - Text content with white background */}
        <div className="px-[5%] md:pr-16 lg:pr-20 bg-white h-full flex flex-col justify-center py-20 md:py-32">
          <div className="mb-8 md:mb-10">
            <div className="w-14 h-14 bg-[#2E2E2E] rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
          </div>
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
            <button className="rounded-lg bg-[#2E2E2E] px-10 py-5 text-lg font-medium text-white hover:bg-[#404040] transition-colors">
              Buchen & Preise ansehen
            </button>
          </div>
        </div>
        {/* Right side - Image extending to edge */}
        <div className="w-full h-full">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="w-full h-full object-cover"
            alt="Salon interior"
          />
        </div>
      </div>
      <div style={{ width: '100%', height: '2px', backgroundColor: '#9CA3AF', position: 'relative', top: '0px', opacity: '0.5' }}></div>
    </section>
  );
}
