"use client";

import React from "react";
import { openCituroBooking } from "../utils/cituro";

export function Header50() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="relative z-10 container">
        <div className="flex max-h-[60rem] min-h-svh items-center justify-center py-16 text-center md:py-24 lg:py-28">
          <div className="w-full max-w-lg">
            <h1 className="mb-5 text-6xl font-medium text-white md:mb-6 md:text-9xl lg:text-10xl">
              Unsere Friseurleistungen & Preise für deinen perfekten Look
            </h1>
            <p className="text-white md:text-md">
              Entdecke unser umfassendes Angebot an Haarschnitten, Farbbehandlungen und Styling-Services. Von klassischen Schnitten bis zu trendigen Techniken – wir sorgen für deinen perfekten Look.
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
        <picture>
          <source srcSet="/herosection_dienstleistungen1.avif" type="image/avif" />
          <source srcSet="/herosection_dienstleistungen1.webp" type="image/webp" />
          <img
            src="/herosection_dienstleistungen1.jpg"
            className="size-full object-cover"
            alt="Professional hair salon services and styling"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
