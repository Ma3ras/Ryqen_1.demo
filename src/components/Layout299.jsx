"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout299() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#2E2E2E]">
      <div className="container">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl leading-[1.2] font-medium md:text-5xl lg:text-6xl text-white mb-6">
            Ihre Haare verdienen mehr als nur einen Schnitt.
          </h2>
          <p className="text-gray-300 md:text-2xl max-w-2xl mx-auto">
            Vertrauen, Stil und persönliche Beratung - dafür stehen wir.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Scissors */}
          <div className="text-center">
            <div className="mb-4 md:mb-6">
              <svg className="size-12 md:size-14 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <line x1="20" y1="4" x2="8.12" y2="15.88" />
                <line x1="14.47" y1="14.48" x2="20" y2="20" />
                <line x1="8.12" y1="8.12" x2="12" y2="12" />
              </svg>
            </div>
            <h3 className="text-xl font-medium md:text-2xl text-white mb-3 md:mb-4">Haarschnitte</h3>
            <p className="text-gray-300 text-sm md:text-base">Moderne und klassische Schnitte für jeden Haartyp und Gesichtsform.</p>
          </div>
          {/* Palette */}
          <div className="text-center">
            <div className="mb-4 md:mb-6">
              <svg className="size-12 md:size-14 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="13.5" cy="6.5" r=".5" />
                <circle cx="17.5" cy="10.5" r=".5" />
                <circle cx="8.5" cy="7.5" r=".5" />
                <circle cx="6.5" cy="12.5" r=".5" />
                <path d="M12 22a10 10 0 1 1 10-10c0 2.5-2 4-4 4h-1a3 3 0 0 0-3 3v1c0 2-1.5 4-4 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium md:text-2xl text-white mb-3 md:mb-4">Haarfärbung</h3>
            <p className="text-gray-300 text-sm md:text-base">Professionelle Färbung, Balayage und Highlights für natürliche Ergebnisse.</p>
          </div>
          {/* Droplet */}
          <div className="text-center">
            <div className="mb-4 md:mb-6">
              <svg className="size-12 md:size-14 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.69l-.94.94C7.14 7.55 4 11.03 4 14a8 8 0 0 0 16 0c0-2.97-3.14-6.45-7.06-10.37L12 2.69z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium md:text-2xl text-white mb-3 md:mb-4">Haarpflege</h3>
            <p className="text-gray-300 text-sm md:text-base">Tiefenpflege und Behandlungen für gesundes und glänzendes Haar.</p>
          </div>
          {/* Sparkles */}
          <div className="text-center">
            <div className="mb-4 md:mb-6">
              <svg className="size-12 md:size-14 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m8-8h2M2 12H4m15.07-7.07l1.42 1.42M4.93 19.07l1.42-1.42M19.07 19.07l-1.42-1.42M4.93 4.93l1.42 1.42" />
                <circle cx="12" cy="12" r="5" />
              </svg>
            </div>
            <h3 className="text-xl font-medium md:text-2xl text-white mb-3 md:mb-4">Styling</h3>
            <p className="text-gray-300 text-sm md:text-base">Hochzeitsfrisuren, Event-Styling und tägliche Looks für jeden Anlass.</p>
          </div>
        </div>
        <div className="mt-12 md:mt-16 text-center">
          <button className="text-white font-medium flex items-center gap-2 hover:text-gray-300 transition-colors text-base mx-auto">
            Alle Services ansehen
            <RxChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
} 