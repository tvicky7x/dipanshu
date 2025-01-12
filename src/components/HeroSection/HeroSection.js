"use client";
import React, { useRef } from "react";
import heroSectionHand from "../../../public/heroSectionHand.svg";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ReactCurvedText from "react-curved-text";
import { Ubuntu_Mono } from "next/font/google";
import { ScrollTrigger } from "gsap/all";
import GridLines from "../UtilitiesComponents/GridLines";

const ubuntuMonu = Ubuntu_Mono({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);

function HeroSection({ heroSectionEnded }) {
  const curvedTextRef = useRef();
  const heroSectionRef = useRef();

  useGSAP(() => {
    // scroll trigger for end
    ScrollTrigger.create({
      trigger: heroSectionRef.current,
      start: "top top",
      end: "bottom bottom ",
      markers: true,
      onLeave: () => {
        heroSectionEnded();
      },
    });

    // gsap curved section
    gsap.to(curvedTextRef.current, {
      rotation: -360,
      duration: 40,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <div
      ref={heroSectionRef}
      className="relative h-[calc(100vh+50px)] min-h-[1024px] overflow-hidden"
    >
      {/* grid */}
      <GridLines />

      <Image
        src={heroSectionHand}
        alt="hero section hand illustration"
        className="heroSectionHand absolute left-1/2 top-[80px] z-10 aspect-auto w-[366px] -translate-x-1/2"
      />
      <div
        ref={curvedTextRef}
        className={`${ubuntuMonu.className} heroSectionCurveText absolute left-1/2 top-[412px] z-10 -translate-x-1/2`}
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
          textProps={{ style: { fontSize: "250px" } }}
          textPathProps={{
            fill: "transparent",
            stroke: "#ffffff",
            strokeWidth: "1.9px",
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
