'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingText() {
    const textRef = useRef<THREE.Mesh>(null);

    return (
        <Float
            speed={2}
            rotationIntensity={0.4}
            floatIntensity={0.6}
        >
            <Text3D
                ref={textRef}
                font="/fonts/inter_medium_regular.json"
                bevelEnabled
                bevelSize={0.01}
                bevelThickness={0.1}
                height={0.2}
                lineHeight={0.7}
                letterSpacing={0.05}
                size={0.75}
            >
                Syncella
                <meshStandardMaterial color="#4080ff" />
            </Text3D>
        </Float>
    );
}

export default function FloatingLogo() {
    return (
        <div className="h-[40vh] w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} color="#2080ff" />
                <FloatingText />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
}
