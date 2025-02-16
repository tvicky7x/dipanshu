"use client";
import React, { useState } from "react";
import HeroSection from "../HeroSection/HeroSection";
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
import SimplicitySection from "../SimplicitySection/SimplicitySection";
import HeroSectionMobile from "../HeroSection/HeroSectionMobile";

gsap.registerPlugin(ScrollTrigger);

function WholePage() {
  const [shapeSectionEnd, setShapeSectionEnd] = useState(false);

  // hero section ended
  function shapeSectionEnded() {
    setShapeSectionEnd(true);
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
    <>
      {/* <div
        style={{ backgroundImage: "url(bg.svg)" }}
        id="wholePage"
        className="hidden overflow-y-auto md:block [&::-webkit-scrollbar]:hidden"
      >
        <HeroSection shapeSectionEnded={shapeSectionEnded} />
        {shapeSectionEnd && (
          <>
            <SimplicitySection />
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
      </div> */}
      <div
        style={{ backgroundImage: "url(bg.svg)" }}
        className="overflow-hidden"
      >
        <HeroSectionMobile shapeSectionEnded={shapeSectionEnded} />
        {shapeSectionEnd && (
          <>
            <SimplicitySection />
            <AboutSection />
            <VisualDesignSection />
            <SkillsSection />
            <ServicesSection />
            <FeaturedWork />
            <DesignProcessSection />
            <WireFrameSection />
            <UniqueSections />
          </>
        )}
      </div>
    </>
  );
}

export default WholePage;
