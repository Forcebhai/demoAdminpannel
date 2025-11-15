import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import Dashboard from './components/Dashboard';


const App=() => {

  return (
    <>
      <div className="flex ">
        {/* Navigation bar */}
        <Navbar />
        <Dashboard />

      
      </div>
    </>
  );
};

export default App
