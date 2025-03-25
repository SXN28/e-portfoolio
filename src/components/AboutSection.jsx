import React from "react";

const AboutSection = () => {
  return (
    <section className="relative py-16 bg-black overflow-hidden">
      {/* Effet de gradient similaire à votre header */}
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo de profil (à remplacer par votre photo) */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-rougefonce to-brand-rougevif rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative">
                <img 
                  src="../../images/photo_clem_gang.jpg" 
                  alt="Clément Foray" 
                  className="rounded-lg shadow-2xl w-full max-w-md border-2 border-gray-800"
                />
              </div>
            </div>
          </div>
          
          {/* Contenu texte */}
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-6">
              <span className="bg-gradient-to-r from-brand-rougefonce to-brand-rougevif bg-clip-text text-transparent">
                À propos de moi
              </span>
            </h2>
            
            <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                    Passionné par le développement frontend et les interfaces utilisateur, je combine sens esthétique
                    et rigueur technique pour créer des expériences web modernes et intuitives. Mon approche allie
                    créativité et méthodologie pour concevoir des applications à la fois élégantes et performantes.
                </p>
                
                <p className="text-lg">
                    Actuellement en 3ème année de BUT Informatique à l'IUT Lyon 1 (Bourg-en-Bresse), j'approfondis
                    mes compétences en développement web tout en effectuant mon alternance dans une agence web.
                    Cette double expérience académique et professionnelle me permet de maîtriser les technologies
                    frontend tout en comprenant les enjeux concrets du métier.
                </p>
                
                <p className="text-lg">
                    Je m'intéresse particulièrement à l'UX/UI design et aux animations interactives. Ce que je recherche : concevoir des interfaces innovantes qui
                    marient beauté visuelle et excellence technique, tout en continuant à apprendre des meilleures
                    pratiques du secteur.
                </p>
            </div>
            
            {/* Liste de compétences clés */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Mes Compétences</h3>
              <div className="flex flex-wrap gap-3">
                {['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'PHP', 'React', 'Symfony', 'MYSQL', 'Figma', 'WordPress'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium border border-gray-700 hover:bg-brand-rougevif hover:border-brand-rougevif transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Bouton CTA */}
            <div className="mt-10">
              <a
                href="/competences"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-rougevif hover:bg-brand-rougefonce transition duration-300 shadow-lg"
              >
                Voir mes compétences détaillées
                <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;