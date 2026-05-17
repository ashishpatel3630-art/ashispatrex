import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Working with Patrex Media was one of the best decisions for my business. They completely redesigned our website and improved our online presence. Within a few weeks, we started getting more customer inquiries through Instagram and Google. Their communication and dedication really stood out.",
    name: "Rohit Sharma",
    role: "Cafe Owner",
    avatar: "RS",
  },

  {
    text: "I honestly loved the experience of working with this team. They understood exactly what I wanted and turned my ideas into a clean, modern website. The design felt premium and the entire process was smooth from start to finish.",
    name: "Abhishek Verma",
    role: "Fitness Coach",
    avatar: "AV",
  },

  {
    text: "Professional, creative, and very supportive. They helped us improve our branding and social media presence, which brought more engagement and better trust from customers. I’d definitely recommend them to anyone looking to grow online.",
    name: "Jojo Adam",
    role: "Digital Marketing Consultant",
    avatar: "JA",
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const item = testimonials[index];

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="max-w-6xl mx-auto">
      
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          What People <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Say About Us</span>
        </motion.h2>
      </div>

      <div className="relative flex justify-center items-center py-8">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 120, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -120, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full max-w-2xl"
          >
            <div className="relative rounded-3xl overflow-hidden group">
              
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-15 transition-opacity duration-300"></div>

              {/* Border */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative p-8 md:p-12 backdrop-blur-md bg-white/5">
                
                {/* Quote Icon */}
                <div className="flex gap-2 mb-6">
                  <Quote className="w-6 h-6 text-cyan-400" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-300 text-amber-300" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-200 text-lg mb-8 leading-relaxed italic">
                  "{item.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-white">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">{item.name}</h4>
                    <p className="text-gray-400 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute left-0 right-0 flex justify-between items-center px-4 md:px-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="hidden md:flex w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 items-center justify-center transition-all duration-300 backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="hidden md:flex w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 items-center justify-center transition-all duration-300 backdrop-blur-md"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-cyan-400 w-8" : "bg-white/20 w-2"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;