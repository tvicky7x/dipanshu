"use client";
import React, { useRef } from "react";
import heroSectionHand from "../../../public/heroSectionHand.svg";
import Image from "next/image";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import ReactCurvedText from "react-curved-text";

function HeroSection() {
  const heroSectionRef = useRef();
  // useGSAP(
  //   () => {
  //     gsap
  //       .timeline()
  //       .from(".heroSectionCurveText", {
  //         rotate: "30deg",
  //         opacity: 0,
  //         scale: 0.75,
  //         duration: 3,
  //       })
  //       .from(".heroSectionHand", { y: 150, opacity: 0, duration: 2.5 }, "-=1");
  //   },
  //   { scope: heroSectionRef },
  // );

  return (
    <div
      ref={heroSectionRef}
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-black bg-cover bg-center"
      style={{ backgroundImage: "url(bg.svg)" }}
    >
      <Image
        src={heroSectionHand}
        alt="hero section hand illustration"
        className="heroSectionHand mb-[155px] aspect-auto w-[366px]"
      />
      <div className="heroSectionCurveText absolute top-full -translate-y-[350px]">
        <ReactCurvedText
          width={3500}
          height={3500}
          cx={1750}
          cy={1750}
          rx={1500}
          ry={1500}
          startOffset={1330}
          reversed={true}
          text="PRODUCT DESIGN"
          textProps={{ style: { fontSize: 210 } }}
          textPathProps={{
            fill: "transparent",
            stroke: "#ffffff",
            strokeWidth: "1.4px",
          }}
          tspanProps={{ wordSpacing: "100px" }}
          // ellipseProps={{ style: "fill: #ff0000" }}
          svgProps={null}
        />
      </div>
    </div>
  );
}

export default HeroSection;
