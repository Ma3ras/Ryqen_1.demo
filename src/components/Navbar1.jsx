"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { openCituroBooking } from "../utils/cituro";
import { useSiteConfig } from "../config/sites";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

// Custom Link component that scrolls to top
const ScrollToTopLink = ({ to, children, className, onClick }) => {
  const navigate = useNavigate();
  const location = window.location.pathname;
  
  const handleClick = (e) => {
    e.preventDefault();
    
    if (location === to) {
      // If already on the page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If navigating to a different page, navigate and immediately set scroll to top
      navigate(to);
      // Immediately set scroll position to top without animation
      window.scrollTo(0, 0);
    }
    
    if (onClick) onClick();
  };
  
  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export function Navbar1() {
  const useActive = useRelume();
  const siteConfig = useSiteConfig();
  return (
    <section
      id="relume"
      className="z-[999] flex w-full items-center lg:min-h-18 lg:px-[5%] sticky top-0"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '2px solid #e5e7eb'
      }}
    >
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-20 lg:min-h-24 lg:px-0">
          <ScrollToTopLink to="/">
            <picture>
              <source srcSet="/logo-haarkunst-passau.webp" type="image/webp" />
              <img
                src="/logo-haarkunst-passau-optimized.png"
                alt={`${siteConfig.name} logo`}
                className="h-12 w-auto md:h-16 lg:h-20"
              />
            </picture>
          </ScrollToTopLink>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-[#2E2E2E]"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-[#2E2E2E]"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-[#2E2E2E]"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          initial="close"
          exit="close"
          animate={useActive.animateMobileMenu}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <ScrollToTopLink
            to="/"
            className="block py-3 text-base font-medium text-[#2E2E2E] first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 hover:text-gray-600 transition-colors"
            onClick={() => useActive.toggleMobileMenu()}
          >
            Startseite
          </ScrollToTopLink>
          <ScrollToTopLink
            to="/ueber-uns"
            className="block py-3 text-base font-medium text-[#2E2E2E] first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 hover:text-gray-600 transition-colors"
            onClick={() => useActive.toggleMobileMenu()}
          >
            Über uns
          </ScrollToTopLink>
          <ScrollToTopLink
            to="/dienstleistungen-&-preise"
            className="block py-3 text-base font-medium text-[#2E2E2E] first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 hover:text-gray-600 transition-colors"
            onClick={() => useActive.toggleMobileMenu()}
          >
            Dienstleistungen
          </ScrollToTopLink>
          <ScrollToTopLink
            to="/kontakt"
            className="block py-3 text-base font-medium text-[#2E2E2E] first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 hover:text-gray-600 transition-colors"
            onClick={() => useActive.toggleMobileMenu()}
          >
            Kontakt
          </ScrollToTopLink>
          <div className="mt-6 flex flex-col items-center gap-4 lg:mt-0 lg:ml-4 lg:flex-row">
            <button
              className="rounded-lg bg-[#2E2E2E] px-6 py-3 text-base font-medium text-white hover:bg-[#404040] transition-colors"
              onClick={openCituroBooking}
            >
              Jetzt Termin buchen
            </button>
            <button
              className="rounded-lg bg-gray-300 px-6 py-3 text-base font-medium text-[#2E2E2E] hover:bg-gray-400 transition-colors"
            >
              Anrufen
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
