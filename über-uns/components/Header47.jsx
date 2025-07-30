"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Über unseren Salon
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              Wir lieben individuelle Looks und persönliche Beratung. Ob
              kreative Schnitte oder gesunde Farbe – bei uns stehen Sie und Ihr
              Haar im Mittelpunkt.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Buchen & Preise ansehen">
                Buchen & Preise ansehen
              </Button>
              <Button title="Mehr erfahren" variant="secondary">
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
