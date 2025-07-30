"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact18() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-5 lg:mb-6">
              <BiEnvelope className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold md:text-3xl lg:mb-4 lg:text-4xl">
              E-Mail
            </h3>
            <p className="mb-5 md:mb-6">
              Wir freuen uns auf Ihre Nachricht und antworten schnellstmöglich.
            </p>
            <a className="underline" href="#">
              hello@relume.io
            </a>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-5 lg:mb-6">
              <BiPhone className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold md:text-3xl lg:mb-4 lg:text-4xl">
              Telefon
            </h3>
            <p className="mb-5 md:mb-6">
              Rufen Sie uns an – wir beraten Sie gerne und helfen bei allen
              Fragen.
            </p>
            <a className="underline" href="#">
              +49 (0) 123 456 789
            </a>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-5 lg:mb-6">
              <BiMap className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold md:text-3xl lg:mb-4 lg:text-4xl">
              Adresse
            </h3>
            <p className="mb-5 md:mb-6">
              Wir freuen uns auf Ihren Besuch bei uns im Salon ganz egal, wann
              es Ihnen passt.
            </p>
            <a className="underline" href="#">
              Musterstraße 123, Berlin 10115 DE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
