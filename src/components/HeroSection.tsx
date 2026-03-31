import { motion } from "framer-motion";
import { Zap, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-8 sm:pt-20 sm:pb-12 bg-[#fbe8ee]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffe500] text-black text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            <span>Oferta por tempo limitado</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black leading-tight text-[#c43c6f] text-balance mt-6">
            APRENDA A COSTURAR ROUPAS HOSPITALARES DO ZERO E {" "}
            <span className="text-[#c43c6f] bg-[#fda4af]">TRANSFORME ISSO EM UMA RENDA REAL</span>
          </h1>

          <div className="max-w-4xl mx-auto my-12">
            <div className="relative bg-[#fff5f7] border-2 border-[#f472b6]/30 rounded-[2.5rem] p-8 sm:p-14 text-center shadow-sm">
              {/* Top accent line like in the image */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#c43c6f] rounded-b-full opacity-80" />
              
              <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-gray-700 font-medium">
                <p>
                  Aqui no <span className="text-[#c43c6f] font-bold">Curso de Costura Hospitalar</span>, você tem acesso a aulas completas que ensinam, do zero, como produzir roupas profissionais para o setor da saúde.
                </p>
                
                <p>
                  Mesmo que você nunca tenha costurado antes, o método é simples e direto, com explicações claras e organizadas para você acompanhar sem dificuldade.
                </p>
                
                <p>
                  As aulas mostram cada etapa da produção — desde o uso dos moldes até o acabamento final — para que você consiga criar peças bem feitas e prontas para venda.
                </p>
                
                <p className="text-[#c43c6f] font-bold">
                  É um conteúdo direto ao ponto, focado em te ensinar na prática como produzir, precificar e transformar isso em renda.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="#planos" className="cta-button animate-pulse-glow w-full sm:w-auto text-center">
              👉 QUERO GARANTIR MINHA VAGA
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
