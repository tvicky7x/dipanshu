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
    <div className="pb-[204px] pt-[150px]">
      <div className="flex flex-col gap-y-[160px]">
        <div className="flex flex-col gap-y-[20px] text-center uppercase">
          <p
            className={`${aeonikTrial.className} text-[24px] leading-[22px] tracking-[0.02em]`}
          >
            {"[SERVICES]"}
          </p>
          <p
            className={`${layGrotesk.className} text-[70px] font-medium leading-[83px]`}
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
                    className={`${aeonikTrial.className} text-[24px] font-light leading-[22px]`}
                  >
                    {item?.comment}
                  </p>
                  <p
                    className={`${layGrotesk.className} text-[64px] font-medium uppercase leading-[50px] tracking-[0.02em]`}
                  >
                    {item?.serviceName}
                  </p>
                  <p
                    className={`${offBit.className} text-[24px] leading-[50px] tracking-[0.06em]`}
                  >
                    {item?.quote}
                  </p>
                </div>
                {index !== array.length - 1 && (
                  <div className="my-[54px] border-b border-white/[0.15]" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
