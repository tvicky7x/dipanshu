"use client";
import React, { useState } from "react";
import TextHoldSection from "../TextHoldSection/TextHoldSection";
import WholePage from "../WholePage/WholePage";

function PageTransition() {
  const [textHoldEnd, setTextHoldEnd] = useState(false);

  // end text on hold
  function endTextOnHold() {
    setTextHoldEnd(true);
  }

  return (
    <>
      <div className={`${!textHoldEnd ? "block" : "hidden"}`}>
        <TextHoldSection endTextOnHold={endTextOnHold} />
      </div>
      <div className={`${!textHoldEnd ? "hidden" : "block"}`}>
        <WholePage />
      </div>
    </>
  );
}

export default PageTransition;
