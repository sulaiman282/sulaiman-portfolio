import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const decals = useTexture([
    props.imgUrl,
    props.imgUrl,
    props.imgUrl,
    props.imgUrl,
  ]);

  const [color, setColor] = useState("#FFFDFC");
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor = `#${Math.floor(Math.random() * 128 + 128).toString(16).padStart(2, '0')}${Math.floor(Math.random() * 128 + 128).toString(16).padStart(2, '0')}${Math.floor(Math.random() * 128 + 128).toString(16).padStart(2, '0')}`;
      setColor(randomColor);
    }, 5000);
  
    return () => clearInterval(intervalId);
  }, []);
  

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {decals.map((decal, index) => {
          let position;
          let rotation;
          switch (index) {
            case 0: // Front
              position = [0, 0, 1];
              rotation = [0, 0, 0];
              break;
            case 1: // Back
              position = [0, 0, -1];
              rotation = [0, Math.PI, 0]; // Rotate 180 degrees around y-axis
              break;
            case 2: // Top
              position = [0, 1, 0];
              rotation = [Math.PI / 2, 0, 0]; // Rotate 90 degrees around x-axis
              break;
            case 3: // Bottom
              position = [0, -1, 0];
              rotation = [-Math.PI / 2, 0, 0]; // Rotate -90 degrees around x-axis
              break;
            default:
              position = [0, 0, 0];
              rotation = [0, 0, 0];
          }
          return (
            <Decal
              key={index}
              position={position}
              rotation={rotation}
              scale={1}
              map={decal}
              flatShading
            />
          );
        })}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
