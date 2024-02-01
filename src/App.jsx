import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./pages/home";
import About from "./pages/about";
import Clients from "./pages/clients";
import Contact from "./pages/contact";
import Personal_details from "./pages/personal_details";

function App() {
  return (
    <>
      {/* Main content  */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="clients" element={<Clients />} />
        <Route path="contact" element={<Contact />} />
        <Route path="personal_details" element={<Personal_details />} />
      </Routes>
      {/* Footer  */}
    </>
  );
}

export default App;
