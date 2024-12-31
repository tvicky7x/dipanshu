import { aeonikTrial, layGrotesk } from "@/app/font";
import Image from "next/image";
import React from "react";

function DesignProcessSection() {
  return (
    <div className="relative h-screen px-[50px]">
      <div className="absolute left-1/2 top-1/2 w-full max-w-[1225px] -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-y-[20px]">
          <p
            className={`${aeonikTrial.className} text-[24px] leading-[22px] tracking-[0.04em]`}
          >
            {"[DESIGN PROCESS]"}
          </p>
          <div className="flex gap-x-[124px]">
            <div className="flex flex-col gap-y-[30px]">
              <p
                className={`${layGrotesk.className} flex h-[173px] w-[700px] items-center text-[64px] font-medium uppercase leading-[70px] tracking-[0.02em]`}
              >
                Discover & Understand
              </p>
              <p
                className={`${layGrotesk.className} flex h-[173px] w-[700px] items-center text-[64px] font-medium uppercase leading-[70px] tracking-[0.02em]`}
              >
                Ideate & Conceptualize
              </p>
              <p
                className={`${layGrotesk.className} w-[700px] text-[64px] font-medium uppercase leading-[70px] tracking-[0.02em]`}
              >
                Design & Refine
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[27px] rounded-[16px] border-[1px] border-white p-[25px]">
              <p
                className={`${aeonikTrial.className} text-[24px] uppercase leading-[32px] tracking-[0.03em]`}
              >
                Strong foundations
              </p>
              <div className="flex flex-col gap-y-[22px]">
                <div className="flex gap-x-[10px]">
                  <Image
                    src={"/goalIcon.svg"}
                    alt="goal icon"
                    width={22}
                    height={22}
                    className="aspect-square w-[22px]"
                  />
                  <p
                    className={`${aeonikTrial.className} text-[19.375px] leading-[24px]`}
                  >
                    Goal
                  </p>
                </div>
                <div className="flex flex-col gap-y-[27px]">
                  <p
                    className={`${aeonikTrial.className} text-[22px] font-light leading-[24px]`}
                  >
                    Understand the project’s goals and user needs, Clarify the
                    challenges and define the scope for a tailored design
                    solution
                  </p>
                  <div className="flex flex-wrap gap-x-[14px] gap-y-[20px]">
                    {[
                      "Client Discussion",
                      "Problem Identification",
                      "Defining Core Objectives",
                    ]?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-white px-[8px] py-[5px] text-center"
                        >
                          <p
                            className={`${aeonikTrial.className} text-[12px] uppercase leading-[16px] text-black`}
                          >
                            {item}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="rounded-[20px] bg-white/10 p-[24px]">
                    <p
                      className={`${aeonikTrial.className} text-[22px] font-light italic leading-[22px]`}
                    >
                      “The more you know, the better you design”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignProcessSection;
