import { futuraCyrillic, layGrotesk, maziusReview } from "@/app/font";
import React from "react";

function SimplicitySection() {
  return (
    <div className="relative h-screen snap-start snap-always">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col text-nowrap text-center">
          <p
            className={`${layGrotesk.className} flex flex-col text-[96px] font-semibold leading-[109px]`}
          >
            <span>
              "
              <span
                style={{ fontStyle: "oblique" }}
                className={`${maziusReview.className} font-normal`}
              >
                Simplicity
              </span>{" "}
              is the ultimate
            </span>
            <span>sophistication”</span>
          </p>
          <p
            className={`${futuraCyrillic.className} mt-[20px] text-[20px] uppercase leading-[26px] tracking-[0.04em]`}
          >
            — Leonardo da Vinci
          </p>
        </div>
      </div>
    </div>
  );
}

export default SimplicitySection;
