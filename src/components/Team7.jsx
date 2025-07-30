"use client";

import React from "react";

export function Team7() {
  return (
    <section id="relume" className="px-[5%] py-20 md:py-32 lg:py-40 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2
            className="mb-8 text-5xl font-medium md:mb-10 md:text-7xl lg:text-8xl text-gray-900 leading-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Die Menschen hinter dem Look
          </h2>
          <p
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Lernen Sie unser engagiertes Team kennen – kreativ, erfahren und mit echter Leidenschaft für Haare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="mb-6 md:mb-8">
              <div className="mx-auto w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h4
              className="mb-3 text-2xl font-medium md:mb-4 md:text-3xl text-gray-900"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Anna Müller
            </h4>
            <p className="text-base text-gray-700 font-medium mb-3">Balayage-Spezialistin</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Mit über 8 Jahren Erfahrung in der Haarpflege und Farbberatung. Spezialisiert auf Balayage und moderne Schnitte.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <div className="mb-6 md:mb-8">
              <div className="mx-auto w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h4
              className="mb-3 text-2xl font-medium md:mb-4 md:text-3xl text-gray-900"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Max Schmidt
            </h4>
            <p className="text-base text-gray-700 font-medium mb-3">Farbkorrektur-Spezialist</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Experte für Herren- und Damenschnitte. Besonders geschätzt für seine präzise Schnitttechnik und individuelle Beratung.
            </p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center">
            <div className="mb-6 md:mb-8">
              <div className="mx-auto w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h4
              className="mb-3 text-2xl font-medium md:mb-4 md:text-3xl text-gray-900"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Lisa Becker
            </h4>
            <p className="text-base text-gray-700 font-medium mb-3">Saloninhaberin</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Unsere jüngste Kollegin mit frischen Ideen und modernen Techniken. Spezialisiert auf trendige Looks und Jugendstyling.
            </p>
          </div>
          {/* Team Member 4 */}
          <div className="text-center">
            <div className="mb-6 md:mb-8">
              <div className="mx-auto w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h4
              className="mb-3 text-2xl font-medium md:mb-4 md:text-3xl text-gray-900"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Tom Fischer
            </h4>
            <p className="text-base text-gray-700 font-medium mb-3">Barbier</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Mit über 8 Jahren Erfahrung in der Haarpflege und Farbberatung. Spezialisiert auf Balayage und moderne Schnitte.
            </p>
          </div>
          {/* Team Member 5 */}
          <div className="text-center">
            <div className="mb-6 md:mb-8">
              <div className="mx-auto w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h4
              className="mb-3 text-2xl font-medium md:mb-4 md:text-3xl text-gray-900"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Sophie Klein
            </h4>
            <p className="text-base text-gray-700 font-medium mb-3">Coloristin</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Experte für Herren- und Damenschnitte. Besonders geschätzt für seine präzise Schnitttechnik und individuelle Beratung.
            </p>
          </div>
          {/* Team Member 6 - Job Opening */}
          <div className="text-center">
            <div className="mb-6 md:mb-8">
              <div className="mx-auto w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h4
              className="mb-3 text-2xl font-medium md:mb-4 md:text-3xl text-gray-900"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Wir stellen ein!
            </h4>
            <p className="text-base text-gray-700 font-medium mb-3">Jobangebote</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Du bist Friseurin mit Leidenschaft? Wir freuen uns auf deine Bewerbung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
