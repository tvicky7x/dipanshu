import React from "react";

function MainLayout({ children, outerClass, innerClass }) {
  return (
    <div className={`px-[20px] ${outerClass} `}>
      <div className={`mx-auto max-w-[71rem] ${innerClass} `}>{children}</div>
    </div>
  );
}

export default MainLayout;
