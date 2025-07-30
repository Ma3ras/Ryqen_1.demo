"use client";

import React from "react";

export function BereitSection() {
  return (
    <section 
      id="relume" 
      className="relative px-[5%] py-16 md:py-24 lg:py-28"
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
      <div className="relative z-10 container max-w-lg text-center">
        <h2 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
          Bereit für Ihren neuen Look?
        </h2>
        <p className="text-white md:text-lg mb-8">
          Lassen Sie uns gemeinsam Ihren perfekten Style finden!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-lg bg-white px-8 py-4 text-base font-medium text-[#2E2E2E] hover:bg-gray-100 transition-colors">
            Jetzt Termin buchen
          </button>
        </div>
      </div>
    </section>
  );
} 