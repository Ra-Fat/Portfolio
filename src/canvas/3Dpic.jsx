import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import firstsubpic from '../assets/profile.jpg';
import studentClothes from '../assets/whitecloth.png';


function FloatingImage({ texture }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.z = 0;
      meshRef.current.position.y = 0.1 * Math.sin(t * 1.2);
    }
  });

  return (
  <group ref={meshRef} scale={[1.6, 1.6, 1.6]}>

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
  // Load texture explicitly, so we can track loading status
  const texture = useLoader(THREE.TextureLoader, firstsubpic);
  const [loaded, setLoaded] = useState(false);

  // Mark loaded once texture is ready
  useEffect(() => {
    if (texture) {
      setLoaded(true);
    }
  }, [texture]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      {!loaded ? (
        // Simple loading placeholder, can be replaced with spinner
        <div className="text-white text-center">Loading Image...</div>
      ) : (
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: true }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight intensity={0.8} position={[3, 2, 5]} />
          <FloatingImage texture={texture} />
        </Canvas>
      )}
    </div>
  );
};

export default FloatingImageCanvas;
