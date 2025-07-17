import { Instance, Instances } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { MathUtils } from "three";

const particles = Array.from({ length: 500 }, () => ({
  factor: MathUtils.randInt(1, 10),
  speed: MathUtils.randFloat(0.01, 1),
  xFactor: MathUtils.randFloatSpread(80),
  yFactor: MathUtils.randFloatSpread(40),
  zFactor: MathUtils.randFloatSpread(40),
  color: `hsl(0, 0%, ${MathUtils.randInt(70, 90)}%)`,
}));

interface BubbleProps {
  factor: number;
  speed: number;
  xFactor: number;
  yFactor: number;
  zFactor: number;
  color: string;
}

const Bubble: React.FC<BubbleProps> = ({
  factor,
  speed,
  xFactor,
  yFactor,
  zFactor,
  color,
}) => {
  const ref = useRef<{
    position: { set: (x: number, y: number, z: number) => void };
  }>(null);

  useFrame((state) => {
    const t = factor + state.clock.elapsedTime * (speed / 2);
    ref.current?.position.set(
      Math.cos(t) +
        Math.sin(t * 1) / 10 +
        xFactor +
        Math.cos((t / 10) * factor) +
        (Math.sin(t * 1) * factor) / 10,
      Math.sin(t) +
        Math.cos(t * 2) / 10 +
        yFactor +
        Math.sin((t / 10) * factor) +
        (Math.cos(t * 2) * factor) / 10,
      Math.sin(t) +
        Math.cos(t * 2) / 10 +
        zFactor +
        Math.cos((t / 10) * factor) +
        (Math.sin(t * 3) * factor) / 10
    );
  });

  return <Instance ref={ref} color={color} castShadow receiveShadow />;
};

const Bubbles = () => {
  return (
    <Instances limit={particles.length}>
      <sphereGeometry args={[1, 19, 19]} />
      <meshStandardMaterial color="#999" opacity={0.3} />
      {particles.map((data, i) => (
        <Bubble key={i} {...data} />
      ))}
    </Instances>
  );
};

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-10">
      <Canvas camera={{ position: [0, 10, 10], fov: 50 }} shadows>
        <ambientLight />
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.8}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Bubbles />
      </Canvas>
    </div>
  );
};

export default Background;
