import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; // Importar o ícone de check
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

const cards = [image1, image7, image8, image20, image44, image69, image127, image128, image129, image130, image131, image132, image133, image134, image135, image136, image137, image138, image139, image140];
const duplicated = [...cards, ...cards];

const CarouselSection = () => {
  return (
    <section className="py-12 sm:py-20 overflow-hidden">
      <div className="section-container mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-black text-foreground mb-3">
            Centenas de opções editáveis{" "}
            <span className="text-[#ff0073]">no Canva</span>
          </h2>
          <p className="text-black text-lg">
            Escolha o modelo ideal para você
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee" style={{ width: "fit-content" }}>
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
          <div className="section-container mt-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-black text-foreground mb-6">
              Veja o material por dentro
            </h2>
            <div className="relative w-full max-w-sm mx-auto aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1173128316"
                title="Vimeo video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
            >
              <a href="#planos" className="cta-button animate-pulse-glow w-full sm:w-auto text-center">
                QUERO ACESSAR AGORA
              </a>
            </motion.div>
          </div>
    </section>
  );
};

export default CarouselSection;
