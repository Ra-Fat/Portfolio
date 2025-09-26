import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import pic from '../assets/pic.webp';
import profile from '../assets/profile.jpg';


function FloatingImage() {
  const meshRef = useRef();
  const texture = useTexture(pic);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = 0.05 * Math.sin(t * 0.6);
      meshRef.current.rotation.y = 0.05 * Math.cos(t * 0.6);
      meshRef.current.position.y = 0.1 * Math.sin(t * 1.2);
    }
  });

  return (
    <mesh ref={meshRef} scale={[1.4, 1.4, 1.4]}>
      {/* Increased plane size slightly */}
      <planeGeometry args={[1.8, 2.0]} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} toneMapped={false} />
    </mesh>
  );
}

const FloatingImageCanvas = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.8} position={[3, 2, 5]} />
        <FloatingImage />
      </Canvas>
    </div>
  );
};

export default FloatingImageCanvas;
