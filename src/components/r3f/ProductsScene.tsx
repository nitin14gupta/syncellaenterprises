"use client";
import React, { Suspense } from "react";
// @ts-ignore
import { Canvas } from "@react-three/fiber";
// @ts-ignore
import { OrbitControls } from "@react-three/drei";

export default function ProductsScene() {
  return (
    <div className="r3f-stage">
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }}>
        <color attach="background" args={["#0D0D0D"]} />
        <ambientLight intensity={0.32} />
        <directionalLight position={[3, 3, 4]} intensity={1.3} />
        <Suspense fallback={null}>
          <group>
            <mesh position={[-2.2, 0, 0]}>
              <sphereGeometry args={[1.2, 32, 32]} />
              <meshStandardMaterial color="#00BFFF" metalness={0.9} roughness={0.2} />
            </mesh>
            <mesh position={[2.2, 0, 0]}>
              <sphereGeometry args={[1.1, 32, 32]} />
              <meshStandardMaterial color="#FF1493" metalness={0.9} roughness={0.2} />
            </mesh>
          </group>
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}


