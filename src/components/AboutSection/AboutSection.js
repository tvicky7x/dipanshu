import React from "react";
import MainLayout from "../MainLayout/MainLayout";
import { getComponentText } from "@/utilities/commanFunctions";
import Image from "next/image";
import aboutSectionHand from "../../../public/aboutSectionHand.svg";
import aboutSectionCloud from "../../../public/aboutSectionCloud.svg";

function AboutSection() {
  const content = getComponentText("home.aboutSection");
  return (
    <MainLayout outerClass={"relative"}>
      <div className="relative flex justify-between pb-[263px] pt-[161px]">
        <div className="w-[689px] space-y-14 text-[24px] leading-[24px]">
          {content?.aboutList?.map((item, index) => {
            return (
              <div key={index}>
                <h2>{item?.head}</h2>
                <p className="mt-6">{item?.para}</p>
              </div>
            );
          })}
        </div>
        <div className="w-[289px]">
          <div className="h-[323px] bg-white"></div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 flex w-[440px] flex-col">
        <Image
          src={aboutSectionCloud}
          alt="cloud illustration"
          className="translate-y-5"
        />
        <Image
          src={aboutSectionHand}
          alt="hand illustration"
          className="ms-auto"
        />
      </div>
    </MainLayout>
  );
}

export default AboutSection;
