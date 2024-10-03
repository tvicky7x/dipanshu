"use client";
import React, { useEffect, useRef, useState } from "react";
import HamsterSection from "./HamsterSection/HamsterSection";
import TextTypeSection from "./TextTypeSection/TextTypeSection";
import { getComponentText } from "@/utilities/commanFunctions";
import gsap from "gsap";
import { useRouter } from "next/navigation";

function TextHoldSection({ endTextOnHold }) {
  const [mouseOnHold, setMouseOnHold] = useState(false);
  const textHoldContainerRef = useRef(null);
  const content = getComponentText("home.loadingScreen");
  const router = useRouter();

  // Function onComplete
  function onCompleteTyping() {
    endTextOnHold();
  }

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

    // Disable scrolling
    // document.body.style.overflow = "hidden";

    // Clean up event listeners and re-enable scrolling when component unmounts
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
    <>
      <div
        ref={textHoldContainerRef}
        className="relative left-0 top-0 z-50 flex h-screen items-center justify-center bg-black text-white"
      >
        <div className="flex flex-col items-center justify-center gap-y-5">
          <div className="relative">
            <HamsterSection hamsterMotion={mouseOnHold} />
            <div className="absolute -bottom-5 left-1/2 w-full -translate-x-1/2 translate-y-full text-center">
              <TextTypeSection
                textMotion={mouseOnHold}
                onCompleteTyping={onCompleteTyping}
              />
            </div>
          </div>
        </div>
        <p className="absolute bottom-[56px] left-1/2 -translate-x-1/2">
          {content.notePara}
        </p>
      </div>
    </>
  );
}

export default TextHoldSection;
