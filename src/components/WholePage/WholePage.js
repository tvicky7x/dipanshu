import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import ShapeSection from "../ShapeSection/ShapeSection";
import SimplicitySection from "../SimplicitySection/SimplicitySection";
import AboutSection from "../AboutSection/AboutSection";
import VisualDesignSection from "../VisualDesignSection/VisualDesignSection";

function WholePage() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <HeroSection />
      <ShapeSection />
      <SimplicitySection />
      <AboutSection />
      <VisualDesignSection />
    </div>
  );
}

export default WholePage;
