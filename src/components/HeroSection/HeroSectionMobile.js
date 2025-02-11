import { layGrotesk, maziusReview, offBit } from "@/app/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useRef, useState } from "react";
import GridLinesMobile from "../UtilitiesComponents/GridLinesMobile";
import GridLines from "../UtilitiesComponents/GridLines";

gsap.registerPlugin(ScrollTrigger);

const heroSectionMainText = ["we create", "award", "winning sites"];

function HeroSectionMobile({ shapeSectionEnded }) {
  const [heroSectionEnd, setHeroSectionEnd] = useState(false);
  const whiteBgContainerRef = useRef();
  const heroSectionContainerRef = useRef();

  function heroSectionEnded() {
    setHeroSectionEnd(true);
  }

  useGSAP(() => {
    const heroSectionTextContainer = document.querySelector(
      "#heroSectionTextContainer",
    );
    // gsap.set(".heroSectionAfterDisplay", { opacity: 0 });
    const addTextWithScrambleEffect = (
      textArray,
      container,
      charDelay,
      paraDelay,
    ) => {
      const randomChars = "abcdefghijklmnopqrstuvwxyz";
      let totalDelay = 0;

      textArray.forEach((text, index) => {
        const p = document.createElement("p");
        container.appendChild(p);
        if (index === 2) p.className = "text-opacity-0";
        const revealText = (targetText, element) => {
          targetText.split("").forEach((char, charIndex) => {
            const span = document.createElement("span");
            element.appendChild(span);
            const paraTimeline = gsap.timeline();
            setTimeout(
              () => {
                // Random character phase
                span.textContent = randomChars.charAt(
                  Math.floor(Math.random() * randomChars.length),
                );

                setTimeout(() => {
                  // Replace with the correct character
                  span.textContent = char;
                }, charDelay / 2);

                if (index === 1) {
                  paraTimeline.to(p, {
                    color: "#F67676",
                    duration: 0.2,
                    delay: 0.6,
                  });
                }

                if (index === 2) {
                  p.className = "pb-[7px]";
                  paraTimeline
                    .set(p, {
                      backgroundSize: "100%",
                      backgroundImage:
                        "linear-gradient(to right, rgba(34, 34, 34, 0.25), rgba(34, 34, 34, 0.15))",
                      backgroundClip: "text",
                      webkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      webkitTextFillColor: "transparent",
                    })
                    .fromTo(
                      p,
                      {
                        backgroundSize: "100%",
                        backgroundImage:
                          "linear-gradient(to right, rgba(34, 34, 34, 1), rgba(34, 34, 34, 0.25) -10%)",
                      },
                      {
                        backgroundSize: "200%",
                        backgroundImage:
                          "linear-gradient(to right, rgba(34, 34, 34, 1), rgba(34, 34, 34, 0.25) 500%)",
                        duration: 0.8,
                        ease: "power1.inOut",
                        delay: 0.4,
                      },
                    )
                    .to(".heroSectionAfterDisplay", {
                      opacity: 1,
                      duration: 0.2,
                      onComplete: () => {
                        heroSectionEnded();
                      },
                    });
                }
              },
              totalDelay + charIndex * charDelay,
            );
          });

          // Increment total delay for the next paragraph
          totalDelay += targetText.length * charDelay + paraDelay;
        };

        revealText(text, p);
      });
    };

    setTimeout(() => {
      addTextWithScrambleEffect(
        heroSectionMainText,
        heroSectionTextContainer,
        50,
        100,
      );
    }, 200);

    return () => {
      heroSectionTextContainer.innerHTML = ""; // Cleanup on unmount
    };
  }, []);

  useGSAP(() => {
    // bg transition
    gsap.set(whiteBgContainerRef.current, {
      backgroundColor: "rgba(255, 255, 255, 1)",
    });

    // transformation text mask
    gsap.set(".firstMaskText", { y: "100%" });
    gsap.set(".secondMaskText", { y: "100%" });
    gsap.set(".thirdMaskText", { y: "100%", opacity: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: heroSectionContainerRef.current,
          start: "100% 25%",
          toggleActions: "play none none reset",
        },
      })
      .to(whiteBgContainerRef.current, {
        backgroundColor: "rgba(255, 255, 255, 0)",
        duration: 0.2,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#whiteBgTransition",
          start: "50% 25%",
        },
      })
      .fromTo(".firstMaskText", { y: "100%" }, { y: 0, duration: 0.5 }, 0.8)
      .fromTo(".secondMaskText", { y: "100%" }, { y: 0, duration: 0.5 })
      .fromTo(
        ".thirdMaskText",
        { y: "100%" },
        { y: 0, opacity: 1, duration: 0.2, delay: 0.1 },
      )
      .to(".gridLineAfterDisplay", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        onComplete: () => {
          shapeSectionEnded();
        },
      });
  }, [heroSectionEnd]);

  return (
    <div
      ref={whiteBgContainerRef}
      style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
      className=""
    >
      <div ref={heroSectionContainerRef} className="h-[100vh]">
        <span
          className={`${layGrotesk.className} heroSectionAfterDisplay absolute left-[80px] top-[70px] hidden text-[14px] font-semibold uppercase leading-[16px] tracking-[1.858px] text-black opacity-0 md:block`}
        >
          LOGO
        </span>
        <Image
          src={"/heroSectionHandBlack.svg"}
          alt="hero section hand"
          width={366.6}
          height={489.54}
          className="heroSectionAfterDisplay absolute left-1/2 top-0 aspect-[366.6/489.54] w-[50vw] max-w-[366px] -translate-x-1/2 -translate-y-[7.5%] rotate-180 opacity-0 md:w-[21.5vw]"
        />
        <div className="heroSectionAfterDisplay absolute right-[55px] top-[70px] h-[13px] w-[54px] cursor-pointer border-y-[1.5px] border-black opacity-0 lg:h-[15px] lg:w-[62px] xl:h-[18.5px] xl:w-[76px]"></div>
        <div
          id="heroSectionTextContainer"
          className={`${layGrotesk.className} absolute bottom-[15px] left-[16px] translate-y-[7px] text-[56px] leading-[56px] text-heroSectionTextColor md:text-[74px] md:leading-[68px] lg:text-[92px] lg:leading-[84px] xl:text-[128px] xl:leading-[120px]`}
        ></div>
        <Image
          src={"/workSticker.svg"}
          alt="open to work sticker"
          width={127}
          height={127}
          className="heroSectionAfterDisplay absolute bottom-[69px] right-[68px] hidden aspect-square w-[78px] opacity-0 md:block lg:w-[98px] xl:w-[127px]"
        />
      </div>
      {heroSectionEnd && (
        <div className="relative h-[100vh]">
          <div className="gridLineAfterDisplay absolute h-full w-full translate-y-full opacity-0">
            <GridLines />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col gap-y-[16px] text-nowrap text-center uppercase xl:gap-y-[18px]">
              <div className="overflow-hidden">
                <p
                  id="shapeSectionShowElement"
                  className={`${offBit.className} thirdMaskText text-[16px] leading-none tracking-[0.06em] md:text-[18px] lg:text-[22px] xl:text-[32px]`}
                >
                  Because Every Detail Matters
                </p>
              </div>

              <div className="overflow-hidden">
                <p
                  id="shapeSectionTopElement"
                  className={`${layGrotesk.className} firstMaskText text-[48px] font-semibold leading-none tracking-[0.02em] md:text-[72px] lg:text-[96px] xl:text-[128px]`}
                >
                  <span>Let's Shape</span>
                </p>
              </div>
              <div className="overflow-hidden">
                <p
                  id="shapeSectionShowElement"
                  className={`${offBit.className} thirdMaskText text-[16px] leading-none tracking-[0.06em] md:text-[18px] lg:text-[22px] xl:text-[32px]`}
                >
                  To Take It To The Next Level
                </p>
              </div>

              <div className="overflow-hidden">
                <p
                  id="shapeSectionBottomElement"
                  className="secondMaskText text-[48px] font-semibold leading-none md:text-[72px] lg:text-[96px] xl:text-[128px]"
                >
                  <span className={`${layGrotesk.className} tracking-[0.02em]`}>
                    Your{" "}
                  </span>
                  <span
                    style={{ fontStyle: "oblique" }}
                    className={`${maziusReview.className} tracking-[0.04em]`}
                  >
                    Vision
                  </span>
                </p>
              </div>
              <div className="overflow-hidden">
                <p
                  id="shapeSectionShowElement"
                  className={`${offBit.className} thirdMaskText text-[16px] leading-none tracking-[0.06em] md:text-[18px] lg:text-[22px] xl:text-[32px]`}
                >
                  -LOREM IPSUM-
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSectionMobile;
