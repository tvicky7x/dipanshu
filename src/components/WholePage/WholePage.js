"use client";
import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import ShapeSection from "../ShapeSection/ShapeSection";
import AboutSection from "../AboutSection/AboutSection";
import VisualDesignSection from "../VisualDesignSection/VisualDesignSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import ServicesSection from "../ServicesSections/ServicesSection";
import DesignProcessSection from "../DesignProcessSection/DesignProcessSection";
import HandSection from "../HandSection/HandSection";
import ContactSection from "../ContactSection/ContactSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function WholePage() {
  useGSAP(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(9);
  });

  return (
    <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <div className="overflow-hidden">
        <HeroSection />
        <ShapeSection />
      </div>
      <AboutSection />
      <VisualDesignSection />
      <SkillsSection />
      <ServicesSection />
      <DesignProcessSection />
      <HandSection />
      <ContactSection />
    </div>
  );
}

export default WholePage;
