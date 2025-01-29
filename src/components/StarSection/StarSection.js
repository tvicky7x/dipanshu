import React from "react";
import { aeonikTrial } from "@/app/font";
import Image from "next/image";

function StarSection() {
  return (
    <div className="relative h-[calc(100vh+100px)] xl:h-[calc(100vh+200px)]">
      <div
        style={{ backgroundImage: "url(skillsBg.svg)" }}
        className="absolute left-0 top-0 h-full w-1/2"
      />
      <div className="absolute left-0 top-0 z-10 h-full w-full px-[72px]">
        <div
          className={`grid h-full grid-flow-col grid-cols-4 divide-x-2 divide-white/15 border-x-2 border-white/15 bg-black`}
        >
          {Array(3)
            .fill(true)
            .map((_, index) => {
              return (
                <div key={index} className={`${index === 1 && "col-span-2"}`} />
              );
            })}
        </div>
      </div>
      <div className="absolute left-0 top-1/2 z-20 flex h-[80vh] w-full -translate-y-1/2 flex-col justify-between">
        <div className="relative z-10 h-[99px] ps-[72px]">
          <div className="h-full border-y-2 border-white/15 pe-[72px]">
            <div className="ms-auto flex h-full w-[calc(25%+72px)] translate-x-[72px] items-center bg-white px-[25px] py-[16px] xl:px-[60px] xl:py-[18px]">
              <p
                className={`${aeonikTrial.className} text-[14px] leading-[20px] text-black text-opacity-50 xl:text-[15px] xl:leading-[22px]`}
              >
                Transformação do design em uma experiência interativa, com
                animações e funcionalidades dinâmicas.
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10 h-[99px] border-e-2 border-white/15 pe-[72px]">
          <div
            style={{ backgroundImage: "url(skillsBg.svg)" }}
            className="h-full border-y-2 border-white/15 bg-clip-padding ps-[72px]"
          >
            <div className="h-full w-[calc(75%+74px)] -translate-x-[72px] border-e-2 border-white/15 bg-black ps-[72px]">
              <div className="flex h-full w-[calc(33.3%+74px)] -translate-x-[72px] items-center bg-white px-[25px] py-[16px] xl:px-[60px] xl:py-[18px]">
                <p
                  className={`${aeonikTrial.className} text-[14px] leading-[20px] text-black text-opacity-50 xl:text-[15px] xl:leading-[22px]`}
                >
                  Transformação do design em uma experiência interativa, com
                  animações e funcionalidades dinâmicas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          loading="lazy"
          src={"/starCollection.svg"}
          alt="star collection image"
          width={417.06}
          height={404.31}
          className="absolute left-1/2 top-1/2 aspect-auto h-[calc(100%-250px)] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}

export default StarSection;
