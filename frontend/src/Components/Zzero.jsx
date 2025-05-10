// components/ModelViewer.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Modelz = () => {
    const { scene } = useGLTF("/models/Zub-Zero/scene.gltf"); 
    return <primitive object={scene} scale={4.0} position={[0, 0, 0]} />

};

const Zzero = () => {
    return (
        <div className="w-full h-[700px]  rounded">
            <Canvas>
                <ambientLight />
                <directionalLight position={[2, 1, 2]} />
                <Suspense fallback={null}>
                    <Modelz />
                </Suspense>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    minAzimuthAngle={-Math.PI / 2} // -90 degrees
                    maxAzimuthAngle={Math.PI / 3}
                />
            </Canvas>
        </div>
    );
};

export default Zzero;
