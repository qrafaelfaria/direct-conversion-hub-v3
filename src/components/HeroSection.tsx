import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Gem, ArrowRight, Ban, ArrowDown, TriangleAlert } from "lucide-react";

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
            <span className="text-gray-900">TRANSFORME-SE EM UMA</span> {" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white px-3 bg-[#c43c6f]">COSTUREIRA PREPARADA PARA</span>
            </span>
            <br /> QUALQUER CLIENTE
          </h1>
          
          <div className="flex items-center justify-center gap-2 mt-6 text-xl sm:text-2xl font-bold text-gray-700">

            <p>Oportunidade única e exclusiva para novas alunas</p>
          </div>

          <div className="max-w-4xl mx-auto my-10">
            <div className="relative bg-white border-4 border-[#c43c6f] rounded-[2.5rem] p-8 sm:p-16 text-center shadow-2xl overflow-hidden">
              <div className="relative z-10 space-y-8 text-xl sm:text-2xl leading-relaxed text-gray-800 font-semibold">
                <p>
                  Agora você já sabe como produzir peças hospitalares profissionais… <span className="font-extrabold underline decoration-[#ffe500] decoration-4">mas deixa eu te perguntar uma coisa: </span>
                </p>
                
                <p>
                  <span className="text-2xl text-[#c43c6f] font-extrabold">👉 O que você faz quando aparece um pedido diferente?</span>
                </p>
                
                <div className="grid grid-cols-1 gap-4 mt-10">
                  {[
                    "Quando a cliente pede algo que você não tem molde?",
                    "Quando surge uma oportunidade nova?",
                    "Quando você quer vender mais… mas não tem variedade?",
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-[#c43c6f]/30 transition-colors text-left">
                      <div className="bg-red-500 text-white p-1 rounded-full shrink-0 mt-1">
                        <TriangleAlert className="w-5 h-5 text-black" />
                      </div>
                      <span className="font-bold text-gray-700">{benefit}</span>
                    </div>
                  ))}

                  <p>
                  <span className="text-2xl text-black font-extrabold">A maioria trava aqui.</span>
                </p>

                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
