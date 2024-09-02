import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

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
      {/* <div className='flex flex-row justify-evenly'>
        <button
          className='px-4 py-2 text-white text-xl bg-cyan-500 rounded-md'
          onClick={() => store.enterVR()}
        >Enter VR</button>

        <button
          className='px-4 py-2 text-white text-xl bg-cyan-500 rounded-md'
          onClick={() => store.enterAR()}
        >Enter AR</button>
      </div> */}
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
        {/* <LogCanvasInfo /> */}
      </Canvas>
    </>
  )
}

export default TableCanvas 