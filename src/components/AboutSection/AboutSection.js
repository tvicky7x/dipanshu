import { futuraCyrillic } from "@/app/font";
import React from "react";

function AboutSection() {
  return (
    <div
      style={{ backgroundImage: `url(/aboutBg.svg)` }}
      className="relative h-[3000px] snap-center snap-always bg-white bg-cover bg-center bg-no-repeat"
    >
      <div className="sticky top-0 h-screen w-full">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex w-[650px] flex-col gap-y-[56px] text-center text-black">
            <p
              className={`${futuraCyrillic.className} text-[24px] font-semibold leading-[22px]`}
            >
              {"[ABOUT]"}
            </p>
            <div className="text-[32px] leading-[40px]">
              <p className="mb-[1.3em]">
                Startups who make it all have a thing in common. They’ve found
                the way to make their value obvious to their users and their
                investors.
              </p>
              <p className="text-hiddenTextColor my-[1.3em]">
                Sadly for most, that path is kept in the dark and stays out of
                reach.
              </p>
              <p className="text-hiddenTextColor my-[1.3em]">
                Our value-first method focuses on innovative tech insights and
                deep tactical knowledge to give your MVP value for everyone to
                see, feel and want to invest in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
