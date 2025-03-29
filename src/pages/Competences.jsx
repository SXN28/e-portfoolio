import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faPhp, 
  faNodeJs, 
  faWordpress, 
  faGitAlt,
  faFigma
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faServer, 
  faPalette, 
  faTools, 
  faSyncAlt, 
  faUsers, 
  faSearch 
} from '@fortawesome/free-solid-svg-icons';

const Competences = () => {
  // Groupes de compétences avec icônes Font Awesome
  const competences = [
    {
      categorie: "Frontend",
      items: [
        { nom: "HTML", niveau: 90, icon: faHtml5 },
        { nom: "CSS", niveau: 85, icon: faCss3Alt },
        { nom: "JavaScript", niveau: 80, icon: faJs },
        { nom: "React", niveau: 75, icon: faReact },
        { nom: "Tailwind CSS", niveau: 85, icon: faCss3Alt },
      ],
      icon: faPalette
    },
    {
      categorie: "Backend",
      items: [
        { nom: "PHP", niveau: 70, icon: faPhp },
        { nom: "Symfony", niveau: 75, icon: faServer },
        { nom: "Node.js", niveau: 60, icon: faNodeJs },
      ],
      icon: faServer
    },
    {
      categorie: "Bases de données",
      items: [
        { nom: "MySQL", niveau: 60, icon: faDatabase },
        { nom: "Firebase", niveau: 80, icon: faDatabase },
      ],
      icon: faDatabase
    },
    {
      categorie: "Design & Outils",
      items: [
        { nom: "Figma", niveau: 90, icon: faFigma },
        { nom: "Adobe", niveau: 70, icon: faPalette },
        { nom: "WordPress", niveau: 90, icon: faWordpress },
        { nom: "Git", niveau: 75, icon: faGitAlt },
      ],
      icon: faTools
    }
  ];

  return (
    <div className="min-h-screen bg-noirprofond">
      {/* Header avec effet gradient similaire */}
      <header className="bg-black text-white pt-32 pb-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-rougefonce to-brand-rougevif bg-clip-text text-transparent">
            Compétences
          </h1>
        </div>
      </header>

      {/* Section principale */}
      <section className="relative py-16 bg-brand-noirprofond overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
        ></div>
        
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r bg-brand-rougefonce bg-clip-text text-transparent">
                Mon Expertise Technique
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Au fil de mes études et expériences professionnelles, j'ai développé un panel de compétences
              couvrant l'ensemble du développement web. Voici une évaluation honnête de mon niveau dans chaque technologie.
            </p>
          </div>
          
          {/* Grille de compétences */}
          <div className="grid md:grid-cols-2 gap-8">
            {competences.map((groupe, index) => (
              <div 
                key={index}
                className="bg-black bg-opacity-50 rounded-xl p-6 border border-gray-800 hover:border-brand-rougevif transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <FontAwesomeIcon 
                    icon={groupe.icon} 
                    className="text-2xl mr-3 text-brand-rougevif" 
                  />
                  <h3 className="text-xl font-semibold text-white">{groupe.categorie}</h3>
                </div>
                
                <div className="space-y-4">
                  {groupe.items.map((competence, idx) => (
                    <div key={idx} className="flex items-center">
                      <FontAwesomeIcon 
                        icon={competence.icon} 
                        className="w-5 mr-3 text-gray-400" 
                      />
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300 font-medium">{competence.nom}</span>
                          <span className="text-brand-rougevif">{competence.niveau}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2.5">
                          <div 
                            className="bg-gradient-to-r from-brand-rougefonce to-brand-rougevif h-2.5 rounded-full" 
                            style={{ width: `${competence.niveau}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Section méthodologie */}
          <div className="mt-16 bg-black bg-opacity-50 rounded-xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-brand-rougefonce to-brand-rougevif bg-clip-text text-transparent">
                Méthodologie & Approche
              </span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-brand-rougevif">
                  <FontAwesomeIcon icon={faSyncAlt} size="lg" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Développement Agile</h4>
                <p className="text-gray-300">
                  Méthodologies Agile et Scrum, travail en sprints avec revues régulières pour une amélioration continue.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-brand-rougevif">
                  <FontAwesomeIcon icon={faUsers} size="lg" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Collaboration</h4>
                <p className="text-gray-300">
                  Expérience en travail d'équipe avec designers, développeurs backend et chefs de projet.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-brand-rougevif">
                  <FontAwesomeIcon icon={faSearch} size="lg" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Veille Technologique</h4>
                <p className="text-gray-300">
                  Veille constante sur les nouvelles technologies et bonnes pratiques en développement frontend.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              to="/projets"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-rougevif hover:bg-brand-rougefonce transition duration-300 shadow-lg"
            >
              Voir mes projets
              <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competences;