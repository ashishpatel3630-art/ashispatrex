import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitMessage("Message sent successfully! We'll get back to you soon. 🎉");
      setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 4000);
    }, 1200);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen pt-32 pb-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
        
   
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
   
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Let's Create Something <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it. Reach out and let's discuss how we can bring your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
   
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              </motion.div>

          
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "ashishpatel3630@gmail.com",
                  href: "mailto:ashishpatel3630@gmail.com",
                  color: "blue",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 7999847253",
                  href: "tel:+917999847253",
                  color: "purple",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Ready for Remote & On-site",
                  href: "#",
                  color: "pink",
                },
                {
                  icon: Clock,
                  label: "Availability",
                  value: "Monday - Friday, 10AM - 6PM IST",
                  href: "#",
                  color: "emerald",
                },
              ].map((contact, idx) => (
                <motion.a
                  key={idx}
                  href={contact.href}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className={`flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-${contact.color}-500/50 transition-all duration-300 group`}
                >
                  <div className={`w-12 h-12 rounded-lg bg-${contact.color}-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className={`text-${contact.color}-400`} size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{contact.label}</p>
                    <p className="text-white font-medium">{contact.value}</p>
                  </div>
                </motion.a>
              ))}

  
              <motion.div variants={itemVariants} className="pt-4">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80"
                  alt="Team collaboration"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
         
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-1000 animate-pulse"></div>

              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
         
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-blue-400 focus:bg-white/15 outline-none transition-all duration-300"
                      required
                    />
                  </motion.div>

              
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-purple-400 focus:bg-white/15 outline-none transition-all duration-300"
                      required
                    />
                  </motion.div>

                 
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-pink-400 focus:bg-white/15 outline-none transition-all duration-300"
                    />
                  </motion.div>

                
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-blue-400 focus:bg-white/15 outline-none transition-all duration-300"
                      required
                    />
                  </motion.div>

  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-purple-400 focus:bg-white/15 outline-none transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </motion.div>

    
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>

      
                  {submitMessage && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-green-400 text-sm text-center font-medium"
                    >
                      {submitMessage}
                    </motion.p>
                  )}
                </form>

                <p className="text-xs text-gray-400 text-center mt-4">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>

   
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-20 text-center text-gray-400 text-sm"
          >
            <p>💡 Quick Response • 🎯 Premium Solutions • ⚡ Professional Team</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
