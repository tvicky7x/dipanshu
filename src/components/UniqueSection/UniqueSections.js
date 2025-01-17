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
    <div className="relative h-[1024px] bg-white px-[72px] text-black">
      <h2
        className={`${layGrotesk.className} absolute left-1/2 top-[176px] -translate-x-1/2 text-[70px] font-medium uppercase leading-[83px] tracking-[0.04em]`}
      >
        Lorem ipsum
      </h2>
      <div className="absolute left-0 top-0 h-full w-full px-[72px]">
        <div
          className={`grid h-full grid-flow-col grid-cols-4 divide-x-2 divide-black/15 border-x-2 border-black/15`}
        >
          {uniqueSection?.map((item, index) => {
            return (
              <div key={index} className={`relative`}>
                <div className="absolute bottom-[210px] left-0 w-full border-y-2 border-black/15 p-[24px]">
                  <Image
                    width={32}
                    height={32}
                    src={item?.imageUrl}
                    alt={item?.head}
                    className="aspect-square w-[32px]"
                  />
                  <p
                    className={`${layGrotesk.className} mb-[20px] mt-[102px] text-[25.9px] leading-[39px]`}
                  >
                    {item?.head}
                  </p>
                  <div className="flex flex-col">
                    {item?.para?.map((item, index) => {
                      return (
                        <p
                          key={index}
                          className={`${aeonikTrial.className} text-[14.5px] leading-[22px]`}
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
    </div>
  );
}

export default UniqueSections;
