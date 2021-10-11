import React, { useState, useEffect } from "react";
import Hero from './components/Hero/'
import { Container } from "react-bootstrap";
import './App.css'
import TargetCalculator from "./components/TargetCalculator";

function App() {
  return (
    <div className="App">
      {/* <input
          type="number"
          className="form-control"
          
          value={target}
          onChange={(e)=> onChange(e.target.value)}
          autoFocus
        /> */}

      <TargetCalculator />
    </div>
  );
}

export default App;
