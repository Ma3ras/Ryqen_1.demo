"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout229() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Schnitt & Styling für Sie
            </h3>
            <p>Wir bieten individuelle Haarschnitte und Farbtechniken.</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Zu den Damenservices
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Cut & Care für Männer
            </h3>
            <p>Erleben Sie erstklassigen Service in entspannter Atmosphäre.</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Services für Herren
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Farbveredelung & Pflege
            </h3>
            <p>Von Balayage bis Hochzeitsfrisuren – wir haben es.</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Farbberatung entdecken
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
