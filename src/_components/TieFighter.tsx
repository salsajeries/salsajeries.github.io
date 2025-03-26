// @ts-nocheck

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const TieFighterModel = () => {
  const { scene } = useGLTF("/TieFighter.glb");
  const modelRef = useRef();

  //Use useFrame to rotate the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Adjust the speed of rotation here
    }
  });

  return <primitive ref={modelRef} object={scene} scale={[0.5, 0.5, 0.5]} />;
};

const TieFighter = () => {
  const cameraRef = useRef();

  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [3, 2, 5], near: 0.1, far: 1000 }}
      onCreated={({ camera }) => (cameraRef.current = camera)}
    >
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} />
      <TieFighterModel />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        camera={cameraRef.current}
      />
    </Canvas>
  );
};

export default TieFighter;
