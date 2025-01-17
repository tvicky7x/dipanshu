import React from "react";
import GridLines from "../UtilitiesComponents/GridLines";

function StarSection() {
  return (
    <>
      <div
        style={{ backgroundImage: "url(skillsBg.svg)" }}
        className="relative h-[15vh]"
      >
        <div className="absolute left-0 top-0 h-full w-full px-[72px]">
          <div
            className={`grid h-full grid-flow-col grid-cols-4 divide-x-2 divide-white/15 border-x-2 border-white/15 bg-black`}
          >
            {Array(4)
              .fill(true)
              .map((_, index) => {
                return <div key={index} className={``} />;
              })}
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: "url(skillsBg.svg)" }}
        className="relative h-screen px-[72px]"
      >
        <div className="h-full border-x-2 border-white/15 bg-black"></div>
      </div>
    </>
  );
}

export default StarSection;
