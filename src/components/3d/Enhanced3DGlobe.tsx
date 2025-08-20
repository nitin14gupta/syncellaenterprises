'use client';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, useGLTF, Float } from '@react-three/drei';
import * as THREE from 'three';
// Enhanced Globe component with particles and atmosphere
function EnhancedGlobe(props: any) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const particleRef = useRef<THREE.Points>(null!);
    const atmosphereRef = useRef<THREE.Mesh>(null!);

    // Create a fallback texture if the image isn't available
    const createFallbackTexture = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        if (!ctx) return new THREE.Texture();

        // Create a gradient background
        const grd = ctx.createLinearGradient(0, 0, 0, 512);
        grd.addColorStop(0, '#102060');
        grd.addColorStop(0.5, '#104080');
        grd.addColorStop(1, '#102060');
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 1024, 512);

        // Add some random "continents"
        ctx.fillStyle = '#208040';
        for (let i = 0; i < 7; i++) {
            const x = Math.random() * 1024;
            const y = Math.random() * 512;
            const size = 50 + Math.random() * 100;
            ctx.beginPath();
            ctx.ellipse(x, y, size, size * 0.6, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        return texture;
    };

    // Try to load texture with fallback
    const [texture, setTexture] = React.useState<THREE.Texture | null>(null);

    React.useEffect(() => {
        const loadTexture = async () => {
            try {
                const textureLoader = new THREE.TextureLoader();
                const loadedTexture = await new Promise<THREE.Texture>((resolve, reject) => {
                    textureLoader.load('/images/earth_texture.jpg', resolve, undefined, reject);
                });

                loadedTexture.wrapS = loadedTexture.wrapT = THREE.RepeatWrapping;
                loadedTexture.offset.set(0, 0);
                loadedTexture.repeat.set(1, 1);

                setTexture(loadedTexture);
            } catch (error) {
                console.warn("Earth texture failed to load, using fallback");
                setTexture(createFallbackTexture());
            }
        };

        loadTexture();
    }, []);

    // Create particle positions
    const particleCount = 500;
    const particlePositions = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            const radius = 1.5 + Math.random() * 0.5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
        }
        return positions;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Rotate the globe
        if (meshRef.current) {
            meshRef.current.rotation.y = time * 0.15;
        }

        // Move the particles
        if (particleRef.current) {
            particleRef.current.rotation.y = time * 0.05;
            particleRef.current.rotation.z = time * 0.03;
        }

        // Pulse the atmosphere
        if (atmosphereRef.current && atmosphereRef.current.material) {
            // Type assertion for material to access opacity
            const material = atmosphereRef.current.material as THREE.MeshStandardMaterial;
            material.opacity = 0.6 + Math.sin(time * 0.5) * 0.1;
            atmosphereRef.current.scale.setScalar(1.025 + Math.sin(time * 0.8) * 0.025);
        }
    });

    return (
        <group {...props}>
            {/* Main globe */}
            <mesh ref={meshRef} castShadow>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    map={texture}
                    metalness={0.1}
                    roughness={0.8}
                    emissive="#004080"
                    emissiveIntensity={0.1}
                />
            </mesh>

            {/* Atmosphere */}
            <mesh ref={atmosphereRef} scale={1.025}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    color="#80a0ff"
                    transparent={true}
                    opacity={0.6}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* Particle cloud around the globe */}
            <points ref={particleRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particleCount}
                        array={particlePositions}
                        itemSize={3}
                        args={[particlePositions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.02}
                    color="#ffffff"
                    transparent
                    opacity={0.7}
                />
            </points>

            {/* Floating data point markers */}
            {[...Array(6)].map((_, i) => {
                const theta = (i / 6) * Math.PI * 2;
                const phi = Math.random() * Math.PI;
                const radius = 1.05;
                const x = radius * Math.sin(phi) * Math.cos(theta);
                const y = radius * Math.sin(phi) * Math.sin(theta);
                const z = radius * Math.cos(phi);

                return (
                    <Float key={i} speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
                        <mesh position={[x, y, z]}>
                            <sphereGeometry args={[0.025, 16, 16]} />
                            <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={1} />
                        </mesh>
                    </Float>
                );
            })}
        </group>
    );
}

// Enhanced lights with volumetric effects
function EnhancedLights() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} color="#2080ff" intensity={1} />
            <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={0.8} castShadow />
        </>
    );
}

// The main component that exports the enhanced 3D scene
export default function Enhanced3DGlobe({ className = '' }) {
    return (
        <div className={`h-[60vh] w-full ${className}`}>
            <Canvas camera={{ position: [0, 0, 3], fov: 45 }} shadows>
                <color attach="background" args={['#000']} />
                <fog attach="fog" args={['#000', 3, 15]} />
                <EnhancedLights />
                <EnhancedGlobe position={[0, 0, 0]} />
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.3}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 1.5}
                />
            </Canvas>
        </div>
    );
}
