import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Users, ArrowLeft, ArrowRight, Layers, Target, Eye, Cpu, Workflow } from "lucide-react";


const PILLARS = [
  {
    tag: "01 // Philosophy",
    title: "We Design, We Develop, We Elevate",
    desc: "We design with purpose, turning ideas into thoughtful and impactful visuals. We develop with precision, building smooth, scalable, and reliable digital solutions. We elevate brands by creating experiences that inspire, connect, and leave a lasting impression.",
    icon: <Layers size={14} />,
    stats: [
      { value: "50+", label: "Projects Delivered" },
      { value: "50+", label: "Clients Satisfied" },
      { value: "2+ Years", label: "Satisfied Experience" }
    ]
  },
  {
    tag: "02 // Mission",
    title: "Our Mission",
    desc: "We design and develop meaningful web experiences with a strong focus on UI/UX that feels natural and intuitive. We don't just build websites—we create experiences that help brands grow and stand out in hyper-competitive markets.",
    icon: <Target size={14} />,
    stats: [
      { value: "50+", label: "Platforms Live" },
      { value: "50+", label: "Clients Globally" },
      { value: "100%", label: "Quality Metric" }
    ]
  },
  {
    tag: "03 // Vision",
    title: "Our Vision",
    desc: "Our vision is to inspire creativity, elevate user experiences, and set new standards in the digital world. We don't just follow trends—we build solutions that shape the future of how businesses connect, process parameters, and evolve online.",
    icon: <Eye size={14} />,
    stats: [
      { value: "50+", label: "Projects Tracked" },
      { value: "50+", label: "Clients Connected" },
      { value: "100%", label: "Vision Focus" }
    ]
  }
];

const TEAM = [
  { src: "/photo/team-left.png", name: "Raj Patel", role: "CO-FOUNDER", badge: "Operations" },
  { src: "/Photos/ashish.png", name: "Ashish Mewada", role: "FOUNDER & CEO", badge: "Leadership" },
  { src: "/photo/deepansh.png", name: "Deepansh Patel", role: "FRONTEND DEVELOPER & CDO", badge: "Core Tech" },
  { src: "/photo/team-right.png", name: "Core Infrastructure", role: "CREATIVE PIPELINE", badge: "Production" }
];

const STREAM_TAGS = [
  "NEXT-GEN UI/UX CORE ARCHITECTURE", "LOW-LATENCY INTERACTION LAYERS", 
  "SEMANTIC CLEAN CODE ENGINE", "SWISS MINIMALISM PRINCIPLES", "MAX RETENTION DESIGN SYSTEMS"
];

const DEPLOYMENT_STEPS = [
  {
    num: "01",
    phase: "DISCOVERY & SPECIFICATION",
    title: "Strategic Asset Mapping",
    desc: "Hum aapke target market parameters aur strategic objectives ko systematically reverse-engineer karte hain taaki modular workflows design kiye ja sakein."
  },
  {
    num: "02",
    phase: "INTERFACE ARCHITECTURE",
    title: "High-Fidelity UI Systems",
    desc: "Asymmetric grids aur custom aesthetic structural layouts prepare kiye jaate hain jo visual layout shifts ko completely bypass karte hain."
  },
  {
    num: "03",
    phase: "SYSTEM DISPATCH",
    title: "Production Release",
    desc: "Production-ready lightning-fast structural code run kiya jata hai jo extreme response rates aur layout reliability deliver karta hai."
  }
];

