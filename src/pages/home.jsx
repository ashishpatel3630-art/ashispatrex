import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Star, Check, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div 
    className="bg-linear-to-b from-gray-950 via-gray-900 to-black
     text-white 
     min-h-screen 
     overflow-hidden"
     >
      

      <section 
      className="relative 
      pt-32 
      pb-20 
      px-6 
      min-h-screen 
      flex flex-col 
      items-center 
      justify-center">
        
      
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) 2s infinite'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) 4s infinite'}}></div>
        </div>


        <motion.div
          className="text-center max-w-4xl relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Welcome to Patrex Media</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl font-black mt-6 leading-tight"
          >
            Create Digital
            <span className="inline-block mt-4 md:mt-6 bg-blue-500 rounded-2xl px-4 py-3 ">
              Experiences
            </span>
        
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We craft stunning digital experiences that combine creativity, strategy, and cutting-edge technology to transform your vision into reality.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex justify-center items-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-300 text-amber-300" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">Rated 5/5</span>
            </div>
            <div className="w-px h-6 bg-linear-to-b from-transparent via-white/30 to-transparent hidden md:block"></div>
            <p className="text-gray-400 text-sm">Join 50+ Happy Clients</p>
          </motion.div>

      
          <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row justify-center gap-6 items-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg border-2 border-white/30 hover:border-white/60 font-semibold backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:bg-white/10"
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

     
      <section className="relative py-20 px-6 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              What We <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Offer</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Comprehensive digital solutions tailored to bring your brand to life with excellence and innovation
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "UI/UX Design",
                desc: "Solutions focused on clarity, consistency, and exceptional user satisfaction.",
                skills: ["Figma", "Prototyping", "System Design"],
                gradient: "from-blue-600 to-cyan-500",
              },
              {
                title: "Development",
                desc: "Web solutions that combine sleek design with powerful performance and scalability.",
                skills: ["React / Next.js", "E-commerce Solutions", "API Integration"],
                gradient: "from-purple-600 to-blue-500",
              },
              {
                title: "Graphic Design",
                desc: "Designs that leave lasting impressions and elevate your brand identity.",
                skills: ["Icon Design", "Branding", "Visual Systems"],
                gradient: "from-pink-600 to-purple-500",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden"
              >
               
                <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

            
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-300"></div>

            
                <div className="relative p-8 backdrop-blur-md bg-white/5">
                  <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${service.gradient} p-2.5 mb-4`}>
                    <Sparkles className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service.desc}</p>

                  <div className="space-y-3">
                    {service.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/Services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 font-semibold hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="relative py-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold"
            >
              Why Choose <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Patrex Media?</span>
            </motion.h2>
          </div>

          <Features />
        </motion.div>
      </section>

     
      <section className="relative py-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Testimonials />
        </motion.div>
      </section>


      <section className="relative py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto w-full"
        >
          <div className="relative rounded-3xl overflow-hidden">
      

            <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-75"></div>

     
            <div className="relative bg-black/40 backdrop-blur-md p-12 md:p-16 text-center rounded-3xl border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Let's collaborate and create something extraordinary together
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-lg bg-white text-black font-bold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
