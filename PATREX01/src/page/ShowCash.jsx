import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const tags = ["Vercel", "GitHub", "Stripe", "Webflow", "Framer", "Linear", "Supabase", "Tailwind"];
const images = [
  "Photos/Showcash1.png",
  "Photos/Showcash2.png",
  "Photos/Showcash3.png",
  "Photos/Showcash4.png",
];

const themes = [
  { accent: '#d4af37', glow: 'rgba(212,175,55,0.15)', textStyle: 'hover:text-[#d4af37]' },
  { accent: '#38bdf8', glow: 'rgba(56,189,248,0.15)', textStyle: 'hover:text-[#38bdf8]' },
  { accent: '#a855f7', glow: 'rgba(168,85,247,0.15)', textStyle: 'hover:text-[#a855f7]' },
  { accent: '#f43f5e', glow: 'rgba(244,63,94,0.15)', textStyle: 'hover:text-[#f43f5e]' }
];

const PremiumMarqueeRow = ({ children, speed = 25, reverse = false }) => {
  return (
    <div className="flex overflow-hidden select-none w-[120%] -ml-[10%]">
      <motion.div
        initial={{ x: reverse ? "-50%" : 0 }}
        animate={{ x: reverse ? 0 : "-50%" }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        className="flex flex-nowrap gap-12 min-w-full"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center justify-around min-w-full shrink-0">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function ShowCash() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const activeTheme = themes[currentTheme];

 
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 50, stiffness: 350, mass: 0.3 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);


  const rotateX = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [5, -5]);
  const rotateY = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const cycleTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  return (
    <div 
      onClick={cycleTheme}
      className="min-h-screen bg-[#030303] text-white flex flex-col justify-center gap-4 overflow-hidden relative cursor-none perspective-[1200px]"
    >
     
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <motion.div 
        animate={{ backgroundColor: activeTheme.accent }}
        className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full filter blur-[160px] opacity-10 pointer-events-none transition-colors duration-1000" 
      />

   
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 hidden md:flex items-center"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      >
     
        <motion.div 
          animate={{ borderColor: activeTheme.accent }}
          className="w-8 h-8 rounded-full border border-white/30 absolute flex items-center justify-center transition-colors duration-500"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </motion.div>

       
        <div className="ml-12 bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-xl px-4 py-1.5 rounded-xl flex items-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <span className="inline-block w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: activeTheme.accent }} />
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-zinc-400">Click Canvas</span>
        </div>
      </motion.div>

      
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="flex flex-col gap-2 transition-transform duration-300 ease-out"
      >
  
        <div className="-rotate-3 transform-gpu scale-102">
          <PremiumMarqueeRow speed={28} reverse={false}>
            {tags.map((tag, idx) => (
              <h2 
                key={idx} 
                className={`text-6xl md:text-8xl font-black tracking-tighter uppercase select-none transition-all duration-300 font-sans px-4 text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 to-zinc-900 stroke-1 ${activeTheme.textStyle} cursor-pointer`}
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.06)" }}
              >
                {tag}
              </h2>
            ))}
          </PremiumMarqueeRow>
        </div>

        <div className="rotate-1 transform-gpu z-10 my-4">
          <PremiumMarqueeRow speed={35} reverse={true}>
            {images.map((img, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -8, scale: 1.02 }}
                style={{ shadow: `0 20px 50px ${activeTheme.glow}` }}
                className="w-[320px] md:w-[420px] h-[240px] md:h-[280px] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-900 relative group shrink-0 transition-all duration-500"
              >
            
                <img 
                  src={img} 
                  alt="Premium Asset" 
                  className="w-full h-full object-cover opacity-80 filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" 
                />
           
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/5 opacity-40" />
                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </PremiumMarqueeRow>
        </div>

       
        <div className="-rotate-2 transform-gpu scale-98">
          <PremiumMarqueeRow speed={24} reverse={false}>
            {tags.slice().reverse().map((tag, idx) => (
              <h2 
                key={idx} 
                className="text-5xl md:text-7xl font-bold tracking-tight font-serif italic text-zinc-700/40 select-none transition-colors duration-500 hover:text-white"
              >
                {tag}
              </h2>
            ))}
          </PremiumMarqueeRow>
        </div>

      </motion.div>
    </div>
  );
}