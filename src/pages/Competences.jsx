// Competences.js
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
  faPhp, 
  faWordpress, 
  faGitAlt,
  faFigma
} from '@fortawesome/free-brands-svg-icons';

// Map des icônes Font Awesome
const techIcons = {
  'React': <FontAwesomeIcon icon={faReact} className="text-[#61DAFB]" />,
  'JavaScript': <FontAwesomeIcon icon={faJs} className="text-[#F7DF1E]" />,
  'HTML5': <FontAwesomeIcon icon={faHtml5} className="text-[#E34F26]" />,
  'CSS3': <FontAwesomeIcon icon={faCss3Alt} className="text-[#1572B6]" />,
  'PHP': <FontAwesomeIcon icon={faPhp} className="text-[#777BB4]" />,
  'WordPress': <FontAwesomeIcon icon={faWordpress} className="text-[#21759B]" />,
  'Git': <FontAwesomeIcon icon={faGitAlt} className="text-[#F05032]" />,
  'Figma': <FontAwesomeIcon icon={faFigma} className="text-[#F24E1E]" />
};

const Competences = () => {
  // Données des compétences (à remplacer par vos données réelles)
  const competences = [
    {
      id: 1,
      titre: "Développement Frontend",
      description: "Création d'interfaces utilisateur modernes avec React, Tailwind CSS, et JavaScript.",
      icon: "💻", // Icône ou image représentant la compétence
    },
    {
      id: 2,
      titre: "Développement Backend",
      description: "Développement d'API et de serveurs avec Node.js, Express, et Firebase.",
      icon: "🔧",
    },
    {
      id: 3,
      titre: "Base de données",
      description: "Gestion de bases de données relationnelles et NoSQL (MySQL, Firestore).",
      icon: "🗃️",
    },
    {
      id: 4,
      titre: "Gestion de projet",
      description: "Planification, suivi et livraison de projets avec Agile et Scrum.",
      icon: "📊",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header avec fond noir et marge pour la navbar */}
      <header className="bg-black text-white pt-32 pb-24"> {/* pt-32 pour laisser de l'espace pour la navbar */}
        <div className="container mx-auto text-center">
          {/* Titre avec dégradé statique */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-rougefonce to-brand-rougevif bg-clip-text text-transparent">
            Mes Compétences
          </h1>
          <p className="mt-2 text-lg text-gray-300">
            Découvrez mes compétences techniques et professionnelles.
          </p>
        </div>
      </header>

      {/* Liste des compétences */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competences.map((competence) => (
            <div
              key={competence.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                {/* Icône ou image de la compétence */}
                <div className="text-4xl text-center mb-4">
                  {competence.icon}
                </div>

                {/* Titre de la compétence */}
                <h2 className="text-xl font-semibold text-gray-900 text-center">
                  {competence.titre}
                </h2>

                {/* Description de la compétence */}
                {competence.description && (
                  <p className="mt-2 text-gray-600 text-center">
                    {competence.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competences;