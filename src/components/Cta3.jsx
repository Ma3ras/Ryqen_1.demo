"use client";


import React from "react";

export function Cta3() {
  return (
    <section 
      id="relume" 
      className="relative px-[5%] py-14 md:py-22 lg:py-26"
      style={{
        backgroundImage: `url('/Pattern6.png')`,
        backgroundSize: '400px 400px',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div 
        className="absolute inset-0 bg-[#2E2E2E]"
        style={{ opacity: 0.6 }}
      ></div>
      <div className="relative z-10 container">
        <div className="text-center">
          <h2 className="mb-5 text-5xl font-medium text-white md:mb-6 md:text-7xl lg:text-8xl">
            Bereit für Ihren neuen Look?
          </h2>
          <p className="text-white md:text-md">
            Buchen Sie jetzt Ihren Termin und lassen Sie uns gemeinsam Ihren
            perfekten Look kreieren.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <button className="rounded-lg bg-white px-8 py-4 text-base font-medium text-gray-800 hover:bg-gray-100 transition-colors">
              Buchen & Preise ansehen
            </button>
            <button className="rounded-lg bg-transparent border border-white px-8 py-4 text-base font-medium text-white hover:bg-white hover:text-gray-800 transition-colors">
              Mehr erfahren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
