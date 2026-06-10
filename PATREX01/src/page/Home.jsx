import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowUpRight, PenTool, Briefcase } from 'lucide-react';
import * as THREE from 'three';



function TechWireframeMesh() {
  const meshRef = useRef();


  const [geometry, count] = useMemo(() => {
    const geo = new THREE.TorusGeometry(1.2, 0.4, 30, 100);
    const pos = geo.attributes.position;
    return [geo, pos.count];
  }, []);


  const initialPositions = useMemo(() => {
    return geometry.attributes.position.array.slice();
  }, [geometry]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const posAttr = meshRef.current.geometry.attributes.position;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = initialPositions[i3];
      const y = initialPositions[i3 + 1];
      const z = initialPositions[i3 + 2];

      
      const wave = Math.sin(x * 2 + time * 2) * 0.15 + Math.cos(y * 2 + time * 1.5) * 0.15;
      
      posAttr.setXYZ(
        i, 
        x + wave * (x / 1.5), 
        y + wave * (y / 1.5), 
        z + Math.sin(time + x) * 0.1
      );
    }
    posAttr.needsUpdate = true;
    

    meshRef.current.rotation.y = time * 0.15;
    meshRef.current.rotation.x = time * 0.08;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, 0.4, 0]}>
   
      <meshBasicMaterial 
        color="#8ae0db" 
        wireframe 
        transparent 
        opacity={0.75} 
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function GoldenOrbitRings() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.4, 0]} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
     
      <mesh>
        <torusGeometry args={[1.9, 0.015, 8, 100]} />
        <meshBasicMaterial color="#d4af37" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.75, 0.008, 8, 100]} />
        <meshBasicMaterial color="#c29e2f" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

function DarkBaseRock() {
  const rockRef = useRef();

 
  const rockGeo = useMemo(() => {
    const geo = new THREE.DodecahedronGeometry(0.5, 1);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);
     
      pos.setXYZ(i, x + (Math.random() - 0.5) * 0.15, y + (Math.random() - 0.5) * 0.15, z + (Math.random() - 0.5) * 0.15);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (rockRef.current) {
      rockRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <mesh ref={rockRef} geometry={rockGeo} position={[0.2, -1.1, 0.5]} scale={[1.1, 1.4, 1]}>
      <meshStandardMaterial 
        color="#171717" 
        roughness={0.9} 
        metalness={0.2} 
        flatShading={true}
      />
    </mesh>
  );
}

function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
      <ambientLight intensity={0.4} />

      <directionalLight position={[5, 3, 5]} intensity={2} color="#e5c158" />
      <directionalLight position={[-5, -2, 2]} intensity={1.5} color="#4fa8a3" />
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <TechWireframeMesh />
        <GoldenOrbitRings />
        <DarkBaseRock />
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}



export default function Hero() {
  return (
    <div className="min-h-screen
     bg-black
      text-white
       flex items-center 
       justify-center
        p-4 md:p-8 
        font-sans 
        antialiased">
      <div className="w-full 
      max-w-7xl grid 
      grid-cols-1 
      lg:grid-cols-3 
      gap-6">
        

        <div className="lg:col-span-2 border border-zinc-800/80 
        rounded-3xl bg-[#0d0c08] 
        bg-gradient-to-br from-[#0c0b08] to-[#040404] 
        p-8 
        md:p-12 
        flex flex-col 
        justify-between relative 
        overflow-hidden group 
        min-h-[620px] 
        md:min-h-[660px]"
        >
          
         
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none font-mono text-[10px] p-6 leading-relaxed z-0">
            <div>vertexShader: &#123;</div>
            <div className="pl-4">naneler = 'vertexShader';</div>
            <div className="pl-4">transport.merg(e);</div>
            <div className="pl-4">geometry.eee(L.1);</div>
            <div>&#125;);</div>
            <div className="mt-20 ml-32">
              <div>vertexShader: &#123;</div>
              <div className="pl-4">vertexShader: "daXbe1..""</div>
              <div className="pl-4">bufferShader: "energ..."</div>
              <div className="pl-4">ferGeometry.setAttribute();</div>
              <div>&#125;);</div>
            </div>
          </div>

         
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-radial-gradient from-amber-500/10 to-transparent blur-[120px] pointer-events-none z-0" />


          <div className="self-start relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1 border border-zinc-800 rounded-full text-[11px] tracking-widest uppercase text-zinc-400 bg-black/60 backdrop-blur-md">
              <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
              Digital Craftsmanship
            </span>
          </div>

    
          <div className="absolute top-0 right-0 bottom-0 left-0 lg:left-1/4 z-10 pointer-events-auto h-full w-full lg:w-[75%]">
            <ThreeScene />
          </div>

    
          <div className="relative z-20 max-w-xl mt-10 lg:mt-0 pointer-events-none">
            <h1 className="text-4xl md:text-[56px] font-normal tracking-tight leading-[1.12] text-zinc-100">
              We don't <br />
              just design <br />
              <span className="font-serif italic font-light text-zinc-300">experiences</span> <br />
              we <span className="text-[#d4af37] font-medium tracking-wide">define</span> them
            </h1>
            
            <p className="mt-6 text-xs md:text-sm text-zinc-400/90 leading-relaxed max-w-sm pointer-events-auto">
              We craft stunning digital experiences that combine creativity, strategy, and cutting-edge technology to transform your vision into reality.
            </p>
          </div>

          
          <div className="relative z-20 flex flex-wrap gap-4 mt-8">
            <motion.button 
              whileHover={{ scale: 1.02, borderColor: '#555' }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 border border-zinc-800 rounded-full text-xs font-medium tracking-wide text-zinc-300 bg-zinc-950/80 backdrop-blur-sm hover:text-white transition-colors"
            >
              Our Project <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.02, bg: '#c5a333' }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 border border-zinc-700/50 rounded-full text-xs font-medium tracking-wide text-black bg-[#d4af37] transition-all shadow-[0_4px_24px_rgba(212,175,55,0.15)]"
            >
              Start a Project <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>

  
        <div className="flex flex-col gap-6 justify-between h-full">
          
          <div className="flex-1 border border-zinc-800/80 rounded-3xl bg-[#090909] p-8 flex flex-col items-center justify-center text-center group hover:border-zinc-700/80 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center mb-5 text-[#d4af37] shadow-inner">
              <PenTool className="w-4 h-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-1">3+</h2>
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">Years of Experience</p>
            <p className="text-xs text-zinc-500 max-w-[230px] leading-relaxed">
              A Decade of Pushing Pixels, Crafting Digital Excellence, and Delivering Unmatched Experiences.
            </p>
          </div>

        
          <div className="flex-1 border border-zinc-800/80 rounded-3xl bg-[#090909] p-8 flex flex-col items-center justify-center text-center group hover:border-zinc-700/80 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center mb-5 text-[#d4af37] shadow-inner">
              <Briefcase className="w-4 h-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-1">22+</h2>
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">Projects Delivered</p>
            <p className="text-xs text-zinc-500 max-w-[230px] leading-relaxed">
              Project delivered. Precision in every pixel. Crafted with purpose, built to perform.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}