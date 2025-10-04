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
            color="#0C1E3D"
            emissive="#1a3a5f"
            emissiveIntensity={0.3}
            distort={0.1}
            speed={1}
            roughness={0.4}
            metalness={0.6}
          />
        </Sphere>
      </mesh>

      {/* Orbital ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#C8E7FF"
          emissive="#C8E7FF"
          emissiveIntensity={0.5}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Hive nodes */}
      <group ref={hiveNodesRef}>{createHiveNodes()}</group>

      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#C8E7FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF7E2D" />
    </>
  );
};

const EarthScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
        <Earth />
      </Canvas>
    </div>
  );
};

export default EarthScene;
