"use client";
import React, { Suspense, useMemo, useRef, useState } from "react";
import type { Group } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line, Sparkles, Grid } from "@react-three/drei";

function NeonNode({ position = [0,0,0], color = "#8A2BE2" }: { position?: [number,number,number]; color?: string }) {
  const ref = useRef<Group | null>(null);
  const [hovered, setHovered] = useState(false);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const pulse = 1 + Math.sin(t * 3 + position[0]) * 0.08;
    ref.current.scale.setScalar(hovered ? 1.25 : pulse);
  });
  return (
    <group ref={ref} position={position as unknown as [number,number,number]} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial color={color} metalness={0.95} roughness={0.2} emissive={color} emissiveIntensity={0.2} />
      </mesh>
      <mesh rotation={[Math.PI/2,0,0]}>
        <torusGeometry args={[0.9, 0.02, 8, 64]} />
        <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={0.5} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function Beam({ a, b, color = "#00FFFF" }: { a: [number,number,number]; b: [number,number,number]; color?: string }) {
  const points = useMemo(() => [a, b], [a, b]);
  const [opacity, setOpacity] = useState(0.35);
  useFrame(({ clock }) => setOpacity(0.25 + (Math.sin(clock.getElapsedTime()*2) + 1) * 0.25));
  return <Line points={points as unknown as [number,number,number][]} color={color} opacity={opacity} transparent linewidth={2} />;
}

export default function ServicesScene() {
  const cols = [-3, -1, 1, 3];
  const rows = [1.2, 0, -1.2];
  const colors = ["#00BFFF", "#8A2BE2", "#FF1493", "#00FF41"];
  const nodes = useMemo(() => cols.flatMap((x, xi) => rows.map((y) => ({ pos: [x, y, 0] as [number,number,number], color: colors[xi] }))), [cols, rows, colors]);
  const beams = useMemo(() => cols.map((x, xi) => ({ a: [x, rows[0], 0] as [number,number,number], b: [x, rows[rows.length-1], 0] as [number,number,number], color: colors[xi] })), [cols, rows, colors]);

  return (
    <div className="r3f-stage">
      <Canvas camera={{ position: [0, 1.2, 11], fov: 55 }} shadows>
        <color attach="background" args={["#0D0D0D"]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 6, 5]} intensity={1.3} castShadow />
        <Suspense fallback={null}>
          <Sparkles size={4} scale={[10, 5, 1]} count={60} speed={0.6} noise={0.2} color="#00FFFF" />
          {nodes.map((n, i) => <NeonNode key={i} position={n.pos} color={n.color} />)}
          {beams.map((b, i) => <Beam key={i} a={b.a} b={b.b} color={b.color} />)}
          <Grid cellSize={0.6} cellThickness={0.6} sectionSize={4} sectionThickness={1} fadeDistance={24} fadeStrength={1} position={[0,-2,0]} args={[40, 40]} />
        </Suspense>
        <OrbitControls enablePan={false} maxDistance={16} minDistance={6} />
      </Canvas>
    </div>
  );
}


