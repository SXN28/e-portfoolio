import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "flowbite";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu
  const [isScrolled, setIsScrolled] = useState(false); // État pour détecter le scroll

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // Si l'utilisateur a scrollé, activez l'état
      } else {
        setIsScrolled(false); // Sinon, désactivez l'état
      }
    };

    // Ajouter l'écouteur d'événement
    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "bg-[#000000] shadow-lg" : "bg-transparent"
      } transition-all duration-100`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        {/* Bouton pour le menu mobile */}
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center ml-auto text-sm text-white rounded-lg md:hidden hover:bg-brand-rougevif focus:outline-none focus:ring-2 focus:ring-brand-rougevif transition-transform duration-300"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 transition-transform duration-500 ${
              isMenuOpen ? "rotate-90" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Liens centrés */}
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "max-h-[500px]" : "max-h-0 md:max-h-none"
          } overflow-hidden transition-all duration-500 md:transition-none`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border-2 border-brand-rougefonce bg-[#000000] rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 text-lg text-white rounded-sm hover:bg-brand-gris md:hover:bg-transparent md:border-0 md:hover:text-brand-rougevif md:p-0 transition-colors duration-300 ${
                    isActive ? "text-brand-rougevif" : ""
                  }`
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/competences"
                className={({ isActive }) =>
                  `block py-2 px-3 text-lg text-white rounded-sm hover:bg-brand-gris md:hover:bg-transparent md:border-0 md:hover:text-brand-rougevif md:p-0 transition-colors duration-300 ${
                    isActive ? "text-brand-rougevif" : ""
                  }`
                }
              >
                Compétences
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projets"
                className={({ isActive }) =>
                  `block py-2 px-3 text-lg text-white rounded-sm hover:bg-brand-gris md:hover:bg-transparent md:border-0 md:hover:text-brand-rougevif md:p-0 transition-colors duration-300 ${
                    isActive ? "text-brand-rougevif" : ""
                  }`
                }
              >
                Projets
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;