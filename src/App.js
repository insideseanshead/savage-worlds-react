import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TargetCalculator from "./components/TargetCalculator";

function App() {
  return (
    <div className="App">
      <Container className='siteBody'>
        <TargetCalculator />
      </Container>
    </div>
  );
}

export default App;
