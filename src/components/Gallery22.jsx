"use client";

import React from "react";

export function Gallery22() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="text-center">
          <h2 className="rb-5 mb-5 text-5xl font-medium md:mb-6 md:text-7xl lg:text-8xl">
            Unsere Arbeiten
          </h2>
          <p className="md:text-md">
            Entdecken Sie unsere neuesten Kreationen und lassen Sie sich
            von unseren Styling-Ideen inspirieren.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              alt="Gallery image 1"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              alt="Gallery image 2"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              alt="Gallery image 3"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              alt="Gallery image 4"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              alt="Gallery image 5"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              alt="Gallery image 6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
