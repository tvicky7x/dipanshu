"use client";
import React, { useEffect, useRef } from "react";
import GridLines from "../UtilitiesComponents/GridLines";

function WireFrameSection() {
  const wireFrameSection = useRef();
  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="relative h-[5%]">
          <GridLines />
        </div>
        <div
          style={{ backgroundImage: `url(/skillsBg.svg)` }}
          className="h-full border-y-2 border-white/15 bg-auto bg-clip-padding bg-left-top bg-repeat px-[72px]"
        >
          <div className="outline-x-2 relative h-full w-full overflow-hidden bg-black outline-white/15">
            <div className="relative flex h-full w-full flex-nowrap">
              <img
                ref={wireFrameSection}
                id="wireFrameSection"
                src="/wireFrameFinal.jpg"
                className="aspect-auto w-full max-w-none flex-shrink-0"
              />
              <div className="absolute left-0 top-0 h-full w-1/2 flex-shrink-0 overflow-hidden bg-red-500">
                <img
                  src="/wireFrameBefore.jpg"
                  className={`absolute bottom-0 left-0 aspect-auto h-full w-[calc(100vw-144px)] max-w-none`}
                />
                <div className="absolute right-0 top-0 h-full w-[20px] translate-x-1/2 cursor-col-resize">
                  <div className="absolute left-1/2 h-full w-[2px] -translate-x-1/2 bg-black"></div>
                  <div className="absolute left-1/2 top-1/2 flex w-max -translate-x-1/2 -translate-y-1/2 gap-x-[8px]">
                    <img
                      src={"/wireFrameArrow.svg"}
                      alt="arrow left"
                      loading="lazy"
                      className="aspect-auto w-[24px]"
                    />
                    <img
                      src={"/wireFrameArrow.svg"}
                      alt="arrow right"
                      loading="lazy"
                      className="aspect-auto w-[24px] rotate-180"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[5%]">
          <GridLines />
        </div>
      </div>
      <div className="relative h-[15vh]">
        <GridLines />
      </div>
    </>
  );
}

export default WireFrameSection;
