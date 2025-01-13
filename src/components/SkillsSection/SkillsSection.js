"use client";
import { aeonikTrial, layGrotesk, offBit } from "@/app/font";
import React, { useEffect, useRef } from "react";
import GridLines from "../UtilitiesComponents/GridLines";
import Matter from "matter-js";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const skillsArray = Array(2)
  .fill([
    { para: "App Design", color: "#8EF9F9" },
    { para: "App Design", color: "#F19595" },
    { para: "App Design", color: "#F8DFF9" },
    { para: "App Design", color: "#DAF6F8" },
    { para: "App Design", color: "#6886F3" },
    { para: "App Design", color: "#D9D9D9" },
    { para: "App Design", color: "#F4B87D" },
    { para: "App Design", color: "#F4F0D4" },
    { para: "App Design", color: "#FBF18E" },
    { para: "App Design", color: "#82F0BE" },
    { para: "App Design", color: "#FFFFFF" },
    { para: "App Design", color: "#FFE5E0" },
  ])
  .flat(1);

gsap.registerPlugin(ScrollTrigger);

function SkillsSection() {
  const skillsContainerRef = useRef();
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);

  // MatterJs Creator
  function matterJsCreator() {
    const THICKNESS = 60;
    const skillsContainer = skillsContainerRef.current;

    // Cleanup function
    function cleanup() {
      if (renderRef.current) {
        Matter.Render.stop(renderRef.current);
        renderRef.current.canvas.remove();
        renderRef.current.textures = {};
      }
      if (engineRef.current) {
        Matter.World.clear(engineRef.current.world);
        Matter.Engine.clear(engineRef.current);
      }
      if (runnerRef.current) {
        Matter.Runner.stop(runnerRef.current);
      }
      window.removeEventListener("resize", handleResize);
    }

    // Call cleanup before creating new instances
    cleanup();

    // Module aliases
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite;

    // Create an engine
    engineRef.current = Engine.create();

    // Create a renderer
    renderRef.current = Render.create({
      element: skillsContainer,
      engine: engineRef.current,
      options: {
        width: skillsContainer.clientWidth,
        height: skillsContainer.clientHeight,
        background: "transparent",
        wireframes: false,
        showAngleIndicator: false,
      },
    });

    // Skills container
    const circles = [];
    for (let i = 0; i < skillsArray.length; i++) {
      let circle = Bodies.circle(i, 10, 70, {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.2,
        render: {
          fillStyle: skillsArray[i].color,
        },
      });
      circles.push(circle);
      Composite.add(engineRef.current.world, circle);
    }

    // Ground and walls logic
    const ground = Bodies.rectangle(
      skillsContainer.clientWidth / 2,
      skillsContainer.clientHeight + THICKNESS / 2,
      27184,
      THICKNESS,
      { isStatic: true },
    );
    const topGround = Bodies.rectangle(0, 0 - THICKNESS / 2, 27184, THICKNESS, {
      isStatic: true,
    });
    const leftWall = Bodies.rectangle(
      0 - THICKNESS / 2,
      skillsContainer.clientHeight / 2,
      THICKNESS,
      skillsContainer.clientHeight * 5,
      { isStatic: true },
    );
    const rightWall = Bodies.rectangle(
      skillsContainer.clientWidth + THICKNESS / 2,
      skillsContainer.clientHeight / 2,
      THICKNESS,
      skillsContainer.clientHeight * 5,
      { isStatic: true },
    );

    // Add all of the bodies to the world
    Composite.add(engineRef.current.world, [
      ground,
      topGround,
      leftWall,
      rightWall,
    ]);

    // Custom rendering logic
    Matter.Events.on(renderRef.current, "afterRender", () => {
      const context = renderRef.current.context;
      context.font = "20px OffBit";
      context.letterSpacing = "0.04em";
      context.textAlign = "center";
      context.textBaseline = "middle";

      circles.forEach((circle, index) => {
        const { x, y } = circle.position;
        const skill = skillsArray[index];

        // Draw text inside the circle
        context.fillStyle = "#000"; // Text color
        context.fillText(skill.para, x, y);
      });
    });

    // Mouse Interaction
    const mouse = Matter.Mouse.create(renderRef.current.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engineRef.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(engineRef.current.world, mouseConstraint);

    // Run the renderer
    Matter.Render.run(renderRef.current);

    // Create runner
    runnerRef.current = Runner.create();

    // Run the engine
    Matter.Runner.run(runnerRef.current, engineRef.current);

    // Resize function
    function handleResize() {
      // Setting render canvas values
      renderRef.current.canvas.width = skillsContainer.clientWidth;
      renderRef.current.canvas.height = skillsContainer.clientHeight;

      // Reposition ground
      Matter.Body.setPosition(
        ground,
        Matter.Vector.create(
          skillsContainer.clientWidth / 2,
          skillsContainer.clientHeight + THICKNESS / 2,
        ),
      );

      // Reposition right wall
      Matter.Body.setPosition(
        rightWall,
        Matter.Vector.create(
          skillsContainer.clientWidth + THICKNESS / 2,
          skillsContainer.clientHeight / 2,
        ),
      );
    }

    // Resize Listener
    window.addEventListener("resize", handleResize);
  }

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: skillsContainerRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        if (skillsContainerRef.current) {
          matterJsCreator();
        }
      },
    });
  });

  return (
    <div className="relative flex h-screen flex-col">
      {/* grid */}
      <div className="relative h-[7%]">
        <GridLines />
      </div>
      <div
        style={{ backgroundImage: "url(skillsBg.svg)" }}
        className="pointer-events-none relative z-10 h-full w-full border-y-2 border-white/15 bg-cover bg-clip-padding bg-left-top bg-repeat px-[72px]"
      >
        <div
          ref={skillsContainerRef}
          className="pointer-events-auto relative h-full w-full border-x-2 border-white/15 bg-black"
        >
          {/* Title container */}
          <div className="pointer-events-none absolute left-1/2 top-[28%] -translate-x-1/2 -translate-y-1/2 text-nowrap text-center uppercase">
            <p
              className={`${aeonikTrial.className} text-[24px] leading-[22px] tracking-[0.02em]`}
            >
              {"[SKILLS]"}
            </p>
            <p
              className={`${layGrotesk.className} mt-[20px] text-[70px] leading-[83px]`}
            >
              Design Arsenal
            </p>
          </div>
        </div>
      </div>
      <div className="h-[7%] px-[72px]">
        <div className="h-full w-full border-x-2 border-white/15"></div>
      </div>
    </div>
  );
}

export default SkillsSection;
