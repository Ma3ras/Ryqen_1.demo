"use client";

import React from "react";
import { openCituroBooking } from "../utils/cituro";
import { RxChevronRight } from "react-icons/rx";

export function Layout22() {
  return (
    <section id="relume" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
        <div className="px-[5%] md:pr-12 lg:pr-16 h-full flex flex-col justify-center">
          <div className="max-w-lg">
            <h2 className="mb-4 text-4xl font-medium text-gray-900 md:mb-6 md:text-5xl lg:text-6xl">
              Mehr als ein Schnitt – ein Ort, an dem Sie sich wohlfühlen.
            </h2>
            <p className="text-gray-600 md:text-lg">
              Unser Salon ist mehr als nur ein Ort für Haarschnitte. Hier schaffen wir eine Atmosphäre, in der Sie sich entspannen und verwöhnen lassen können. Mit über 10 Jahren Erfahrung und einem Team von leidenschaftlichen Friseuren bieten wir Ihnen einen Service, der Ihre natürliche Schönheit unterstreicht.
            </p>
            <div className="mt-6 md:mt-8">
              <button 
                className="inline-flex items-center gap-x-2 rounded-lg bg-[#2E2E2E] px-8 py-4 text-base font-medium text-white hover:bg-[#404040] transition-colors"
                onClick={openCituroBooking}
              >
                Buchen & Preise ansehen
                <RxChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative">
          <picture>
            <source srcSet="/ueber_uns1.avif" type="image/avif" />
            <source srcSet="/ueber_uns1.webp" type="image/webp" />
            <img
              src="/ueber_uns1.jpg"
              className="w-full h-full object-cover"
              alt="Salon interior - modern hair salon with professional styling stations"
              loading="eager"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
