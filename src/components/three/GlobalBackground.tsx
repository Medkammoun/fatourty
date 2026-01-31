import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from '../theme-provider'

function AnimatedBackground() {
    const { theme } = useTheme()
    const meshRef = useRef<THREE.Mesh>(null!)

    // Use a lighter blue for light mode, and the original purple/blue for dark mode
    const sphereColor = theme === 'light' ? '#6366f1' : '#4f46e5'

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(t / 4) / 4
            meshRef.current.rotation.y = Math.sin(t / 2) / 4
        }
    })

    return (
        <>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.2} position={[2, 0, -2]}>
                    <MeshDistortMaterial
                        color={sphereColor}
                        attach="material"
                        distort={0.4}
                        speed={1.5}
                        roughness={0.4}
                        metalness={0.6}
                        opacity={0.8}
                        transparent
                    />
                </Sphere>
            </Float>

            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere args={[0.5, 64, 64]} scale={1.5} position={[-3, -1, -3]}>
                    <MeshDistortMaterial
                        color="#ec4899"
                        attach="material"
                        distort={0.5}
                        speed={2}
                        roughness={0.3}
                        metalness={0.8}
                        opacity={0.6}
                        transparent
                    />
                </Sphere>
            </Float>
        </>
    )
}

export function GlobalBackground() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden transition-colors duration-500 bg-background">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} color="#4f46e5" intensity={0.5} />
                <AnimatedBackground />
            </Canvas>
        </div>
    )
}
