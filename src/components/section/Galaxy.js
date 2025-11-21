'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Text } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useSpring, a } from '@react-spring/three';

function Particles({ count = 5000, mouse = [0, 0] }) {
  const mesh = useRef();
  const { size, viewport } = useThree();
  
  // Generate particles in a sphere
  const [positions, colors] = useMemo(() => {
    const positions = [];
    const colors = [];
    
    for (let i = 0; i < count; i++) {
      // Position in sphere
      const radius = 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      
      // Theme blue color (#1f3d83) with variations
      // Base RGB: 31, 61, 131
      const baseR = 31 / 255;
      const baseG = 61 / 255;
      const baseB = 131 / 255;
      
      // Add some variation to the base color
      const variation = 0.1; // 10% variation
      const rVariation = (Math.random() * 2 - 1) * variation;
      const gVariation = (Math.random() * 2 - 1) * variation;
      const bVariation = (Math.random() * 2 - 1) * variation;
      
      // Calculate final color with variation
      let r = Math.min(1, Math.max(0, baseR + rVariation));
      let g = Math.min(1, Math.max(0, baseG + gVariation));
      let b = Math.min(1, Math.max(0, baseB + bVariation));
      
      // Add some brightness variation
      const brightness = 0.9 + Math.random() * 0.2; // 90-110% brightness
      r = Math.min(1, r * brightness);
      g = Math.min(1, g * brightness);
      b = Math.min(1, b * brightness);
      
      colors.push(r, g, b);
    }
    
    return [new Float32Array(positions), new Float32Array(colors)];
  }, [count]);
  
  useFrame((state) => {
    if (mesh.current) {
      // Slow rotation
      mesh.current.rotation.x += 0.0001;
      mesh.current.rotation.y += 0.0002;
      
      // Mouse interaction
      if (mouse) {
        mesh.current.position.x += (mouse[0] * 0.5 - mesh.current.position.x * 0.5) * 0.01;
        mesh.current.position.y += (-mouse[1] * 0.5 - mesh.current.position.y * 0.5) * 0.01;
      }
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        sizeAttenuation={true}
        vertexColors
        transparent
        opacity={0.8}
        alphaTest={0.01}
      />
    </points>
  );
}

const Galaxy = ({
  count = 5000,
  mouseInteraction = true,
  density = 1.5,
  glowIntensity = 0.5,
  saturation = 0.8,
  hueShift = 240,
  className = '',
  style = {},
  ...props
}) => {
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState([0, 0]);
  
  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (event) => {
      if (mouseInteraction) {
        setMouse([
          (event.clientX / window.innerWidth) * 2 - 1,
          -(event.clientY / window.innerHeight) * 2 + 1
        ]);
      }
    };
    
    if (mouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (mouseInteraction) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseInteraction]);
  
  if (!mounted) return null;

  return (
    <div 
      className={`galaxy-container ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
        ...style
      }}
      {...props}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'transparent',
          pointerEvents: 'none'
        }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        <Particles count={Math.floor(count * density)} mouse={mouseInteraction ? mouse : null} />
        
        <EffectComposer>
          <Bloom 
            intensity={glowIntensity} 
            kernelSize={3} 
            luminanceThreshold={0.1} 
            luminanceSmoothing={0.7} 
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Galaxy;
