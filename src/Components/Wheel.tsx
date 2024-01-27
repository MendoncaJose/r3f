import { useState } from 'react';
import { Vector3 } from 'three';
interface WheelProps {
  position: Vector3;
  size: [number, number, number];
  children?: React.ReactNode;
}

function Wheel({ position }: WheelProps) {
  const [color, setColor] = useState('black');

  return (
    <mesh position={position} onClick={() => setColor(color === 'red' ? 'black' : 'red')}>
      <cylinderGeometry args={[1, 1, 0.5, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Wheel;
