import React from "react";
import "./App.css" 
import Navbar from "./Navbar"
import PhotoStack from "./PhotoStack"
import About from "./About"
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <PhotoStack/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
