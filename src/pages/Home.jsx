import React from "react";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import ProjectsCarousel from "../components/ProjectsCarousel";
import ContactForm from "../components/Contact";

const Home = () => {
  return (
    <>
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `
              radial-gradient(circle at top left, #E63946, #E63946 1%, transparent 30%),
              radial-gradient(circle at bottom right, #E63946, #E63946 1%, transparent 40%),
              radial-gradient(circle at center, #000000, #000000 100%)
          `,
          backgroundSize: '100% 100%',
          backgroundPosition: 'top left, bottom right, center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center">
          <p className="text-sm uppercase tracking-widest text-brand-rougevif mb-2">
            Clément Foray
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            <span
              style={{
                background: "linear-gradient(to right, #A4161A, #E63946, #FF6B6B)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                backgroundSize: "200% 200%",
                animation: "gradientAnimation 5s ease infinite",
              }}
            >
              Portfolio
            </span>{' '}
            de Projets
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Je suis Clément Foray, développeur passionné. Découvrez mes projets personnels, professionnels et académiques.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              to="/projets"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-brand-rougevif hover:bg-brand-rougefonce focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Voir mes projets
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <Link
              to="/competences"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Mes Compétences
            </Link>
          </div>
        </div>
      </section>
      <AboutSection />
      <ProjectsCarousel />
      <ContactForm />
    </>
  );
};

export default Home;