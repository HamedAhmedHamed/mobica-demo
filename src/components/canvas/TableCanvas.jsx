import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


const TableCanvas = ({ children }) => {
  return (
      <Canvas
        camera={{
          position: [-166, 58, 300],
          fov: 15,
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />

        {children}

        <OrbitControls />
        <LogCanvasInfo />
      </Canvas>
  )
}

export default TableCanvas 