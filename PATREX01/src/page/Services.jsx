import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PenTool, Type, ThumbsUp, Network } from 'lucide-react';
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
  
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: -30 }, 
      { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: 'power3.out' }
    );

  
    rowsRef.current.forEach((row) => {
      if (!row) return;

      const timelineDot = row.querySelector('.timeline-dot');
      const serviceInfo = row.querySelector('.service-info');
      const serviceCard = row.querySelector('.service-card');
      const arrowConnector = row.querySelector('.arrow-connector');
      const serviceTags = row.querySelector('.service-tags');

      
      gsap.fromTo(timelineDot,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Info block slide up
      gsap.fromTo(serviceInfo,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );

   
      gsap.fromTo(serviceCard,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );

     
      gsap.fromTo([arrowConnector, serviceTags],
        { opacity: 0, x: -25 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });

   
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

 
  const addToRefs = (el) => {
    if (el && !rowsRef.current.includes(el)) {
      rowsRef.current.push(el);
    }
  };

  const servicesData = [
    {
      icon: <PenTool size={18} className="text-neutral-400 group-hover:text-white transition-colors duration-300" />,
      title: "UI/UX Design",
      description: "Creating meaningful digital experiences through user-centered design. Focused on usability, accessibility, and performance. Helping brands build stronger connections with their audience.",
      tag: "UI/UX Design",
      features: ["Figma", "Wireframing", "User Research"],
      graphic: (
        <svg className="w-2/3 h-2/3 opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 140 L80 60 L120 120 L160 40" stroke="#444" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M130 40 H160 V70" stroke="#666" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 110 L40 140 H70" stroke="#333" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      isDev: true,
      title: "Web Development",
      description: "Modern, responsive websites crafted with the latest technologies for speed, performance, and seamless user experiences.",
      tag: "Web Development",
      features: ["Frontend", "Backend", "Responsive Design"],
      graphic: (
        <svg className="w-2/3 h-2/3 opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="40" width="140" height="100" rx="10" stroke="#555" strokeWidth="6"/>
          <path d="M20 140 H180" stroke="#444" strokeWidth="6" strokeLinecap="round"/>
          <path d="M75 80 L60 90 L75 100" stroke="#aaa" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M125 80 L140 90 L125 100" stroke="#aaa" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M105 75 L95 105" stroke="#aaa" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      icon: <Type size={18} className="text-neutral-400 group-hover:text-white transition-colors duration-300" />,
      title: "Graphic Design",
      description: "Creative visuals crafted to strengthen your brand identity and capture attention. Designed to communicate your message clearly, increase engagement.",
      tag: "Graphic Design",
      features: ["Photoshop", "Illustrator", "Branding"],
      graphic: (
        <svg className="w-2/3 h-2/3 opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 60 Q 50 120, 100 60 T 190 60" stroke="#334455" strokeWidth="4" fill="none"/>
          <path d="M10 90 Q 50 150, 100 90 T 190 90" stroke="#556677" strokeWidth="3" fill="none"/>
          <path d="M10 120 Q 50 180, 100 120 T 190 120" stroke="#8899aa" strokeWidth="2" fill="none"/>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0b0b0b] text-white font-sans px-6 py-16 md:px-16 flex justify-center selection:bg-white selection:text-black" ref={containerRef}>
      <div className="max-w-300 w-full">
        
       
        <header className="flex flex-col md:flex-row justify-between items-start gap-6 mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-neutral-800 bg-linear-to-br from-neutral-900 to-[#0d0d0d] text-sm font-medium tracking-wide">
            <Network size={14} className="text-neutral-400" /> Our Services
          </div>
          <h1 ref={titleRef} className="font-serif text-3xl md:text-4xl font-normal max-w-125 leading-snug md:text-right">
            We Deliver <span className="font-sans text-xl md:text-2xl text-neutral-400 font-light ml-1 block md:inline">&rarr; Comprehensive solution to help businesses grow and thrive</span>
          </h1>
        </header>

   
        <main className="relative after:absolute after:left-6.25 after:top-10 after:bottom-10 after:w-px after:bg-neutral-800 after:z-10 hidden md:block">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              ref={addToRefs} 
              className="group grid grid-cols-[0.9fr_1fr_0.3fr_0.8fr] items-center gap-10 relative mb-24 last:mb-12"
            >

              <div className="relative pl-16 service-info">
                <div className="absolute left-3.25 -top-11 z-30">
                  {service.isDev ? (
                    <span className="text-[10px] font-extrabold border border-neutral-600 px-1 py-0.5 rounded text-neutral-400 group-hover:text-white group-hover:border-white transition-colors duration-300">DEV</span>
                  ) : (
                    service.icon
                  )}
                </div>
                <div className="timeline-dot absolute left-4.75 top-2.5 w-3.5 h-3.5 bg-neutral-400 rounded-full z-20 group-hover:bg-white group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-300"></div>
                <h2 className="text-3xl font-medium tracking-tight mb-4">{service.title}</h2>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-[320px] font-light">{service.description}</p>
              </div>
              
             
              <div className="service-card bg-[#111111] border border-neutral-900 rounded-3xl h-55 overflow-hidden flex items-center justify-center shadow-2xl group-hover:border-neutral-700 group-hover:-translate-y-1 group-hover:shadow-[0_15px_35px_rgba(255,255,255,0.03)] transition-all duration-500">
                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-neutral-900 via-[#121212] to-black">
                  {service.graphic}
                </div>
              </div>
              
         
              <div className="arrow-connector flex justify-center items-center">
                <div className="arrow-line w-15 h-px bg-linear-to-r from-neutral-600 to-transparent relative after:absolute after:right-0 after:-top-0.75 after:w-1.5 after:h-1.5 after:border-t after:border-r after:border-neutral-500 after:rotate-45 group-hover:w-21.25 group-hover:from-white group-hover:after:border-white transition-all duration-500"></div>
              </div>
              
        
              <div className="service-tags pl-4">
                <div className="inline-block border border-neutral-800 px-5 py-1.5 rounded-full text-xs text-neutral-300 bg-[#121212] mb-4 font-medium">{service.tag}</div>
                <ul className="space-y-2.5">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-sm text-neutral-400 flex items-center gap-2.5 font-normal">
                      <ThumbsUp size={12} className="text-neutral-200 opacity-70" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </main>

       
        <div className="space-y-16 md:hidden">
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-col gap-5 border-b border-neutral-900 pb-8 last:border-b-0">
              <div className="flex items-center gap-3">
                {service.isDev ? <span className="text-xs font-bold border border-neutral-500 px-1.5 py-0.5 rounded text-white">DEV</span> : service.icon}
                <h2 className="text-2xl font-medium">{service.title}</h2>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">{service.description}</p>
              <div className="bg-[#111111] border border-neutral-900 rounded-2xl h-45 flex items-center justify-center">
                {service.graphic}
              </div>
              <div>
                <div className="inline-block border border-neutral-800 px-4 py-1 rounded-full text-xs text-neutral-300 bg-[#121212] mb-3">{service.tag}</div>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-xs text-neutral-400 flex items-center gap-2">
                      <ThumbsUp size={10} className="text-white opacity-60" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

       
        <div className="flex justify-center mt-12">
    <Link
    to="/all-services"
    className="bg-[#161616] text-white border border-neutral-800 px-9 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-black hover:border-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
  >
    View All Services
  </Link>
</div>

      </div>
    </div>
  );
}