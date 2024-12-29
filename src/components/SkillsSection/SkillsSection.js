import { aeonikTrial, futuraCyrillic, layGrotesk, offBit } from "@/app/font";
import React from "react";

const skillsArray = [
  { para: "App Design", color: "#8EF9F9" },
  { para: "App Design", color: "#F19595" },
  { para: "App Design", color: "#F8DFF9" },
  { para: "App Design", color: "#DAF6F8" },
  { para: "App Design", color: "#6886F3" },
  { para: "App Design", color: "#D9D9D9" },
  { para: "App Design", color: "#F4B87D" },
  { para: "App Design", color: "#F4F0D4" },
  { para: "App Design", color: "#FBF18E" },
  { para: "App Design", color: "#82F0BE" },
  { para: "App Design", color: "#FFFFFF" },
  { para: "App Design", color: "#FFE5E0" },
];

function SkillsSection() {
  return (
    <div className="h-screen snap-center snap-always px-[50px] py-[5%]">
      <div className="relative h-full rounded-[40px] border-[1px] border-white">
        <div className="absolute left-1/2 top-[28%] -translate-x-1/2 -translate-y-1/2 text-nowrap text-center uppercase">
          <p
            className={`${aeonikTrial.className} text-[24px] leading-[22px] tracking-[0.02em]`}
          >
            {"[SKILLS]"}
          </p>
          <p
            className={`${layGrotesk.className} mt-[20px] text-[70px] leading-[83px]`}
          >
            Design Arsenal
          </p>
        </div>

        {skillsArray?.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: item?.color }}
              className={`${offBit.className} absolute aspect-square w-[150px] rounded-full text-black`}
            >
              <span className="absolute left-1/2 top-1/2 w-[62px] -translate-x-1/2 -translate-y-1/2 text-center text-[20px] uppercase leading-[22px] tracking-[0.04em]">
                {item?.para}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsSection;
