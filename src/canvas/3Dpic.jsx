import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import pic from '../assets/pic.webp';
import firstsubpic from '../assets/profile.jpg';
import secondsubpic from '../assets/profilePic.jpg';


function FloatingImage() {
  const meshRef = useRef();
  const texture = useTexture(firstsubpic);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.z = 0; // no weird tilt
      meshRef.current.position.y = 0.1 * Math.sin(t * 1.2);
    }
  });

  return (
    <group ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      {/* Border Circle */}
      <mesh>
        <circleGeometry args={[1.05, 64]} /> {/* slightly bigger radius for border */}
        <meshBasicMaterial color="#1F2937" /> {/* border color */}
      </mesh>

      {/* Main Image Circle */}
      <mesh>
        <circleGeometry args={[1, 64]} />
        <meshStandardMaterial
          map={texture}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>
    </group>
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
