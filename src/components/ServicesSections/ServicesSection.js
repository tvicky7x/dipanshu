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
    <div className="px-[20px] md:px-[32px] lg:px-[64px] xl:px-[72px]">
      <div className="border-x border-white/15 pb-[104px] pt-[50px] md:border-x-2 lg:pb-[154px] lg:pt-[100px] xl:pb-[204px] xl:pt-[150px]">
        <div className="flex flex-col gap-y-[120px] lg:gap-y-[140px] xl:gap-y-[160px]">
          <div className="flex flex-col gap-y-[8px] text-center uppercase md:gap-y-[12px] lg:gap-y-[16px] xl:gap-y-[20px]">
            <p
              className={`${aeonikTrial.className} text-[16px] leading-[22px] tracking-[0.02em] md:text-[18px] md:leading-[18px] lg:text-[20px] xl:text-[24px] xl:leading-[22px]`}
            >
              {"[SERVICES]"}
            </p>
            <p
              className={`${layGrotesk.className} text-[36px] font-medium leading-normal md:text-[42px] md:leading-[67px] lg:text-[54px] xl:text-[70px] xl:leading-[83px]`}
            >
              Focused on Impact
            </p>
          </div>
          <div>
            {servicesArray?.map((item, index, array) => {
              return (
                <React.Fragment key={index}>
                  <div className="flex flex-col gap-y-[6px] px-[20px] text-center md:gap-y-[25px] md:px-0 xl:gap-y-[30px]">
                    <p
                      className={`${aeonikTrial.className} text-[16px] font-light leading-[22px] md:text-[14px] md:leading-[12px] lg:text-[18px] lg:leading-[16px] xl:text-[24px] xl:leading-[22px]`}
                    >
                      {item?.comment}
                    </p>
                    <p
                      className={`${layGrotesk.className} text-[28px] font-medium uppercase leading-[50px] tracking-[0.02em] md:text-[40px] md:leading-[26px] lg:text-[50px] lg:leading-[36px] xl:text-[64px] xl:leading-[50px]`}
                    >
                      {item?.serviceName}
                    </p>
                    <p
                      className={`${offBit.className} text-[16px] leading-[18px] tracking-[0.06em] md:text-[18px] md:leading-[26px] lg:text-[20px] lg:leading-[40px] xl:text-[24px] xl:leading-[50px]`}
                    >
                      {item?.quote}
                    </p>
                  </div>
                  {index !== array.length - 1 && (
                    <div className="my-[54px] border-b border-white/15 md:my-[48px] md:border-b-2 lg:my-[50px] xl:my-[54px]" />
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
