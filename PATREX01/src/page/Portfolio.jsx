import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const themeConfigurations = {
  stateA: {
    ambientBg: '#050505',
    cardBg: 'linear-gradient(145deg, #111112 0%, #080809 100%)',
    borderColor: '#1a1a1c',
    primaryText: '#ffffff',
    secondaryText: '#8e8e93',
    accentColor: '#0ea5e9',
    glassStepBg: 'rgba(20, 20, 22, 0.75)',
    tooniImg: "Photos/Pro1.png",
    tooniTitle: "NovaCart™ — Dress with Color",
    novaImg: "Photos/Pro12.png",
    novaTitle: "NOVACART — Look New Everyday",
    testimonialQuote: '"Our dress shop became so much more efficient after the upgrade. From browsing to checkout, everything feels faster and more reliable for our customers."',
    testimonialAuthor: "Alexander Rowe",
    testimonialRole: "CEO, Novacart"
  },
  stateB: {
    ambientBg: '#f5f5f7',
    cardBg: 'linear-gradient(145deg, #ffffff 0%, #fbfbfd 100%)',
    borderColor: '#e5e5ea',
    primaryText: '#1d1d1f',
    secondaryText: '#86868b',
    accentColor: '#7f00ff',
    glassStepBg: 'rgba(255, 255, 255, 0.8)',
    tooniImg: "/public/Photos/pro2.png",
    tooniTitle: "TOONI™ — Luxury Ready-To-Wear Editorial",
    novaImg: "Photos/pro22.png",
    novaTitle: "TONU — Next-Gen Trendings ",
    testimonialQuote: '"Working with this team completely changed how our dress shop looks and feels online. The design is smooth, fast, and our customers love browsing now."',
    testimonialAuthor: "Victoria Vance",
    testimonialRole: "VP of Product, Tooni International"
  }
};

