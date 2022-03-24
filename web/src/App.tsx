import React from 'react';
import {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import Canvas from './components/canvas';

export interface IState {
  coordinates: {
    xPos: number
    yPos: number
  }[]
} 


function App() {


  const [strokes, setStrokes] = useState<IState["coordinates"]>([]);


  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <Canvas 
       width={"200"}
       height={'400'}
       strokes={strokes}
       setStrokes={setStrokes}>
                 </Canvas>
    </div>
  );
}

export default App;
