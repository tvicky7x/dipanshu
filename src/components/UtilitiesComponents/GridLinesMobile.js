import React from "react";

function GridLinesMobile({ whiteBg = false }) {
  return (
    <div className="absolute left-0 top-0 h-full w-full px-[20px]">
      <div
        className={`grid h-full grid-flow-col grid-cols-4 ${!whiteBg ? "divide-white/15 border-white/15" : "divide-black/15 border-black/15"} divide-x-2 border-x-2`}
      ></div>
    </div>
  );
}

export default GridLinesMobile;