export default function MasterPremiumEcosystem() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorLabelRef = useRef(null);
  const approachLensRef = useRef(null);

  // One state flag controlling every single module across the DOM simultaneously
  const [activeState, setActiveState] = useState('stateA');
  const current = themeConfigurations[activeState];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cursor = cursorRef.current;

      // 1. Kinetic Ribbon Elastic Cursor Physics
      let mouse = { x: 0, y: 0 };
      let lastMouse = { x: 0, y: 0 };
      let cursorPos = { x: 0, y: 0 };

      const handleMove = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };
      window.addEventListener('mousemove', handleMove);

      gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - 0.18, gsap.ticker.deltaRatio());
        cursorPos.x += (mouse.x - cursorPos.x) * dt;
        cursorPos.y += (mouse.y - cursorPos.y) * dt;
        
        // Calculate velocity vector for the stretch ribbon effect
        const dx = mouse.x - lastMouse.x;
        const dy = mouse.y - lastMouse.y;
        const velocity = Math.min(Math.sqrt(dx * dx + dy * dy), 120);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        gsap.set(cursor, { 
          x: cursorPos.x, 
          y: cursorPos.y,
          scaleX: 1 + velocity * 0.008,
          scaleY: 1 - velocity * 0.004,
          rotation: angle
        });

        lastMouse.x = mouse.x;
        lastMouse.y = mouse.y;
      });

      gsap.utils.toArray('.gsap-reveal-node').forEach((node) => {
        gsap.from(node, {
          y: 40,
          opacity: 0,
          duration: 1.4,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 88%'
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);


  const toggleGlobalEcosystem = () => {
   
    const tl = gsap.timeline();
    tl.to('.global-transition-target', {
      opacity: 0,
      scale: 0.98,
      duration: 0.3,
      stagger: 0.04,
      ease: 'power3.in',
      onComplete: () => {
        setActiveState((prev) => (prev === 'stateA' ? 'stateB' : 'stateA'));
      }
    });

    tl.to('.global-transition-target', {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.04,
      ease: 'power4.out'
    });
  };


  const updateCursor = (variant, text = "") => {
    const cursor = cursorRef.current;
    const label = cursorLabelRef.current;
    if (!cursor) return;

    if (variant === 'trigger') {
      label.innerText = text;
      gsap.to(cursor, { width: 90, height: 90, backgroundColor: current.primaryText, mixBlendMode: 'difference', borderColor: 'transparent', duration: 0.35 });
      gsap.to(label, { opacity: 1, scale: 1, color: current.ambientBg, duration: 0.2 });
    } else {
      label.innerText = "";
      gsap.to(cursor, { width: 14, height: 14, backgroundColor: 'transparent', mixBlendMode: 'normal', borderColor: 'rgba(128,128,128,0.5)', duration: 0.35 });
      gsap.to(label, { opacity: 0, scale: 0.5, duration: 0.2 });
    }
  };


  const process3DMovement = (e, targetId) => {
    const card = document.getElementById(targetId);
    if (!card) return;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    gsap.to(card, {
      rotateX: -y / 18,
      rotateY: x / 18,
      transformPerspective: 1200,
      duration: 0.25,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  const clear3DMovement = (targetId) => {
    const card = document.getElementById(targetId);
    if (!card) return;
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
  };

  return (
    <div 
      ref={containerRef} 
      style={{ backgroundColor: current.ambientBg, transition: 'background-color 0.8s cubic-bezier(0.25, 1, 0.5, 1)' }}
      class="ecosystem-container-root"
    >
      <div ref={cursorRef} class="kinetic-ribbon-cursor">
        <span ref={cursorLabelRef} class="kinetic-ribbon-label"></span>
      </div>

      <style>{`
        .kinetic-ribbon-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 14px;
          height: 14px;
          border: 1px solid rgba(128, 128, 128, 0.5);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .kinetic-ribbon-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          opacity: 0;
          transform: scale(0.6);
        }
        .luxury-cursor-hide { cursor: none !important; }

        /* Main Workspace Scaffold */
        .eco-main-grid { max-width: 1260px; margin: 0 auto; padding: 100px 24px; font-family: 'Inter', sans-serif; }
        .serif-font-style { font-family: 'Playfair Display', serif; font-style: italic; }

        /* Top Module Header Configuration */
        .eco-top-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 90px; gap: 40px; flex-wrap: wrap; }
        .eco-badge-tag { padding: 8px 18px; border-radius: 99px; font-size: 11px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; }
        .eco-title-block { font-size: 40px; font-weight: 300; line-height: 1.35; max-width: 640px; }

        /* Service Row Alignments */
        .eco-services-column { display: flex; flex-direction: column; gap: 40px; margin-bottom: 120px; }
        .eco-service-row { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
        @media (min-width: 1024px) { .eco-service-row { grid-template-columns: 4fr 5fr 3fr; gap: 60px; } }

        .eco-service-title-pane h3 { font-size: 32px; font-weight: 400; margin: 12px 0; }
        .eco-service-title-pane p { font-size: 14px; line-height: 1.65; max-width: 380px; }

        /* 3D Visual Cards Box */
        .eco-3d-perspective-shell { perspective: 1400px; width: 100%; }
        .eco-visual-surface { border-radius: 24px; height: 240px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }

        /* Grid Framework Portfolio Blocks */
        .eco-portfolio-matrix { display: grid; grid-template-columns: 1fr; gap: 32px; }
        @media (min-width: 992px) { .eco-portfolio-matrix { grid-template-columns: 1.15fr 0.85fr; } }

        .eco-suite-card { border-radius: 32px; overflow: hidden; min-height: 480px; display: flex; flex-direction: column; justify-content: space-between; position: relative; }
        .eco-card-space { padding: 40px; }
        
        .eco-browser-mock { background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 45px 90px rgba(0,0,0,0.15); border: 1px solid rgba(0,0,0,0.05); }
        .eco-browser-mock img { width: 100%; display: block; height: auto; }

        /* Dynamic Approach Module Content */
        .eco-approach-box { min-height: 520px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; padding: 45px; }
        .eco-lens-parallax-container { position: absolute; inset: 0; z-index: 1; }
        .eco-lens-parallax-container img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.4) contrast(1.15); }
        .eco-approach-inner-content { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; justify-content: space-between; gap: 40px; }
        .eco-blur-step-pill { backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); padding: 22px 26px; border-radius: 20px; max-width: 360px; align-self: flex-end; }

        /* Pill Form Badges and Bullets */
        .eco-spec-pill { display: inline-block; padding: 6px 14px; border-radius: 99px; font-size: 11px; font-weight: 600; margin-bottom: 16px; }
        .eco-list-stack { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; font-size: 14px; }
        
        /* Smooth Native CSS Overwrite System */
        .global-transition-target { transition: color 0.6s ease, border-color 0.6s ease; }
      `}</style>

      <main class="eco-main-grid">

        <div class="eco-top-header gsap-reveal-node">
          <span class="eco-badge-tag global-transition-target" style={{ backgroundColor: current.borderColor, color: current.secondaryText }}>
            System Architecture
          </span>
          <h2 class="eco-title-block global-transition-target" style={{ color: current.secondaryText }}>
            We build high-fidelity <span class="serif-font-style global-transition-target" style={{ color: current.primaryText }}>digital products</span> engineered around scalable execution.
          </h2>
        </div>

       
        <div class="eco-services-column">
   
          <div class="eco-service-row gsap-reveal-node">
            <div class="eco-service-title-pane">
              <span class="serif-font-style global-transition-target" style={{ color: current.accentColor, fontSize: '20px' }}>01 /</span>
              <h3 class="global-transition-target" style={{ color: current.primaryText }}>Interface Engineering</h3>
              <p class="global-transition-target" style={{ color: current.secondaryText }}>Transforming comprehensive enterprise blueprints into lightning-fast interactive environments.</p>
            </div>
            <div class="eco-3d-perspective-shell">
              <div 
                id="srv-3d-node-1"
                class="eco-visual-surface luxury-cursor-hide global-transition-target"
                style={{ background: current.cardBg, border: `1px solid ${current.borderColor}` }}
                onMouseMove={(e) => { process3DMovement(e, 'srv-3d-node-1'); updateCursor('trigger', 'FLIP'); }}
                onMouseLeave={() => { clear3DMovement('srv-3d-node-1'); updateCursor('default'); }}
                onClick={toggleGlobalEcosystem}
              >
               FLIP MORE  <i class="fa-brands fa-figma global-transition-target" style={{ fontSize: '56px', color: current.borderColor }}></i>
              </div>
            </div>
            <div>
              <span class="eco-spec-pill global-transition-target" style={{ backgroundColor: current.borderColor, color: current.primaryText }}>Design Tokens</span>
              <ul class="eco-list-stack global-transition-target" style={{ color: current.secondaryText }}>
                <li><i class="fa-solid fa-circle" style={{ fontSize: '6px', marginRight: '8px', color: current.accentColor }}></i> Component Logic Trees</li>
              </ul>
            </div>
          </div>
        </div>

    
        <div class="eco-portfolio-matrix">
          
     
          <div 
            id="prt-3d-node-1"
            class="eco-suite-card luxury-cursor-hide global-transition-target gsap-reveal-node"
            style={{ background: current.cardBg, border: `1px solid ${current.borderColor}` }}
            onMouseMove={(e) => { process3DMovement(e, 'prt-3d-node-1'); updateCursor('trigger', 'SHIFT'); }}
            onMouseLeave={() => { clear3DMovement('prt-3d-node-1'); updateCursor('default'); }}
            onClick={toggleGlobalEcosystem}
          >
            <div class="eco-card-space global-transition-target">
              <div class="eco-browser-mock">
                <img src={current.tooniImg} alt="Workspace Node Capture" />
              </div>
            </div>
            <div class="eco-card-space global-transition-target" style={{ paddingTop: 0 }}>
              <h4 class="global-transition-target" style={{ fontSize: '18px', fontWeight: '500', color: current.primaryText, margin: '0 0 4px 0' }}>{current.tooniTitle}</h4>
              <span class="global-transition-target" style={{ fontSize: '12px', color: current.secondaryText }}></span>
            </div>
          </div>


          <div class="eco-suite-card eco-approach-box gsap-reveal-node global-transition-target" style={{ border: `1px solid ${current.borderColor}` }}>
            <div class="eco-lens-parallax-container">
              <img ref={approachLensRef} src="Photos/pro3.png" alt="Lens Structure Module" />
            </div>
            <div class="eco-approach-inner-content">
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '13px', fontWeight: '700', color: '#ffffff' }}>Our Strategy</h4>
              <div class="eco-blur-step-pill global-transition-target" style={{ backgroundColor: current.glassStepBg, border: `1px solid ${current.borderColor}` }}>
                <div class="global-transition-target" style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px', color: current.primaryText }}>High-Performance Delivery</div>
                <p class="global-transition-target" style={{ margin: 0, fontSize: '12px', color: current.secondaryText, lineHeight: '1.6' }}>Deploying production solutions built directly on highly clean design components.</p>
              </div>
            </div>
          </div>


          <div 
            id="prt-3d-node-2"
            class="eco-suite-card luxury-cursor-hide global-transition-target gsap-reveal-node"
            style={{ background: current.cardBg, border: `1px solid ${current.borderColor}` }}
            onMouseMove={(e) => { process3DMovement(e, 'prt-3d-node-2'); updateCursor('trigger', 'MUTATE'); }}
            onMouseLeave={() => { clear3DMovement('prt-3d-node-2'); updateCursor('default'); }}
            onClick={toggleGlobalEcosystem}
          >
            <div class="eco-card-space global-transition-target">
              <div class="eco-browser-mock">
                <img src={current.novaImg} alt="Workspace Node Capture" />
              </div>
            </div>
            <div class="eco-card-space global-transition-target" style={{ paddingTop: 0 }}>
              <h4 class="global-transition-target" style={{ fontSize: '18px', fontWeight: '500', color: current.primaryText, margin: '0 0 4px 0' }}>{current.novaTitle}</h4>
              <span class="global-transition-target" style={{ fontSize: '12px', color: current.secondaryText }}></span>
            </div>
          </div>

     
          <div 
            class="eco-suite-card eco-card-space global-transition-target gsap-reveal-node" 
            style={{ background: current.cardBg, border: `1px solid ${current.borderColor}`, justifyContent: 'center', gap: '32px' }}
          >
            <p class="serif-font-style global-transition-target" style={{ fontSize: '23px', lineHeight: '1.6', margin: 0, color: current.primaryText }}>
              {current.testimonialQuote}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img src="Photos/C1.png" alt="Executive Node User" style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <div class="global-transition-target" style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: current.primaryText }}>{current.testimonialAuthor}</div>
                <div class="global-transition-target" style={{ fontSize: '11px', color: current.secondaryText, marginTop: '2px' }}>{current.testimonialRole}</div>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}