"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout249() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Unsere Friseurleistungen & Preise für deinen perfekten Look
            </h2>
            <p className="md:text-md">
              Ob Schnitt, Farbe oder Pflege – wir holen das Beste aus deinem
              Haar.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Schnitt & Styling für Sie
            </h3>
            <p>
              Individuelle Schnitte, die zu dir passen – kombiniert mit Pflege,
              die dein Haar glänzen lässt. Für deinen Look mit Persönlichkeit.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Cut & Care für Männer
            </h3>
            <p>
              Ob klassisch oder modern: Wir schneiden präzise, beraten ehrlich –
              und sorgen für einen Auftritt mit Stil.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Farbveredelung & Pflege
            </h3>
            <p>
              Glanz, Tiefe und Nuancen – mit Techniken wie Balayage, Glossing &
              Blondveredelung holen wir das Beste aus deinem Haar.
            </p>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            Buchen & Preise ansehen
          </Button>
        </div>
      </div>
    </section>
  );
}
