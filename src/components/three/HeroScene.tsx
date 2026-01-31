import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
    const meshRef = useRef<THREE.Mesh>(null!)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(t / 4) / 2
            meshRef.current.rotation.y = Math.sin(t / 2) / 2
            meshRef.current.rotation.z = Math.sin(t / 8) / 2
        }
    })

    return (
        <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={0.5}
        >
            <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                    color="#667eea"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    )
}

function FloatingGeometry({ position, color }: { position: [number, number, number], color: string }) {
    const meshRef = useRef<THREE.Mesh>(null!)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.2
            meshRef.current.rotation.x += 0.01
            meshRef.current.rotation.y += 0.005
        }
    })

    return (
        <mesh ref={meshRef} position={position}>
            <boxGeometry args={[0.4, 0.4, 0.4]} />
            <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
        </mesh>
    )
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} color="#764ba2" intensity={0.5} />
                <pointLight position={[10, 10, 10]} color="#667eea" intensity={0.5} />

                <AnimatedSphere />

                <FloatingGeometry position={[-2, 1, -2]} color="#f093fb" />
                <FloatingGeometry position={[2, -1, -1]} color="#4facfe" />
                <FloatingGeometry position={[1.5, 1.5, -3]} color="#43e97b" />
                <FloatingGeometry position={[-1.5, -1, -2.5]} color="#f5576c" />

                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    )
}
