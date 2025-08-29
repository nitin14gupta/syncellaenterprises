"use client";
import React, { Suspense, useMemo, useRef } from "react";
import type { Group } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function FloatingIsland({ position = [0,0,0], color = "#00BFFF" }: { position?: [number,number,number]; color?: string }) {
  const ref = useRef<Group | null>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.2;
      ref.current.rotation.y += 0.0025;
    }
  });
  return (
    <group ref={ref} position={position as unknown as [number,number,number]}>
      <mesh castShadow receiveShadow>
        <dodecahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial color={color} metalness={0.85} roughness={0.25} />
      </mesh>
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.05, 0.5, 1.2, 16]} />
        <meshStandardMaterial color="#8A2BE2" emissive="#3a0ca3" emissiveIntensity={0.6} />
      </mesh>
    </group>
  );
}

function LightBridge({ a = [-2.8,0,0], b = [0,0,0] }: { a?: [number,number,number]; b?: [number,number,number] }) {
  const mid = useMemo(() => [(a[0]+b[0])/2, (a[1]+b[1])/2 - 0.8, (a[2]+b[2])/2], [a,b]);
  return (
    <group>
      <mesh position={mid as unknown as [number,number,number]} rotation={[Math.PI/2,0,0]}>
        <torusGeometry args={[1.6, 0.02, 8, 80]} />
        <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={0.6} transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

export default function AboutScene() {
  return (
    <div className="r3f-stage">
      <Canvas camera={{ position: [0, 1.2, 8], fov: 55 }} shadows>
        <color attach="background" args={["#0D0D0D"]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 6, 4]} intensity={1.3} castShadow />
        <Suspense fallback={null}>
          <Stars radius={180} depth={60} count={7000} factor={3.5} saturation={0} fade speed={1} />
          <FloatingIsland position={[-2.8, 0, 0]} color="#00BFFF" />
          <FloatingIsland position={[0, 0.3, 0]} color="#8A2BE2" />
          <FloatingIsland position={[2.8, -0.1, 0]} color="#FF1493" />
          <FloatingIsland position={[5.6, 0.4, 0]} color="#00FF41" />
          <LightBridge a={[-2.8,0,0]} b={[0,0,0]} />
          <LightBridge a={[0,0,0]} b={[2.8,0,0]} />
          <LightBridge a={[2.8,0,0]} b={[5.6,0,0]} />
        </Suspense>
        <OrbitControls enablePan={false} maxDistance={14} minDistance={5} />
      </Canvas>
    </div>
  );
}


