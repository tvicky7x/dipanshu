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
      duration: 100,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <div className="overflow-hidden">
      <div
        className="relative flex h-screen flex-col items-center justify-center bg-cover bg-center"
        // style={{ backgroundImage: "url(bg.svg)" }}
      >
        <div className="relative">
          <Image
            src={heroSectionHand}
            alt="hero section hand illustration"
            className="heroSectionHand mb-[155px] aspect-auto w-[340px]"
          />
          <div
            ref={curvedTextRef}
            className={`${ubuntuMonu.className} heroSectionCurveText absolute left-1/2 top-full -translate-x-1/2 -translate-y-[400px]`}
          >
            <ReactCurvedText
              width={3500}
              height={3500}
              cx={1750}
              cy={1750}
              rx={1500}
              ry={1450}
              startOffset={0}
              reversed={true}
              text={`${Array(5)
                .fill(true)
                .reduce((str) => {
                  return str + " PRODUCT DESIGNER ";
                }, " ")}`}
              textProps={{ style: { fontSize: 210 } }}
              textPathProps={{
                fill: "transparent",
                stroke: "#ffffff",
                strokeWidth: "1.5px",
              }}
              tspanProps={{ wordSpacing: "50px" }}
              // ellipseProps={{ style: "fill: #ff0000" }}
              svgProps={null}
            />
          </div>
        </div>
      </div>
      <div className="h-[50px]"></div>
    </div>
  );
}

export default HeroSection;
