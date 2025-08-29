"use client";
import React, { Suspense, useRef } from "react";
import type { Group } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Planet({ color = "#00BFFF", position = [0,0,0], ring = false }: { color?: string; position?: [number,number,number]; ring?: boolean }) {
  const ref = useRef<Group | null>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.2;
  });
  return (
    <group position={position as unknown as [number,number,number]}>
      <mesh ref={ref as unknown as React.MutableRefObject<Group>}>
        <sphereGeometry args={[1.1, 48, 48]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.2} />
      </mesh>
      {ring && (
        <mesh rotation={[Math.PI / 2.8, 0, 0]}>
          <torusGeometry args={[1.6, 0.05, 12, 120]} />
          <meshStandardMaterial color="#8A2BE2" emissive="#8A2BE2" emissiveIntensity={0.5} transparent opacity={0.7} />
        </mesh>
      )}
    </group>
  );
}

export default function ProductsScene() {
  return (
    <div className="r3f-stage">
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }}>
        <color attach="background" args={["#0D0D0D"]} />
        <ambientLight intensity={0.32} />
        <directionalLight position={[3, 3, 4]} intensity={1.3} />
        <Suspense fallback={null}>
          <group>
            <Planet color="#00BFFF" position={[-2.6, 0, 0]} ring />
            <Planet color="#FF1493" position={[2.6, 0.2, 0]} />
          </group>
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}


