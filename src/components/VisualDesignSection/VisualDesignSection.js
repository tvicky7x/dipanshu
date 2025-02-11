import { layGrotesk, maziusReview } from "@/app/font";
import Image from "next/image";
import React from "react";
import GridLines from "../UtilitiesComponents/GridLines";

function VisualDesignSection() {
  return (
    <div className="relative h-screen md:h-[650px] lg:h-[768px] xl:h-[1024px]">
      {/* grid */}
      <GridLines />

      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <p
          className={`${layGrotesk.className} flex w-[340px] flex-col text-center text-[48px] leading-[56px] md:w-auto md:text-nowrap md:text-[38px] md:leading-[54px] lg:text-[48px] lg:leading-[64px] xl:text-[64px] xl:leading-[80px]`}
        >
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
        className="absolute bottom-0 right-0 z-10 aspect-auto h-[20%] translate-x-[25%] md:h-[40%]"
      />
    </div>
  );
}

export default VisualDesignSection;
