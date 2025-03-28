// @ts-nocheck

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

interface TieFighterModelProps {
  isSpinning: boolean;
}

const TieFighterModel: React.FC<TieFighterModelProps> = ({ isSpinning }) => {
  const { scene } = useGLTF("/TieFighter.glb");
  const modelRef = useRef();

  // Use useFrame to rotate the model
  useFrame(() => {
    if (modelRef.current && isSpinning) {
      modelRef.current.rotation.y += 0.005; // Adjust the speed of rotation here
    }
  });

  return <primitive ref={modelRef} object={scene} scale={[0.5, 0.5, 0.5]} />;
};

const TieFighter = ({ isSpinning }: { isSpinning: boolean }) => {
  const cameraRef = useRef();

  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [3, 2, 5], near: 0.1, far: 1000 }}
      onCreated={({ camera }) => (cameraRef.current = camera)}
    >
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} />
      <TieFighterModel isSpinning={isSpinning} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        camera={cameraRef.current}
      />
    </Canvas>
  );
};

export default TieFighter;