export default function AboutAndTeam() {
  const [activePillar, setActivePillar] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const teamSliderRef = useRef(null);

  const updateScrollProgress = () => {
    if (teamSliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = teamSliderRef.current;
      const totalScroll = scrollWidth - clientWidth;
      if (totalScroll > 0) setScrollProgress((scrollLeft / totalScroll) * 100);
    }
  };

  const handleScrollTeam = (direction) => {
    if (teamSliderRef.current) {
      const scrollAmount = direction === "left" ? -344 : 344;
      teamSliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#060607] text-zinc-300 overflow-hidden select-none">
      

      <section className="relative w-full py-32 px-6 md:px-16 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-40 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            <div className="lg:col-span-5 flex flex-col gap-10 sticky top-32">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/5 px-4 py-1.5 rounded-full mb-6">
                  <Sparkles size={11} className="text-zinc-500" />
                  <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-[3px]">Corporate System</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-light text-zinc-100 tracking-tight leading-[1.05]">
                  About <br />
                  <span className="font-normal">Patrex Media</span>
                </h2>
                <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-wide max-w-xs mt-4 leading-relaxed">
                  We're a creative digital agency dedicated to crafting exceptional digital experiences. From concept to deployment, we blend innovation with expertise to deliver solutions that exceed expectations.
                </p>
              </div>

              <div className="flex flex-col gap-2 max-w-xs relative">
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5" />
                {PILLARS.map((pillar, idx) => {
                  const isSelected = activePillar === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActivePillar(idx)}
                      className="flex items-center gap-4 text-left font-mono text-[11px] uppercase tracking-widest pl-6 py-4 relative group focus:outline-none"
                    >
                      {isSelected && (
                        <motion.div 
                          layoutId="activePillarLine"
                          className="absolute left-0 top-0 bottom-0 w-[2px] bg-zinc-200 z-10"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className={`transition-colors duration-300 flex items-center gap-2.5 ${isSelected ? "text-zinc-100" : "text-zinc-500 group-hover:text-zinc-300"}`}>
                        <span className="text-[9px] opacity-40 tabular-nums">0{idx + 1}</span>
                        {pillar.tag.split("//")[1].trim()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7 min-h-[440px] flex flex-col justify-between bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 rounded-[32px] p-8 md:p-14 backdrop-blur-3xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex flex-col gap-12 h-full justify-between"
                >
                  <div className="flex flex-col gap-4">
                    <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[4px]">{PILLARS[activePillar].tag}</span>
                    <h3 className="text-3xl md:text-4xl font-serif font-light text-zinc-100 tracking-tight leading-snug">{PILLARS[activePillar].title}</h3>
                    <p className="text-zinc-400 font-light text-base leading-relaxed max-w-2xl mt-2">{PILLARS[activePillar].desc}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-8 mt-auto w-full bg-white/[0.01] -mx-8 -mb-8 p-8 md:-mx-14 md:-mb-14 md:p-12">
                    {PILLARS[activePillar].stats.map((stat, sIdx) => (
                      <div key={sIdx} className="flex flex-col gap-1.5">
                        <span className="font-serif text-3xl md:text-4xl font-light text-zinc-100 tabular-nums tracking-tighter">{stat.value}</span>
                        <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-[2px] leading-tight">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

    
      <div className="w-full py-6 bg-white/[0.01] border-y border-white/5 overflow-hidden flex relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#060607] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#060607] to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex whitespace-nowrap gap-12 text-zinc-600 font-mono text-[10px] tracking-[4px] uppercase"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        >
          {[...STREAM_TAGS, ...STREAM_TAGS, ...STREAM_TAGS].map((tag, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Cpu size={10} className="opacity-40" />
              <span>{tag}</span>
            </div>
          ))}
        </motion.div>
      </div>

    
      <section className="py-32 px-6 md:px-16 lg:px-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-14">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 w-full">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/5 px-4 py-1.5 rounded-full mb-4">
                <Users size={11} className="text-zinc-500" />
                <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-[3px]">Team Members</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-light text-zinc-100 tracking-tight">Meet Our Team Members</h2>
            </div>

            <div className="flex flex-col items-end gap-3">
              <div className="flex gap-2">
                <button onClick={() => handleScrollTeam("left")} className="w-11 h-11 border border-white/5 bg-white/[0.01] hover:bg-zinc-100 hover:text-black rounded-full flex items-center justify-center transition-all duration-300 group focus:outline-none">
                  <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button onClick={() => handleScrollTeam("right")} className="w-11 h-11 border border-white/5 bg-white/[0.01] hover:bg-zinc-100 hover:text-black rounded-full flex items-center justify-center transition-all duration-300 group focus:outline-none">
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
              <div className="hidden sm:block w-28 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                <motion.div className="absolute top-0 bottom-0 left-0 bg-zinc-400 rounded-full" style={{ width: `${scrollProgress}%` }} />
              </div>
            </div>
          </div>

          <div ref={teamSliderRef} onScroll={updateScrollProgress} className="w-full flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 pr-12" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {TEAM.map((member, idx) => (
              <div key={idx} className="min-w-[280px] md:min-w-[320px] max-w-[320px] snap-start group relative rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-3 flex flex-col gap-4 hover:border-white/10 transition-all duration-500">
                <div className="w-full aspect-[4/5] bg-zinc-900/50 rounded-2xl overflow-hidden relative border border-white/5">
                  <img src={member.src} alt={member.name} className="w-full h-full object-cover filter grayscale contrast-[1.10] brightness-[0.9] group-hover:scale-[1.02] transition-all duration-700 ease-out" loading="lazy" />
                  <span className="absolute top-4 left-4 font-mono text-[8px] uppercase tracking-[2px] bg-[#060607]/80 border border-white/5 backdrop-blur-md px-3 py-1 rounded-md text-zinc-400">{member.badge}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060607] via-black/10 to-transparent opacity-90" />
                  <div className="absolute bottom-5 left-5 right-5 z-10">
                    <h4 className="text-zinc-100 font-serif text-xl font-light tracking-wide m-0">{member.name}</h4>
                    <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-1.5 m-0">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-32 px-6 md:px-16 lg:px-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-3 mb-20">
            <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/5 px-4 py-1.5 rounded-full self-start">
              <Workflow size={11} className="text-zinc-500" />
              <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-[3px]">Operation Tracker</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-zinc-100 tracking-tight">Our Deployment Blueprint</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-full">
            {DEPLOYMENT_STEPS.map((step, idx) => (
              <div key={idx} className="group relative bg-white/[0.01] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 flex flex-col justify-between min-h-[320px]">
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-serif text-3xl font-light text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300">{step.num}</span>
                    <span className="font-mono text-[8px] uppercase tracking-[2px] bg-white/5 px-2 py-0.5 rounded text-zinc-500">Phase {step.num}</span>
                  </div>
                  <h4 className="font-serif text-xl font-light text-zinc-200 tracking-tight mb-3">{step.title}</h4>
                  <p className="font-mono text-[11px] text-zinc-500 leading-relaxed uppercase tracking-wide">{step.desc}</p>
                </div>
                <span className="font-mono text-[9px] text-zinc-600 mt-6 block tracking-widest">// {step.phase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-40 px-6 md:px-16 lg:px-24 bg-[#030304] flex flex-col items-center justify-center overflow-hidden">
       
        <div className="absolute w-[600px] h-[300px] bg-zinc-800/10 rounded-full blur-[180px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-[6px] block">
              // The Ultimate Objective
            </span>

            <h2 className="text-4xl md:text-7xl font-serif font-light text-zinc-100 tracking-tight leading-[1.1] max-w-3xl">
              Beyond lines of code, <br />
              we build things that make <br />
              people <span className="italic font-normal text-zinc-400">truly feel.</span>
            </h2>

            <p className="font-mono text-[10px] text-zinc-500 max-w-md uppercase tracking-widest leading-relaxed mt-4">
              Because at the end of the day, interfaces fade, but the impression of flawless perfection lingers forever.
            </p>
          </motion.div>

          <div className="w-full h-[1px] bg-white/5 mt-20 mb-8" />
          
          <div className="w-full flex flex-col sm:flex-row justify-between items-center font-mono text-[8px] text-zinc-600 tracking-[3px] uppercase gap-4">
            <span>PATREX MEDIA // DIGITAL ARCHITECTS</span>
            <span className="tabular-nums">STABLE SYSTEM OPERATIONAL // 2026</span>
          </div>
        </div>
      </section>

    </div>
  );
}