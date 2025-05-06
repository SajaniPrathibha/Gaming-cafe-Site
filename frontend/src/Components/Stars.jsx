import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { inSphere } from 'maath/random';

const Stars = () => {
    const ref = useRef();

    // Generate 5000 points
    const sphere = useMemo(() => {
        const points = new Float32Array(5000 * 3);
        inSphere(points, { radius: 1.2 });
        return points;
    }, []);

    // Rotate the stars slightly each frame
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.001;
        }
    });

    return (
        <Points ref={ref} positions={sphere} stride={3}>
            <PointMaterial color="red" size={0.01} sizeAttenuation depthWrite={false} transparent
                opacity={1} />
        </Points>
    );
};

const StartCanvas = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full">
            <Canvas camera={{ position: [0, 0, 0.3] }}>
                <Stars />
            </Canvas>
        </div>
    );
};

export default StartCanvas;
