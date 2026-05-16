import { ArrowRight, BookOpen, Star, Check, Zap, TrendingUp, Briefcase, Lightbulb, Rocket } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Additional from "../components/Additional";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { services } from "../data/services";

const premiumServices = [
  {
    title: "Brand Strategy",
    desc: "Complete brand identity and positioning",
    icon: Briefcase,
    gradient: "from-indigo-600 to-purple-500",
    features: ["Market Analysis", "Positioning", "Guidelines"]
  },
  {
    title: "Content Creation",
    desc: "Engaging content for all platforms",
    icon: Lightbulb,
    gradient: "from-yellow-600 to-orange-500",
    features: ["Blog Posts", "Social Media", "Video Scripts"]
  },
  {
    title: "E-Commerce Solutions",
    desc: "Complete online store setup",
    icon: TrendingUp,
    gradient: "from-green-600 to-teal-500",
    features: ["Shopify", "Payment Gateway", "SEO"]
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform apps",
    icon: Zap,
    gradient: "from-cyan-600 to-blue-500",
    features: ["iOS", "Android", "React Native"]
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₹4,999",
    duration: "/month",
    description: "Perfect for small projects",
    features: ["Basic Support", "1 Project", "2 Revisions", "Email Support"],
    popular: false,
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    name: "Professional",
    price: "₹12,999",
    duration: "/month",
    description: "For growing businesses",
    features: ["Priority Support", "5 Projects", "5 Revisions", "24/7 Support", "Advanced Analytics"],
    popular: true,
    gradient: "from-purple-600 to-pink-500"
  },
  {
    name: "Enterprise",
    price: "Custom",
    duration: "Quote",
    description: "Enterprise solutions",
    features: ["Dedicated Account Manager", "Unlimited Projects", "Unlimited Revisions", "Phone Support", "Custom Development"],
    popular: false,
    gradient: "from-orange-600 to-red-500"
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We understand your goals and vision",
    icon: Lightbulb
  },
  {
    step: "02",
    title: "Planning",
    desc: "Strategic planning and roadmap creation",
    icon: Briefcase
  },
  {
    step: "03",
    title: "Execution",
    desc: "Expert development and design",
    icon: Rocket
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Testing and launch",
    icon: Check
  },
];

export default function Services() {
  const navigate = useNavigate();
  const [, setActivePlan] = useState(null);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <Navbar />

      <section className="pt-24 pb-16 bg-linear-to-b from-gray-950 via-gray-900 to-black overflow-x-hidden">

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15" style={{animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) 2s infinite'}}></div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 relative z-10 mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            We combine creativity, technology, and strategy to deliver powerful digital solutions that transform your business.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative rounded-2xl overflow-hidden"
              >
                
                <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

               
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-300"></div>

              
                <div className="relative backdrop-blur-md bg-white/5 rounded-2xl overflow-hidden">
                  
            
                  <div className="overflow-hidden h-48 relative">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      whileHover={{ scale: 1.15 }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-6">
                    
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${service.gradient} p-2.5 flex items-center justify-center`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-lg">
                        <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                        <span className="text-sm font-semibold text-white">{service.rating}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h2>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <motion.h3
                        whileHover={{ scale: 1.05 }}
                        className="text-lg font-bold bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent shrink-0"
                      >
                        {service.price}
                      </motion.h3>
                      
                      <div className="flex items-center gap-2">
                        <motion.button
                          onClick={() => navigate(`/services/${service.slug}`)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-300"
                        >
                          <BookOpen className="w-4 h-4" />
                          Read More
                        </motion.button>

                        <motion.button
                          onClick={() => navigate("/contact")}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 hover:shadow-lg transition-all duration-300"
                        >
                          <ArrowRight className="w-5 h-5 text-white" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </motion.div>
      </section>

     
      <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Premium <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Specialized services to take your business to the next level
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {premiumServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, rotateY: 5 }}
                  className="group relative rounded-xl overflow-hidden cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/30 transition-all duration-300"></div>
                  
                  <div className="relative backdrop-blur-md bg-white/5 p-8 h-full flex flex-col">
                    <div className={`w-14 h-14 rounded-lg bg-linear-to-br ${service.gradient} p-3 flex items-center justify-center mb-4`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 grow">{service.desc}</p>
                    
                    <div className="space-y-2 pt-4 border-t border-white/10">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      
      <section className="py-20 px-6 bg-linear-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A streamlined workflow designed to deliver excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 relative">
        
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20"></div>

            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-linear-to-br from-blue-600/20 to-purple-600/20 border border-white/20 rounded-2xl p-8 text-center relative z-10">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center border-4 border-gray-900">
                        <Icon className="text-white" size={32} />
                      </div>
                    </div>
                    
                    <h3 className="text-sm font-bold text-cyan-400 mb-2">STEP {item.step}</h3>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transparent <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Choose the perfect plan for your needs
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                onHoverStart={() => setActivePlan(index)}
                onHoverEnd={() => setActivePlan(null)}
                className="group relative rounded-2xl overflow-hidden"
              >
                {plan.popular && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-linear-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`absolute inset-0 bg-linear-to-br ${plan.gradient} opacity-0 ${plan.popular ? 'group-hover:opacity-30' : 'group-hover:opacity-15'} transition-opacity duration-300`}></div>
                <div className={`absolute inset-0 rounded-2xl border ${plan.popular ? 'border-white/40' : 'border-white/10'} group-hover:border-white/40 transition-all duration-300`}></div>

                <div className="relative backdrop-blur-md bg-white/5 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-sm">{plan.duration}</span>
                  </div>

                  <motion.button
                    onClick={() => navigate("/contact")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg font-bold transition-all duration-300 mb-8 ${
                      plan.popular
                        ? 'bg-linear-to-r from-cyan-400 to-blue-500 text-black hover:shadow-lg hover:shadow-cyan-500/50'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    Get Started
                  </motion.button>

                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className={`w-5 h-5 ${plan.popular ? 'text-cyan-400' : 'text-blue-400'}`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <Additional />
      </motion.div>

      
      <a
        href="https://wa.me/917999847253"
        className="fixed bottom-28 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-40"
      >
        <FaWhatsapp size={24} />
      </a>

      <Footer />
    </>
  );
}
