import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // Simule un petit délai d'envoi
    setTimeout(() => {
      console.log("Simulation d'envoi réussie !");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000); // 1 seconde pour simuler un envoi
  };
  

  return (
    <section className="relative py-20 bg-black overflow-hidden">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white mb-6">
            <span className="bg-brand-rougevif bg-clip-text text-transparent">
              Contactez-moi
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet ou une question ? N'hésitez pas à me contacter, je vous répondrai dès que possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-brand-noirprofond border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-rougevif focus:border-transparent"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-brand-noirprofond border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-rougevif focus:border-transparent"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-brand-noirprofond border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-rougevif focus:border-transparent"
                placeholder="Dites-moi en quoi puis-je vous aider..."
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center px-6 py-4 text-lg font-medium rounded-md text-white ${isSubmitting ? 'bg-brand-rougefonce' : 'bg-brand-rougevif hover:bg-brand-rougefonce'} transition duration-300 shadow-lg`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer le message"
                )}
              </button>
            </div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center"
              >
                Merci ! Votre message a bien été envoyé. Je vous répondrai dès que possible.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center"
              >
                Une erreur est survenue. Veuillez réessayer ou me contacter directement à clementforay@gmail.com.
              </motion.div>
            )}
          </form>

          <div className="mt-12 text-center text-gray-400">
            <p>Vous pouvez aussi me contacter directement par email :</p>
            <a 
              href="mailto:clementforay@gmail.com" 
              className="mt-2 inline-block text-brand-rougevif hover:text-brand-rougefonce transition duration-300"
            >
              clementforay@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;