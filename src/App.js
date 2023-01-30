import React from "react";
import "./App.css" 
import Navbar from "./Navbar"
import PhotoStack from "./PhotoStack"
import About from "./About"

function App() {
  return (
    <div>
      <Navbar/>
      <PhotoStack/>
      <About/>
    </div>
  );
}

export default App;
