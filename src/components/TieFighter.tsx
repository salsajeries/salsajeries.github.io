import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const TieFighterModel: React.FC = () => {
  const { scene } = useGLTF("/TieFighter.glb");
  const modelRef = useRef<THREE.Object3D>();

  // Use useFrame to rotate the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Adjust the speed of rotation here
    }
  });

  return <primitive ref={modelRef} object={scene} scale={[0.5, 0.5, 0.5]} />;
};

const TieFighter: React.FC = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0);
    }
  }, []);

  return (
    <Canvas
      camera={{ position: [3, 2, 5], near: 0.1, far: 1000 }}
      onCreated={({ camera }) => {
        cameraRef.current = camera as THREE.PerspectiveCamera;
      }}
    >
      {/* Increase the intensity of the ambient light */}
      <ambientLight intensity={2} />

      {/* Increase the intensity of the point light */}
      <pointLight position={[10, 10, 10]} intensity={2} />

      <TieFighterModel />
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
};

export default TieFighter;
