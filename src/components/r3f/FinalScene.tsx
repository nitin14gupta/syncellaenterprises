"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

export default function FinalScene() {
  return (
    <div className="r3f-stage">
      <Canvas camera={{ position: [0, 0, 9], fov: 55 }}>
        <color attach="background" args={["#0D0D0D"]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.6} />
        <Suspense fallback={null}>
          <Stars radius={240} depth={80} count={9000} factor={5} saturation={0} fade speed={1} />
          <mesh rotation={[0.2, 0.5, 0]}>
            <torusKnotGeometry args={[2.4, 0.5, 280, 36]} />
            <meshStandardMaterial color="#00FF41" metalness={0.95} roughness={0.15} emissive="#00ff41" emissiveIntensity={0.25} />
          </mesh>
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}


