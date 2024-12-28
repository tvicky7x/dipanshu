import { layGrotesk, maziusReview, offBit } from "@/app/font";
import React from "react";

function ShapeSection() {
  return (
    <div className="relative h-screen snap-start snap-always">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-y-[18px] text-nowrap text-center uppercase">
          <p
            className={`${offBit.className} text-[32px] leading-[35px] tracking-[0.06em]`}
          >
            Because Every Detail Matters
          </p>
          <p
            className={`${layGrotesk.className} text-[128px] font-semibold leading-[128px] tracking-[0.02em]`}
          >
            <span>Let's Shape</span>
          </p>
          <p
            className={`${offBit.className} text-[32px] leading-[35px] tracking-[0.06em]`}
          >
            To Take It To The Next Level
          </p>
          <p>
            <span
              className={`${layGrotesk.className} text-[128px] font-semibold leading-[128px] tracking-[0.02em]`}
            >
              Your{" "}
            </span>
            <span
              style={{ fontStyle: "oblique" }}
              className={`${maziusReview.className} text-[128px] font-normal leading-[154px] tracking-[0.04em]`}
            >
              Vision
            </span>
          </p>
          <p
            className={`${offBit.className} text-[32px] leading-[35px] tracking-[0.06em]`}
          >
            -LOREM IPSUM-
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShapeSection;
