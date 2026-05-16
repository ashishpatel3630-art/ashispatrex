import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "backdrop-blur-xl bg-black/40 border-b border-white/20 shadow-2xl shadow-blue-500/10" 
        : "backdrop-blur-xl bg-black/20 border-b border-white/10"
    }`}>
      
      <div className="flex items-center justify-between px-6 md:px-8 py-4 max-w-7xl mx-auto w-full">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="text-2xl font-black bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition">
                PATREX <span className="text-white">MEDIA</span>
              </div>
              <motion.div
                className="absolute -bottom-1 left-0 h-1 bg-linear-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </div>
          </Link>
        </motion.div>


        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex gap-8 text-sm"
        >
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="text-gray-300 hover:text-cyan-400 transition-colors relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                <motion.span
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-cyan-400 opacity-0 group-hover:opacity-100"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  <Sparkles className="w-3 h-3" />
                </motion.span>
              </Link>
            </li>
          ))}
        </motion.ul>

        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-linear-to-r from-blue-500 to-purple-600 px-6 py-2.5 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 group overflow-hidden"
            >
             
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              
              <span className="relative flex items-center gap-2">
                Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </motion.div>

    
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden text-white relative"
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-6 h-6">
            <motion.div
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.button>
      </div>


      <Sidebar open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;