"use client";
import React, { useRef } from "react";
import heroSectionHand from "../../../public/heroSectionHand.svg";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ReactCurvedText from "react-curved-text";
import { Ubuntu_Mono } from "next/font/google";

const ubuntuMonu = Ubuntu_Mono({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

function HeroSection() {
  const curvedTextRef = useRef();

  useGSAP(() => {
    gsap.to(curvedTextRef.current, {
      rotation: -360,
      duration: 40,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <div className="relative flex h-screen items-start justify-center">
      {/* grid */}
      <div className="absolute left-0 top-0 flex h-full w-full justify-center gap-x-[323px]">
        {Array(5)
          .fill(true)
          .map((_, index) => {
            return (
              <div key={index} className={`border-x-[0.5px] border-white/15`} />
            );
          })}
      </div>
      <Image
        src={heroSectionHand}
        alt="hero section hand illustration"
        className="heroSectionHand relative z-10 mt-[80px] aspect-auto w-[20vw]"
      />
      <div
        ref={curvedTextRef}
        className={`${ubuntuMonu.className} heroSectionCurveText absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-[80px]`}
      >
        <ReactCurvedText
          width={3500}
          height={3500}
          cx={1750}
          cy={1750}
          rx={1450}
          ry={1450}
          startOffset={50}
          reversed={true}
          text={`${Array(4)
            .fill(true)
            .reduce((str) => {
              return str + "PRODUCT DESIGNER ";
            }, " ")}`}
          textProps={{ style: { fontSize: "15vw" } }}
          textPathProps={{
            fill: "transparent",
            stroke: "#ffffff",
            strokeWidth: "1.7px",
          }}
          tspanProps={{ wordSpacing: "50px", overflow: "visible" }}
          // ellipseProps={{ style: "fill: #ff0000" }}
          svgProps={null}
        />
      </div>
    </div>
  );
}

export default HeroSection;
