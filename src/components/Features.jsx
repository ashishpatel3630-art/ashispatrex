import { CheckCircle, Clock, Phone, DollarSign, Code, Lightbulb, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: CheckCircle, title: "100% Client Satisfaction", color: "from-emerald-500 to-cyan-500", desc: "Committed to delivering excellence" },
  { icon: Clock, title: "On-Time Delivery", color: "from-blue-500 to-purple-500", desc: "Meeting all deadlines consistently" },
  { icon: Phone, title: "24/7 Support", color: "from-pink-500 to-rose-500", desc: "Always here when you need us" },
  { icon: DollarSign, title: "Affordable Pricing", color: "from-yellow-500 to-orange-500", desc: "Quality service within budget" },
  { icon: Code, title: "Expert Team", color: "from-indigo-500 to-blue-500", desc: "Skilled professionals with years of experience" },
  { icon: Lightbulb, title: "Modern Mindset", color: "from-violet-500 to-purple-500", desc: "Innovative solutions for tomorrow's challenges" },
  { icon: Zap, title: "Fast Performance", color: "from-cyan-500 to-blue-500", desc: "Optimized for speed and efficiency" },
  { icon: Shield, title: "Secure & Reliable", color: "from-green-500 to-emerald-500", desc: "Enterprise-grade security standards" },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-6 bg-linear-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden">
     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" style={{animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) 2s infinite'}}></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Patrex Media?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We go beyond expectations with a comprehensive range of services and support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.05 }}
                className="group relative rounded-2xl overflow-hidden"
              >
               
                <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

          
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/40 transition-all duration-300"></div>

   
                <div className="absolute -inset-0.5 bg-linear-to-br rounded-2xl from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

            
                <div className="relative p-6 md:p-8 backdrop-blur-md bg-white/5 h-full flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                    className={`w-16 h-16 rounded-xl bg-linear-to-br ${item.color} p-3 mb-4 flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <p className="text-lg font-bold text-gray-100 leading-relaxed mb-2">{item.title}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>

                
                  <div className={`mt-4 h-1 w-8 bg-linear-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;