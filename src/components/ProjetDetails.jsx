// ProjetDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const ProjetDetails = () => {
  const { id } = useParams(); // Récupère l'ID du projet depuis l'URL
  const [projet, setProjet] = useState(null); // State pour stocker les détails du projet
  const [loading, setLoading] = useState(true); // State pour gérer le chargement

  // Récupérer les détails du projet depuis Firestore
  useEffect(() => {
    const fetchProjet = async () => {
      const docRef = doc(db, "projets", id); // Référence au document spécifique
      const docSnap = await getDoc(docRef); // Récupère le document

      if (docSnap.exists()) {
        setProjet({ id: docSnap.id, ...docSnap.data() }); // Met à jour le state avec les données du projet
      } else {
        console.log("Aucun projet trouvé !");
      }
      setLoading(false); // Arrête le chargement
    };

    fetchProjet();
  }, [id]);

  if (loading) {
    return <div className="text-center py-12">Chargement en cours...</div>;
  }

  if (!projet) {
    return <div className="text-center py-12">Projet non trouvé.</div>;
  }

  return (
    <div className="min-h-screen">
      <header className="bg-black text-white pt-32 pb-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-rougefonce to-brand-rougevif bg-clip-text text-transparent">
            {projet.titre}
          </h1>
          <p className="mt-2 text-lg text-gray-300">
            Découvrez mes réalisations et mes travaux récents.
          </p>
        </div>
      </header>

      {/* Contenu détaillé du projet */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Section image et description (en haut) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image à gauche */}
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            {projet.img_base && (
              <img
                src={projet.img_base}
                alt={projet.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Description à droite */}
          <div className="space-y-4">
            {/* Titre avec dégradé */}
            <h2 className="text-2xl font-bold bg-gradient-to-r from-brand-rougefonce to-brand-rougevif bg-clip-text text-transparent">
              {projet.title}
            </h2>
            {projet.description && (
              <p className="text-gray-600">{projet.description}</p>
            )}
          </div>
        </div>

        {/* Section détails supplémentaires (en dessous) */}
        <div className="mt-8 space-y-6">
          {/* Type de projet */}
          {projet.type && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Type de projet</h3>
              <p className="text-gray-600">{projet.type}</p>
            </div>
          )}

          {/* Client */}
          {projet.client && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Client</h3>
              <p className="text-gray-600">{projet.client}</p>
            </div>
          )}

          {/* Statut du projet */}
          {projet.statut && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Statut</h3>
              <p
                className={`inline-flex items-center px-3 py-1 rounded text-sm font-medium ${
                  projet.statut === "Terminé"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {projet.statut}
              </p>
            </div>
          )}

          {/* Technologies utilisées */}
          {projet.techno && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Technologies</h3>
              <ul className="flex flex-wrap gap-2 mt-2">
                {projet.techno.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-700"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Liens GitHub et Site */}
          <div className="flex gap-4">
            {projet.lien_git && (
              <a
                href={projet.lien_git}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Voir sur GitHub
              </a>
            )}
            {projet.lien_site && (
              <a
                href={projet.lien_site}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Visiter le site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetDetails;