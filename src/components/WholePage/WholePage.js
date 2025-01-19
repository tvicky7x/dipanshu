"use client";
import React, { useEffect, useRef, useState } from "react";
import HeroSection from "../HeroSection/HeroSection";
import ShapeSection from "../ShapeSection/ShapeSection";
import AboutSection from "../AboutSection/AboutSection";
import VisualDesignSection from "../VisualDesignSection/VisualDesignSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import ServicesSection from "../ServicesSections/ServicesSection";
import DesignProcessSection from "../DesignProcessSection/DesignProcessSection";
import ContactSection from "../ContactSection/ContactSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturedWork from "../FeaturedWork/FeaturedWork";
import WireFrameSection from "../WireFrameSection/WireFrameSection";
import UniqueSections from "../UniqueSection/UniqueSections";
import StarSection from "../StarSection/StarSection";

gsap.registerPlugin(ScrollTrigger);

function WholePage() {
  const [heroSectionEnd, setHeroSectionEnd] = useState(true);

  // hero section ended
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

  return (
    <div
      style={{ backgroundImage: "url(bg.svg)" }}
      id="wholePage"
      className="overflow-y-auto [&::-webkit-scrollbar]:hidden"
    >
      <HeroSection heroSectionEnded={heroSectionEnded} />
      {heroSectionEnd && (
        <>
          <ShapeSection />
          <AboutSection />
          <VisualDesignSection />
          <SkillsSection />
          <ServicesSection />
          <FeaturedWork />
          <DesignProcessSection />
          <WireFrameSection />
          <UniqueSections />
          <StarSection />
          <ContactSection />
        </>
      )}
    </div>
  );
}

export default WholePage;
