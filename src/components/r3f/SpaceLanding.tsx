"use client";
import React, { Suspense } from "react";
import { useProgress } from "@/components/ProgressProvider";

// These imports require the user-installed deps
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Environment } from "@react-three/drei";

function Station() {
  return (
    // Simple placeholder geometry; replace with GLTF once assets are ready
    <mesh rotation={[0.2, 0.4, 0]}>
      <torusKnotGeometry args={[2, 0.6, 220, 32]} />
      <meshStandardMaterial color="#8A2BE2" metalness={0.9} roughness={0.2} emissive="#3a0ca3" emissiveIntensity={0.6} />
    </mesh>
  );
}

type Props = { started?: boolean }

export default function SpaceLanding({ started = false }: Props) {
  const { stepIndex } = useProgress();
  return (
    <div className="r3f-stage">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={["#0D0D0D"]} />
        <ambientLight intensity={started || stepIndex>0 ? 0.35 : 0.2} />
        <directionalLight position={[5, 5, 5]} intensity={started || stepIndex>0 ? 1.6 : 1.2} />
        <Suspense fallback={null}>
          <Stars radius={200} depth={60} count={8000} factor={4} saturation={0} fade speed={1} />
          <Station />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}


