import { Mesh, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

interface BoxProps {
  position: Vector3;
  size: [number, number, number];
  children?: React.ReactNode;
}

function Box({ position, size, children }: BoxProps) {
  const [color, setColor] = useState('white');
  const [rotationSpeed, setRotationSpeed] = useState(0);
  const meshRef = useRef<Mesh | null>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={[0, 0, 0]} // Set consistent initial rotation if needed
      castShadow
      receiveShadow
      onClick={() => setColor(color === 'red' ? 'blue' : 'yellow')}
      onPointerOver={() => setRotationSpeed(0)}
      onPointerOut={() => setRotationSpeed(0.0021)}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
      {children}
    </mesh>
  );
}

export default Box;
