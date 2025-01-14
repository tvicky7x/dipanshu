import { aeonikTrial, layGrotesk } from "@/app/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";
import GridLines from "../UtilitiesComponents/GridLines";

gsap.registerPlugin(ScrollTrigger);

function DesignProcessSection() {
  const designProcessSectionRef = useRef();
  const pinnedDesignedRef = useRef();

  useGSAP(() => {
    // pinning
    ScrollTrigger.create({
      trigger: designProcessSectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: pinnedDesignedRef.current,
    });

    // process width animation
    const processContainer = document.querySelectorAll("#processContainer");
    gsap
      .timeline({
        scrollTrigger: {
          trigger: designProcessSectionRef.current,
          start: "top top",
          end: "bottom-=15% bottom",
          scrub: true,
        },
      })
      .set(processContainer, { width: 0 })
      .to(processContainer, { width: "100%", duration: 0.8, stagger: 1 }, 0.5);
  });

  return (
    <>
      <div className="relative h-[15vh]">
        <GridLines />
      </div>
      <div ref={designProcessSectionRef} className="relative h-[4000px]">
        <div ref={pinnedDesignedRef} className="h-screen px-[72px]">
          <div className="flex h-full flex-col border-x-2 border-white/15">
            {/* heading Section */}
            <div className="relative h-[40vh] flex-shrink-0">
              {/* Heading text */}
              <h2
                className={`${layGrotesk.className} absolute left-0 top-1/2 -translate-y-1/2 text-[70px] font-medium uppercase leading-[83px] tracking-[0.04em]`}
              >
                Lorem Ipsum
              </h2>
              {/* Grid lines and Link */}
              <div
                className={`grid h-full grid-flow-col grid-cols-4 divide-x-2 divide-white/15`}
              >
                {Array(4)
                  .fill(true)
                  .map((_, index, array) => {
                    return (
                      <div key={index} className={`flex items-center`}>
                        {index === array.length - 1 && (
                          <div className="flex w-full items-center justify-between border-y-2 border-white/15 px-[24px] py-[24px]">
                            <span
                              className={`${aeonikTrial.className} text-[17.43px] leading-[23px]`}
                            >
                              Lorem Ipsum
                            </span>
                            <Image
                              src={"/arrowLink.svg"}
                              alt="arrow link icon"
                              width={24}
                              height={24}
                              loading="lazy"
                              className="aspect-auto w-[24px]"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
            {/* Process Section */}
            <div className="grid h-full w-full grid-flow-row grid-rows-3 divide-y-2 divide-white/15 border-y-2 border-white/15 text-black">
              {/* Process 1 */}
              <div className="grid grid-flow-col grid-cols-4 divide-x-2 divide-white/15">
                {Array(4)
                  .fill(true)
                  .map((_, index) => {
                    return (
                      <div key={index}>
                        {index === 0 && (
                          <div
                            id="processContainer"
                            className={`${index === 0 && "bg-white"} flex h-full w-0 flex-col justify-center gap-y-[14px]`}
                          >
                            <div className="mx-[20px] mb-[22px] mt-[20px]">
                              <p
                                className={`${layGrotesk.className} line-clamp-1 text-[19.9px] leading-[31px]`}
                              >
                                Discover
                              </p>
                              <p
                                className={`${aeonikTrial.className} line-clamp-2 text-[15px] leading-[22px] text-black text-opacity-50`}
                              >
                                Estrutura inicial, mapeando funcionalidade e
                                fluxo do projeto, sem detalhes visuais.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
              {/* Process 2 */}
              <div className="grid grid-flow-col grid-cols-4 divide-x-2 divide-white/15">
                {Array(3)
                  .fill(true)
                  .map((_, index) => {
                    return (
                      <div
                        key={index}
                        className={`${index === 1 && "col-span-2"}`}
                      >
                        {index === 0 && (
                          <div className="h-full bg-[url(/skillsBg.svg)] bg-auto bg-clip-padding"></div>
                        )}
                        {index === 1 && (
                          <div
                            id="processContainer"
                            className={`flex h-full w-0 flex-col justify-center gap-y-[14px] bg-white`}
                          >
                            <div className="mx-[20px] mb-[22px] mt-[20px]">
                              <p
                                className={`${layGrotesk.className} line-clamp-1 text-[19.9px] leading-[31px]`}
                              >
                                Ideate and Conceptualize
                              </p>
                              <p
                                className={`${aeonikTrial.className} line-clamp-2 text-[15px] leading-[22px] text-black text-opacity-50`}
                              >
                                Nossa essência está em criar experiências
                                visuais impactantes, combinando estética e
                                usabilidade para entregar soluções inovadoras,
                                rompendo o convencional e encantando em cada
                                detalhe.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
              {/* Process 3 */}
              <div className="grid grid-flow-col grid-cols-4 divide-x-2 divide-white/15">
                {Array(4)
                  .fill(true)
                  .map((_, index) => {
                    return (
                      <div key={index}>
                        {(index === 0 || index === 1 || index === 2) && (
                          <div className="h-full bg-[url(/skillsBg.svg)] bg-auto bg-clip-padding"></div>
                        )}
                        {index === 3 && (
                          <div
                            id="processContainer"
                            className={`${index === 3 && "bg-white"} flex h-full w-0 flex-col justify-center gap-y-[14px]`}
                          >
                            <div className="mx-[20px] mb-[22px] mt-[20px]">
                              <p
                                className={`${layGrotesk.className} line-clamp-1 text-[19.9px] leading-[31px]`}
                              >
                                Design and Refine
                              </p>
                              <p
                                className={`${aeonikTrial.className} line-clamp-2 text-[15px] leading-[22px] text-black text-opacity-50`}
                              >
                                Transformação do design em uma experiência
                                interativa, com animações e funcionalidades
                                dinâmicas.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignProcessSection;
