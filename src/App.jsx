// App.js
import React from 'react';
import FluidSimulation from './components/FluidSimulation';
import Index from './components/Index'

const App = () => {
  return (
    <>
    <div style={{ position: 'relative' }}>
      <Index/>
      <FluidSimulation/>
    </div>
    </>
  );
}

export default App;
