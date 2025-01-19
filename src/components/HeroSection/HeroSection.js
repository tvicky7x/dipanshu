import { layGrotesk } from "@/app/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import Image from "next/image";
import React, { useEffect } from "react";

gsap.registerPlugin(TextPlugin);

const heroSectionMainText = ["we create", "award", "winning sites"];

function HeroSection({ heroSectionEnded }) {
  // useGSAP(() => {
  //   gsap
  //     .timeline()
  //     .to("#heroText1", {
  //       duration: 0.3,
  //       text: "we create",
  //     })
  //     .to("#heroText2", { duration: 0.3, text: "award" })
  //     .to("#heroText3", { duration: 0.3, text: "winning sites" });
  // });

  useGSAP(() => {
    const heroSectionTextContainer = document.querySelector(
      "#heroSectionTextContainer",
    );
    gsap.set(".heroSectionAfterDisplay", { opacity: 0 });
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

    addTextWithScrambleEffect(
      heroSectionMainText,
      heroSectionTextContainer,
      50,
      100,
    );

    return () => {
      heroSectionTextContainer.innerHTML = ""; // Cleanup on unmount
    };
  }, []);

  return (
    <div className="relative z-[100] h-screen bg-white">
      <span
        className={`${layGrotesk.className} heroSectionAfterDisplay absolute left-[80px] top-[70px] text-[14px] font-semibold uppercase leading-[16px] tracking-[1.858px] text-black opacity-0`}
      >
        LOGO
      </span>
      <Image
        src={"/heroSectionHandBlack.svg"}
        alt="hero section hand"
        width={366.6}
        height={489.54}
        className="heroSectionAfterDisplay absolute left-1/2 top-0 aspect-[366.6/489.54] w-[21.5vw] max-w-[366px] -translate-x-1/2 -translate-y-[7.5%] rotate-180 opacity-0"
      />
      <div className="heroSectionAfterDisplay absolute right-[55px] top-[70px] h-[18.5px] w-[76px] cursor-pointer border-y-[1.5px] border-black opacity-0"></div>
      <div
        id="heroSectionTextContainer"
        className={`${layGrotesk.className} text-heroSectionTextColor absolute bottom-[15px] left-[16px] translate-y-[7px] text-[128px] leading-[120px]`}
      ></div>
      <Image
        src={"/workSticker.svg"}
        alt="open to work sticker"
        width={127}
        height={127}
        className="heroSectionAfterDisplay absolute bottom-[69px] right-[68px] aspect-square w-[127px] opacity-0"
      />
    </div>
  );
}

export default HeroSection;
