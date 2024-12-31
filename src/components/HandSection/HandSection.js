import { aeonikTrial } from "@/app/font";
import Image from "next/image";
import React from "react";

function HandSection() {
  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <Image
        src={"/leftHand.svg"}
        alt="left hand"
        width={600}
        height={534.55}
        className="absolute bottom-1/2 right-1/2 aspect-auto w-[600px] -translate-x-[149px] translate-y-[270px]"
      />
      <div className="absolute bottom-1/2 left-1/2 w-[495px] -translate-y-[235px] translate-x-[173px] rounded-[24px] bg-white px-[24px] py-[21px] text-black">
        <p className={`${aeonikTrial.className} text-[24px] leading-[24px]`}>
          Brands that succeed have CEOs that are in the know.
        </p>
      </div>
      <Image
        src={"/starCollection.svg"}
        alt="star collection"
        width={417.06}
        height={404.31}
        className="absolute left-1/2 top-1/2 aspect-auto w-[417.06px] -translate-x-1/2 -translate-y-1/2"
      />
      <div className="absolute right-1/2 top-1/2 w-[495px] -translate-x-[73px] translate-y-[220px] rounded-[24px] bg-white px-[24px] py-[21px] text-black">
        <p className={`${aeonikTrial.className} text-[24px] leading-[24px]`}>
          We’ve built Xscape to help with just that, allowing founders to take
          the right decision and never stay stuck
        </p>
      </div>
      <Image
        src={"/rightHand.svg"}
        alt="right hand"
        width={540}
        height={489.48}
        className="absolute left-1/2 top-1/2 aspect-auto w-[540px] translate-x-[179px] translate-y-[10px]"
      />
    </div>
  );
}

export default HandSection;
