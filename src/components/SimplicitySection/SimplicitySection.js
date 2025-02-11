import { aeonikTrial, layGrotesk, maziusReview, offBit } from "@/app/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import GridLines from "../UtilitiesComponents/GridLines";

function SimplicitySection() {
  const scrollBarContainerRef = useRef();

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

  useGSAP(() => {
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
  });

  return (
    <>
      <div className="relative h-0 md:h-[60px] lg:h-[80px] xl:h-[150px]">
        <GridLines />
      </div>
      <div className="relative">
        <GridLines />

        {/* Skills Band */}
        <div
          id="skillsBandWrapper"
          className="relative z-10 flex h-[100px] items-center border-y-[2px] border-white/15 bg-black md:h-[130px] lg:h-[150px] xl:h-[201px]"
        >
          <div id="skillBandTarget" className="relative">
            <p
              className={`${offBit.className} overflow-visible whitespace-pre-wrap text-nowrap text-[28px] uppercase leading-[80px] tracking-[0.06em] md:text-[48px] lg:text-[64px] lg:leading-[96px] xl:text-[96px] xl:leading-[128px]`}
            >
              {skillLoopText}
            </p>
            {skillsList?.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ left: `${index * 16.6}%` }}
                  className={`${aeonikTrial.className} ${index % 2 === 0 ? `top-0 -translate-y-1 md:-translate-y-2` : `bottom-0 -translate-y-1 md:-translate-y-2`} absolute border border-white bg-black px-[3px] py-[0px] text-[10px] font-light leading-[24px] md:p-[5px] md:text-[12px] md:leading-[20px] lg:p-[7px] lg:text-[14px] lg:leading-[24px] xl:p-[9px] xl:text-[16px] xl:leading-[24px]`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>

        {/* Simplicity Section */}
        <div>
          <div className="relative z-10 h-[650px] lg:h-[768px] xl:h-[1024px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex w-[400px] flex-col text-center md:w-auto md:text-nowrap">
                <p
                  className={`${layGrotesk.className} flex flex-col text-[48px] font-medium leading-[1.2] tracking-[-0.02em] md:text-[58px] lg:text-[75px] xl:text-[96px]`}
                >
                  <span>
                    <span
                      className={`${aeonikTrial.className} font-bold tracking-[0.04em]`}
                    >
                      "
                    </span>
                    <span
                      style={{ fontStyle: "oblique" }}
                      className={`${maziusReview.className} font-normal tracking-[0.04em]`}
                    >
                      Simplicity
                    </span>{" "}
                    is the ultimate
                  </span>
                  <span>
                    sophistication
                    <span
                      className={`${aeonikTrial.className} font-bold tracking-[0.04em]`}
                    >
                      ”
                    </span>
                  </span>
                </p>
                <p
                  className={`${aeonikTrial.className} mt-[24px] text-[12px] font-light uppercase italic leading-normal tracking-[0.04em] md:mt-[20px] md:text-[14px] lg:text-[16px] xl:text-[20px]`}
                >
                  — Leonardo da Vinci
                </p>
              </div>
            </div>
          </div>
          <div className="h-[50px] lg:h-[100px] xl:h-[200px]" />
        </div>

        {/* scroll grid */}
        <div
          ref={scrollBarContainerRef}
          className="absolute bottom-0 left-0 grid w-full grid-flow-col grid-cols-4 px-[20px] md:px-[72px]"
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
    </>
  );
}

export default SimplicitySection;
