import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MedicalStore from "./components/MedicalStore";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
// import Shop from './components/Shop'
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MedicalStore />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
