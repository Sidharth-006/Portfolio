import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Sphere() {
  return (
    <Float speed={2}>
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#3b82f6" wireframe />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute w-full h-full top-0 left-0 -z-10">
      <Canvas>
        <ambientLight />
        <directionalLight position={[2, 2, 2]} />
        <Sphere />
      </Canvas>
    </div>
  );
}