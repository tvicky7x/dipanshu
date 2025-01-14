"use client";
import React, { useEffect, useRef, useState } from "react";
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
import FeaturedWork from "../FeaturedWork/FeaturedWork";

gsap.registerPlugin(ScrollTrigger);

function WholePage() {
  const [heroSectionEnd, setHeroSectionEnd] = useState(false);
  const restSectionRef = useRef();

  // hero section has ended
  function heroSectionEnded() {
    setHeroSectionEnd(true);
  }

  useGSAP(() => {
    // lazy loading
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(9);
  });

  useGSAP(() => {
    gsap.to(restSectionRef.current, {
      height: 0,
      duration: 0.8,
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });
  }, [heroSectionEnd]);

  return (
    <div
      id="wholePage"
      className="overflow-y-auto [&::-webkit-scrollbar]:hidden"
    >
      {!heroSectionEnd && <HeroSection heroSectionEnded={heroSectionEnded} />}
      {heroSectionEnd && (
        <div>
          <div ref={restSectionRef} className="h-screen" />
          <ShapeSection />
          <AboutSection />
          <VisualDesignSection />
          <SkillsSection />
          <ServicesSection />
          <FeaturedWork />
          <DesignProcessSection />
          <HandSection />
          <ContactSection />
        </div>
      )}
    </div>
  );
}

export default WholePage;
