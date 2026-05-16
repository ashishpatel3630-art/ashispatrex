import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log("Subscribed:", email);
      setEmail("");
      setMessage("Subscribed successfully! 🎉");
      setIsLoading(false);
      setTimeout(() => setMessage(""), 3000);
    }, 600);
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 py-20">


        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Stay in the Loop </h2>
            <p className="text-gray-300 mb-8 text-sm md:text-base">Get the latest updates, tips, and exclusive insights delivered to your inbox.</p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-5 py-3 w-full sm:flex-1 sm:max-w-sm rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:opacity-50 transition-all duration-300 px-8 py-3 rounded-xl font-semibold text-white"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </motion.button>
            </form>

            {message && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 mt-4 text-sm font-medium"
              >
                {message}
              </motion.p>
            )}
          </div>
        </motion.div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
    
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Patrex Media</h2>
            <p className="text-gray-400 text-sm leading-6 mb-6">
              Crafting exceptional digital experiences with cutting-edge UI/UX design and web development.
            </p>
            
            <div className="flex gap-4">
              {[
                { icon: FaInstagram, href: "https://instagram.com/Patrex_Media", label: "Instagram" },
                { icon: FaTwitter, href: "#", label: "Twitter" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/patrex-media-7a0308408", label: "LinkedIn" },
                { icon: FaGithub, href: "#", label: "GitHub" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotateZ: 5 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all duration-300"
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-flex items-center"
                  >
                    → {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                "Web Design",
                "UI/UX Design",
                "Development",
                "Consultation",
                "Maintenance",
              ].map((service) => (
                <li key={service} className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                  → {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="hover:text-blue-400 transition-colors duration-300">
                <p className="font-medium mb-1">📧 Email</p>
                <a href="mailto:ashishpatel3630@gmail.com" className="break-words">
                  ashishpatel3630@gmail.com
                </a>
              </div>
              <div className="hover:text-blue-400 transition-colors duration-300">
                <p className="font-medium mb-1">☏ Phone</p>
                <a href="tel:+917999847253">
                  +91 7999847253
                </a>
              </div>
            </div>
          </motion.div>
        </div>

       
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-white/10 pt-8 text-sm text-gray-400"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p>© 2026 Patrex Media. All rights reserved.</p>
            
            <div className="flex gap-6 text-center md:text-left">
              <Link to="/terms" className="hover:text-blue-400 transition-colors duration-300">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}


export default Footer;