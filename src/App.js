import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'flowbite';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import ProjetDetails from "./components/ProjetDetails.jsx";

import Home from "./pages/Home.jsx";
import Competences from "./pages/Competences.jsx";
import Projets from "./pages/Projets.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/projet/:id" element={<ProjetDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
