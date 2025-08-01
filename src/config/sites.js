// Site configurations for different subdomains
export const siteConfigs = {
  // Main production site
  main: {
    name: "Ryqen",
    logo: "/logo-haarkunst-passau.png",
    hero: {
      title: "Dein Friseur für moderne Schnitte & natürliche Farben in Passau",
      subtitle: "Seit 2020 vereinen wir moderne Schnitttechniken mit persönlicher Beratung und natürlicher Farbgebung. Unser Salon steht für Qualität, Stil und echte Kundenzufriedenheit."
    },
    contact: {
      phone: "0851 21375942",
      email: "info@haarkunst-passau.de",
      address: "Rosengasse 3, Passau, Germany, 94032"
    },
    colors: {
      primary: "#2E2E2E",
      secondary: "#404040"
    }
  },

  // S5T9U3V7 subdomain site
  s5t9u3v7: {
    name: "Ryqen S5T9U3V7",
    logo: "/logo-haarkunst-passau.png",
    hero: {
      title: "Dein Friseur für moderne Schnitte & natürliche Farben in Passau",
      subtitle: "Seit 2020 vereinen wir moderne Schnitttechniken mit persönlicher Beratung und natürlicher Farbgebung. Unser Salon steht für Qualität, Stil und echte Kundenzufriedenheit."
    },
    contact: {
      phone: "0851 21375942",
      email: "info@haarkunst-passau.de",
      address: "Rosengasse 3, Passau, Germany, 94032"
    },
    colors: {
      primary: "#2E2E2E",
      secondary: "#404040"
    }
  },
  
  // Staging site
  staging: {
    name: "Ryqen Staging",
    logo: "/logo-haarkunst-passau.png",
    hero: {
      title: "Dein Friseur für moderne Schnitte & natürliche Farben in Passau",
      subtitle: "Seit 2020 vereinen wir moderne Schnitttechniken mit persönlicher Beratung und natürlicher Farbgebung. Unser Salon steht für Qualität, Stil und echte Kundenzufriedenheit."
    },
    contact: {
      phone: "0851 21375942",
      email: "info@haarkunst-passau.de",
      address: "Rosengasse 3, Passau, Germany, 94032"
    },
    colors: {
      primary: "#2E2E2E",
      secondary: "#404040"
    }
  },
  
  // Development site
  dev: {
    name: "Ryqen Dev",
    logo: "/logo-haarkunst-passau.png",
    hero: {
      title: "Dein Friseur für moderne Schnitte & natürliche Farben in Passau",
      subtitle: "Seit 2020 vereinen wir moderne Schnitttechniken mit persönlicher Beratung und natürlicher Farbgebung. Unser Salon steht für Qualität, Stil und echte Kundenzufriedenheit."
    },
    contact: {
      phone: "0851 21375942",
      email: "info@haarkunst-passau.de",
      address: "Rosengasse 3, Passau, Germany, 94032"
    },
    colors: {
      primary: "#2E2E2E",
      secondary: "#404040"
    }
  }
};

// Get current site configuration based on environment
export const getCurrentSiteConfig = () => {
  const environment = process.env.NODE_ENV || 'development';
  const siteConfig = process.env.SITE_CONFIG || 'main'; // Use environment variable first
  
  // Only try to get subdomain if we're in a browser environment
  let subdomain = '';
  if (typeof window !== 'undefined' && window.location) {
    subdomain = window.location.hostname.split('.')[0];
  }

  // Map subdomains to configs
  const subdomainMap = {
    's5t9u3v7': 's5t9u3v7',
    'staging': 'staging',
    'dev': 'dev',
    'localhost': 'main' // Use main config for localhost development
  };

  // Use environment variable first, then subdomain, then default to main
  const siteKey = siteConfig || subdomainMap[subdomain] || 'main';
  return siteConfigs[siteKey];
};

// Hook to use site configuration in components
export const useSiteConfig = () => {
  return getCurrentSiteConfig();
}; 