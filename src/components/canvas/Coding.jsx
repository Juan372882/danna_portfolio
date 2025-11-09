import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import Canvasloader from '../Loader';

const Coding = ({ isMobile }) => {
  const { scene } = useGLTF('/code_list/scene.gltf');
  return <primitive object={scene} scale={isMobile ? 2.4 : 3.2} position={isMobile ? [0.3, 0, 0] : [-1.5, 0, 0]} rotation={[-0.01, -0.2, -0.1]}/>;
};

const CodingCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange = (event) =>{
        setIsMobile(event.matches);
      }

      mediaQuery.addEventListener('change', handleMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      }
  }, [])
  

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
        <Coding isMobile={isMobile}/>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CodingCanvas;
