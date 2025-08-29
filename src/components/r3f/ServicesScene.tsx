"use client";
import React, { Suspense, useRef } from "react";
import type { Mesh } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Node({ position = [0,0,0], color = "#8A2BE2" }: { position?: [number,number,number]; color?: string }) {
  const ref = useRef<Mesh | null>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime()*2 + position[0]) * 0.05);
  });
  return (
    <mesh ref={ref} position={position as any}>
      <boxGeometry args={[0.6, 0.6, 0.6]} />
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.2} />
    </mesh>
  );
}

export default function ServicesScene() {
  const nodes = [
    [-2,1,0], [-0.5,1,0], [1,1,0], [2.5,1,0],
    [-2,-0.2,0], [-0.5,-0.2,0], [1,-0.2,0], [2.5,-0.2,0]
  ] as [number,number,number][];
  return (
    <div className="r3f-stage">
      <Canvas camera={{ position: [0, 0.6, 9], fov: 55 }}>
        <color attach="background" args={["#0D0D0D"]} />
        <ambientLight intensity={0.32} />
        <directionalLight position={[3, 3, 4]} intensity={1.2} />
        <Suspense fallback={null}>
          {nodes.map((p,i) => <Node key={i} position={p} color={i%2?"#00BFFF":"#8A2BE2"} />)}
          <mesh rotation={[Math.PI/2,0,0]} position={[0,-1.6,0]}>
            <ringGeometry args={[3.6,3.8,64]} />
            <meshBasicMaterial color="#00FFFF" transparent opacity={0.35} />
          </mesh>
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}


