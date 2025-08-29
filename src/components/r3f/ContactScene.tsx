"use client";
import React, { Suspense, useRef } from "react";
// @ts-expect-error
import { Canvas, useFrame } from "@react-three/fiber";
// @ts-expect-error
import { OrbitControls } from "@react-three/drei";

function ConsolePanel() {
  const ref = useRef<any>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.material.emissiveIntensity = 0.3 + Math.sin(clock.getElapsedTime()*3)*0.2;
  });
  return (
    <mesh rotation={[0.3, 0.2, 0.1]}>
      <boxGeometry args={[3.2, 1.6, 0.2]} />
      <meshStandardMaterial ref={ref as any} color="#00FF41" metalness={0.9} roughness={0.15} emissive="#00ff41" emissiveIntensity={0.35} />
    </mesh>
  );
}

export default function ContactScene() {
  return (
    <div className="r3f-stage">
      <Canvas camera={{ position: [0, 0.5, 9], fov: 55 }}>
        <color attach="background" args={["#0D0D0D"]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 3, 4]} intensity={1.2} />
        <Suspense fallback={null}>
          <ConsolePanel />
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}


