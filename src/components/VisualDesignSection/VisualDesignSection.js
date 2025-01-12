import { maziusReview } from "@/app/font";
import Image from "next/image";
import React from "react";

function VisualDesignSection() {
  return (
    <div className="relative h-screen">
      {/* grid */}
      <div className="absolute left-0 top-0 grid h-full w-full grid-flow-col grid-cols-4 px-[72px]">
        {Array(4)
          .fill(true)
          .map((_, index) => {
            return (
              <div
                key={index}
                className={`border-x-[0.5px] border-white/15 first:border-s-[2px] last:border-e-[2px]`}
              />
            );
          })}
      </div>
      <div className="absolute left-1/2 top-calc_50p_160px z-10 -translate-x-1/2 -translate-y-1/2">
        <p className="flex flex-col text-nowrap text-center text-[64px] leading-[80px] tracking-[0.04em]">
          <span>
            I pair strong{" "}
            <span
              style={{ fontStyle: "oblique" }}
              className={`${maziusReview.className} tracking-[0.04em]`}
            >
              visual Design
            </span>{" "}
            skills with a{" "}
          </span>
          <span>
            focus on{" "}
            <span
              style={{ fontStyle: "oblique" }}
              className={`${maziusReview.className} tracking-[0.04em]`}
            >
              User-Centered
            </span>{" "}
            Design
          </span>
        </p>
      </div>
      <Image
        src={"/magicHand.svg"}
        alt="magical hand"
        width={426}
        height={396.5}
        className="absolute bottom-0 right-0 z-10 aspect-auto w-[426px]"
      />
    </div>
  );
}

export default VisualDesignSection;
