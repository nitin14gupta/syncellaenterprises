"use client";
import React, { Suspense } from "react";
// @ts-ignore
import { Canvas } from "@react-three/fiber";
// @ts-ignore
import { OrbitControls, Stars } from "@react-three/drei";

export default function AboutScene() {
  return (
    <div className="r3f-stage">
      <Canvas camera={{ position: [0, 0, 7], fov: 55 }}>
        <color attach="background" args={["#0D0D0D"]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[3, 3, 4]} intensity={1.2} />
        <Suspense fallback={null}>
          <Stars radius={150} depth={40} count={5000} factor={3} saturation={0} fade speed={1} />
          <mesh rotation={[0.3, 0.2, 0]}>
            <icosahedronGeometry args={[2.2, 0]} />
            <meshStandardMaterial color="#00BFFF" metalness={0.8} roughness={0.25} />
          </mesh>
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}


