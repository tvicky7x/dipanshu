"use client";
import { layGrotesk } from "@/app/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const aboutTextHighlightContent = [
  "Startups who make it all have a thing in common. They’ve found the way to make their value obvious to their users and their investors.",
  "Sadly for most, that path is kept in the dark and stays out of reach.",
  "Our value-first method focuses on innovative tech insights and deep tactical knowledge to give your MVP value for everyone to see, feel and want to invest in.",
];

function AboutSection() {
  const aboutSectionContainerRef = useRef();
  const aboutPinSectionRef = useRef();
  const scrollBarBlackContainerRef = useRef();

  useGSAP(() => {
    // gsap pin animation
    ScrollTrigger.create({
      trigger: "#aboutSectionWholePage",
      start: "top top",
      end: "bottom bottom",
      pin: "#aboutPinSection",
    });

    ScrollTrigger.create({
      trigger: "#aboutSectionPictureSection",
      start: "top top",
      end: "bottom bottom",
      pin: "#aboutSectionPicturePinSection",
    });

    // gsap text highlight animation
    // const textHighlightContainer = document.querySelector(
    //   "#aboutTextHighlightContainer",
    // );
    // const chars = aboutTextHighlightContent
    //   .map((str) => {
    //     const p = document.createElement("p");
    //     const splittedSpanArray = str.split("").map((characters) => {
    //       const span = document.createElement("span");
    //       span.textContent = characters;
    //       p.appendChild(span);
    //       return span;
    //     });
    //     textHighlightContainer.appendChild(p);
    //     return splittedSpanArray;
    //   })
    //   .flat();

    const chars = document.querySelectorAll(
      "#aboutTextHighlightContainer p span",
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#aboutSectionContainer",
          start: "-=200",
          end: "bottom bottom",
          scrub: true,
        },
      })
      .set(chars, { duration: 0.3, color: "black", stagger: 0.1 }, 0.1)
      .to("#aboutPinSection", { opacity: 0, duration: 3 });

    // scroll bar transition
    gsap
      .timeline({
        scrollTrigger: {
          trigger: scrollBarBlackContainerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
      .to("#scrollBlackDiv1", { height: 40 }, 0)
      .to("#scrollBlackDiv2", { height: 180 }, 0)
      .to("#scrollBlackDiv3", { height: 120 }, 0)
      .to("#scrollBlackDiv4", { height: 60 }, 0);
  });

  return (
    <div className="relative">
      <div id="aboutSectionWholePage" className="bg-white">
        {/* About text highlight section */}
        <div
          ref={aboutSectionContainerRef}
          id="aboutSectionContainer"
          className="relative h-[2500px] bg-cover bg-center bg-no-repeat"
        >
          <div
            ref={aboutPinSectionRef}
            id="aboutPinSection"
            className="h-screen w-full"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex w-[650px] flex-col gap-y-[56px] text-center text-black">
                <p
                  className={`${layGrotesk.className} text-[24px] font-semibold leading-[22px] tracking-[0.04em]`}
                >
                  {"[ABOUT]"}
                </p>
                <div
                  id="aboutTextHighlightContainer"
                  className="space-y-[1.3em] text-[32px] leading-[40px] tracking-[0.02em] text-hiddenTextColor"
                >
                  {aboutTextHighlightContent.map((str, index) => (
                    <p key={index}>
                      {str.split("").map((char, i) => (
                        <span key={i}>{char}</span>
                      ))}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About picture section */}
        <div id="aboutSectionPictureSection" className="relative h-[1500px]">
          <div
            id="aboutSectionPicturePinSection"
            className="flex h-screen w-full items-center justify-center"
          >
            <div className="flex flex-col items-center gap-y-[80px]">
              <div className="aspect-[376/460] w-[23vw] rounded-[26px] bg-black"></div>
              <p
                className={`${layGrotesk.className} w-[1010px] text-center text-[32px] leading-[40px] text-black`}
              >
                For over 10 years I have been striving to create bold
                experiences that connect brands with their audience through
                design that resonates.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[250px]" />
      </div>
      {/* scroll grid */}
      <div
        ref={scrollBarBlackContainerRef}
        className="absolute bottom-0 left-0 grid w-full grid-flow-col grid-cols-4 px-[72px]"
      >
        {Array(4)
          .fill(true)
          .map((_, index) => {
            return (
              <div
                key={index}
                id={`scrollBlackDiv${index + 1}`}
                className={`self-end border-x-[0.5px] border-white/15 bg-black first:border-s-[2px] last:border-e-[2px]`}
              />
            );
          })}
      </div>
    </div>
  );
}

export default AboutSection;
