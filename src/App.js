import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'flowbite';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import ProjetDetails from "./components/ProjetDetails.jsx";

import Home from "./pages/Home.jsx";
import Competences from "./pages/Competences.jsx";
import Projets from "./pages/Projets.jsx";



// Créez un composant séparé pour le contenu qui utilise useLocation
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      '/': 'Accueil - Mon Portfolio',
      '/competences': 'Compétences - Mon Portfolio',
      '/projets': 'Projets - Mon Portfolio',
      '/projet/:id': 'Détails du projet - Mon Portfolio'
    };
    
    document.title = pageTitles[location.pathname] || 'Mon Portfolio';
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/projet/:id" element={<ProjetDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;