import AboutSection from "@/components/AboutSection/AboutSection";
import PageTransition from "@/components/PageTransition/PageTransition";
import React from "react";

export default function Home() {
  return (
    <div style={{ backgroundImage: "url(bg.svg)" }} className="bg-black">
      <PageTransition />
    </div>
  );
}
