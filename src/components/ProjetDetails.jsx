import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const ProjetDetails = () => {
  const { id } = useParams();
  const [projet, setProjet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjet = async () => {
      const docRef = doc(db, "projets", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProjet({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("Aucun projet trouvé !");
      }
      setLoading(false);
    };

    fetchProjet();
  }, [id]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-brand-rougevif border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">Chargement du projet...</p>
        </div>
      </div>
    );
  }

  if (!projet) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Projet non trouvé</h2>
          <p>Le projet que vous recherchez n'existe pas ou a été supprimé.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-noirprofond">
      {/* Header avec effet gradient */}
      <header className="relative bg-black text-white pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at top right, #E63946, transparent 40%),
              radial-gradient(circle at bottom left, #E63946, transparent 40%)
            `,
          }}
        ></div>
        
        <div className="relative container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-rougefonce to-brand-rougevif bg-clip-text text-transparent mb-4">
            {projet.titre}
          </h1>
          {projet.client && (
            <p className="text-xl text-gray-300">Pour {projet.client}</p>
          )}
        </div>
      </header>

      {/* Contenu détaillé du projet */}
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section principale */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Colonne de gauche - Image et métadonnées */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image principale avec effet de halo */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-rougefonce to-brand-rougevif rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-2xl border border-gray-800">
                {projet.img_base && (
                  <img
                    src={`/images/${projet.img_base}`}
                    alt={projet.titre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
            </div>

            {/* Description détaillée */}
            <div className="bg-gray-900 bg-opacity-50 rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-brand-rougefonce to-brand-rougevif bg-clip-text text-transparent">
                  Description du Projet
                </span>
              </h2>
              {projet.description && (
                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {projet.description}
                </p>
              )}
            </div>

            {/* Détails supplémentaires */}
            {projet.détails && (
              <div className="bg-gray-900 bg-opacity-50 rounded-xl p-8 border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-brand-rougefonce to-brand-rougevif bg-clip-text text-transparent">
                    Détails Techniques
                  </span>
                </h2>
                <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {projet.détails}
                </div>
              </div>
            )}
          </div>

          {/* Colonne de droite - Métadonnées */}
          <div className="space-y-8">
            {/* Fiche projet */}
            <div className="bg-gray-900 bg-opacity-50 rounded-xl p-8 border border-gray-800 sticky top-8">
              <h2 className="text-xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-brand-rougefonce to-brand-rougevif bg-clip-text text-transparent">
                  Fiche Projet
                </span>
              </h2>

              <div className="space-y-6">
                {/* Type */}
                {projet.type && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Type</h3>
                    <p className="text-white font-medium">{projet.type}</p>
                  </div>
                )}

                {/* Statut */}
                {projet.statut && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Statut</h3>
                    <div className="flex items-center">
                      <span className={`flex w-2.5 h-2.5 rounded-full me-2 ${
                        projet.statut === "Terminé" ? "bg-green-500" : "bg-yellow-500"
                      }`}></span>
                      <p className="text-white font-medium">{projet.statut}</p>
                    </div>
                  </div>
                )}

                {/* Date */}
                {projet.date && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Date</h3>
                    <p className="text-white font-medium">{projet.date}</p>
                  </div>
                )}

                {/* Technologies */}
                {projet.techno && projet.techno.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {projet.techno.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-brand-noirprofond text-white rounded-full text-xs font-medium border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Liens */}
                <div className="pt-4 space-y-4">
                  {projet.lien_git && (
                    <a
                      href={projet.lien_git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-brand-rougevif transition duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Voir le code source
                    </a>
                  )}

                  {projet.lien_site && (
                    <a
                      href={projet.lien_site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-brand-rougevif transition duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      Visiter le site
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetDetails;