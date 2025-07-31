"use client";

import React, { useState } from "react";

export function Gallery5() {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  const galleryImages = [
    {
      avif: "/herosection1-small.avif",
      webp: "/herosection1-small.webp",
      jpg: "/herosection1-small.jpg",
      avifLarge: "/herosection1-large.avif",
      webpLarge: "/herosection1-large.webp",
      jpgLarge: "/herosection1-large.jpg",
      alt: "Hairstyle gallery - modern cut and styling"
    },
    {
      avif: "/Gallerie2-small.avif",
      webp: "/Gallerie2-small.webp",
      jpg: "/Gallerie2-small.jpg",
      avifLarge: "/Gallerie2-large.avif",
      webpLarge: "/Gallerie2-large.webp",
      jpgLarge: "/Gallerie2-large.jpg",
      alt: "Hairstyle gallery - color and highlights"
    },
    {
      avif: "/Gallerie3-small.avif",
      webp: "/Gallerie3-small.webp",
      jpg: "/Gallerie3-small.jpg",
      avifLarge: "/Gallerie3-large.avif",
      webpLarge: "/Gallerie3-large.webp",
      jpgLarge: "/Gallerie3-large.jpg",
      alt: "Hairstyle gallery - elegant styling"
    }
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="text-center">
          <h2 className="rb-5 mb-5 text-5xl font-medium md:mb-6 md:text-7xl lg:text-8xl">
            Unsere Looks
          </h2>
          <p className="md:text-md">
            Entdecke echte Kunden-Looks – modern, individuell und mit Stil.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-gray-100" style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)' }}>
              <div className="relative aspect-[4/3]">
                {!loadedImages[index] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                  </div>
                )}
                <picture>
                  <source 
                    media="(min-width: 1024px)" 
                    srcSet={`${image.avifLarge} 1x, ${image.avifLarge} 2x`} 
                    type="image/avif" 
                  />
                  <source 
                    media="(min-width: 1024px)" 
                    srcSet={`${image.webpLarge} 1x, ${image.webpLarge} 2x`} 
                    type="image/webp" 
                  />
                  <source 
                    media="(min-width: 768px)" 
                    srcSet={`${image.avif} 1x, ${image.avifLarge} 2x`} 
                    type="image/avif" 
                  />
                  <source 
                    media="(min-width: 768px)" 
                    srcSet={`${image.webp} 1x, ${image.webpLarge} 2x`} 
                    type="image/webp" 
                  />
                  <source srcSet={`${image.avif} 1x, ${image.avif} 2x`} type="image/avif" />
                  <source srcSet={`${image.webp} 1x, ${image.webp} 2x`} type="image/webp" />
                  <img
                    src={image.jpg}
                    srcSet={`${image.jpg} 1x, ${image.jpgLarge} 2x`}
                    className={`w-full h-full object-cover transition-opacity duration-200 ${
                      loadedImages[index] 
                        ? 'opacity-100 hover:scale-105' 
                        : 'opacity-0'
                    }`}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    onLoad={() => handleImageLoad(index)}
                    onError={(e) => {
                      console.error(`Failed to load image ${index}:`, e);
                      handleImageLoad(index); // Remove loading state even on error
                    }}
                  />
                </picture>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
