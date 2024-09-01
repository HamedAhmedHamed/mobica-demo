import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { Table } from "../3d/Table";

const LogCanvasInfo = () => {
  useFrame((camera, scene, gl) => {
    console.log("camera: ", camera)
    console.log("scene: ", scene)
    console.log("gl: ", gl)
  })
  return null
}

const TableCanvas = ({ children }) => {
  return (
    <>
      <Canvas
        camera={{
          position: [-166, 58, 300],
          fov: 15,
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />

        <Suspense fallback={null}>
          {children}
        </Suspense>

        <OrbitControls />
        {/* <LogCanvasInfo /> */}
      </Canvas>
    </>
  )
}

export default TableCanvas 