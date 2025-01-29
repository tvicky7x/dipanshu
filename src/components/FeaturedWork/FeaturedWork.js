"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import GridLines from "../UtilitiesComponents/GridLines";
import { aeonikTrial, layGrotesk } from "@/app/font";
import { Inter } from "next/font/google";
import { motion } from "motion/react";
gsap.registerPlugin(ScrollTrigger);

const inter = Inter({ subsets: ["latin"], weight: ["400"], display: "swap" });

const featuredWorkArray = [
  {
    title: "Title",
    smallDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    fillColor: "#82F0BE",
    imageUrl: "/cat.jpg",
  },
  {
    title: "Title",
    smallDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    fillColor: "#F19595",
    imageUrl: "/cat.jpg",
  },
  {
    title: "Title",
    smallDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    fillColor: "#8EF9F9",
    imageUrl: "/cat.jpg",
  },
  {
    title: "Title",
    smallDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    fillColor: "#82F0BE",
    imageUrl: "/cat.jpg",
  },
  {
    title: "Title",
    smallDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    fillColor: "#F19595",
    imageUrl: "/cat.jpg",
  },
  {
    title: "Title",
    smallDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    fillColor: "#8EF9F9",
    imageUrl: "/cat.jpg",
  },
  {
    title: "Title",
    smallDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    fillColor: "#82F0BE",
    imageUrl: "/cat.jpg",
  },
  {
    title: "Title",
    smallDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    fillColor: "#F19595",
    imageUrl: "/cat.jpg",
  },
  {
    title: "Title",
    smallDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
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
          onUpdate: (self) => {
            if (self.direction === -1) {
              // Reverse scrolling
              gsap.to(".featuredCard", { opacity: 0, duration: 0.2 });
            }
            if (self.progress === 1) {
              // Forward scrolling
              gsap.to(".featuredCard", { opacity: 1, duration: 0.5 });
            }
          },
        },
      })
      .from(
        headingRef.current,
        {
          left: "100%",
        },
        0,
      );

    //   flexed section
    const flexSectionTransformValue =
      workRefs.current[0].clientWidth * (workRefs.current.length - 1) -
      workRefs.current[0].clientWidth * 3;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: featuredWorkSectionRef.current,
          start: "top -1500px",
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
          className="h-full w-[calc(100%+60px)] rounded-tl-[60px] bg-white ps-[70px] xl:w-[calc(100%+70px)] xl:rounded-tl-[70px]"
        >
          <div
            id="pinnedSection"
            ref={pinnedSectionRef}
            className="!left-0 !top-0 h-screen w-screen"
          >
            <h2
              ref={headingRef}
              className={`${layGrotesk.className} absolute -left-[calc(875px-60px)] top-[10vh] z-10 text-nowrap text-[160px] font-medium uppercase leading-[100%] xl:-left-[calc(1100px-70px)] xl:text-[200px]`}
            >
              Featured Work
            </h2>
            <div className="h-full w-full px-[72px]">
              <div className="featuredCard h-full overflow-hidden border-x-2 border-black/15 opacity-0">
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
                        className="h-full w-1/4 flex-shrink-0 pt-[calc(10vh+160px)] xl:pt-[calc(10vh+200px)]"
                      >
                        <span
                          className={`${inter.className} ps-[13.5px] text-[14px] leading-[19px] tracking-[0.02em] xl:text-[16px]`}
                        >
                          00{index + 1}
                        </span>
                        <div className="relative h-full">
                          <motion.div
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
                            className={`${index % 2 === 0 ? "top-[26px]" : "bottom-[50px]"} absolute left-0 flex aspect-[285/175] w-[16vw] flex-col gap-y-[18px] rounded-[8px] px-[9px] pb-[8px] pt-[16px] xl:w-[15vw] xl:gap-y-[25px] xl:px-[13.5px] xl:pb-[11px] xl:pt-[22px]`}
                          >
                            <div className="flex flex-col gap-y-[4px] xl:gap-y-[8px]">
                              <p
                                className={`${layGrotesk.className} text-[18px] font-medium tracking-[0.02em] xl:text-[24px]`}
                              >
                                {item?.title}
                              </p>
                              <p
                                className={`${aeonikTrial.className} line-clamp-2 text-[12px] leading-[16px] tracking-[0.02em] xl:text-[14px]`}
                              >
                                {item?.smallDescription}
                              </p>
                            </div>
                            <div className="flex h-full items-center justify-center overflow-hidden rounded-[6px]">
                              <img
                                src={item?.imageUrl}
                                alt={item?.title}
                                className="aspect-auto w-full"
                              />
                            </div>
                          </motion.div>
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
      <div className="relative h-[20vh] rounded-b-[70px] bg-white px-[72px]">
        <GridLines whiteBg={true} />
      </div>
    </div>
  );
}

export default FeaturedWork;
