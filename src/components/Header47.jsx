"use client";

import React from "react";

export function Header47() {
  return (
    <section 
      id="relume" 
      className="relative bg-[#2E2E2E] py-8 md:py-16 lg:py-20"
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
        style={{ opacity: 0.7 }}
      ></div>
      <div className="container mx-auto px-[5%] relative z-10">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Über unseren Salon
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
