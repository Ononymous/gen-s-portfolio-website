import React from "react";
import "./App.css" 
import Navbar from "./Navbar"
import PhotoStack from "./PhotoStack"
import About from "./About"
import Footer from "./Footer";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div>
      <Navbar/>
      <PhotoStack/>
      <About/>
      <Footer/>
      <Analytics />
    </div>
  );
}

export default App;
