"use client";

import React from "react";

export function Testimonial3() {
  return (
    <section id="relume" className="px-[5%] pt-10 pb-12 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 bg-[#2E2E2E]">
      <div className="container mx-auto">
        <div className="text-left max-w-5xl">
          <h2
            className="mb-8 text-5xl font-medium md:mb-10 md:text-7xl lg:text-8xl text-white leading-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Werde Teil unseres Teams!
          </h2>
          <p
            className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Du bist Friseurin mit Leidenschaft? Wir freuen uns auf deine Bewerbung.
          </p>
          <button className="rounded-lg bg-gray-300 px-8 py-4 text-base font-medium text-[#2E2E2E] hover:bg-gray-400 transition-colors">
            Zu den Jobangeboten
          </button>
        </div>
      </div>
    </section>
  );
}
