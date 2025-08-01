// Single site configuration for HaarKunst Passau
export const siteConfig = {
  name: "HaarKunst Passau",
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
};

// Simple hook to use site configuration in components
export const useSiteConfig = () => {
  return siteConfig;
}; 