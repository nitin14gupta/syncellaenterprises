"use client";
import React, { Suspense } from "react";
// @ts-ignore
import { Canvas } from "@react-three/fiber";
// @ts-ignore
import { OrbitControls } from "@react-three/drei";

export default function ServicesScene() {
  return (
    <div className="r3f-stage">
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }}>
        <color attach="background" args={["#0D0D0D"]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[3, 3, 4]} intensity={1.2} />
        <Suspense fallback={null}>
          <mesh rotation={[0.4, 0.6, 0]}>
            <torusGeometry args={[2.2, 0.6, 18, 120]} />
            <meshStandardMaterial color="#8A2BE2" metalness={0.85} roughness={0.2} />
          </mesh>
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}


