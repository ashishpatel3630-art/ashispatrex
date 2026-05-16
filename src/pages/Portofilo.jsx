import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "High standard and excellent quality of work. They helped my business grow in digital.",
    name: "Bob crew",
    role: "Digital Marketer",
  },
  {
    text: "Awesome Work! High standard and great work. Really helped.",
    name: "Abhishek",
    role: "Shop Owner",
  },
  {
    text: "High standard and excellent quality of work. They helped my business grow in digital.",
    name: "JOJO ADAM",
    role: "Digital Marketer",
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const item = testimonials[index];

  return (
    <section className="mt-28 px-6 text-center overflow-hidden">
      
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        What People <span className="text-blue-500">Say About Us</span>
      </h2>

      <div className="flex justify-center relative h-[Ln 42, col 52]">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            
            initial={{ x: 120, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -120, opacity: 0, scale: 0.95 }}

            transition={{ duration: 0.7, ease: "easeInOut" }}
            
            className="absolute bg-gray-800 p-6 rounded-xl shadow-lg max-w-md w-full"
          >
            <p className="text-yellow-400 text-lg">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>

            <p className="text-gray-300 mt-4 text-sm">
              {item.text}
            </p>

            <div className="mt-4">
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-gray-400 text-sm">{item.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Testimonials;