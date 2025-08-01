"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { useSiteConfig } from "../config/sites";

export function Contact14() {
  const siteConfig = useSiteConfig();

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h3 className="text-2xl font-medium mb-4">Kontakt</h3>
            <h2 className="mb-5 text-5xl font-medium md:mb-6 md:text-7xl lg:text-8xl">
              Kontaktieren Sie uns
            </h2>
            <p className="md:text-lg mb-8">
              Wir freuen uns auf Ihre Nachricht oder Buchung!
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <BiEnvelope className="size-6 text-[#2E2E2E]" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium">
                    E-Mail
                  </h3>
                  <p className="text-gray-600">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <BiPhone className="size-6 text-[#2E2E2E]" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium">
                    Telefon
                  </h3>
                  <p className="text-gray-600 mb-1">
                    Rufen Sie uns an
                  </p>
                  <p className="text-gray-600">
                    {siteConfig.contact.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <BiMap className="size-6 text-[#2E2E2E]" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium">
                    Adresse
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {siteConfig.contact.address}
                  </p>
                  <button className="text-[#2E2E2E] font-medium flex items-center gap-1 hover:text-gray-600 transition-colors">
                    Wegbeschreibung
                    <RxChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Rosengasse+3,+94032+Passau,+Germany&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HaarKunst Passau - Rosengasse 3"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
