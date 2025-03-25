// Projets.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
const Projets = () => {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    const fetchProjets = async () => {
      const querySnapshot = await getDocs(collection(db, "projets"));
      const projetsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjets(projetsList);
    };

    fetchProjets();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white pt-32 pb-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-rougefonce to-brand-rougevif bg-clip-text text-transparent">
            Mes Projets
          </h1>
          <p className="mt-2 text-lg text-gray-300">
            Découvrez mes réalisations et mes travaux récents.
          </p>
        </div>
      </header>

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projets.map((projet) => (
            <div
              key={projet.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/projet/${projet.id}`} className="block">
                <div className="aspect-video overflow-hidden">
                  {projet.img_base && (
                    <img
                      src={`/images/${projet.img_base}`}
                      alt={projet.titre}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {projet.titre}
                  </h2>
                  {projet.statut === "Terminé" && (
                    <div className="flex items-center mt-2">
                      <span className="flex w-2.5 h-2.5 bg-green-500 rounded-full me-1.5"></span>
                      <span className="text-sm font-medium text-gray-900">Terminé</span>
                    </div>
                  )}
                  {projet.description && (
                    <p className="mt-2 text-gray-600">{projet.description}</p>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projets;