"use client";

import React from "react";
import { 
  UserFocus, 
  EyedropperSample, 
  CalendarCheck, 
  ClockClockwise, 
  CaretRight 
} from "@phosphor-icons/react";
import { openCituroBooking } from "../utils/cituro";

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
          <div className="text-center flex flex-col h-full">
            <div className="mb-4 md:mb-6">
              <UserFocus className="size-12 md:size-14 mx-auto text-white" weight="regular" />
            </div>
            <h3 className="text-xl font-medium md:text-2xl text-white mb-3 md:mb-4">Persönliche Beratung</h3>
            <p className="text-gray-300 text-sm md:text-base mb-6 flex-grow">Individuelle Beratung – weil jede Frisur zu Ihnen passen muss.</p>
            <button className="text-white font-medium flex items-center gap-2 hover:text-gray-300 transition-colors text-base mx-auto">
              Jetzt beraten lassen
              <CaretRight className="size-5" />
            </button>
          </div>
          {/* Palette */}
          <div className="text-center flex flex-col h-full">
            <div className="mb-4 md:mb-6">
              <EyedropperSample className="size-12 md:size-14 mx-auto text-white" weight="regular" />
            </div>
            <h3 className="text-xl font-medium md:text-2xl text-white mb-3 md:mb-4">Farbberatung</h3>
            <p className="text-gray-300 text-sm md:text-base mb-6 flex-grow">Professionelle Farbberatung – für einen Farbton, der wirklich zu Ihnen passt.</p>
            <button 
              className="text-white font-medium flex items-center gap-2 hover:text-gray-300 transition-colors text-base mx-auto"
              onClick={openCituroBooking}
            >
              Wunsch-Termin buchen
              <CaretRight className="size-5" />
            </button>
          </div>
          {/* Droplet */}
          <div className="text-center flex flex-col h-full">
            <div className="mb-4 md:mb-6">
              <CalendarCheck className="size-12 md:size-14 mx-auto text-white" weight="regular" />
            </div>
            <h3 className="text-xl font-medium md:text-2xl text-white mb-3 md:mb-4">Online Termin</h3>
            <p className="text-gray-300 text-sm md:text-base mb-6 flex-grow">Online buchen – jederzeit & ohne Wartezeit.</p>
            <button 
              className="text-white font-medium flex items-center gap-2 hover:text-gray-300 transition-colors text-base mx-auto"
              onClick={openCituroBooking}
            >
              Online-Termin wählen
              <CaretRight className="size-5" />
            </button>
          </div>
          {/* Sparkles */}
          <div className="text-center flex flex-col h-full">
            <div className="mb-4 md:mb-6">
              <ClockClockwise className="size-12 md:size-14 mx-auto text-white" weight="regular" />
            </div>
            <h3 className="text-xl font-medium md:text-2xl text-white mb-3 md:mb-4">Flexible Öffnungszeiten</h3>
            <p className="text-gray-300 text-sm md:text-base mb-6 flex-grow">Auch abends & samstags für Sie da – ganz ohne Stress.</p>
            <button className="text-white font-medium flex items-center gap-2 hover:text-gray-300 transition-colors text-base mx-auto">
              Kontakt aufnehmen
              <CaretRight className="size-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
} 