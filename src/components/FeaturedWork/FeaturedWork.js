"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import GridLines from "../UtilitiesComponents/GridLines";
import { layGrotesk } from "@/app/font";
import { Inter } from "next/font/google";
import { motion } from "motion/react";
gsap.registerPlugin(ScrollTrigger);

const inter = Inter({ subsets: ["latin"], weight: ["400"], display: "swap" });

const featuredWorkArray = [
  {
    title: "Title",
    brand: "Brand",
    identity: "identity",
    fillColor: "#82F0BE",
    imageUrl: "/cat.jpg",
  },
  {
    title: "Title",
    brand: "Brand",
    identity: "identity",
    fillColor: "#F19595",
    imageUrl: "/cat.jpg",
  },
  {
    title: "Title",
    brand: "Brand",
    identity: "identity",
    fillColor: "#8EF9F9",
    imageUrl: "/cat.jpg",
  },
  {
    title: "Title",
    brand: "Brand",
    identity: "identity",
    fillColor: "#82F0BE",
    imageUrl: "/cat.jpg",
  },
  {
    title: "Title",
    brand: "Brand",
    identity: "identity",
    fillColor: "#F19595",
    imageUrl: "/cat.jpg",
  },
  {
    title: "Title",
    brand: "Brand",
    identity: "identity",
    fillColor: "#8EF9F9",
    imageUrl: "/cat.jpg",
  },
  {
    title: "Title",
    brand: "Brand",
    identity: "identity",
    fillColor: "#82F0BE",
    imageUrl: "/cat.jpg",
  },
  {
    title: "Title",
    brand: "Brand",
    identity: "identity",
    fillColor: "#F19595",
    imageUrl: "/cat.jpg",
  },
  {
    title: "Title",
    brand: "Brand",
    identity: "identity",
    fillColor: "#8EF9F9",
    imageUrl: "/cat.jpg",
  },
];

function FeaturedWork() {
  const featuredWorkSectionRef = useRef();
  const whiteSectionRef = useRef();
  const headingRef = useRef();
  const pinnedSectionRef = useRef();
  const flexedSectionRef = useRef();
  const workRefs = useRef([]);

  useGSAP(() => {
    // pinning
    ScrollTrigger.create({
      trigger: featuredWorkSectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: pinnedSectionRef.current,
    });
    // White Section
    gsap
      .timeline({
        scrollTrigger: {
          trigger: featuredWorkSectionRef.current,
          start: "top center",
          end: "top top",
          scrub: true,
        },
      })
      .fromTo(
        featuredWorkSectionRef.current,
        { marginLeft: "100%" },
        {
          marginLeft: "-70px",
        },
        0,
      );
    // Heading
    gsap
      .timeline({
        scrollTrigger: {
          trigger: featuredWorkSectionRef.current,
          start: "top 25%",
          end: "top -1100px",
          scrub: true,
        },
      })
      .from(headingRef.current, { left: "100%" }, 0);

    //   flexed section
    const flexSectionTransformValue =
      workRefs.current[0].clientWidth * (workRefs.current.length - 1) -
      workRefs.current[0].clientWidth * 3;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: featuredWorkSectionRef.current,
          start: "top -1300px",
          end: "bottom bottom",
          scrub: true,
        },
      })
      .to(
        flexedSectionRef.current,
        {
          x: `-${flexSectionTransformValue + 1}px`,
        },
        0,
      );
  });

  return (
    <div>
      <div className="h-[50vh] px-[72px]">
        <div className="h-full border-x-2 border-white/15"></div>
      </div>
      <div
        id="featuredWorkSection"
        ref={featuredWorkSectionRef}
        style={{ height: `${400 * featuredWorkArray.length + 1300}px` }}
        className={`text-black`}
      >
        <div
          ref={whiteSectionRef}
          className="h-full w-[calc(100%+70px)] rounded-tl-[70px] bg-white ps-[70px]"
        >
          <div
            id="pinnedSection"
            ref={pinnedSectionRef}
            className="!left-0 !top-0 h-screen w-screen"
          >
            <h2
              ref={headingRef}
              className={`${layGrotesk.className} absolute -left-[calc(1100px-70px)] top-[10vh] z-10 text-nowrap text-[200px] font-medium uppercase leading-[100%]`}
            >
              Featured Work
            </h2>
            <div className="h-full w-full px-[72px]">
              <div className="h-full overflow-hidden border-x-2 border-black/15">
                <div
                  ref={flexedSectionRef}
                  className="flex h-full divide-x-2 divide-black/15"
                >
                  <div
                    ref={(ref) => (workRefs.current[0] = ref)}
                    className="h-full w-1/4 flex-shrink-0"
                  />
                  {featuredWorkArray?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        ref={(ref) => (workRefs.current[index + 1] = ref)}
                        className="h-full w-1/4 flex-shrink-0 pt-[calc(10vh+200px)]"
                      >
                        <span
                          className={`${inter.className} ps-[13.5px] text-[16px] leading-[19px] tracking-[0.02em]`}
                        >
                          00{index + 1}
                        </span>
                        <div className="relative h-full">
                          <motion.div
                            id={`featuredWorkCard-${index}`}
                            initial={{ opacity: 0, scale: 0, x: "-50%" }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                              x: "-50%",
                              transition: { duration: 0.5 },
                            }}
                            style={{
                              backgroundColor: item?.fillColor,
                            }}
                            className={`${index % 2 === 0 ? "top-[26px]" : "bottom-[50px]"} featuredWorkCard absolute left-0 h-[269px] w-[285px] rounded-[8px] px-[13.5px] pb-[11px] pt-[22px]`}
                          ></motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[70px] rounded-b-[70px] bg-white px-[72px]">
        <GridLines whiteBg={true} />
      </div>
    </div>
  );
}

export default FeaturedWork;
