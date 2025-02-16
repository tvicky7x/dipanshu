import React from "react";

function GridLines({ whiteBg = false }) {
  return (
    <div className="absolute left-0 top-0 h-full w-full px-[20px] md:px-[32px] lg:px-[64px] xl:px-[72px]">
      <div
        className={`grid h-full grid-flow-col grid-cols-4 ${!whiteBg ? "divide-white/15 border-white/15" : "divide-black/15 border-black/15"} divide-x border-x md:divide-x-2 md:border-x-2`}
      >
        {Array(4)
          .fill(true)
          .map((_, index) => {
            return <div key={index} className={`hidden md:block`} />;
          })}
      </div>
    </div>
  );
}

export default GridLines;
