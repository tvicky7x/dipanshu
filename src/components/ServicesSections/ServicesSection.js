import { aeonikTrial, layGrotesk, offBit } from "@/app/font";
import React from "react";

const servicesArray = [
  {
    serviceName: "UI UX Design",
    comment: "[The interface they won’t forget]",
    quote: "Deliver designs that connect, simplify, and delight",
  },
  {
    serviceName: "APP DESIGN",
    comment: "[Seamless design for every screen]",
    quote: "Create intuitive and engaging apps for every user journey",
  },
  {
    serviceName: "WEB design",
    comment: "[The website your brand deserves]",
    quote: "Elevate your presence with dynamic and purposeful web experiences",
  },
  {
    serviceName: "branding & identity",
    comment: "[A story worth remembering]",
    quote: "Transform your vision into a brand that stands out",
  },
];

function ServicesSection() {
  return (
    <div className="px-[72px]">
      <div className="border-x-2 border-white/15 pb-[154px] pt-[100px] xl:pb-[204px] xl:pt-[150px]">
        <div className="flex flex-col gap-y-[140px] xl:gap-y-[160px]">
          <div className="flex flex-col gap-y-[16px] text-center uppercase xl:gap-y-[20px]">
            <p
              className={`${aeonikTrial.className} text-[20px] leading-[18px] tracking-[0.02em] xl:text-[24px] xl:leading-[22px]`}
            >
              {"[SERVICES]"}
            </p>
            <p
              className={`${layGrotesk.className} text-[54px] font-medium leading-[67px] xl:text-[70px] xl:leading-[83px]`}
            >
              Focused on Impact
            </p>
          </div>
          <div>
            {servicesArray?.map((item, index, array) => {
              return (
                <React.Fragment key={index}>
                  <div className="flex flex-col gap-y-[30px] text-center">
                    <p
                      className={`${aeonikTrial.className} text-[18px] font-light leading-[16px] xl:text-[24px] xl:leading-[22px]`}
                    >
                      {item?.comment}
                    </p>
                    <p
                      className={`${layGrotesk.className} text-[50px] font-medium uppercase leading-[36px] tracking-[0.02em] xl:text-[64px] xl:leading-[50px]`}
                    >
                      {item?.serviceName}
                    </p>
                    <p
                      className={`${offBit.className} text-[20px] leading-[40px] tracking-[0.06em] xl:text-[24px] xl:leading-[50px]`}
                    >
                      {item?.quote}
                    </p>
                  </div>
                  {index !== array.length - 1 && (
                    <div className="my-[50px] border-b-2 border-white/15 xl:my-[54px]" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
