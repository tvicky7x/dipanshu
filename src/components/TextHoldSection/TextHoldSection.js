"use client";
import React, { useEffect, useRef, useState } from "react";
import HamsterSection from "./HamsterSection/HamsterSection";
import TextTypeSection from "./TextTypeSection/TextTypeSection";

function TextHoldSection() {
  const [mouseOnHold, setMouseOnHold] = useState(false); // Controls hamster motion state
  const textHoldContainerRef = useRef(null);

  // Function to handle mouse and touch start
  const handleStart = () => {
    setMouseOnHold(true); // Start hamster when mouse is held down or tapped
  };

  // Function to handle mouse and touch end
  const handleEnd = () => {
    setMouseOnHold(false); // Stop hamster when mouse is released or touch ends
  };

  useEffect(() => {
    const container = textHoldContainerRef.current;

    if (container) {
      container.addEventListener("mousedown", handleStart);
      container.addEventListener("mouseup", handleEnd);
      container.addEventListener("mouseleave", handleEnd); // Stop if the mouse leaves the container
      container.addEventListener("touchstart", handleStart); // Handle touch start
      container.addEventListener("touchend", handleEnd); // Handle touch end
    }

    // Clean up event listeners when component unmounts
    return () => {
      if (container) {
        container.removeEventListener("mousedown", handleStart);
        container.removeEventListener("mouseup", handleEnd);
        container.removeEventListener("mouseleave", handleEnd);
        container.removeEventListener("touchstart", handleStart);
        container.removeEventListener("touchend", handleEnd);
      }
    };
  }, []);

  return (
    <div
      ref={textHoldContainerRef}
      className="flex h-screen items-center justify-center bg-black text-white"
    >
      <div className="flex flex-col items-center justify-center gap-y-5">
        <HamsterSection hamsterMotion={mouseOnHold} />
        <TextTypeSection textMotion={mouseOnHold} />
      </div>
    </div>
  );
}

export default TextHoldSection;
