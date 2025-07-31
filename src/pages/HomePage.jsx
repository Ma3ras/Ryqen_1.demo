import React from "react";
import { Navbar1 } from "../components/Navbar1";
import { Header30 } from "../components/Header30";
import { Testimonial19 } from "../components/Testimonial19";
import { Layout24 } from "../components/Layout24";
import { Layout249 } from "../components/Layout249";
import { Layout299 } from "../components/Layout299";
import { ServicePricing } from "../components/ServicePricing";
import { Gallery22 } from "../components/Gallery22";
import { Cta3 } from "../components/Cta3";
import { Contact18 } from "../components/Contact18";
import { Footer4 } from "../components/Footer4";

export default function HomePage() {
  return (
    <div>
      <Navbar1 />
      <Header30 />
      <Layout249 />
      <Layout24 />
      <ServicePricing />
      <Testimonial19 />
      <Layout299 />
      <Gallery22 />
      <Cta3 />
      <Contact18 />
      <Footer4 />
    </div>
  );
} 