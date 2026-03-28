import React from 'react';
import { motion } from "framer-motion";
import image1 from "/Pija01.jpg";
import image7 from "/Pija02.jpg";
import image8 from "/Pija03.jpg";
import image20 from "/Pija04.jpg";
import image44 from "/Pija05.jpg";
import image69 from "/Pija06.jpg";

const FeedbackSection: React.FC = () => {
  const images = [
    "/Feed06.png",
    "/Feed07.png",
    "/Feed08.png",
  ];
const cards = [image1, image7, image8, image20, image44, image69];
const duplicated = [...cards, ...cards];

  return (
    <section className="sm:py-20 bg-gray-100">
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

<div className="relative mt-12 bg-gray-100 gap-4">
        <div className="flex animate-marquee bg-white p-12 gap-4 bg-gray-100"  style={{ width: "fit-content" }}>
          {duplicated.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 h-80 sm:w-80 sm:h-80 rounded-xl overflow-hidden transition-transform duration-300 bg-gray-100"
            >
              <img
                src={card}
                alt={`Capa de Caderno Personalizada ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-contain block"
              />
            </div>
          ))}
        </div>
      </div>
        
      </div>
    </section>
  );
};

export default FeedbackSection;
