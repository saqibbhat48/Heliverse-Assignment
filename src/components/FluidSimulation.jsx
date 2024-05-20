// FluidSimulation.js
import React, { useRef, useEffect } from 'react';
import Fluid from 'webgl-fluid';

const FluidSimulation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    Fluid(canvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1, 
      }}
    />
  );
}

export default FluidSimulation;
