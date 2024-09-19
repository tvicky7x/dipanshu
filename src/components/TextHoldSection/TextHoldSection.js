"use client";
import React, { useEffect, useRef, useState } from "react";
import HamsterSection from "./HamsterSection/HamsterSection";

function TextHoldSection() {
  const [mouseOnHold, setMouseOnHold] = useState(false); // Controls hamster motion state
  const textHoldContainerRef = useRef(null);

  //   onHold function of mouse
  const handleMouseDown = () => {
    setMouseOnHold(true); // Start hamster when mouse is held down
    console.log("Hamster running");
  };

  const handleMouseUp = () => {
    setMouseOnHold(false); // Stop hamster when mouse is released
    console.log("Hamster stopped");
  };

  useEffect(() => {
    const container = textHoldContainerRef.current;

    if (container) {
      container.addEventListener("mousedown", handleMouseDown);
      container.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mouseleave", handleMouseUp); // Stop if the mouse leaves the container
    }

    // Clean up event listeners when component unmounts
    return () => {
      if (container) {
        container.removeEventListener("mousedown", handleMouseDown);
        container.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("mouseleave", handleMouseUp);
      }
    };
  }, []);

  return (
    <div
      ref={textHoldContainerRef}
      className="flex h-screen items-center justify-center bg-black"
    >
      <div>
        <HamsterSection hamsterMotion={mouseOnHold} />
      </div>
    </div>
  );
}

export default TextHoldSection;
