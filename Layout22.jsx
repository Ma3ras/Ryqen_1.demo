"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout22() {
  return (
    <section id="relume" className="py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-y-12 md:flex-row md:items-center">
          <div className="px-[5%] md:w-1/2">
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-20"
                alt="Relume logo"
              />
            </div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Mehr als ein Schnitt – ein Ort, an dem Sie sich wohlfühlen.
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-gray-200 text-black px-6 py-3 rounded-lg font-medium">
                Buchen & Preise ansehen
              </button>
              <button className="text-black font-medium flex items-center gap-2">
                Button <RxChevronRight />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 md:pr-0 bg-gray-200 flex items-center justify-center">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full h-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
      <div style={{ width: '100%', height: '10px', backgroundColor: 'red', marginTop: '20px' }}>LAYOUT22 TEST LINE</div>
    </section>
  );
}
