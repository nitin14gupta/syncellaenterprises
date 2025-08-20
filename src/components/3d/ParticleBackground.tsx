'use client';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleField({ count = 5000 }) {
    const mesh = useRef<THREE.Points>(null);

    // Create particle positions
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 50;
            const y = (Math.random() - 0.5) * 50;
            const z = (Math.random() - 0.5) * 50;

            // Particle size
            const size = Math.random() * 0.5 + 0.1;

            // Color based on position
            const r = Math.abs(x / 50) * 0.8 + 0.2;
            const g = Math.abs(y / 50) * 0.5 + 0.5;
            const b = Math.abs(z / 50) * 0.8 + 0.2;

            temp.push({ x, y, z, size, color: new THREE.Color(r, g, b) });
        }
        return temp;
    }, [count]);

    // Create buffers for particles
    const [positions, sizes, colors] = useMemo(() => {
        const positions = new Float32Array(particles.length * 3);
        const sizes = new Float32Array(particles.length);
        const colors = new Float32Array(particles.length * 3);

        particles.forEach((particle, i) => {
            positions[i * 3] = particle.x;
            positions[i * 3 + 1] = particle.y;
            positions[i * 3 + 2] = particle.z;

            sizes[i] = particle.size;

            colors[i * 3] = particle.color.r;
            colors[i * 3 + 1] = particle.color.g;
            colors[i * 3 + 2] = particle.color.b;
        });

        return [positions, sizes, colors];
    }, [particles]);

    useFrame((state, delta) => {
        if (!mesh.current) return;

        // Rotate the entire particle field
        mesh.current.rotation.y += delta * 0.05;
        mesh.current.rotation.x += delta * 0.01;

        // Update positions for a flowing effect
        const positions = mesh.current.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += Math.sin(state.clock.elapsedTime + positions[i] * 0.1) * 0.01;
            positions[i] += Math.cos(state.clock.elapsedTime + positions[i + 2] * 0.1) * 0.01;
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={sizes.length}
                    array={sizes}
                    itemSize={1}
                    args={[sizes, 1]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={colors.length / 3}
                    array={colors}
                    itemSize={3}
                    args={[colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                sizeAttenuation
                vertexColors
                transparent
                opacity={0.6}
                depthWrite={false}
            />
        </points>
    );
}

export default function ParticleBackground({ className = '' }) {
    return (
        <div className={`fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none ${className}`}>
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
                <ParticleField />
            </Canvas>
        </div>
    );
}
