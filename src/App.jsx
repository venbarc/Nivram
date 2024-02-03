import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/services";
import Contact from "./pages/contact";
import Personal_details from "./pages/personal_details";
import Footer from "./components/footer";

function App() {
  return (
    <>
      {/* Main content  */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Service />} />
        <Route path="contact" element={<Contact />} />
        <Route path="personal_details" element={<Personal_details />} />
      </Routes>
      {/* Footer  */}
      <Footer />
    </>
  );
}

export default App;
