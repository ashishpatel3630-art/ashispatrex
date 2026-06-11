import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TESTIMONIALS = [
  {
    id: 1,
    short: "From design to development, everything felt seamless and intentional.",
    full: "From design to development, everything felt seamless and intentional. The team was extremely professional, communicated clearly, and delivered a final product that exceeded expectations in both design and performance.",
    name: "Ashish Mewada",
    role: "CEO Patrex Media",
    avatar: "Photos/team/ashish.png"
  },
  {
    id: 2,
    short: "A complete transformation of our digital presence.",
    full: "A complete transformation of our Robot presence. The website is fast, modern, and beautifully aligned with our brand identity. The attention to detail was outstanding.",
    name: "Raman Lodhi",
    role: "startopilot Founder",
    avatar: "Photos/Clients/raman.png"
  },
  {
    id: 3,
    short: "The motion design feels alive and intentional.",
    full: "The motion design feels alive and intentional. Every transition, spacing, and interaction reflects a high level of craftsmanship and design thinking.",
    name: "Nikunj ",
    role: "Entrepreneur",
    avatar: "Photos/Clients/nikunj.png"
  }
];

export default function PremiumCinematicEcosystem() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);
  
  const [activeId, setActiveId] = useState(null);

 
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: mouse.x, y: mouse.y };
    
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    const quickX = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power2.out" });
    const quickY = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power2.out" });

    const ticker = gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;
      quickX(pos.x);
      quickY(pos.y);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove(ticker);
    };
  }, []);


  useGSAP(() => {
    gsap.fromTo(".testimonial-row-item", 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.15, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%"
        }
      }
    );
  }, { scope: containerRef });


  const handleMouseEnter = (id) => {
    if (cursorTextRef.current) {
      cursorTextRef.current.innerText = activeId === id ? "CLOSE" : "SEE MORE";
    }
    
    gsap.to(cursorRef.current, {
      width: 90,
      height: 90,
      backgroundColor: "#ffffff",
      borderColor: "transparent",
      mixBlendMode: "difference",
      duration: 0.3,
      ease: "power2.out"
    });
    
    gsap.to(cursorTextRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.2
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, {
      width: 12,
      height: 12,
      backgroundColor: "transparent",
      borderColor: "rgba(255, 255, 255, 0.4)",
      mixBlendMode: "normal",
      duration: 0.3,
      ease: "power2.out"
    });
    
    gsap.to(cursorTextRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2
    });
  };

  const toggleReviewState = (id, targetElement) => {
    const isExpanding = activeId !== id;
    setActiveId(isExpanding ? id : null);

    if (cursorTextRef.current) {
      cursorTextRef.current.innerText = isExpanding ? "CLOSE" : "SEE MORE";
    }

    const textContainer = targetElement.querySelector(".content-text-container");
    const fullText = targetElement.querySelector(".full-text-view");
    const shortText = targetElement.querySelector(".short-text-view");

    if (isExpanding) {
   
      gsap.to(shortText, { opacity: 0, duration: 0.2 });
      gsap.fromTo(fullText, 
        { display: "block", opacity: 0, height: 0 },
        { opacity: 1, height: "auto", duration: 0.4, ease: "power3.out" }
      );
      gsap.to(targetElement, { borderColor: "rgba(255,255,255,0.15)", duration: 0.3 });
    } else {

      gsap.to(fullText, { 
        opacity: 0, 
        height: 0, 
        duration: 0.3, 
        ease: "power3.inOut",
        onComplete: () => gsap.set(fullText, { display: "none" })
      });
      gsap.to(shortText, { opacity: 1, duration: 0.3, delay: 0.1 });
      gsap.to(targetElement, { borderColor: "rgba(255,255,255,0.04)", duration: 0.3 });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#08080a] text-zinc-100 py-32 px-6 md:px-12 custom-zone-cursor flex flex-col items-center justify-center select-none"
    >
 
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 border border-white/40 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[99999] flex items-center justify-center overflow-hidden will-change-transform"
      >
        <span 
          ref={cursorTextRef} 
          className="font-sans text-[10px] font-bold tracking-[1.5px] text-black opacity-0 scale-75 uppercase"
        >
          SEE MORE
        </span>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-zinc-900/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[600px] h-[600px] bg-neutral-900/10 rounded-full blur-[180px]" />
      </div>

    
      <div className="w-full max-w-4xl mb-24 z-10 text-center mx-auto">
        <p className="text-xs uppercase font-mono tracking-[4px] text-zinc-500 mb-3">Case Studies</p>
        <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-zinc-200 leading-tight">
          Client perspectives & insights
        </h2>
      </div>

   
      <div className="w-full max-w-4xl z-10 flex flex-col gap-4 items-center">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            onClick={(e) => toggleReviewState(item.id, e.currentTarget)}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            className="testimonial-row-item agency-glass-surface w-full max-w-3xl mx-auto border border-white/[0.04] rounded-2xl p-6 md:p-8 transition-colors duration-300 ease-out flex flex-col md:flex-row md:items-center justify-between gap-6 relative"
          >
          
            <div className="content-text-container flex-1 max-w-2xl text-center md:text-left">
              <div className="short-text-view text-zinc-300 text-[15px] md:text-[16px] font-light leading-relaxed tracking-wide">
                "{item.short}"
              </div>
              <div className="full-text-view text-zinc-200 text-[15px] md:text-[16px] font-light leading-relaxed tracking-wide hidden">
                "{item.full}"
              </div>
            </div>

      
            <div className="flex items-center justify-center gap-4 shrink-0 border-t border-white/5 pt-4 md:pt-0 md:border-none mx-auto md:mx-0">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover border border-zinc-800 grayscale"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-300 tracking-wide">{item.name}</span>
                <span className="text-[10px] text-zinc-500 tracking-wider font-mono uppercase mt-0.5">{item.role}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}