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
      .to("#scrollBlackDiv1", { height: 60 }, 0)
      .to("#scrollBlackDiv2", { height: 200 }, 0)
      .to("#scrollBlackDiv3", { height: 140 }, 0)
      .to("#scrollBlackDiv4", { height: 80 }, 0);
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
              <div className="flex w-[400px] flex-col gap-y-[30px] text-center text-black lg:w-[450px] lg:gap-y-[40px] xl:w-[650px] xl:gap-y-[56px]">
                <p
                  className={`${layGrotesk.className} text-[18px] font-semibold leading-[18px] tracking-[0.04em] lg:text-[20px] xl:text-[24px]`}
                >
                  {"[ABOUT]"}
                </p>
                <div
                  id="aboutTextHighlightContainer"
                  className="space-y-[25px] text-[22px] leading-[30px] tracking-[0.02em] text-hiddenTextColor lg:space-y-[30px] lg:text-[26px] lg:leading-[34px] xl:space-y-[40px] xl:text-[32px] xl:leading-[40px]"
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
        <div
          id="aboutSectionPictureSection"
          className="relative h-[800px] lg:h-[1200px] xl:h-[1500px]"
        >
          <div
            id="aboutSectionPicturePinSection"
            className="flex h-screen w-full items-center justify-center"
          >
            <div className="flex flex-col items-center gap-y-[60px] xl:gap-y-[80px]">
              <div className="aspect-[376/460] w-[23vw] rounded-[26px] bg-black"></div>
              <p
                className={`${layGrotesk.className} w-[600px] text-center text-[22px] leading-[30px] text-black lg:w-[800px] lg:text-[26px] lg:leading-[34px] xl:w-[1010px] xl:text-[32px] xl:leading-[40px]`}
              >
                For over 10 years I have been striving to create bold
                experiences that connect brands with their audience through
                design that resonates.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[150px] lg:h-[250px] xl:h-[350px]" />
      </div>
      {/* scroll grid */}
      <div
        ref={scrollBarBlackContainerRef}
        className="absolute bottom-0 left-0 w-full px-[72px]"
      >
        <div className="grid grid-flow-col grid-cols-4 divide-x-2 divide-white/15 border-x-2 border-white/15">
          {Array(4)
            .fill(true)
            .map((_, index) => {
              return (
                <div
                  key={index}
                  id={`scrollBlackDiv${index + 1}`}
                  className={`self-end bg-black`}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
