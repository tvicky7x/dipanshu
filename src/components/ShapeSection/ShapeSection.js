"use client";
import { aeonikTrial, layGrotesk, maziusReview, offBit } from "@/app/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import GridLines from "../UtilitiesComponents/GridLines";
gsap.registerPlugin(ScrollTrigger);

function ShapeSection() {
  const scrollBarContainerRef = useRef();
  const shapeSectionSectionRef = useRef();
  const shapeSectionPinRef = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: shapeSectionSectionRef.current,
      start: "center center",
      end: "bottom-=100 bottom",
      pin: shapeSectionPinRef.current,
      pinSpacing: true,
      onEnter: () => {
        gsap
          .timeline()
          .addLabel("start", 0)
          .to("#shapeSectionTopElement", { y: 0, duration: 0.2 }, "start")
          .to("#shapeSectionBottomElement", { y: 0, duration: 0.2 }, "start")
          .to("#shapeSectionShowElement", { opacity: 1, duration: 0.2 });
      },
    });

    // skills band animation
    let clone = document.getElementById("skillBandTarget").cloneNode(true);
    document.getElementById("skillsBandWrapper").append(clone);

    gsap.to("#skillBandTarget", {
      duration: 10,
      xPercent: "-=100",
      ease: "none",
      repeat: -1,
    });

    // Scroll bar transition
    gsap
      .timeline({
        scrollTrigger: {
          trigger: scrollBarContainerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
      .to("#scrollDiv1", { height: 80 }, 0)
      .to("#scrollDiv2", { height: 160 }, 0)
      .to("#scrollDiv3", { height: 200 }, 0)
      .to("#scrollDiv4", { height: 120 }, 0);

    return () => {
      timeline.kill();
      ScrollTrigger.kill();
    };
  }, []);

  const skillLoopText = Array(2).fill(` ONE PIXEL AT A TIME `);
  const skillsList = Array(1)
    .fill([
      "UX Design",
      "Front end",
      "UI Design",
      "Brand Design",
      "UX Research",
      "Fintech",
    ])
    .flat();

  return (
    <div className="relative">
      {/* grid */}
      <GridLines />

      {/* Shape Section */}
      <div ref={shapeSectionSectionRef} className="relative z-10 h-[1800px]">
        <div
          ref={shapeSectionPinRef}
          id="shapeSectionPinId"
          className="absolute left-0 top-1/2 !h-screen !w-full -translate-y-1/2"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col gap-y-[18px] text-nowrap text-center uppercase">
              <p
                id="shapeSectionShowElement"
                className={`${offBit.className} text-[32px] leading-[35px] tracking-[0.06em] opacity-0`}
              >
                Because Every Detail Matters
              </p>
              <p
                id="shapeSectionTopElement"
                className={`${layGrotesk.className} translate-y-[26px] text-[128px] font-semibold leading-[128px] tracking-[0.02em]`}
              >
                <span>Let's Shape</span>
              </p>
              <p
                id="shapeSectionShowElement"
                className={`${offBit.className} text-[32px] leading-[35px] tracking-[0.06em] opacity-0`}
              >
                To Take It To The Next Level
              </p>
              <p id="shapeSectionBottomElement">
                <span
                  className={`${layGrotesk.className} -translate-y-[26px] text-[128px] font-semibold leading-[128px] tracking-[0.02em]`}
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
                className={`${offBit.className} text-[32px] leading-[35px] tracking-[0.06em] opacity-0`}
              >
                -LOREM IPSUM-
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Band */}
      <div
        id="skillsBandWrapper"
        className="relative z-10 flex h-[201px] items-center border-y-[2px] border-white/15 bg-black"
      >
        <div id="skillBandTarget" className="relative">
          <p
            className={`${offBit.className} overflow-visible whitespace-pre-wrap text-nowrap text-[96px] uppercase leading-[128px] tracking-[0.06em]`}
          >
            {skillLoopText}
          </p>
          {skillsList?.map((item, index) => {
            return (
              <div
                key={index}
                style={{ left: `${index * 16.6}%` }}
                className={`${aeonikTrial.className} ${index % 2 === 0 ? `top-0 -translate-y-2` : `bottom-0 -translate-y-2`} absolute border border-white bg-black p-[9px] text-[16px] font-light leading-[24px]`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>

      {/* Simplicity Section */}
      <div>
        <div className="relative z-10 h-[1024px]">
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
        <div className="h-[30px]" />
      </div>

      {/* scroll grid */}
      <div
        ref={scrollBarContainerRef}
        className="absolute bottom-0 left-0 grid w-full grid-flow-col grid-cols-4 px-[72px]"
      >
        {Array(4)
          .fill(true)
          .map((_, index) => {
            return (
              <div
                key={index}
                id={`scrollDiv${index + 1}`}
                className={`self-end bg-white`}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ShapeSection;
