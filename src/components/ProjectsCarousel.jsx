import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const ProjectsCarousel = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Récupérer les projets depuis Firebase
  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projets"));
      const projectsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsList);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  // Auto-scroll toutes les 5 secondes
  useEffect(() => {
    if (projects.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-16 h-16 border-4 border-brand-rougevif border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12 text-gray-300">
        Aucun projet à afficher pour le moment.
      </div>
    );
  }

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Effet de gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at top left, #E63946, transparent 40%),
            radial-gradient(circle at bottom right, #E63946, transparent 40%)
          `,
        }}
      ></div>
      
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white mb-6">
            <span className="bg-gradient-to-r from-brand-rougefonce to-brand-rougevif bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Project Card */}
          {projects.length > 0 && (
            <motion.div
              key={projects[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-brand-noirprofond bg-opacity-50 rounded-xl overflow-hidden border border-gray-800"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Partie image */}
                <div className="aspect-video overflow-hidden p-6">
                  {projects[currentIndex].img_base && (
                    <img 
                      src={`/images/${projects[currentIndex].img_base}`} 
                      alt={projects[currentIndex].titre}
                      className="w-full h-full object-cover rounded-xl align-center justify-center"
                    />
                  )}
                </div>

                {/* Partie texte */}
                <div className="p-8">
                  {/* Titre */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {projects[currentIndex].titre}
                  </h3>
                  
                  {/* Description (tronquée) */}
                  {projects[currentIndex].description && (
                    <p className="text-gray-300 mb-6 line-clamp-3">
                      {projects[currentIndex].description}
                    </p>
                  )}
                  
                  {/* Technologies */}
                  {projects[currentIndex].techno && (
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {projects[currentIndex].techno.map((tech, index) => (
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
                  
                  {/* Bouton Voir les détails */}
                  <Link
                    to={`/projet/${projects[currentIndex].id}`}
                    className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-brand-rougevif hover:bg-brand-rougefonce transition duration-300"
                  >
                    Voir les détails du projet
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          {projects.length > 1 && (
            <>
              <button 
                onClick={prevProject}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-brand-rougevif transition duration-300 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextProject}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-brand-rougevif transition duration-300 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-brand-rougevif' : 'bg-gray-600'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;