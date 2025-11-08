import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import Canvasloader from '../Loader';

const Coding = () => {
  const { scene } = useGLTF('/code_list/scene.gltf');
  return <primitive object={scene} scale={3.2} position={[-1.5, 0, 0]} rotation={[-0.01, -0.2, -0.1]}/>;
};

const Codings = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [12, 3, 4], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={<Canvasloader />}>
        
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Coding />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Codings;
