import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./pages/home";
import About from "./pages/about";
import Clients from "./pages/clients";
import Contact from "./pages/contact";
import Check_details from "./pages/check_details";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Main content  */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="clients" element={<Clients />} />
        <Route path="contact" element={<Contact />} />
        <Route path="check_details" element={<Check_details />} />
      </Routes>
      {/* Footer  */}
    </>
  );
}

export default App;
