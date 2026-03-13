import React from 'react';
import { motion } from "framer-motion";

const FeedbackSection: React.FC = () => {
  const images = [
    "/whatsapp-chat.png",
    "/whatsapp-chat (1).png",
    "/whatsapp-chat (2).png",
    "/whatsapp-chat (3).png",
  ];

  return (
    <section className="py-12 sm:py-20 bg-gray-100">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-display font-black text-center text-foreground mb-10">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {images.map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={src}
                alt={`Depoimento ${index + 1}`}
                className="max-w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="section-container mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#planos" className="cta-button animate-pulse-glow w-full sm:w-auto text-center">
              QUERO ACESSAR AGORA
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
