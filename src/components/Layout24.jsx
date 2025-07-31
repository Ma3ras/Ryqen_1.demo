"use client";

import React from "react";

export function Layout24() {
  return (
    <section id="relume" className="py-2 md:py-3 lg:py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
        <div className="px-[5%] md:pr-12 lg:pr-16 bg-[#2E2E2E] h-full flex flex-col justify-center hidden md:flex">
          <div className="rb-5 mb-5 md:mb-6">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
              className="size-12"
              alt="Relume logo"
            />
          </div>
          <h3
            className="mb-5 text-4xl leading-[1.2] font-medium md:mb-6 md:text-5xl lg:text-6xl text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Zeitlose Schnitte. Natürliche Farben. Persönlicher Stil.
          </h3>
          <p
            className="md:text-xl text-gray-300"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Individuelle Beratung und moderne Techniken in einem Salon, der auf Qualität und Wohlfühlatmosphäre setzt.
          </p>
        </div>
        <div className="w-full relative">
                         <picture>
                 <source srcSet="/herosection2.avif" type="image/avif" />
                 <source srcSet="/herosection2.webp" type="image/webp" />
                 <img
                   src="/herosection2.jpg"
                   className="w-full h-[36.45rem] md:h-[45.36rem] lg:h-[55.08rem] object-cover"
                   alt="Professional hair salon interior with modern styling"
                   loading="lazy"
                 />
               </picture>
               {/* Mobile text on image */}
               <div className="absolute top-0 left-0 right-0 md:hidden">
                 <div className="p-4">
                   <h3 
                     className="text-white text-3xl font-bold leading-tight drop-shadow-2xl"
                     style={{ fontFamily: 'Poppins, sans-serif' }}
                   >
                     Zeitlose Schnitte.<br />
                     Natürliche Farben.<br />
                     Persönlicher Stil.
                   </h3>
                 </div>
               </div>

        </div>
      </div>
    </section>
  );
}
