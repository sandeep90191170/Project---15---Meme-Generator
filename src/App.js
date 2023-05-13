import React from "react";
import './App.css';
import Meme from "./Meme.js";
import memeLOGO from "./meme.png"

function App() {
 
  return (
    <>
    <div className='app-container'>
      <Meme memeLOGO={memeLOGO}/>

    </div>
    </>
  );
}

export default App;
