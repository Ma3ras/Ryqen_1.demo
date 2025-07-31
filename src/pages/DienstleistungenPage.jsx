import React from "react";
import { Navbar1 } from "../components/Navbar1";
import { Header50 } from "../components/Header50";
import { Layout249 } from "../components/Layout249";
import { ServicePricing } from "../components/ServicePricing";
import { Gallery5 } from "../components/Gallery5";
import { Testimonial6 } from "../components/Testimonial6";
import { Cta27 } from "../components/Cta27";
import { Footer4 } from "../components/Footer4";

export default function DienstleistungenPage() {
  return (
    <div>
      <Navbar1 />
      <Header50 />
      <Layout249 />
      <ServicePricing darkBackground={true} patternBackground={true} />
      <Gallery5 />
      <Testimonial6 />
      <Cta27 />
      <Footer4 />
    </div>
  );
} 