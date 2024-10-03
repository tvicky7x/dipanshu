"use client";
import React, { useState } from "react";
import TextHoldSection from "../TextHoldSection/TextHoldSection";
import HeroSection from "../HeroSection/HeroSection";

function PageTransition() {
  const [textHoldEnd, setTextHoldEnd] = useState(false);

  // end text on hold
  function endTextOnHold() {
    setTextHoldEnd(true);
  }

  return (
    <div>
      {/* {!textHoldEnd ? (
        <TextHoldSection endTextOnHold={endTextOnHold} />
      ) : (
        <HeroSection />
      )} */}
      <HeroSection />
    </div>
  );
}

export default PageTransition;
