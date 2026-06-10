import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FAQ_DATA = [
  {
    index: "01",
    question: "What is your typical project timeline?",
    answer: "Our core engineering and design cycles typically span 6 to 10 weeks. This includes deep architectural discovery, strict interactive prototyping, high-fidelity layout styling, and rigorous deployment optimization protocols."
  },
  {
    index: "02",
    question: "Do you integrate with existing technical infrastructures?",
    answer: "Yes. We engineer layout layers and backend APIs that interface seamlessly with headless CMS structures, legacy microservices architectures, and modern runtime systems like Next.js or Node.js."
  },
  {
    index: "03",
    question: "How do you approach motion design and interaction?",
    answer: "Motion is treated as a structural layout discipline, not decorative additions. Every programmatic transformation, skew shift, or scroll trigger animation is mathematically engineered to guide user retention and clarify system hierarchy."
  },
  {
    index: "04",
    question: "What frameworks define your engineering standard?",
    answer: "We develop primarily within strict typed environments using TypeScript, React, and Next.js. Motion states are choreographed via GSAP Core, while layout rendering systems utilize optimized utility graphics libraries."
  }
];

export default function PremiumFaqStack() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);


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
      pos.x += (mouse.x - pos.x) * 0.16;
      pos.y += (mouse.y - pos.y) * 0.16;
      quickX(pos.x);
      quickY(pos.y);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(ticker);
    };
  }, []);

  const handleRowMouseEnter = () => {
    gsap.to(cursorRef.current, {
      scale: 3,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
      duration: 0.25,
      ease: "power2.out"
    });
  };

  const handleRowMouseLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
      backgroundColor: "transparent",
      mixBlendMode: "normal",
      duration: 0.25,
      ease: "power2.out"
    });
  };

  const toggleFaqState = (index, currentTarget) => {
    const isClosing = openIndex === index;
    setOpenIndex(isClosing ? null : index);

  
    const answerContainer = currentTarget.querySelector(".faq-answer-pane");
    const indicatorGlyph = currentTarget.querySelector(".faq-glyph");
    const questionText = currentTarget.querySelector(".faq-question-text");
    const underline = currentTarget.querySelector(".faq-line");

    if (!isClosing && openIndex !== null) {
      const prevActiveRow = containerRef.current.querySelector(`.faq-row-${openIndex}`);
      if (prevActiveRow) {
        gsap.to(prevActiveRow.querySelector(".faq-answer-pane"), { height: 0, opacity: 0, marginTop: 0, duration: 0.4, ease: "power3.inOut" });
        gsap.to(prevActiveRow.querySelector(".faq-glyph"), { rotate: 0, color: "rgba(113, 113, 122, 0.6)", duration: 0.4, ease: "power3.out" });
        gsap.to(prevActiveRow.querySelector(".faq-question-text"), { color: "rgba(228, 228, 231, 0.9)", duration: 0.4 });
        gsap.to(prevActiveRow.querySelector(".faq-line"), { backgroundColor: "rgba(255, 255, 255, 0.05)", duration: 0.4 });
      }
    }

    if (!isClosing) {

      gsap.fromTo(answerContainer, 
        { height: 0, opacity: 0, marginTop: 0 },
        { height: "auto", opacity: 1, marginTop: 16, duration: 0.45, ease: "power3.out" }
      );
      gsap.to(indicatorGlyph, { rotate: 45, color: "#ffffff", duration: 0.4, ease: "back.out(1.5)" });
      gsap.to(questionText, { color: "#ffffff", duration: 0.3 });
      gsap.to(underline, { backgroundColor: "rgba(255, 255, 255, 0.2)", duration: 0.3 });
    } else {
 
      gsap.to(answerContainer, { height: 0, opacity: 0, marginTop: 0, duration: 0.4, ease: "power3.inOut" });
      gsap.to(indicatorGlyph, { rotate: 0, color: "rgba(113, 113, 122, 0.6)", duration: 0.4, ease: "power3.out" });
      gsap.to(questionText, { color: "rgba(228, 228, 231, 0.9)", duration: 0.4 });
      gsap.to(underline, { backgroundColor: "rgba(255, 255, 255, 0.05)", duration: 0.4 });
    }
  };


  useGSAP(() => {
    gsap.fromTo(".reveal-header-faq", 
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
    );

    gsap.fromTo(".faq-item-row", 
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#080809] text-zinc-300 py-40 px-6 md:px-16 lg:px-32 faq-motion-zone flex flex-col justify-center items-center overflow-hidden select-none"
    >

      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 border border-white/50 bg-transparent rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[99999] will-change-transform"
      />

   
      <div className="reveal-header-faq w-full max-w-4xl mb-24 text-left border-b border-white/5 pb-10">
        <p className="font-mono text-[10px] uppercase tracking-[5px] text-zinc-600 mb-2">Inquiries</p>
        <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-zinc-100">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="w-full max-w-4xl flex flex-col">
        {FAQ_DATA.map((item, index) => (
          <div
            key={index}
            onClick={(e) => toggleFaqState(index, e.currentTarget)}
            onMouseEnter={handleRowMouseEnter}
            onMouseLeave={handleRowMouseLeave}
            className={`faq-item-row faq-row-${index} w-full flex flex-col relative group transition-all duration-300 py-7 border-none`}
          >
     
            <div className="w-full flex items-center justify-between gap-6">
              
              <div className="flex items-center gap-6 md:gap-10">
         
                <span className="font-mono text-xs text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400">
                  {item.index}
                </span>
   
                <h3 className="faq-question-text text-base md:text-lg font-light tracking-wide text-zinc-200/90 transition-colors duration-300 will-change-transform">
                  {item.question}
                </h3>
              </div>

              <span className="faq-glyph font-mono text-zinc-600 text-lg font-light transition-all duration-300 origin-center shrink-0 w-6 h-6 flex items-center justify-center">
                +
              </span>

            </div>

            <div className="faq-answer-pane w-full h-0 opacity-0 overflow-hidden pr-8 pointer-events-none">
              <p className="text-xs md:text-sm text-zinc-500 font-light leading-relaxed tracking-wide pl-12 md:pl-16 max-w-3xl">
                {item.answer}
              </p>
            </div>

            <div className="faq-line w-full h-[1px] bg-white/5 will-change-transform mt-6" />

          </div>
        ))}
      </div>

      <div className="reveal-header-faq w-full max-w-4xl mt-24 pt-6 border-t border-white/5 flex justify-between text-[10px] font-mono text-zinc-600 tracking-widest">
        <span>INFO CORE v1.0</span>
        <span>SYSTEM PRODUCTION READY</span>
      </div>
    </section>
  );
}