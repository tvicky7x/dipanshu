import { aeonikTrial, layGrotesk } from "@/app/font";
import Image from "next/image";
import React from "react";
import GridLines from "../UtilitiesComponents/GridLines";

const uniqueSection = [
  {
    imageUrl: "/branding.svg",
    head: "Branding",
    para: [
      "Estratégia & Posicionamento;",
      "Design de marca;",
      "Motion design;",
      "Manual da marca.",
    ],
  },
  {
    imageUrl: "/usability.svg",
    head: "Usabilidade",
    para: [
      "Foco no usuário;",
      "Design simples;",
      "Comportamento humano;",
      "Organização visual.",
    ],
  },
  {
    imageUrl: "/design.svg",
    head: "Design",
    para: [
      "Websites / E-commerce;",
      "Painel adm / SaaS / CRM;",
      "Landing pages / Blogs;",
      " Aplicativos.",
    ],
  },
  {
    imageUrl: "/webDesign.svg",
    head: "Web Design",
    para: [
      "Framer Partner;",
      "SEO Amigável;",
      "Responsividade;",
      "Alteração de conteúdo pelo cliente.",
    ],
  },
];

function UniqueSections() {
  return (
    <div className="relative px-[20px] text-black md:h-[650px] md:bg-white md:px-[32px] lg:h-[768px] lg:px-[64px] xl:h-[1024px] xl:px-[72px]">
      <div className="bg-white">
        <div className="pb-[95px] pt-[80px]">
          <h2
            className={`${layGrotesk.className} text-center text-[36px] font-medium uppercase leading-normal tracking-[0.04em] md:absolute md:left-1/2 md:top-[80px] md:-translate-x-1/2 md:text-[50px] lg:top-[126px] lg:text-[60px] xl:top-[176px] xl:text-[70px]`}
          >
            Lorem ipsum
          </h2>
        </div>
        <div className="absolute left-0 top-0 hidden h-full w-full px-[20px] md:block md:px-[32px] lg:px-[64px] xl:px-[72px]">
          <div
            className={`grid h-full grid-flow-col grid-cols-4 divide-x-2 divide-black/15 border-x-2 border-black/15`}
          >
            {uniqueSection?.map((item, index) => {
              return (
                <div key={index} className={`relative`}>
                  <div className="absolute bottom-[90px] left-0 w-full border-y-2 border-black/15 p-[14px] lg:bottom-[130px] lg:p-[18px] xl:bottom-[210px] xl:p-[24px]">
                    <Image
                      width={32}
                      height={32}
                      src={item?.imageUrl}
                      alt={item?.head}
                      className="aspect-square w-[22px] lg:w-[28px] xl:w-[32px]"
                    />
                    <p
                      className={`${layGrotesk.className} mb-[11px] mt-[50px] text-[18px] leading-[32px] lg:mb-[14px] lg:mt-[70px] lg:text-[22px] lg:leading-[36px] xl:mb-[20px] xl:mt-[102px] xl:text-[25.9px]`}
                    >
                      {item?.head}
                    </p>
                    <div className="flex flex-col">
                      {item?.para?.map((item, index) => {
                        return (
                          <p
                            key={index}
                            className={`${aeonikTrial.className} text-[12px] leading-[18.5px] lg:text-[12.5px] lg:leading-[19.5px] xl:text-[14.5px] xl:leading-[22px]`}
                          >
                            {item}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col pb-[55px] md:hidden">
          <div className="divide-y divide-black/15 border-y border-black/15">
            {uniqueSection?.map((item, index) => {
              return (
                <div key={index} className="px-[24px] py-[25px]">
                  <Image
                    width={32}
                    height={32}
                    src={item?.imageUrl}
                    alt={item?.head}
                    className="aspect-square w-[32px]"
                  />
                  <p
                    className={`${layGrotesk.className} mb-[18px] mt-[38px] text-[20px] leading-[39px]`}
                  >
                    {item?.head}
                  </p>
                  <div className="flex flex-col">
                    {item?.para?.map((item, index) => {
                      return (
                        <p
                          key={index}
                          className={`${aeonikTrial.className} text-[14px] leading-[20px]`}
                        >
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniqueSections;
