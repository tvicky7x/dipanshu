"use client";
import React, { useEffect, useRef, useState } from "react";
import GridLines from "../UtilitiesComponents/GridLines";

function WireFrameSection() {
  const [mouseDownActive, setMouseDownActive] = useState(false);
  const [cursorPositionPercentage, setCursorPositionPercentage] = useState(0.5);

  const wireFrameSectionRef = useRef();

  // Dragging cursor
  function draggingCursor(event) {
    if (!mouseDownActive) return;
    const wireFrameSectionRect =
      wireFrameSectionRef.current.getBoundingClientRect();
    const cursorX = event.clientX - wireFrameSectionRect.left;
    const percentage = Number(cursorX / wireFrameSectionRect.width);
    setCursorPositionPercentage(
      Number(Math.max(0.025, Math.min(0.975, percentage))),
    );
  }

  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="relative h-[5%]">
          <GridLines />
        </div>
        <div
          style={{ backgroundImage: `url(/skillsBg.svg)` }}
          className="h-[90%] overflow-hidden border-y-2 border-white/15 bg-auto bg-clip-padding bg-left-top bg-repeat px-[72px]"
        >
          <div className="outline-x-2 relative h-full w-full overflow-hidden bg-black outline-white/15">
            <div
              ref={wireFrameSectionRef}
              onMouseUpCapture={() => {
                setMouseDownActive(false);
              }}
              onMouseMove={(e) => draggingCursor(e)}
              className="relative flex h-full w-full select-none flex-nowrap"
            >
              {/* final section */}
              <img
                src="/wireFrameFinal.jpg"
                className="aspect-auto w-full max-w-none flex-shrink-0"
              />
              {/* before section */}
              <div
                style={{
                  width: `${cursorPositionPercentage * 100}%`,
                }}
                className="absolute left-0 top-0 h-full flex-shrink-0 overflow-hidden"
              >
                <img
                  src="/wireFrameBefore.jpg"
                  className={`absolute bottom-0 left-0 aspect-auto h-full w-[calc(100vw-144px)] max-w-none`}
                />
                {/* Dragging section */}
                <div
                  onMouseDown={() => {
                    setMouseDownActive(true);
                  }}
                  className="absolute right-0 top-0 h-full w-[20px] translate-x-1/2 cursor-col-resize"
                >
                  <div className="absolute left-1/2 h-full w-[2px] -translate-x-1/2 bg-black"></div>
                  <div className="absolute left-1/2 top-1/2 flex w-max -translate-x-1/2 -translate-y-1/2 gap-x-[8px]">
                    <img
                      src={"/wireFrameArrow.svg"}
                      alt="arrow left"
                      loading="lazy"
                      className="pointer-events-none aspect-auto w-[24px]"
                    />
                    <img
                      src={"/wireFrameArrow.svg"}
                      alt="arrow right"
                      loading="lazy"
                      className="pointer-events-none aspect-auto w-[24px] rotate-180"
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
