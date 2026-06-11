import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", projectType: "Web Design", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const containerRef = useRef(null);

  const categories = ["Web Design", "UI/UX Architecture", "Visual Identity", "Growth Strategy"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", projectType: "Web Design", message: "" });
    }, 4000);
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-32 px-6 md:px-16 lg:px-24 bg-[#060607] text-zinc-300 border-t border-white/5 overflow-hidden select-none"
    >
   
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.15]">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-zinc-500/20 via-transparent to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
    
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/5 px-4 py-1.5 rounded-full mb-6">
                <Sparkles size={11} className="text-zinc-500" />
                <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-[3px]">Initiate System</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-light text-zinc-100 tracking-tight leading-[1.05]">
                Let's start <br />
                something <br />
                <span className="italic text-zinc-500">significant.</span>
              </h2>
            </div>

            <p className="font-mono text-xs text-zinc-500 leading-relaxed uppercase tracking-wide max-w-sm">
              Have an ambitious product strategy or platform concept? Fill out the parameters to sync with our design team.
            </p>


            <div className="flex flex-col gap-4 pt-8 border-t border-white/5 mt-4">
              <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-[4px]">Direct Operations</span>
              <a 
                href="mailto:patrexmedia1@gmail.com" 
                className="font-mono text-xs text-zinc-400 hover:text-white transition-colors duration-200 tracking-wide"
              >
                patrexmedia1@gmail.com
              </a>
              <span className="font-mono text-[10px] text-zinc-600 tabular-nums tracking-widest mt-1">
                RESPONSE TIME // WITHIN 24 HRS
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 w-full bg-white/[0.01] border border-white/5 rounded-[32px] p-8 md:p-12 backdrop-blur-3xl relative">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-10"
                >
                
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-400 placeholder-zinc-600 transition-colors duration-300 font-mono"
                        placeholder="YOUR NAME *"
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full" />
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-400 placeholder-zinc-600 transition-colors duration-300 font-mono"
                        placeholder="EMAIL ADDRESS *"
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full" />
                    </div>
                  </div>

                  
                  <div className="flex flex-col gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[3px] text-zinc-500">Project Vector</span>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => {
                        const isSelected = formState.projectType === cat;
                        return (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setFormState({ ...formState, projectType: cat })}
                            className={`font-mono text-[10px] uppercase tracking-widest px-4 py-2.5 rounded-full border transition-all duration-300 ${
                              isSelected 
                                ? "bg-zinc-100 text-black border-zinc-100" 
                                : "bg-transparent text-zinc-500 border-white/5 hover:border-white/20 hover:text-zinc-300"
                            }`}
                          >
                            {cat}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                 
                  <div className="relative group">
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-400 placeholder-zinc-600 transition-colors duration-300 font-mono resize-none"
                      placeholder="TELL US ABOUT THE VENTURE OBJECTIVES..."
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full" />
                  </div>

                  
                  <button
                    type="submit"
                    className="group self-start bg-zinc-100 hover:bg-white text-black transition-colors duration-300 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest flex items-center gap-3 mt-4"
                  >
                    Dispatch System
                    <ArrowUpRight 
                      size={15} 
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" 
                    />
                  </button>
                </motion.form>
              ) : (
               
                <motion.div 
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                >
                  <CheckCircle2 size={36} className="text-zinc-400 mb-4 stroke-[1.2]" />
                  <h3 className="font-serif text-2xl text-zinc-100 tracking-tight font-light mb-2">
                    Transmission Acknowledged
                  </h3>
                  <p className="font-mono text-xs text-zinc-500 max-w-sm tracking-wide leading-relaxed uppercase">
                    Your parameters have been logged. The matrix system will establish contact within a brief structural window.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}