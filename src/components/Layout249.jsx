"use client";


import React from "react";
import { 
  Scissors, 
  Palette, 
  Sparkle, 
  CaretRight 
} from "@phosphor-icons/react";

export function Layout249() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <h2 className="mb-5 text-5xl font-medium md:mb-6 md:text-7xl lg:text-8xl">
              Unsere Friseurleistungen & Preise für deinen perfekten Look
            </h2>
            <p className="md:text-md">
              Ob Schnitt, Farbe oder Pflege – wir holen das Beste aus deinem Haar.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          <div className="text-center flex flex-col h-full">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mx-auto size-24 bg-gray-800 rounded-lg flex items-center justify-center">
                <Scissors className="size-16 text-white" weight="regular" />
              </div>
            </div>
            <h3 className="mb-1 text-2xl font-medium md:mb-2 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Cuts
            </h3>
            <p className="text-gray-600 text-lg font-medium mb-6">
              Charakter zeigen – mit jedem Schnitt.
            </p>
            <p className="text-gray-600 flex-1">
              Individuelle Schnitte, die zu dir passen – kombiniert mit Techniken, die deinen Look unterstreichen. Für einen Auftritt mit Stil und Persönlichkeit.
            </p>
            <div className="mt-6 md:mt-8">
                                   <button className="text-black font-medium flex items-center gap-2 hover:text-gray-600 transition-colors text-base mx-auto">
                       Mehr dazu
                       <CaretRight className="size-5" />
                     </button>
            </div>
          </div>
          <div className="text-center flex flex-col h-full">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mx-auto size-24 bg-gray-800 rounded-lg flex items-center justify-center">
                <Palette className="size-16 text-white" weight="regular" />
              </div>
            </div>
            <h3 className="mb-1 text-2xl font-medium md:mb-2 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Color
            </h3>
            <p className="text-gray-600 text-lg font-medium mb-6">
              Farbe, die nicht nur deckt – sondern erzählt.
            </p>
            <p className="text-gray-600 flex-1">
              Kreative Farbtechniken für Tiefe, Glanz und Ausdruck. Ob natürliche Nuancen oder ein kraftvolles Statement – wir holen das Beste aus deinem Haar.
            </p>
            <div className="mt-6 md:mt-8">
                                   <button className="text-black font-medium flex items-center gap-2 hover:text-gray-600 transition-colors text-base mx-auto">
                       Mehr dazu
                       <CaretRight className="size-5" />
                     </button>
            </div>
          </div>
          <div className="text-center flex flex-col h-full">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mx-auto size-24 bg-gray-800 rounded-lg flex items-center justify-center">
                <Sparkle className="size-16 text-white" weight="regular" />
              </div>
            </div>
            <h3 className="mb-1 text-2xl font-medium md:mb-2 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Styling
            </h3>
            <p className="text-gray-600 text-lg font-medium mb-6">
              Für Alltag oder Auftritt.
            </p>
            <p className="text-gray-600 flex-1">
              Typgerechtes Styling für jeden Anlass. Ob Alltagslook oder Event – wir sorgen für Form, Struktur und ein Finish, das überzeugt.
            </p>
            <div className="mt-6 md:mt-8">
                                   <button className="text-black font-medium flex items-center gap-2 hover:text-gray-600 transition-colors text-base mx-auto">
                       Mehr dazu
                       <CaretRight className="size-5" />
                     </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
