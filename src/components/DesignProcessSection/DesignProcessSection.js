import { aeonikTrial, layGrotesk } from "@/app/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";
import GridLines from "../UtilitiesComponents/GridLines";

const designProcess = [
  {
    heading: "Discover",
    para: "Estrutura inicial, mapeando funcionalidade efluxo do projeto, sem detalhes visuais.",
  },
  {
    heading: "Ideate and Conceptualize",
    para: "Nossa essência está em criar experiências visuais impactantes, combinando estética eusabilidade para entregar soluções inovadoras, rompendo o convencional e encantando em cada detalhe.",
  },
  {
    heading: "Design and Refine",
    para: "Transformação do design em uma experiência interativa, com animações e funcionalidades dinâmicas.",
  },
];

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
          end: "bottom-=10% bottom",
          scrub: true,
        },
      })
      .set(processContainer, { width: 0 })
      .to(processContainer, { width: "100%", duration: 0.8, stagger: 0.9 }, 0);
  });

  return (
    <>
      <div className="relative h-[50px] md:h-[15vh]">
        <GridLines />
      </div>
      <div
        ref={designProcessSectionRef}
        className="relative hidden h-[2000px] md:block lg:h-[3000px] xl:h-[4000px]"
      >
        <div ref={pinnedDesignedRef} className="h-screen px-[72px]">
          <div className="flex h-full flex-col border-x-2 border-white/15">
            {/* heading Section */}
            <div className="relative h-[40vh] flex-shrink-0">
              {/* Heading text */}
              <h2
                className={`${layGrotesk.className} absolute left-0 top-1/2 -translate-y-1/2 text-[50px] font-medium uppercase leading-normal tracking-[0.04em] lg:text-[60px] xl:text-[70px]`}
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
                          <div className="flex w-full items-center justify-between border-y-2 border-white/15 px-[18px] py-[18px] lg:px-[21px] lg:py-[21px] xl:px-[24px] xl:py-[24px]">
                            <span
                              className={`${aeonikTrial.className} text-[13px] leading-[17.5px] lg:text-[15px] lg:leading-[20px] xl:text-[17.43px] xl:leading-[23px]`}
                            >
                              Lorem Ipsum
                            </span>
                            <Image
                              src={"/arrowLink.svg"}
                              alt="arrow link icon"
                              width={24}
                              height={24}
                              loading="lazy"
                              className="aspect-auto w-[18px] lg:w-[21px] xl:w-[24px]"
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
                            <div className="mx-[14px] lg:mx-[16px] xl:mx-[20px]">
                              <p
                                className={`${layGrotesk.className} line-clamp-1 text-[15px] leading-[25px] lg:text-[17px] lg:leading-[29px] xl:text-[19.9px] xl:leading-[31px]`}
                              >
                                {designProcess[0]?.heading}
                              </p>
                              <p
                                className={`${aeonikTrial.className} line-clamp-2 text-[13px] leading-[18px] text-black text-opacity-50 lg:text-[14px] lg:leading-[20px] xl:text-[15px] xl:leading-[22px]`}
                              >
                                {designProcess[0]?.para}
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
                          <div
                            style={{ backgroundImage: `url(/skillsBg.svg)` }}
                            className="h-full bg-auto bg-clip-padding"
                          ></div>
                        )}
                        {index === 1 && (
                          <div
                            id="processContainer"
                            className={`flex h-full w-0 flex-col justify-center gap-y-[14px] bg-white`}
                          >
                            <div className="mx-[14px] lg:mx-[16px] xl:mx-[20px]">
                              <p
                                className={`${layGrotesk.className} line-clamp-1 text-[15px] leading-[25px] lg:text-[17px] lg:leading-[29px] xl:text-[19.9px] xl:leading-[31px]`}
                              >
                                {designProcess[1]?.heading}
                              </p>
                              <p
                                className={`${aeonikTrial.className} line-clamp-2 text-[13px] leading-[18px] text-black text-opacity-50 lg:text-[14px] lg:leading-[20px] xl:text-[15px] xl:leading-[22px]`}
                              >
                                {designProcess[1]?.para}
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
                          <div
                            style={{ backgroundImage: `url(/skillsBg.svg)` }}
                            className="h-full bg-auto bg-clip-padding"
                          ></div>
                        )}
                        {index === 3 && (
                          <div
                            id="processContainer"
                            className={`${index === 3 && "bg-white"} flex h-full w-0 flex-col justify-center gap-y-[14px]`}
                          >
                            <div className="mx-[14px] lg:mx-[16px] xl:mx-[20px]">
                              <p
                                className={`${layGrotesk.className} line-clamp-1 text-[15px] leading-[25px] lg:text-[17px] lg:leading-[29px] xl:text-[19.9px] xl:leading-[31px]`}
                              >
                                {designProcess[2]?.heading}
                              </p>
                              <p
                                className={`${aeonikTrial.className} line-clamp-2 text-[13px] leading-[18px] text-black text-opacity-50 lg:text-[14px] lg:leading-[20px] xl:text-[15px] xl:leading-[22px]`}
                              >
                                {designProcess[2]?.para}
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
      <div className="block px-[20px] md:hidden">
        <div className="border-x border-white/15">
          <div className="flex flex-col gap-y-[100px]">
            <p
              className={`${layGrotesk.className} text-center text-[36px] tracking-[0.04em]`}
            >
              Lorem Ipsum
            </p>
            <div className="flex w-full items-center justify-between border-y border-white/15 px-[24px] py-[26px]">
              <span className={`${aeonikTrial.className} text-[16px]`}>
                Lorem Ipsum
              </span>
              <Image
                src={"/arrowLink.svg"}
                alt="arrow link icon"
                width={24}
                height={24}
                loading="lazy"
                className="aspect-auto w-[23px]"
              />
            </div>
          </div>
        </div>
        <div>
          {designProcess.map((item, index) => {
            return (
              <div
                key={index}
                className="border-designProcessBorder flex flex-col gap-y-[10px] border-b bg-white px-[20px] py-[36px]"
              >
                <p
                  className={`${layGrotesk.className} text-[16px] leading-[31px] text-black`}
                >
                  {item?.heading}
                </p>
                <p
                  className={`${aeonikTrial.className} text-[15px] leading-[17px] text-black text-opacity-50`}
                >
                  {item?.para}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative h-[64px] md:h-[15vh]">
        <GridLines />
      </div>
    </>
  );
}

export default DesignProcessSection;
