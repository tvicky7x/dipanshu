import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import ShapeSection from "../ShapeSection/ShapeSection";

function WholePage() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <HeroSection />
      <ShapeSection />
    </div>
  );
}

export default WholePage;
