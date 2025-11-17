import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section 
      ref={ref}
      className="relative py-16 bg-black overflow-hidden"
    >
      {/* Effet de gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at top right, #E63946, transparent 40%),
            radial-gradient(circle at bottom left, #E63946, transparent 40%)
          `,
        }}
      ></div>
      
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Photo de profil avec animation */}
          <motion.div 
            className="flex justify-center"
            variants={imageVariants}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-rougefonce to-brand-rougevif rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative">
                <img 
                  src="..\..\images\Snapchat-1286623262.jpg" 
                  alt="Clément Foray" 
                  className="rounded-lg shadow-2xl w-full max-w-md border-2 border-gray-800"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Contenu texte avec animations */}
          <motion.div
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl font-extrabold text-white mb-6"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-brand-rougefonce to-brand-rougevif bg-clip-text text-transparent">
                À propos de moi
              </span>
            </motion.h2>
            
            <motion.div 
              className="space-y-4 text-gray-300"
              variants={containerVariants}
            >
                <motion.p 
                  className="text-lg"
                  variants={itemVariants}
                >
                    Passionné par le développement frontend et les interfaces utilisateur, je combine sens esthétique
                    et rigueur technique pour créer des expériences web modernes et intuitives. Mon approche allie
                    créativité et méthodologie pour concevoir des applications à la fois élégantes et performantes.
                </motion.p>
                
                <motion.p 
                  className="text-lg"
                  variants={itemVariants}
                >
                    Diplomé d'un BUT Informatique, j'approfondis mes compétences en développement web tout en effectuant mon alternance dans une agence web.
                    Cette double expérience académique et professionnelle me permet de maîtriser les technologies
                    frontend tout en comprenant les enjeux concrets du métier.
                </motion.p>
                
                <motion.p 
                  className="text-lg"
                  variants={itemVariants}
                >
                    Je m'intéresse particulièrement à l'UX/UI design et aux animations interactives. Ce que je recherche : concevoir des interfaces innovantes qui
                    marient beauté visuelle et excellence technique, tout en continuant à apprendre des meilleures
                    pratiques du secteur.
                </motion.p>
            </motion.div>
            
            {/* Liste de compétences avec animation */}
            <motion.div 
              className="mt-8"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-xl font-semibold text-white mb-4"
                variants={itemVariants}
              >
                Mes Compétences
              </motion.h3>
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
              >
                {['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'PHP', 'React', 'Symfony', 'MYSQL', 'Figma', 'WordPress'].map((skill, index) => (
                  <motion.span 
                    key={skill}
                    className="px-4 py-2 bg-brand-noirprofond text-white rounded-full text-sm font-medium border border-gray-700 hover:bg-brand-rougefonce hover:border-brand-rougefonce transition-colors duration-300"
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Bouton CTA avec animation */}
            <motion.div 
              className="mt-10"
              variants={itemVariants}
            >
              <motion.div>
                <Link
                  to="/competences"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-rougevif hover:bg-brand-rougefonce transition duration-300 shadow-lg"
                >
                  Voir mes compétences détaillées
                  <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;