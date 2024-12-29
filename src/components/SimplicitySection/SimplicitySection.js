import { aeonikTrial, layGrotesk, maziusReview } from "@/app/font";
import React from "react";

function SimplicitySection() {
  return (
    <div className="relative h-screen snap-center">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col text-nowrap text-center">
          <p
            className={`${layGrotesk.className} flex flex-col text-[96px] font-medium leading-[99px] tracking-[-0.02em]`}
          >
            <span>
              <span
                className={`${aeonikTrial.className} font-bold leading-[109px] tracking-[0.04em]`}
              >
                "
              </span>
              <span
                style={{ fontStyle: "oblique" }}
                className={`${maziusReview.className} font-normal leading-[115px] tracking-[0.04em]`}
              >
                Simplicity
              </span>{" "}
              is the ultimate
            </span>
            <span>
              sophistication
              <span
                className={`${aeonikTrial.className} font-bold leading-[109px] tracking-[0.04em]`}
              >
                ”
              </span>
            </span>
          </p>
          <p
            className={`${aeonikTrial.className} mt-[20px] text-[20px] font-light uppercase italic leading-[23px] tracking-[0.04em]`}
          >
            — Leonardo da Vinci
          </p>
        </div>
      </div>
    </div>
  );
}

export default SimplicitySection;
