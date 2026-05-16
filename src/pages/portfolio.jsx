import { useState } from "react";
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

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

const projects = [
  {
    src: "/photo/1.png",
    category: "Web Development",
    title: "NOVACART",
    description: "Premium animated business experience",
     link: "https://novacart-fj8q43s0p-ashish24.vercel.app/",
  },
  {
    src: "/photo/4.png",
    category: "Graphic Design",
    title: "Creative Campaign",
    description: "Visual identity & social branding",
  },
  {
    src: "/photo/7.png",
    category: "Logo Design",
    title: "Elite Logo",
    description: "Modern luxury logo concept",
  },
  {
    src: "/photo/9.png",
    category: "Web Development",
    title: "Shree Ji Farm",
    description: "Organic farm website experience",
    link: "https://shree-ji-farm.netlify.app/",
  },
  {
    src: "/photo/5.png",
    category: "UI/UX Design",
    title: "Mobile Dashboard",
    description: "Next-gen mobile interface",
  },
  {
    src: "/photo/3.png",
    category: "Graphic Design",
    title: "Social Media Kit",
    description: "Brand marketing assets",
  },
];

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Navbar />

      <main className="bg-black overflow-hidden">

        
        <section className="relative min-h-screen px-6 pt-32 pb-20 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.16),transparent_45%),linear-gradient(180deg,#020617_0%,#000_70%)]">

  
          <div className="absolute inset-0 overflow-hidden">

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black"></div>

          </div>

          <div className="relative z-10 max-w-7xl mx-auto">

            {/* TOP */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >

                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-8 backdrop-blur-xl">
                  <Sparkles size={16} className="text-cyan-400" />
                  <span className="text-gray-300 text-sm">
                    Digital Creative Studio
                  </span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] mb-8">

                  WE BUILD
                  <br />

                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    VISUAL
                  </span>

                  <br />

                  <span className="block mt-5 md:mt-7">
                    EXPERIENCES
                  </span>

                </h1>

                <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  We craft stunning websites, futuristic interfaces,
                  luxury branding, and immersive digital products
                  designed for modern businesses.
                </p>

                {/* BUTTONS */}
                <div className="relative z-30 flex flex-wrap gap-5">

                  <a
                    href="#projects"
                    className="group bg-white text-black hover:bg-cyan-400 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-xl shadow-cyan-500/10"
                  >
                    Explore Projects
                    <ArrowUpRight
                      size={20}
                      className="group-hover:rotate-45 transition"
                    />
                  </a>

                  <Link
                    to="/contact"
                    className="border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white px-8 py-4 rounded-2xl transition shadow-xl"
                  >
                    Contact Us
                  </Link>

                </div>

              </motion.div>

            
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative mt-4 lg:mt-0"
              >

                {/* BIG CARD */}
                <div className="relative grid gap-5 md:block md:h-[650px]">

                  {/* CARD 1 */}
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative md:absolute md:top-0 md:right-0 w-full md:w-[75%] rounded-2xl md:rounded-[35px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
                  >
                    <img
                      src="/photo/1.png"
                      className="w-full h-52 sm:h-64 md:h-[350px] object-cover"
                    />

                    <div className="p-5 md:p-6">
                      <div className="text-cyan-400 text-sm mb-2">
                        Web Development
                      </div>

                      <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
                        Modern Agency Website
                      </h3>

                      <p className="text-gray-400">
                        Animated premium website experience.
                      </p>
                    </div>
                  </motion.div>

                  {/* CARD 2 */}
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative md:absolute md:bottom-0 md:left-0 w-full md:w-[65%] rounded-2xl md:rounded-[35px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
                  >
                    <img
                      src="/photo/5.png"
                      className="w-full h-52 sm:h-64 md:h-[300px] object-cover"
                    />

                    <div className="p-5 md:p-6">
                      <div className="text-purple-400 text-sm mb-2">
                        UI/UX Design
                      </div>

                      <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
                        Futuristic Dashboard
                      </h3>

                      <p className="text-gray-400">
                        Clean & immersive user experience.
                      </p>
                    </div>
                  </motion.div>

                
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="hidden md:block absolute top-[42%] left-[35%] z-20 bg-white/10 border border-white/10 backdrop-blur-2xl px-6 py-5 rounded-3xl"
                  >
                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                        <Layers3 className="text-cyan-400" />
                      </div>

                      <div>
                        <h4 className="text-white font-bold text-xl">
                          120+
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Projects Delivered
                        </p>
                      </div>

                    </div>
                  </motion.div>

                </div>

              </motion.div>
            </div>
          </div>
        </section>

      
        <section id="projects" className="px-6 py-24 scroll-mt-24">

          <div className="max-w-7xl mx-auto">

    
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">

              <div>
                <p className="text-cyan-400 mb-4">
                  SELECTED WORK
                </p>

                <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                  Our Featured
                  <br />
                  Portfolio
                </h2>
              </div>

              <p className="text-gray-400 max-w-lg">
                High-end creative projects crafted with
                modern design systems and advanced user
                experiences.
              </p>

            </div>

           
            <div className="space-y-10">

              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group relative grid lg:grid-cols-2 gap-10 items-center bg-white/[0.03] border border-white/10 rounded-[40px] overflow-hidden hover:bg-white/[0.05] transition-all duration-500"
                >

               
                  <div className="relative overflow-hidden h-full">

                    <img
                      src={project.src}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700 cursor-pointer"
                      onClick={() => setSelectedImage(project.src)}
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

                  </div>

                 
                  <div className="p-10 lg:p-16">

                    <div className="text-cyan-400 mb-5">
                      {project.category}
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed mb-10">
                      {project.description}
                    </p>

                    <div className="flex gap-5">

                      <button
                        onClick={() => setSelectedImage(project.src)}
                        className="group/btn flex items-center gap-3 bg-white text-black hover:bg-cyan-400 transition px-6 py-4 rounded-2xl font-semibold"
                      >
                        <Eye size={20} />
                        Preview
                      </button>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-3 border border-white/10 bg-white/5 hover:bg-white/10 transition px-6 py-4 rounded-2xl text-white"
                        >
                          Visit Site
                          <ExternalLink
                            size={18}
                            className="group-hover/btn:rotate-45 transition"
                          />
                        </a>
                      )}

                    </div>

                  </div>

                </motion.div>
              ))}

            </div>
          </div>
        </section>

   
        <section className="py-24 bg-gradient-to-b from-black to-gray-950">
          <Testimonials />
        </section>

        <Footer />


        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-6xl w-full"
                onClick={(e) => e.stopPropagation()}
              >

                <img
                  src={selectedImage}
                  className="w-full rounded-[30px]"
                />

                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-5 right-5 w-14 h-14 rounded-2xl bg-black/40 hover:bg-black/70 backdrop-blur-xl border border-white/10 flex items-center justify-center"
                >
                  <X className="text-white" size={28} />
                </button>

              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </>
  );
}
