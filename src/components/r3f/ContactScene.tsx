"use client";
import React, { Suspense } from "react";
// @ts-ignore
import { Canvas } from "@react-three/fiber";
// @ts-ignore
import { OrbitControls } from "@react-three/drei";

export default function ContactScene() {
  return (
    <div className="r3f-stage">
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }}>
        <color attach="background" args={["#0D0D0D"]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 3, 4]} intensity={1.2} />
        <Suspense fallback={null}>
          <mesh rotation={[0.3, 0.2, 0.1]}>
            <boxGeometry args={[3.2, 1.6, 0.2]} />
            <meshStandardMaterial color="#00FF41" metalness={0.9} roughness={0.15} />
          </mesh>
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}


