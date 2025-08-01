"use client";

import React from "react";
import { useSiteConfig } from "../config/sites";

export function Contact2() {
  const siteConfig = useSiteConfig();

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-medium md:mb-6 md:text-7xl lg:text-8xl">
              Kontaktieren Sie uns
            </h2>
            <p className="md:text-md">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren?
              Wir sind gerne für Sie da.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rb-5">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-8"
                    alt="Relume logo"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-md leading-[1.4] font-medium md:text-xl">
                    Adresse
                  </h3>
                  <p className="text-gray-600">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rb-5">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-8"
                    alt="Relume logo"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-md leading-[1.4] font-medium md:text-xl">
                    Telefon
                  </h3>
                  <p className="text-gray-600">
                    {siteConfig.contact.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rb-5">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-8"
                    alt="Relume logo"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-md leading-[1.4] font-medium md:text-xl">
                    E-Mail
                  </h3>
                  <p className="text-gray-600">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E2E2E] focus:border-transparent"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E2E2E] focus:border-transparent"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E2E2E] focus:border-transparent"
                  placeholder="Ihre Nachricht..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#2E2E2E] px-8 py-4 text-base font-medium text-white hover:bg-[#404040] transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
