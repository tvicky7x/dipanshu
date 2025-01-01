import { layGrotesk, maziusReview, offBit } from "@/app/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ContactSection() {
  return (
    <div className="relative h-screen">
      <p
        className={`${layGrotesk.className} absolute left-1/2 top-[5%] flex -translate-x-1/2 flex-col text-nowrap text-center text-[90px] font-medium leading-[90px]`}
      >
        <span>
          Let’s{" "}
          <span
            style={{ fontStyle: "oblique" }}
            className={`${maziusReview.className} tracking-[0.04em]`}
          >
            Design
          </span>{" "}
          Something
        </span>
        <span>
          Cool{" "}
          <span
            style={{ fontStyle: "oblique" }}
            className={`${maziusReview.className} tracking-[0.04em]`}
          >
            Together
          </span>
        </span>
      </p>
      <Image
        src={"/saturnRing.svg"}
        alt="saturn Ring"
        width={327.35}
        height={356.8}
        className="absolute left-1/2 top-1/2 aspect-auto w-[327.35px] -translate-x-1/2 -translate-y-[100px]"
      />
      <div
        className={`${offBit.className} absolute bottom-[3%] left-1/2 -translate-x-1/2 text-[32px] leading-[35px] tracking-[0.05em]`}
      >
        <Link href={"/"}>Instagram</Link>
        <span>{" | "}</span>
        <Link href={"/"}>Behance</Link>
        <span>{" | "}</span>
        <Link href={"/"}>LinkedIn</Link>
      </div>
    </div>
  );
}

export default ContactSection;
