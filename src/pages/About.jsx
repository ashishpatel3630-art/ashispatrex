import React from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { Award, Zap, Users, Target } from "lucide-react";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const stats = [
    { icon: Award, label: "50+ Projects", value: "Delivered" },
    { icon: Users, label: "50+ Clients", value: "Satisfied" },
    { icon: Zap, label: "2+ Years", value: "Experience" },
    { icon: Target, label: "100%", value: "Quality" },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-linear-to-b from-gray-950 via-gray-900 to-black text-white min-h-screen">
        
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15" style={{animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) 2s infinite'}}></div>
        </div>

        <div className="relative z-10">
          
          {/* Hero Section */}
          <section className="pt-32 pb-16 px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                About <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Patrex Media</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're a creative digital agency dedicated to crafting exceptional digital experiences. From concept to deployment, we blend innovation with expertise to deliver solutions that exceed expectations.
              </p>
            </motion.div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-6">
            <motion.div
              className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/30 transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.label}</h3>
                    <p className="text-gray-400">{stat.value}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>

       
          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">

             
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-300"></div>
                
                <div className="relative p-8 md:p-12 backdrop-blur-md bg-white/5">
                  <Target className="w-12 h-12 text-blue-400 mb-6" />
                  <h2 className="text-3xl font-bold mb-4">Mission</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Deliver high-quality web development and UI/UX solutions that empower brands to thrive in the digital landscape.
                  </p>
                </div>
              </motion.div>

          
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-purple-600 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-300"></div>
                
                <div className="relative p-8 md:p-12 backdrop-blur-md bg-white/5">
                  <Zap className="w-12 h-12 text-purple-400 mb-6" />
                  <h2 className="text-3xl font-bold mb-4">Vision</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To become a leading digital agency creating impactful experiences that transform businesses and inspire innovation worldwide.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

       
          <section className="py-16 px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-center mb-16">
                Our <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Core Values</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Innovation", desc: "We push boundaries and embrace new technologies to deliver cutting-edge solutions." },
                  { title: "Quality", desc: "Excellence is non-negotiable. We maintain the highest standards in every project." },
                  { title: "Collaboration", desc: "We work closely with clients to understand their vision and exceed expectations." },
                ].map((value, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/30 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

   
          <section className="py-16 px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="group relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-purple-600 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all duration-300"></div>

                <div className="relative p-12 backdrop-blur-md bg-white/5 text-center">
                  <motion.img
                   src="/photo/ashish.png"
                    alt="Founder"
                    className="w-24 h-24 mx-auto rounded-full border-4 border-cyan-400 shadow-lg mb-6 object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  <h2 className="text-3xl font-bold mb-2">Ashish Mewada</h2>
                  <p className="text-xl bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold mb-4">
                    Founder & CEO
                  </p>

                  <p className="text-gray-300 mb-2">
                    Frontend Developer & UI/UX Designer
                  </p>
                  <p className="text-gray-400 mb-8">
                    2+ years of experience creating digital excellence
                  </p>

                  <div className="flex justify-center gap-6 text-2xl">
                    <motion.a
                      href="https://instagram.com/its_ashish_patel._"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="text-pink-500 hover:text-pink-400 transition"
                    >
                      <FaInstagram />
                    </motion.a>

                    <motion.a
                      href="https://wa.me/917999847253"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="text-green-500 hover:text-green-400 transition"
                    >
                      <FaWhatsapp />
                    </motion.a>

                    <motion.a
                      href="https://linkedin.com/in/ashish-mewada-0499ba379"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="text-blue-500 hover:text-blue-400 transition"
                    >
                      <FaLinkedin />
                    </motion.a>

                    <motion.a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="text-gray-400 hover:text-white transition"
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

         
          <section className="py-16 px-6 pb-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-75"></div>
                <div className="relative bg-black/40 backdrop-blur-md p-12 md:p-16 rounded-3xl border border-white/20">
                  <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
                  <p className="text-xl text-gray-200 mb-8">
                    Ready to bring your vision to life? Let's collaborate and create something amazing.
                  </p>
                  <a href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-4 rounded-lg bg-white text-black font-bold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
                    >
                      Get In Touch
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default About;