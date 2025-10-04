import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const hiveNodesRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
    if (hiveNodesRef.current) {
      hiveNodesRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  // Create orbital hive nodes
  const createHiveNodes = () => {
    const nodes = [];
    const nodeCount = 8;
    const radius = 2.5;

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.random() - 0.5) * 1;

      nodes.push(
        <mesh key={i} position={[x, y, z]}>
          <octahedronGeometry args={[0.15, 0]} />
          <meshStandardMaterial
            color="#FF7E2D"
            emissive="#FF7E2D"
            emissiveIntensity={0.8}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      );
    }
    return nodes;
  };

  return (
    <>
      {/* Earth */}
      <mesh ref={earthRef}>
        <Sphere args={[2, 64, 64]}>
          <MeshDistortMaterial
            color="#0a1628"
            emissive="#1e3a5c"
            emissiveIntensity={0.4}
            distort={0.15}
            speed={1.5}
            roughness={0.3}
            metalness={0.7}
          />
        </Sphere>
      </mesh>

      {/* Atmospheric glow */}
      <mesh ref={earthRef}>
        <Sphere args={[2.1, 64, 64]}>
          <meshStandardMaterial
            color="#4a7ba7"
            transparent
            opacity={0.1}
            side={THREE.BackSide}
          />
        </Sphere>
      </mesh>

      {/* Orbital ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#C8E7FF"
          emissive="#C8E7FF"
          emissiveIntensity={0.6}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Hive nodes */}
      <group ref={hiveNodesRef}>{createHiveNodes()}</group>

      {/* Enhanced lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#C8E7FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#FF7E2D" />
      <pointLight position={[0, 5, 5]} intensity={0.5} color="#ffffff" />
    </>
  );
};

const EarthScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
          enableDamping
          dampingFactor={0.05}
        />
        <Earth />
      </Canvas>
    </div>
  );
};

export default EarthScene;
