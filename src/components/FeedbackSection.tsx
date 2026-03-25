import React from 'react';
import { motion } from "framer-motion";
import image1 from "/1.jpg";
import image7 from "/3.jpg";
import image8 from "/4.jpg";
import image20 from "/6.jpg";
import image44 from "/7.jpg";
import image69 from "/23.jpg";
import image127 from "/37.jpg";
import image128 from "/45.jpg";
import image129 from "/53.jpg";
import image130 from "/61.jpg";
import image131 from "/67.jpg";
import image132 from "/81.jpg";
import image133 from "/87.jpg";
import image134 from "/103.jpg";
import image135 from "/153.jpg";
import image136 from "/178.jpg";
import image137 from "/192.jpg";
import image138 from "/196.jpg";
import image139 from "/200.jpg";
import image140 from "/203.jpg";

const FeedbackSection: React.FC = () => {
  const images = [
    "/whatsapp-chat.png",
    "/whatsapp-chat (1).png",
    "/whatsapp-chat (2).png",
    "/whatsapp-chat (3).png",
  ];
const cards = [image1, image7, image8, image20, image44, image69, image127, image128, image129, image130, image131, image132, image133, image134, image135, image136, image137, image138, image139, image140];
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

<div className="relative mt-12">
        <div className="flex animate-marquee bg-white" style={{ width: "fit-content" }}>
          {duplicated.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 h-80 sm:w-80 sm:h-80 rounded-xl overflow-hidden transition-transform duration-300"
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
