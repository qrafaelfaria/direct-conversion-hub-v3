import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Gem, ArrowRight, Ban } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-16 sm:pb-20 bg-[#fbe8ee]">
      {/* Top Urgent Bar */}
      <div className="bg-[#c43c6f] text-white py-2 text-center text-sm font-bold uppercase tracking-widest animate-pulse">
        ⚠️ Atenção: Não feche ou atualize esta página. Esta oferta é única.
      </div>

      <div className="section-container mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="inline-flex flex-col items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffe500] text-black text-base font-black shadow-lg border-2 border-black/10">
              <CheckCircle2 className="w-5 h-5" />
              <span>PAGAMENTO CONFIRMADO!</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black leading-[1.1] text-[#c43c6f] text-balance">
            ESPERE! <br className="sm:hidden" />
            <span className="text-gray-900">VOCÊ PODE</span> {" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white px-3 bg-[#c43c6f]">LUCRAR 3X MAIS</span>
            </span>
            <br /> COM CADA PEÇA
          </h1>
          
          <div className="flex items-center justify-center gap-2 mt-6 text-xl sm:text-2xl font-bold text-gray-700">

            <p>Oportunidade única e exclusiva para novas alunas</p>
          </div>

          <div className="max-w-4xl mx-auto my-10">
            <div className="relative bg-white border-4 border-[#c43c6f] rounded-[2.5rem] p-8 sm:p-16 text-center shadow-2xl overflow-hidden">
              {/* Background watermark icon */}
              <Gem className="absolute -right-10 -bottom-10 w-64 h-64 text-[#fbe8ee] -rotate-12 pointer-events-none" />
              
              <div className="relative z-10 space-y-8 text-xl sm:text-2xl leading-relaxed text-gray-800 font-semibold">
                <p>
                  Sua vaga no <span className="text-[#c43c6f] font-extrabold underline decoration-[#ffe500] decoration-4">Curso de Costura Hospitalar</span> está garantida!
                </p>
                
                <p>
                  Agora, dê o próximo passo: transforme suas peças em <span className="text-[#c43c6f] font-bold">produtos premium e altamente lucrativos</span> aprendendo a bordar nomes e logotipos exclusivos.
                </p>
                
                <div className="grid grid-cols-1 gap-4 mt-10">
                  {[
                    "Transforme um pijama simples em uma peça de luxo com logotipos.",
                    "Cobre até 70% a mais por cada nome bordado (puro lucro).",
                    "Fidelize hospitais e clínicas com uniformes exclusivos.",
                    "Domine a técnica que as iniciantes têm medo de tentar."
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-[#c43c6f]/30 transition-colors text-left">
                      <div className="bg-[#ffe500] p-1 rounded-full shrink-0 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-black" />
                      </div>
                      <span className="font-bold text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 mt-8">
            <a href="#planos" className="cta-button scale-110 animate-pulse-glow w-full sm:w-auto text-center py-6 px-12 text-2xl flex items-center justify-center gap-3">
              SIM! QUERO SER UMA ESPECIALISTA PREMIUM <ArrowRight className="w-6 h-6" />
            </a>
            
            <button className="group flex items-center gap-2 text-gray-400 hover:text-red-500 font-medium transition-all text-sm sm:text-base underline decoration-dotted">
              <Ban className="w-4 h-4" />
              Não, eu prefiro perder essa chance e continuar vendendo peças comuns
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="/compra-segura.png" alt="Compra Segura" className="h-10" />
            <img src="/garantia-7-dias.png" alt="Garantia" className="h-10" />
            <img src="/acesso-imediato.png" alt="Acesso Imediato" className="h-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
