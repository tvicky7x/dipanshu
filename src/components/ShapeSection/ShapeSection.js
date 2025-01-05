"use client";
import { aeonikTrial, layGrotesk, maziusReview, offBit } from "@/app/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function ShapeSection() {
  const shapeSectionRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      "#shapeSectionShowElement",
      { display: "none", opacity: 0 },
      {
        display: "block",
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: shapeSectionRef.current,
          start: "center center",
        },
      },
    );
  });

  return (
    <div className="relative">
      {/* grid */}
      <div className="absolute left-0 top-0 flex h-full w-full justify-center gap-x-[323px]">
        {Array(5)
          .fill(true)
          .map((_, index) => {
            return (
              <div
                key={index}
                className={`border-x-[0.5px] border-white/15 `}
              />
            );
          })}
      </div>
      {/* Shape Section */}
      <div className="relative z-10 h-[110vh]">
        <div
          ref={shapeSectionRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex flex-col gap-y-[18px] text-nowrap text-center uppercase">
            <p
              id="shapeSectionShowElement"
              className={`${offBit.className} text-[32px] leading-[35px] tracking-[0.06em]`}
            >
              Because Every Detail Matters
            </p>
            <p
              className={`${layGrotesk.className} text-[128px] font-semibold leading-[128px] tracking-[0.02em]`}
            >
              <span>Let's Shape</span>
            </p>
            <p
              id="shapeSectionShowElement"
              className={`${offBit.className} text-[32px] leading-[35px] tracking-[0.06em]`}
            >
              To Take It To The Next Level
            </p>
            <p>
              <span
                className={`${layGrotesk.className} text-[128px] font-semibold leading-[128px] tracking-[0.02em]`}
              >
                Your{" "}
              </span>
              <span
                style={{ fontStyle: "oblique" }}
                className={`${maziusReview.className} text-[128px] font-normal leading-[154px] tracking-[0.04em]`}
              >
                Vision
              </span>
            </p>
            <p
              id="shapeSectionShowElement"
              className={`${offBit.className} text-[32px] leading-[35px] tracking-[0.06em]`}
            >
              -LOREM IPSUM-
            </p>
          </div>
        </div>
      </div>
      {/* Simplicity Section */}
      <div className="relative z-10 h-[110vh]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col text-nowrap text-center">
            <p
              className={`${layGrotesk.className} flex flex-col text-[96px] font-medium leading-[99px] tracking-[-0.02em]`}
            >
              <span>
                <span
                  className={`${aeonikTrial.className} font-bold leading-[109px] tracking-[0.04em]`}
                >
                  "
                </span>
                <span
                  style={{ fontStyle: "oblique" }}
                  className={`${maziusReview.className} font-normal leading-[115px] tracking-[0.04em]`}
                >
                  Simplicity
                </span>{" "}
                is the ultimate
              </span>
              <span>
                sophistication
                <span
                  className={`${aeonikTrial.className} font-bold leading-[109px] tracking-[0.04em]`}
                >
                  ”
                </span>
              </span>
            </p>
            <p
              className={`${aeonikTrial.className} mt-[20px] text-[20px] font-light uppercase italic leading-[23px] tracking-[0.04em]`}
            >
              — Leonardo da Vinci
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShapeSection;
