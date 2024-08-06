import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Services from "./pages/Services";
import Discover from "./pages/Discover";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/discover" element={<Discover/>} />
      </Routes>
    </>
  );
};

export default App;
