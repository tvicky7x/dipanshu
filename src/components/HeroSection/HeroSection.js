import { layGrotesk } from "@/app/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import React, { useEffect } from "react";

gsap.registerPlugin(TextPlugin);

const heroSectionMainText = ["we create", "award", "winning sites"];

function HeroSection() {
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
            // if (index === 2) {
            //   span.className = "opacity-[0.5]";
            // }
            setTimeout(
              () => {
                // Random character phase
                span.textContent = randomChars.charAt(
                  Math.floor(Math.random() * randomChars.length),
                );

                setTimeout(() => {
                  // Replace with the correct character
                  span.textContent = char;
                  // if (index === 2) {
                  //   gsap.fromTo(
                  //     span,
                  //     { opacity: 0.15 },
                  //     { opacity: 1, duration: 2 },
                  //   );
                  // }
                }, charDelay / 2);

                if (index === 1) {
                  paraTimeline.to(p, {
                    color: "#F67676",
                    duration: 0.2,
                    delay: 0.6,
                  });
                }

                if (index === 2) {
                  p.className = "pb-[5px]";
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
                          "linear-gradient(to right, rgba(34, 34, 34, 1), rgba(34, 34, 34, 0.25) 0%)",
                      },
                      {
                        backgroundSize: "200%",
                        backgroundImage:
                          "linear-gradient(to right, rgba(34, 34, 34, 1), rgba(34, 34, 34, 0.25) 500%)",
                        duration: 0.8,
                        ease: "power1.inOut",
                        delay: 0.5,
                      },
                    );
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
      <div
        id="heroSectionTextContainer"
        className={`${layGrotesk.className} text-heroSectionTextColor absolute bottom-[15px] left-[16px] translate-y-[5px] text-[128px] leading-[120px]`}
      ></div>
    </div>
  );
}

export default HeroSection;
