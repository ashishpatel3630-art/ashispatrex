import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);
  const magneticButtonRef = useRef(null);
  const [localTime, setLocalTime] = useState("");

  const companyLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#Work" },
    { label: "Contact", href: "mailto:patrexmedia1@gmail.com" },
  ];

  const legalLinks = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ];

  
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setLocalTime(`${formatter.format(new Date())} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  
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

  
  const handleFooterMouseEnter = () => {
    gsap.to(cursorRef.current, {
      width: 100,
      height: 100,
      backgroundColor: "#ffffff",
      borderColor: "transparent",
      mixBlendMode: "difference",
      duration: 0.35,
      ease: "power2.out"
    });
    gsap.to(cursorTextRef.current, { opacity: 1, scale: 1, duration: 0.2 });
  };

  const handleFooterMouseLeave = () => {
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
    gsap.fromTo(".footer-reveal-node", 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%"
        }
      }
    );

    gsap.fromTo(".footer-divider-line", 
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%"
        }
      }
    );
  }, { scope: containerRef });

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={containerRef}
      onMouseEnter={handleFooterMouseEnter}
      onMouseLeave={handleFooterMouseLeave}
      className="relative w-full
       bg-[#060607]
        text-zinc-400 
        pt-28 pb-12 px-6 
        md:px-16 lg:px-24 avant-garde-footer-zone 
        overflow-hidden border-t
         border-white/5 
         select-none"
    >
     
      <div
        ref={cursorRef}
        className="fixed 
        top-0 
        left-0 
        w-2 
        h-2 
        border border-white/50 
        bg-transparent 
        rounded-full 
        pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[99999] 
        flex items-center 
        justify-center 
        overflow-hidden 
        will-change-transform"
      >
        <span
          ref={cursorTextRef}
          className="font-mono 
          text-[9px] 
          font-bold 
          tracking-[2px]
           text-black 
           opacity-0 scale-75 
           uppercase 
           whitespace-nowrap"
        >
          EXPLORE
        </span>
      </div>

      <div className="w-full 
      max-w-6xl
       mx-auto 
       flex flex-col 
       gap-24">
        
       
        <div className="w-full 
        flex flex-col 
        lg:flex-row 
        justify-between 
        items-start 
        gap-16 
        lg:gap-8">
          
          
          <div className="footer-reveal-node
           flex flex-col 
           gap-4 
           max-w-md">
            <h2 className="font-serif 
            text-2xl text-zinc-100
            tracking-tight 
            font-light">
              PATREX MEDIA
            </h2>
            <p className="font-mono 
            text-xs
             text-zinc-500 
            leading-relaxed 
            tracking-wide">
              We design and build ambitious digital products — from bold brand
              identities to high-performance websites that drive real growth.
            </p>
            
           
            <div 
              className="py-4 
              pr-6 
              mt-2 
              cursor-pointer 
              self-start"
              onMouseMove={handleMagneticMove}
              onMouseLeave={resetMagneticState}
            >
              <a
                ref={magneticButtonRef}
                href="mailto:patrexmedia1@gmail.com"
                className="inline-block 
                font-mono 
                text-[11px] uppercase 
                tracking-[3px]
                 text-zinc-300 
                 border border-white/10 
                 px-6 py-3 
                 rounded-full
                  hover:border-white/30
                   hover:text-white 
                   transition-colors 
                   duration-300 will-change-transform"
              >
                Get In Touch →
              </a>
            </div>
          </div>

         
          <div className="flex gap-20
           md:gap-32 
           flex-wrap">
         
            <div className="footer-reveal-node 
            flex flex-col 
            gap-6">
              <h3 className="font-mono 
              text-[10px] 
              uppercase tracking-[4px]
               text-zinc-600">
                Company
              </h3>
              <ul className="flex 
              flex-col
               gap-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-block 
                      font-mono text-xs
                       text-zinc-400
                        hover:text-white
                         hover:translate-x-1 
                         transition-all 
                         duration-300 tracking-wide"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

           
            <div className="footer-reveal-node 
            flex flex-col gap-6">
              <h3 className="font-mono text-[10px] uppercase tracking-[4px] text-zinc-600">
                Legal
              </h3>
              <ul className="flex flex-col gap-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-block font-mono text-xs text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 tracking-wide"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

       
        <div className="w-full flex flex-col gap-8">
         
          <div className="footer-divider-line w-full h-[1px] bg-white/5 origin-left will-change-transform" />

          <div className="footer-reveal-node w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
              <span>© 2026 PATREX MEDIA. ALL RIGHTS RESERVED.</span>
              <div className="flex gap-1.5 items-center">
                <span className="text-zinc-700">TIME //</span>
                <span className="text-zinc-500 tabular-nums">{localTime || "00:00:00 IST"}</span>
              </div>
            </div>

            <div className="w-full md:w-auto flex justify-between md:justify-end items-center gap-12">
              <span>DESIGNED & DEVELOPED BY ASHISH MEWADA</span>
              <button
                onClick={handleScrollToTop}
                className="hover:text-white transition-colors duration-200 uppercase whitespace-nowrap"
              >
                TOP ↑
              </button>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}