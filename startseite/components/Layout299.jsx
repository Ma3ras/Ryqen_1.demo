"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout299() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 w-full max-w-lg items-start justify-between gap-5 md:mb-18 lg:mb-20">
            <h2 className="text-center text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              Ihre Haare verdienen mehr als nur einen Schnitt. Vertrauen, Stil
              und persönliche Betreuung – dafür stehen wir.
            </h2>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full text-center">
              <div className="rb-5 mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Persönliche Beratung
              </h3>
              <p className="text-center">
                Individuelle Beratung – weil jede Frisur zu Ihnen passen muss.
              </p>
              <div className="mt-6 flex justify-center md:mt-8">
                <Button
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Jetzt beraten lassen
                </Button>
              </div>
            </div>
            <div className="w-full text-center">
              <div className="rb-5 mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Farbberatung
              </h3>
              <p className="text-center">
                Professionelle Farbberatung – für einen Farbton, der wirklich zu
                Ihnen passt.
              </p>
              <div className="mt-6 flex justify-center md:mt-8">
                <Button
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Wunsch-Termin buchen
                </Button>
              </div>
            </div>
            <div className="w-full text-center">
              <div className="rb-5 mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Online Termin
              </h3>
              <p className="text-center">
                Online buchen – jederzeit & ohne Wartezeit.
              </p>
              <div className="mt-6 flex justify-center md:mt-8">
                <Button
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Online-Termin wählen
                </Button>
              </div>
            </div>
            <div className="w-full text-center">
              <div className="rb-5 mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Flexible Öffnungszeiten
              </h3>
              <p className="text-center">
                Auch abends & samstags für Sie da – ganz ohne Stress.
              </p>
              <div className="mt-6 flex justify-center md:mt-8">
                <Button
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Kontakt aufnehmen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
