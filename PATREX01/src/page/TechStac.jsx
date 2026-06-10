import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STACK_DATA = [
  {
    index: "01",
    category: "Design Layer",
    tools: "Figma, Framer, Spline 3D",
    description: "Creating highly scalable spatial interfaces, advanced structural layouts, and interactive design prototypes."
  },
  {
    index: "02",
    category: "Interaction Layer",
    tools: "GSAP, WebGL, CSS Motion",
    description: "Choreographing complex interactive user journeys, micro-behaviors, and high-performance layout physics."
  },
  {
    index: "03",
    category: "Engine Layer",
    tools: "React, Next.js, TypeScript",
    description: "Developing robust front-end architectures with strict type safety and modular rendering patterns."
  },
  {
    index: "04",
    category: "Systems Layer",
    tools: "Node.js, GraphQL, Tailwind CSS",
    description: "Orchestrating microservices, clean API layers, and production-ready utility graphics architectures."
  }
];

export default function PremiumClassicStack() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: mouse.x, y: mouse.y };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const quickX = gsap.quickTo(cursor, "x", { duration: 0.18, ease: "power3.out" });
    const quickY = gsap.quickTo(cursor, "y", { duration: 0.18, ease: "power3.out" });

    const ticker = gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;
      quickX(pos.x);
      quickY(pos.y);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(ticker);
    };
  }, []);

  const handleRowEnter = (index, event) => {
    setHoveredIndex(index);
    const targetRow = event.currentTarget;
    
    const line = targetRow.querySelector(".row-line");
    const desc = targetRow.querySelector(".row-desc");
    const textGroup = targetRow.querySelectorAll(".text-animate");

    gsap.to(cursorRef.current, {
      scale: 3,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(line, {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      scaleY: 2,
      duration: 0.4,
      ease: "power2.out"
    });
    gsap.to(textGroup, {
      x: 10,
      color: "#ffffff",
      duration: 0.4,
      stagger: 0.02,
      ease: "power3.out"
    });
    gsap.fromTo(desc, 
      { height: 0, opacity: 0, marginTop: 0 },
      { height: "auto", opacity: 1, marginTop: 16, duration: 0.45, ease: "power3.out" }
    );
  };

  const handleRowLeave = (event) => {
    setHoveredIndex(null);
    const targetRow = event.currentTarget;
    
    const line = targetRow.querySelector(".row-line");
    const desc = targetRow.querySelector(".row-desc");
    const textGroup = targetRow.querySelectorAll(".text-animate");

    gsap.to(cursorRef.current, {
      scale: 1,
      backgroundColor: "transparent",
      mixBlendMode: "normal",
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(line, {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      scaleY: 1,
      duration: 0.4,
      ease: "power2.out"
    });

    gsap.to(textGroup, {
      x: 0,
      color: "rgba(212, 212, 216, 0.8)", 
      duration: 0.4,
      ease: "power3.out"
    });

    gsap.to(desc, {
      height: 0,
      opacity: 0,
      marginTop: 0,
      duration: 0.35,
      ease: "power3.inOut"
    });
  };


  useGSAP(() => {

    gsap.fromTo(".reveal-header", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    gsap.fromTo(".classic-row", 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#080809] text-zinc-300 py-40 px-6 md:px-16 lg:px-24 classic-motion-zone flex flex-col justify-between overflow-hidden select-none"
    >
     
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 border border-white/60 bg-transparent rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[99999] will-change-transform"
      />

      <div className="reveal-header w-full max-w-6xl mb-28 pb-10 flex flex-col md:flex-row justify-between items-baseline gap-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[5px] text-zinc-600 mb-2">Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-zinc-100">
            Selected Technologies
          </h2>
        </div>
        <div className="text-zinc-500 font-mono text-[11px] tracking-wide max-w-xs leading-relaxed">
          Engineered environments executing precise programmatic animations and clean typographic interfaces.
        </div>
      </div>

   
      <div className="w-full max-w-6xl flex flex-col">
        {STACK_DATA.map((row, index) => {
          const isCurrent = hoveredIndex === index;
          return (
            <div
              key={index}
              onMouseEnter={(e) => handleRowEnter(index, e)}
              onMouseLeave={handleRowLeave}
              className="classic-row w-full flex flex-col relative group transition-all duration-300"
            >
          
              <div className="w-full py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                
                <div className="flex items-center gap-8 md:w-1/2">
                  <span className="text-animate font-mono text-xs text-zinc-600 will-change-transform">
                    {row.index}
                  </span>
                  <h3 className="text-animate text-base md:text-lg font-light tracking-wide text-zinc-200 will-change-transform">
                    {row.category}
                  </h3>
                </div>

               
                <div className="text-animate font-mono text-xs text-zinc-400 md:w-1/2 md:text-right tracking-widest will-change-transform">
                  {row.tools}
                </div>

              </div>

              <div className="row-desc w-full md:w-2/3 h-0 opacity-0 overflow-hidden pr-4 pointer-events-none">
                <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed tracking-wide pl-14">
                  {row.description}
                </p>
              </div>

             
              <div className="row-line w-full h-[1px] bg-white/5 origin-left will-change-transform mt-4" />
            </div>
          );
        })}
      </div>


      <div className="reveal-header w-full max-w-6xl mt-28 pt-8 border-t border-white/5 flex justify-between text-[10px] font-mono text-zinc-600 tracking-widest">
        <span>EST. 2026</span>
        <span>HIGH-FIDELITY CORE FRAMEWORKS</span>
      </div>
    </section>
  );
}