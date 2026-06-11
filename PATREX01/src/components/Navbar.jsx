import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const containerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const cursorRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  const links = [
    { label: "Home", to: "/" },
        { label: "About", to: "/about" },
    { label: "Work", to: "/work" },
    { label: "Contact", to: "/contact" },
  ];

  
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

    const quickX = gsap.quickTo(cursor, "x", { duration: 0.14, ease: "power3.out" });
    const quickY = gsap.quickTo(cursor, "y", { duration: 0.14, ease: "power3.out" });

    const ticker = gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.2;
      pos.y += (mouse.y - pos.y) * 0.2;
      quickX(pos.x);
      quickY(pos.y);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(ticker);
    };
  }, []);

  const handleElementEnter = () => {
    gsap.to(cursorRef.current, {
      scale: 3,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
      duration: 0.25,
      ease: "power2.out"
    });
  };

  const handleElementLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
      backgroundColor: "transparent",
      mixBlendMode: "normal",
      duration: 0.25,
      ease: "power2.out"
    });
  };

  
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (location.pathname === "/work") {
      setActiveLink("Work");
    } else if (location.pathname === "/contact") {
      setActiveLink("Contact");
    } else {
      setActiveLink("Home");
    }
  }, [location.pathname]);

  useGSAP(() => {

    if (menuOpen) {
      gsap.to(line1Ref.current, { y: 6, rotate: 45, duration: 0.3, ease: "power2.inOut" });
      gsap.to(line2Ref.current, { opacity: 0, duration: 0.2 });
      gsap.to(line3Ref.current, { y: -6, rotate: -45, duration: 0.3, ease: "power2.inOut" });

   
      gsap.fromTo(mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.45, ease: "power3.out" }
      );
    
      gsap.fromTo(".mobile-link-node",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(line1Ref.current, { y: 0, rotate: 0, duration: 0.3, ease: "power2.inOut" });
      gsap.to(line2Ref.current, { opacity: 1, duration: 0.2 });
      gsap.to(line3Ref.current, { y: 0, rotate: 0, duration: 0.3, ease: "power2.inOut" });

      if (mobileMenuRef.current) {
        gsap.to(mobileMenuRef.current, { height: 0, opacity: 0, duration: 0.35, ease: "power3.inOut" });
      }
    }
  }, [menuOpen]);


  useGSAP(() => {
    gsap.fromTo(".nav-load-element", 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, { scope: containerRef });

  return (
    <header
      ref={containerRef}
      className="sticky top-0 z-[1000] w-full flex justify-center p-4 bg-[#080809] avant-garde-nav-zone overflow-hidden select-none"
    >
   
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 border border-white/50 bg-transparent rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[99999] will-change-transform"
      />

    
      <div className="w-full max-w-6xl bg-[#141416]/90 border border-white/5 rounded-2xl flex flex-col justify-center px-6 py-4 text-white backdrop-blur-xl transition-all duration-300">
        
      
        <div className="w-full flex items-center justify-between">
          
         
          <div className="nav-load-element flex items-center gap-4">
            <img
              src="/Photos/logo.png"
              alt="logo"
              className="h-10 w-10 rounded-full object-cover filter grayscale contrast-125 border border-white/10"
            />
            <div>
              <h2 className="text-sm font-serif font-light tracking-[1px] text-zinc-100 uppercase m-0">
                PATREX MEDIA
              </h2>
              <p className="text-[10px] font-mono tracking-[3px] text-zinc-500 m-0 uppercase">
                Digital Studio
              </p>
            </div>
          </div>

         
          <nav className="hidden md:block">
            <ul className="flex gap-10 list-none m-0 p-0 items-center font-mono text-xs uppercase tracking-widest">
              {links.map((item) => {
                const isActive = activeLink === item.label;
                return (
                  <li key={item.label} className="nav-load-element">
                    {item.to.startsWith("#") ? (
                      <a
                        href={item.to}
                        onClick={() => setActiveLink(item.label)}
                        onMouseEnter={handleElementEnter}
                        onMouseLeave={handleElementLeave}
                        className={`relative py-1 transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                      >
                        {item.label}
                        <span
                          className={`absolute left-0 bottom-0 h-[1px] bg-white transition-all duration-300 ease-out ${isActive ? "w-full" : "w-0"}`}
                        />
                      </a>
                    ) : (
                      <Link
                        to={item.to}
                        onClick={() => setActiveLink(item.label)}
                        onMouseEnter={handleElementEnter}
                        onMouseLeave={handleElementLeave}
                        className={`relative py-1 transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                      >
                        {item.label}
                        <span
                          className={`absolute left-0 bottom-0 h-[1px] bg-white transition-all duration-300 ease-out ${isActive ? "w-full" : "w-0"}`}
                        />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          
          <div className="hidden md:block nav-load-element">
            <a
              href="mailto:patrexmedia1@gmail.com"
              onMouseEnter={handleElementEnter}
              onMouseLeave={handleElementLeave}
              className="inline-block font-mono text-[10px] uppercase tracking-[3px] border border-white/10 px-6 py-2.5 rounded-full text-zinc-300 hover:border-white/40 hover:text-white transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

        
          <div
            onClick={handleToggleMenu}
            onMouseEnter={handleElementEnter}
            onMouseLeave={handleElementLeave}
            className="md:hidden flex flex-col gap-[4px] cursor-pointer p-2 relative z-50 select-none"
          >
            <span ref={line1Ref} className="w-5 h-[1.5px] bg-zinc-200 will-change-transform" />
            <span ref={line2Ref} className="w-5 h-[1.5px] bg-zinc-200 will-change-transform" />
            <span ref={line3Ref} className="w-5 h-[1.5px] bg-zinc-200 will-change-transform" />
          </div>

        </div>

    
        <div
          ref={mobileMenuRef}
          className="w-full h-0 opacity-0 overflow-hidden md:hidden flex flex-col gap-5 pt-0 native-collapse-panel"
        >
          <ul className="list-none p-0 m-0 pt-6 flex flex-col gap-4 border-t border-white/5 mt-4">
            {links.map((item) => {
              const isActive = activeLink === item.label;
              return (
                <li key={item.label} className="mobile-link-node opacity-0 will-change-transform">
                  {item.to.startsWith("#") ? (
                    <a
                      href={item.to}
                      onClick={() => {
                        setActiveLink(item.label);
                        setMenuOpen(false);
                      }}
                      className={`block font-mono text-xs uppercase tracking-widest py-2 transition-colors duration-200 ${isActive ? "text-white font-medium" : "text-zinc-500"}`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={() => {
                        setActiveLink(item.label);
                        setMenuOpen(false);
                      }}
                      className={`block font-mono text-xs uppercase tracking-widest py-2 transition-colors duration-200 ${isActive ? "text-white font-medium" : "text-zinc-500"}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
            
        
            <li className="mobile-link-node opacity-0 pt-4 border-t border-white/5 mt-2">
              <a
                href="mailto:patrexmedia1@gmail.com"
                className="inline-block font-mono text-[10px] uppercase tracking-[2px] text-zinc-400 hover:text-white"
              >
                patrexmedia1@gmail.com →
              </a>
            </li>
          </ul>
        </div>

      </div>
    </header>
  );
}