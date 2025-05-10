// components/ModelViewer.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
    const { scene } = useGLTF("/models/desktop_pc1/scene.gltf"); 
    return <primitive object={scene} scale={7.05} position={[0, -5, -1]} />

};

const Pc = () => {
    return (
        <div className="w-full h-[400px]  rounded">
            <Canvas>
                <ambientLight />
                <directionalLight position={[2, 1, 2]} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    minAzimuthAngle={-Math.PI / 3} // -90 degrees
                    maxAzimuthAngle={Math.PI / 3}
                />
            </Canvas>
        </div>
    );
};

export default Pc;
