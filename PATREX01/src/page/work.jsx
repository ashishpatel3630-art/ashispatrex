import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Layers3,
  Eye,
} from "lucide-react";


import Footer from "../components/Footer";


const projects = [
  {
    src: "Photos/works/w1.png",
    category: "Web Development",
    title: "NOVACART",
    description: "Premium animated business experience running on low-latency interactive architecture layers.",
    link: "https://novacart-fj8q43s0p-ashish24.vercel.app/",
  },
  {
    src: "Photos/works/w2.png",
    category: "Graphic Design",
    title: "Creative Campaign",
    description: "Visual identity, strategic messaging systems, and multi-channel structural social branding.",
  },
  {
    src: "Photos/works/w3.png",
    category: "Logo Design",
    title: "Elite Logo",
    description: "Modern luxury logo concept engineered around geometric alignment vectors.",
  },
  {
    src: "Photos/works/w4.png",
    category: "Web Development",
    title: "Shree Ji Farm",
    description: "Organic farm website experience with optimized response speeds and client scheduling workflows.",
    link: "https://shree-ji-farm.netlify.app/",
  },
  {
    src: "Photos/works/w5.png",
    category: "UI/UX Design",
    title: "Mobile Dashboard",
    description: "Next-gen clean mobile analytical dashboard designed for productivity tracking layers.",
  },
  {
    src: "Photos/works/w6.png",
    category: "Graphic Design",
    title: "Social Media Kit",             
    description: "High-contrast structural brand marketing assets for maximum digital user retention.",
  },
];

const testimonials = [
  {
    quote: "The team translated our vision into a polished digital experience that feels premium from the first click.",
    name: "Ashish Mewada",
    role: "CEO, Patrex Media",
  },
  {
    quote: "Every interaction feels intentional, fast, and thoughtfully crafted for our audience.",
    name: "Rahul Sharma",
    role: "Founder, Studio North",
  },
  {
    quote: "The process was smooth, the strategy sharp, and the final result exceeded our expectations.",
    name: "Aman Verma",
    role: "Product Lead, North Labs",
  },
];

