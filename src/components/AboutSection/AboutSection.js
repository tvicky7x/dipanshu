import { layGrotesk } from "@/app/font";
import React from "react";

function AboutSection() {
  return (
    <div
      style={{ backgroundImage: `url(/aboutBg.svg)` }}
      className="relative h-[2500px] bg-white bg-cover bg-center bg-no-repeat"
    >
      <div className="sticky top-0 h-screen w-full">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex w-[650px] flex-col gap-y-[56px] text-center text-black">
            <p
              className={`${layGrotesk.className} text-[24px] font-semibold leading-[22px] tracking-[0.04em]`}
            >
              {"[ABOUT]"}
            </p>
            <div className="text-[32px] leading-[40px] tracking-[0.02em]">
              <p className="mb-[1.3em]">
                Startups who make it all have a thing in common. They’ve found
                the way to make their value obvious to their users and their
                investors.
              </p>
              <p className="my-[1.3em] text-hiddenTextColor">
                Sadly for most, that path is kept in the dark and stays out of
                reach.
              </p>
              <p className="mt-[1.3em] text-hiddenTextColor">
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
