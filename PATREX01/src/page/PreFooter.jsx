import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AvantGardePreFooter() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);
  const magneticButtonRef = useRef(null);


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

    const quickX = gsap.quickTo(cursor, "x", { duration: 0.16, ease: "power3.out" });
    const quickY = gsap.quickTo(cursor, "y", { duration: 0.16, ease: "power3.out" });

    const ticker = gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.18;
      pos.y += (mouse.y - pos.y) * 0.18;
      quickX(pos.x);
      quickY(pos.y);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(ticker);
    };
  }, []);

  const handleShowcaseMouseEnter = () => {
    gsap.to(cursorRef.current, {
      width: 120,
      height: 120,
      backgroundColor: "#ffffff",
      borderColor: "transparent",
      mixBlendMode: "difference",
      duration: 0.35,
      ease: "power2.out"
    });
    gsap.to(cursorTextRef.current, { opacity: 1, scale: 1, duration: 0.2 });
  };

  const handleShowcaseMouseLeave = () => {
    gsap.to(cursorRef.current, {
      width: 8,
      height: 8,
      backgroundColor: "transparent",
      borderColor: "rgba(255, 255, 255, 0.4)",
      mixBlendMode: "normal",
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(cursorTextRef.current, { opacity: 0, scale: 0.8, duration: 0.2 });
  };

  const handleMagneticMove = (e) => {
    const btn = magneticButtonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
  
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    gsap.to(btn, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const resetMagneticState = () => {
    gsap.to(magneticButtonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)"
    });
  };


  useGSAP(() => {

    gsap.fromTo(".kinetic-text-block", 
      { y: 100, skewY: 4, opacity: 0 },
      {
        y: 0,
        skewY: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%"
        }
      }
    );


    gsap.fromTo(".kinetic-line", 
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.8,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      onMouseEnter={handleShowcaseMouseEnter}
      onMouseLeave={handleShowcaseMouseLeave}
      className="relative w-full min-h-[90vh] bg-[#060607] text-zinc-300 py-36 px-6 md:px-16 lg:px-24 avant-garde-cursor-zone flex flex-col justify-between items-center overflow-hidden border-b border-white/5 select-none"
    >

      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 border border-white/50 bg-transparent rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[99999] flex items-center justify-center overflow-hidden will-change-transform"
      >
        <span
          ref={cursorTextRef}
          className="font-mono text-[9px] font-semibold tracking-[2px] text-black opacity-0 scale-75 uppercase whitespace-nowrap"
        >
          DISCUSS
        </span>
      </div>

      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-4 z-10">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <p className="font-mono text-[10px] uppercase tracking-[4px] text-zinc-500">
            Availability Status
          </p>
        </div>
        <p className="font-mono text-[11px] text-zinc-500 tracking-wide max-w-xs leading-relaxed sm:text-right">
          Partnering with forward-thinking brands to engineer high-fidelity interfaces.
        </p>
      </div>

   
      <div className="w-full max-w-6xl my-auto z-10 py-16 text-left">
        <div className="overflow-hidden mb-2">
          <h2 className="kinetic-text-block text-4xl md:text-7xl lg:text-9xl font-serif font-light tracking-tight text-zinc-100 leading-[1.02] will-change-transform">
            Let's create something
          </h2>
        </div>
        <div className="overflow-hidden">
          <h2 className="kinetic-text-block text-4xl md:text-7xl lg:text-9xl font-serif italic text-zinc-600 leading-[1.02] will-change-transform">
            unmistakably premium.
          </h2>
        </div>
      </div>

      <div className="w-full max-w-6xl flex flex-col gap-12 z-10">
        
     
        <div className="kinetic-line w-full h-[1px] bg-white/10 origin-left will-change-transform" />

        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          

          <div 
            className="py-4 pr-8 cursor-pointer group"
            onMouseMove={handleMagneticMove}
            onMouseLeave={resetMagneticState}
          >
            <a 
              ref={magneticButtonRef}
              href="mailto:hello@domain.com"
              className="inline-block font-mono text-xs uppercase tracking-[3px] text-zinc-400 group-hover:text-white transition-colors duration-300 will-change-transform"
            >
              Get In Touch <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>

     
          <div className="font-mono text-[10px] text-zinc-600 tracking-widest uppercase flex flex-wrap gap-x-12 gap-y-2">
            <div className="flex gap-2">
              <span className="text-zinc-700">LOC //</span>
              <span>Bhopal, IN</span>
            </div>
            <div className="flex gap-2">
              <span className="text-zinc-700">ENG //</span>
              <span>EST. 2026</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}