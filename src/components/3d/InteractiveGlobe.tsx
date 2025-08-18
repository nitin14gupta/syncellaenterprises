'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Create a floating globe component
function Globe(props) {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.y = time * 0.1;
        meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    });

    return (
        <mesh {...props} ref={meshRef}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
                color="#50a8ff"
                metalness={0.2}
                roughness={0.6}
                emissive="#0044aa"
                emissiveIntensity={0.2}
            />
        </mesh>
    );
}

// Lights component
function Lights() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} color="#2080ff" intensity={1} />
        </>
    );
}

// The main component that exports the 3D scene
export default function InteractiveGlobe() {
    return (
        <div className="h-[40vh] w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <Lights />
                <Globe position={[0, 0, 0]} />
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 1.5}
                />
            </Canvas>
        </div>
    );
}
