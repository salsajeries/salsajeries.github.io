import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";

const TieFighterModel: React.FC = () => {
  const { scene } = useGLTF("/TieFighter.glb");
  const modelRef = useRef<THREE.Object3D>();
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  // Use useFrame to rotate the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Adjust the speed of rotation here
    }
  });

  // Spring for smooth scale transition
  const { scale } = useSpring({
    scale: pressed
      ? [0.4, 0.4, 0.4]
      : hovered
      ? [0.6, 0.6, 0.6]
      : [0.5, 0.5, 0.5], // Scale up when hovered
    config: { tension: 300, friction: 30 }, // Adjust config for smoothness
  });

  return (
    <group
      onPointerEnter={() => setHovered(true)} // Set hovered to true on pointer over
      onPointerLeave={() => {
        setHovered(false);
        setPressed(false); // Ensure pressed is reset on pointer out
      }} // Set hovered to false on pointer out
      onPointerDown={() => setPressed(true)} // Set pressed to true on pointer down
      onPointerUp={() => setPressed(false)} // Set pressed to false on pointer up
    >
      <animated.group
        ref={modelRef}
        scale={scale} // Use spring scale
      >
        <primitive object={scene} />
      </animated.group>
    </group>
  );
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
