import { motion } from "framer-motion";
import { Check } from "lucide-react";

const OpportunitySection = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#fbe8ee]">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-8">
            <h3 className="text-center text-[#c43c6f] text-2xl sm:text-3xl font-display font-black pb-8">
              Para quem é esse curso?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Iniciantes",
                  description:
                    "Nunca costurou ou se sente insegura? Aqui você aprende do zero, com passo a passo simples e fácil de seguir.",
                },
                {
                  title: "Quem já costura",
                  description:
                    "Aprimore suas técnicas, aprenda a trabalhar com moldes profissionais e crie peças com acabamento mais valorizado.",
                },
                {
                  title: "Quem quer ganhar dinheiro com costura",
                  description:
                    "Aprenda a produzir roupas hospitalares que têm procura constante e podem gerar renda todos os meses.",
                }
              ].map((item) => (
                <div key={item.title} className="relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#c43c6f] flex items-center justify-center shadow-lg border border-[#ffe500]">
                    <Check className="w-8 h-8 text-[#ffe500]" />
                  </div>
                  <div className="bg-white rounded-2xl px-6 py-8 shadow-md text-center">
                    <h4 className="text-xl sm:text-2xl font-display font-black text-[#c43c6f]">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>


           <div className="section-container mt-24 text-center pt-12">
            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#ffe500] text-center">
              Veja como você vai imprimir seus moldes 👇
            </h2>
            <div className="relative w-full max-w-sm mx-auto aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden mt-8">
              <iframe
                src="https://player.vimeo.com/video/1177880972"
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

        </motion.div>
      </div>
    </section>
  );
};

export default OpportunitySection;
