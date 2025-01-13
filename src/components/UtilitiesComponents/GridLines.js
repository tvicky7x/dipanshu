import React from "react";

function GridLines({ whiteBg = false }) {
  return (
    <div className="absolute left-0 top-0 h-full w-full px-[72px]">
      <div
        className={`grid h-full grid-flow-col grid-cols-4 ${!whiteBg ? "divide-white/15 border-white/15" : "divide-black/15 border-black/15"} divide-x-2 border-x-2`}
      >
        {Array(4)
          .fill(true)
          .map((_, index) => {
            return <div key={index} className={``} />;
          })}
      </div>
    </div>
  );
}

export default GridLines;
