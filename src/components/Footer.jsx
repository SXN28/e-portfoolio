import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="py-8"
      style={{
        backgroundImage: "linear-gradient(to right, #000000 30%, #2B2B2B 100%)"
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Titre du site au milieu en haut */}
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl font-bold">
            <span className="bg-gradient-to-r from-brand-rougefonce to-brand-rougevif bg-clip-text text-transparent">
              Clément Foray
            </span>
          </h2>
        </div>

        {/* Liens au milieu */}
        <div className="flex justify-center space-x-8 mb-8">
          <Link
            to="/"
            className="text-white text-lg hover:text-brand-rougevif transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/competences"
            className="text-white text-lg hover:text-brand-rougevif transition-colors duration-300"
          >
            Compétences
          </Link>
          <Link
            to="/projets"
            className="text-white text-lg hover:text-brand-rougevif transition-colors duration-300"
          >
            Projets
          </Link>
        </div>

        {/* Copyright en bas */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Clément Foray. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;