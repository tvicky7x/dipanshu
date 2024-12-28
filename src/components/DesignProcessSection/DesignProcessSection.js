import { aeonikTrial, layGrotesk } from "@/app/font";
import React from "react";

function DesignProcessSection() {
  return (
    <div className="relative h-screen snap-center snap-always px-[50px]">
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
            <div className="w-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignProcessSection;
