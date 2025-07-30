"use client";


import React from "react";
import { RxChevronRight } from "react-icons/rx";

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
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="mx-auto size-24 rounded-lg"
                alt="Haarschnitte placeholder"
              />
            </div>
            <h3 className="mb-5 text-2xl font-medium md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Schnitt & Styling für Sie
            </h3>
            <p className="text-gray-600 flex-1">
              Individuelle Schnitte, die zu dir passen – kombiniert mit Pflege, die dein Haar glänzen lässt. Für deinen Look mit Persönlichkeit.
            </p>
            <div className="mt-6 md:mt-8">
              <button className="text-black font-medium flex items-center gap-2 hover:text-gray-600 transition-colors text-base mx-auto">
                Zu den Damenservices
                <RxChevronRight className="size-5" />
              </button>
            </div>
          </div>
          <div className="text-center flex flex-col h-full">
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="mx-auto size-24 rounded-lg"
                alt="Haarfärbung placeholder"
              />
            </div>
            <h3 className="mb-5 text-2xl font-medium md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Cut & Care für Männer
            </h3>
            <p className="text-gray-600 flex-1">
              Ob klassisch oder modern: Wir schneiden präzise, beraten ehrlich – und sorgen für einen Auftritt mit Stil.
            </p>
            <div className="mt-6 md:mt-8">
              <button className="text-black font-medium flex items-center gap-2 hover:text-gray-600 transition-colors text-base mx-auto">
                Zu den Herrenservices
                <RxChevronRight className="size-5" />
              </button>
            </div>
          </div>
          <div className="text-center flex flex-col h-full">
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="mx-auto size-24 rounded-lg"
                alt="Haarpflege placeholder"
              />
            </div>
            <h3 className="mb-5 text-2xl font-medium md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Farbveredelung & Pflege
            </h3>
            <p className="text-gray-600 flex-1">
              Glanz, Tiefe und Nuancen – mit Techniken wie Balayage, Glossing & Blondveredelung holen wir das Beste aus deinem Haar.
            </p>
            <div className="mt-6 md:mt-8">
              <button className="text-black font-medium flex items-center gap-2 hover:text-gray-600 transition-colors text-base mx-auto">
                Zu den Pflegeservices
                <RxChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
