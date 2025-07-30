"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Team7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Die Menschen hinter dem Look
          </h2>
          <p className="md:text-md">
            Lernen Sie unser engagiertes Team kennen – kreativ, erfahren und mit
            echter Leidenschaft für Haare.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Anna Müller</h5>
              <h6 className="md:text-md">Balayage-Spezialistin</h6>
            </div>
            <p>
              Mit über 10 Jahren Erfahrung in modernen Haarschnitten und Farben.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Max Schmidt</h5>
              <h6 className="md:text-md">Farbkorrektur-Spezialist</h6>
            </div>
            <p>Spezialist für Balayage und kreative Farbtechniken.</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Lisa Becker</h5>
              <h6 className="md:text-md">Saloninhaberin</h6>
            </div>
            <p>
              Leidenschaft für Haarpflege und individuelle Beratung für jeden
              Kunden.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Tom Fischer</h5>
              <h6 className="md:text-md">Barbier</h6>
            </div>
            <p>Experte für klassische Haarschnitte und Bartpflege.</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Sophie Klein</h5>
              <h6 className="md:text-md">Coloristin</h6>
            </div>
            <p>
              Fasziniert von Farben und Trends, immer auf dem neuesten Stand.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Wir stellen ein!
              </h5>
              <h6 className="md:text-md">Jobangebote</h6>
            </div>
            <p>
              Wir suchen talentierte Friseure, die unser Team verstärken
              möchten.
            </p>
          </div>
        </div>
        <div className="mt-14 w-full max-w-md md:mt-20 lg:mt-24">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Werde Teil unseres Teams!
          </h4>
          <p className="md:text-md">
            Du bist Friseurin mit Leidenschaft? Wir freuen uns auf deine
            Bewerbung.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Zu den Jobangeboten" variant="secondary">
              Zu den Jobangeboten
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
