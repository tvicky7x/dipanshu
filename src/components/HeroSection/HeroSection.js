"use client";
import React, { useRef } from "react";
import heroSectionHand from "../../../public/heroSectionHand.svg";
import Image from "next/image";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import ReactCurvedText from "react-curved-text";
import { Ubuntu_Mono } from "next/font/google";

const ubuntuMonu = Ubuntu_Mono({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

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
    <div className="snap-start snap-always overflow-hidden">
      <div
        ref={heroSectionRef}
        className="flex h-screen flex-col items-center justify-center bg-cover bg-center"
        // style={{ backgroundImage: "url(bg.svg)" }}
      >
        <div className="relative">
          <Image
            src={heroSectionHand}
            alt="hero section hand illustration"
            className="heroSectionHand mb-[155px] aspect-auto w-[340px]"
          />
          <div
            className={`${ubuntuMonu.className} heroSectionCurveText absolute left-1/2 top-full -translate-x-1/2 -translate-y-[420px]`}
          >
            <ReactCurvedText
              width={3500}
              height={3500}
              cx={1750}
              cy={1750}
              rx={1500}
              ry={1450}
              startOffset={1640}
              reversed={true}
              text={`${Array(5)
                .fill(true)
                .reduce((str) => {
                  return str + "PRODUCT DESIGN ";
                }, "")}`}
              textProps={{ style: { fontSize: 180 } }}
              textPathProps={{
                fill: "transparent",
                stroke: "#ffffff",
                strokeWidth: "0.9px",
              }}
              tspanProps={{ wordSpacing: "50px" }}
              // ellipseProps={{ style: "fill: #ff0000" }}
              svgProps={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
