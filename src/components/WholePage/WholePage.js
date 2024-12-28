import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import ShapeSection from "../ShapeSection/ShapeSection";
import SimplicitySection from "../SimplicitySection/SimplicitySection";

function WholePage() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <HeroSection />
      <ShapeSection />
      <SimplicitySection />
    </div>
  );
}

export default WholePage;
