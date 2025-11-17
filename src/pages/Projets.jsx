import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Projets = () => {
  const [projets, setProjets] = useState([]);
  const [filteredProjets, setFilteredProjets] = useState([]);
  const [activeFilter, setActiveFilter] = useState("tous");

  useEffect(() => {
    const fetchProjets = async () => {
      const querySnapshot = await getDocs(collection(db, "projets"));
      const projetsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjets(projetsList);
      setFilteredProjets(projetsList);
    };

    fetchProjets();
  }, []);

  // Fonction de filtrage
  const filterProjects = (type) => {
    setActiveFilter(type);
    if (type === "tous") {
      setFilteredProjets(projets);
    } else {
      const filtered = projets.filter(projet => 
        projet.type && projet.type.toLowerCase() === type
      );
      setFilteredProjets(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-brand-noirprofond">
      {/* Header */}
      <header className="bg-black text-white pt-32 pb-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-rougefonce to-brand-rougevif bg-clip-text text-transparent">
            Projets
          </h1>
        </div>
      </header>

      {/* Section principale */}
      <section className="relative py-16 bg-brand-noirprofond overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at top right, #E63946, transparent 20%),
              radial-gradient(circle at bottom left, #E63946, transparent 20%)
            `,
          }}
        ></div>
        
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Boutons de filtrage */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["tous", "personnel", "entreprise"].map((filter) => (
              <button
                key={filter}
                onClick={() => filterProjects(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeFilter === filter
                    ? "bg-brand-rougevif text-white"
                    : "bg-black text-gray-300 hover:bg-gray-700"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Grille de projets */}
          {filteredProjets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjets.map((projet) => (
                <div
                  key={projet.id}
                  className="group relative bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-brand-rougevif transition-all duration-300"
                >
                  <Link to={`/projet/${projet.id}`} className="block">
                    {/* Image du projet */}
                    <div className="aspect-video overflow-hidden">
                      {projet.img_base && (
                        <img
                          src={`/images/${projet.img_base}`}
                          alt={projet.titre}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    
                    {/* Contenu texte */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {projet.titre}
                      </h3>
                      
                      
                      {/* Statut */}
                      {projet.statut === "Terminé" && (
                        <div className="flex items-center mb-3">
                          <span className="flex w-2.5 h-2.5 bg-green-500 rounded-full me-1.5"></span>
                          <span className="text-sm font-medium text-white">Terminé</span>
                        </div>
                      )}
                      
                      {/* Description */}
                      {projet.description && (
                        <p className="text-gray-400 mb-4 line-clamp-2">
                          {projet.description}
                        </p>
                      )}
                      
                      {/* Bouton "Voir plus" */}
                      <div className="flex items-center text-brand-rougevif group-hover:text-white transition-colors duration-300">
                        <span className="font-medium">Voir plus</span>
                        <svg 
                          className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-400">
              Aucun projet trouvé pour cette catégorie.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projets;