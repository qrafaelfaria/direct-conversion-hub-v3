import { motion } from "framer-motion";
import { Check } from "lucide-react";

const OpportunitySection = () => {
  return (
    <section className="py-2 sm:py-20 bg-[#fbe8ee]">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="max-w-4xl mx-auto my-12">
            <div className="relative bg-[#fff5f7] border-2 border-[#f472b6]/30 rounded-[2.5rem] p-8 sm:p-14 text-center shadow-sm">
              {/* Top accent line like in the image */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#c43c6f] rounded-b-full opacity-80" />
              
              <h3 className="text-2xl sm:text-3xl font-display font-black text-[#c43c6f] mb-8">
                Para quem é esse curso?
              </h3>

              <div className="space-y-8 text-lg sm:text-xl leading-relaxed text-gray-700 font-medium">
                <div className="space-y-2">
                  <p className="text-[#c43c6f] font-bold">✔ Iniciantes</p>
                  <p>Nunca costurou ou se sente insegura? Aqui você aprende do zero, com passo a passo simples e fácil de seguir.</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[#c43c6f] font-bold">✔ Quem já costura</p>
                  <p>Aprimore suas técnicas, aprenda a trabalhar com moldes profissionais e crie peças com acabamento mais valorizado.</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[#c43c6f] font-bold">✔ Quem quer ganhar dinheiro com costura</p>
                  <p>Aprenda a produzir roupas hospitalares que têm procura constante e podem gerar renda todos os meses.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center space-y-4">
              <div className="flex flex-col items-center gap-2 text-black font-bold">
                <div className="flex items-center gap-2">
                  <span className="text-[#c43c6f]">❌</span>
                  <span>Não precisa de experiência</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#c43c6f]">❌</span>
                  <span>Não precisa saber criar moldes</span>
                </div>
              </div>
              <p className="text-black text-lg sm:text-xl font-medium px-4">
                Você aprende, faz e pode vender suas próprias peças hospitalares com segurança. 🏥👗
              </p>
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