function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[4px] text-zinc-500 mb-3">Client Voices</p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-zinc-100 tracking-tight">
            What clients say
          </h2>
        </div>
        <p className="text-zinc-500 font-mono text-xs leading-relaxed max-w-md uppercase tracking-wide">
          Trusted by founders and teams who want modern experiences that feel elevated and reliable.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-[24px] border border-white/5 bg-white/[0.03] p-6 backdrop-blur-xl"
          >
            <p className="text-zinc-300 text-sm md:text-[15px] leading-relaxed mb-8">“{item.quote}”</p>
            <div>
              <p className="text-zinc-100 text-sm font-medium">{item.name}</p>
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[2px] mt-1">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  
  const categories = useMemo(() => {
    return ["All", ...new Set(projects.map((p) => p.category))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>


      <main className="bg-[#060607] text-zinc-300 min-h-screen overflow-hidden font-sans select-none">
      
        <section className="relative min-h-[95vh] flex items-center px-6 pt-32 pb-20 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_50%),linear-gradient(180deg,#0a0a0c_0%,#060607_100%)]">
          
       
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#060607]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

             
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "power3.out" }}
              >
                <div className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/5 px-4 py-2 rounded-full mb-8 backdrop-blur-xl">
                  <Sparkles size={13} className="text-zinc-400" />
                  <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-[3px]">
                    Digital Creative Studio
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-zinc-100 tracking-tight leading-[1.02] mb-8">
                  We build <br />
                  <span className="italic text-zinc-500">visual</span> <br />
                  experiences.
                </h1>

                <p className="text-zinc-500 font-mono text-xs uppercase tracking-wide leading-relaxed max-w-md mb-12">
                  We craft high-fidelity websites, futuristic interactive interfaces,
                  and immersive digital products built for progressive enterprises.
                </p>
                <div className="relative z-30 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="group bg-zinc-100 text-black hover:bg-white transition-colors duration-300 px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest flex items-center gap-3"
                  >
                    Explore Projects
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    />
                  </a>

                  <Link
                    to="/contact"
                    className="border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 backdrop-blur-xl text-zinc-300 px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: "power3.out", delay: 0.1 }}
                className="relative hidden md:block h-[600px] w-full"
              >
           
                <div className="absolute top-0 right-0 w-[70%] rounded-2xl overflow-hidden border border-white/5 bg-white/[0.01] shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                  <img
                    src="Photos/works/w1.png"
                    alt="Novacart"
                    className="w-full h-[280px] object-cover filter grayscale contrast-125"
                  />
                  <div className="p-6 border-t border-white/5">
                    <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest block mb-1">Web Development</span>
                    <h3 className="text-zinc-200 text-lg font-light font-serif">Modern Agency Concept</h3>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-[60%] rounded-2xl overflow-hidden border border-white/5 bg-white/[0.01] shadow-2xl transition-transform duration-500 hover:-translate-y-2 z-10">
                  <img
                    src="Photos/works/w5.png"
                    alt="Dashboard"
                    className="w-full h-[220px] object-cover filter grayscale contrast-125"
                  />
                  <div className="p-6 border-t border-white/5">
                    <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest block mb-1">UI/UX Design</span>
                    <h3 className="text-zinc-200 text-lg font-light font-serif">Futuristic Operator Deck</h3>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[45%] left-[25%] z-20 bg-[#101012] border border-white/5 px-5 py-4 rounded-xl flex items-center gap-4 shadow-2xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <Layers3 size={16} className="text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-zinc-100 font-mono text-base font-semibold leading-none mb-0.5">120+</h4>
                    <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-wider m-0">Delivered</p>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-32 border-t border-white/5 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[4px] text-zinc-500 mb-3">Selected Index</p>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-zinc-100 tracking-tight">
                  Our Featured Portfolio
                </h2>
              </div>
              <p className="text-zinc-500 font-mono text-xs leading-relaxed max-w-md uppercase tracking-wide">
                High-end interactive systems crafted with consistent grid spacing matrices and clean semantic coding.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-16 pb-4 border-b border-white/5">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-zinc-100 text-black border-zinc-100"
                      : "bg-transparent text-zinc-500 border-transparent hover:text-zinc-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

           
            <motion.div layout className="flex flex-col gap-12">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    layout
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: "power2.out" }}
                    className="group relative grid lg:grid-cols-2 gap-12 items-center bg-white/[0.01] border border-white/5 rounded-[24px] overflow-hidden hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500 p-6 lg:p-10"
                  >
                   
                    <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-zinc-900 border border-white/5">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full h-full object-cover filter grayscale contrast-[1.1] group-hover:scale-[1.02] transition-transform duration-700 cursor-pointer"
                        onClick={() => setSelectedImage(project.src)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060607]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                    </div>

                  
                    <div className="flex flex-col justify-center h-full py-4 lg:pr-6">
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[3px] block mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-serif font-light text-zinc-100 tracking-tight mb-4">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 font-mono text-xs leading-relaxed tracking-wide mb-10 max-w-xl">
                        {project.description}
                      </p>

                    
                      <div className="flex flex-wrap gap-4 mt-auto">
                        <button
                          onClick={() => setSelectedImage(project.src)}
                          className="flex items-center gap-2.5 bg-white/[0.03] border border-white/5 text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300 px-5 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-widest"
                        >
                          <Eye size={13} />
                          Preview System
                        </button>

                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 border border-white/5 bg-transparent hover:border-white/20 text-zinc-400 hover:text-white transition-all duration-300 px-5 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-widest"
                          >
                            Visit Site
                            <ExternalLink size={13} className="group-hover:rotate-45 transition-transform duration-300" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>

       
        <section className="py-28 border-t border-white/5 bg-gradient-to-b from-[#060607] to-[#0a0a0c]">
          <Testimonials />
        </section>

   

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/98 backdrop-blur-2xl z-[9999] flex items-center justify-center p-4 md:p-8 select-none"
            >
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Expanded Preview Layer"
                  className="max-w-full max-h-[85vh] rounded-xl object-contain border border-white/5"
                />
    <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-11 h-11 rounded-full bg-[#101012]/80 hover:bg-zinc-100 hover:text-black text-white border border-white/5 flex items-center justify-center transition-all duration-200"
                >
                  <X size={18} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </>
  );
}