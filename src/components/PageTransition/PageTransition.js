"use client";
import React, { useEffect, useState } from "react";
import TextHoldSection from "../TextHoldSection/TextHoldSection";
import WholePage from "../WholePage/WholePage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function PageTransition() {
  const [textHoldEnd, setTextHoldEnd] = useState(false);

  // end text on hold
  function endTextOnHold() {
    setTextHoldEnd(true);
  }

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [textHoldEnd]);

  return (
    <>
      {!textHoldEnd && <TextHoldSection endTextOnHold={endTextOnHold} />}
      {textHoldEnd && <WholePage />}
    </>
  );
}

export default PageTransition;
