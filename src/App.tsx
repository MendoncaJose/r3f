import { Canvas } from '@react-three/fiber';
//import Box from './Components/Box';
import './App.css';
import { Vector3 } from 'three';
import Wheel from './Components/Wheel';

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{ backgroundColor: 'lightgray' }} shadows>
      <pointLight position={[10, 10, 10]} castShadow shadow-mapSize={{ width: 1024, height: 1024 }} />
      <ambientLight />
      <Wheel position={new Vector3(-1, -1, 0)} size={[3, 3, 3]} />
      <Wheel position={new Vector3(1, -1, 0)} size={[3, 3, 3]} />
      <Wheel position={new Vector3(-1, 1, 0)} size={[3, 3, 3]} />
      <Wheel position={new Vector3(1, 1, 0)} size={[3, 3, 3]} />
      {/*<Box position={new Vector3(0, 0, 0)} size={[1, 1, 1]} children={<Wheel position={new Vector3(0, 0, 0)} size={[4, 4, 4]} />} />*/}
    </Canvas>
  );
}

export default App;
