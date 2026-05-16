import React from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, Heart, Shield } from 'lucide-react'

function Additional() {
  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Optimized performance for the best user experience"
    },
    {
      icon: Heart,
      title: "Built with Care",
      desc: "Crafted with attention to every detail"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      desc: "Enterprise-grade security and reliability"
    },
    {
      icon: Check,
      title: "Quality Assured",
      desc: "Rigorous testing and QA processes"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Our <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We deliver more than just services - we deliver results that matter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-15 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-300"></div>

                <div className="relative p-6 backdrop-blur-md bg-white/5 h-full flex flex-col">
                  <Icon className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Additional
