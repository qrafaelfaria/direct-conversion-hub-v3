import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Star, Gift } from "lucide-react";

declare global {
  interface Window {
    initWiapyUpsell: (config: any) => void;
  }
}

const PricingUpsellSection = () => {
  useEffect(() => {
    if (typeof window.initWiapyUpsell === "function") {
      window.initWiapyUpsell({
        linkUrl: "https://pay.wiapy.com/checkout/69d71225585092329ccef181",
        linkText: "SIM, EU ACEITO ESSA OFERTA",
        styles: {
          backgroundColor: "#c43c6f",
          hoverBackgroundColor: "#75394fff",
          fontSize: "17px",
          borderRadius: "10px"
        },
        refusalLinkUrl: "https://wiapy.com/login",
        refusalLinkText: "Recusar está oferta",
        refusalLinkColor: "#000000"
      });
    }
  }, []);

  return (
    <section id="oferta" className="py-12 sm:py-20 bg-white">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-5xl font-display font-black text-gray-900 leading-tight uppercase">
              🔥 Oferta Exclusiva para <span className="text-[#c43c6f]">Novas Alunas</span>
            </h2>
            <div className="w-12 h-1 bg-[#c43c6f] mx-auto rounded-full opacity-50 mt-4" />
          </motion.div>

          {/* Premium Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white flex flex-col relative border-4 border-[#c43c6f] rounded-[3rem] shadow-2xl overflow-hidden mb-12"
          >
            {/* Scarcity Bar */}
            <div className="bg-[#cc1d24] py-2 text-center text-white text-xs sm:text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-white rounded-full animate-ping" />
              RESTAM APENAS 7 DISPONÍVEIS
            </div>

            {/* Header Badges */}
            <div className="bg-[#c43c6f] py-3 text-center text-white text-base font-black uppercase tracking-widest">
              🎁 OFERTA EXCLUSIVA DESTA PÁGINA
            </div>

            <div className="px-6 sm:px-12 pt-12 text-center pb-12">
              {/* Pricing */}
              <div className="space-y-2">
                <p className="text-gray-400 font-bold mb-2">⚠️ Essa oferta NÃO aparecerá novamente</p>
                <p className="text-gray-400 line-through text-2xl font-bold">De R$ 97,00</p>
                <p className="text-gray-600 font-black text-xl uppercase tracking-tighter">Por apenas</p>
                <div className="text-7xl sm:text-8xl font-black text-[#c43c6f] tracking-tighter my-4 drop-shadow-sm">
                  R$ 14,90
                </div>
                <p className="text-gray-500 text-lg font-bold italic">
                  Pagamento único. Sem mensalidades.
                </p>
              </div>

              {/* Benefits List */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-left border-t border-gray-100 pt-10">
                {[
                  "Acesso imediato",
                  "Conteúdo passo a passo",
                  "Acesso vitalício",
                  "Garantia de 7 dias"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-lg text-gray-800 font-bold">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center">
                      <Check className="w-4 h-4 text-white stroke-[4px]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Bonus Highlight */}
              <div className="mt-10 space-y-4">
                <p className="text-[#d97706] font-black text-sm uppercase tracking-widest mb-2">🎁 BÔNUS EXCLUSIVOS</p>
                {[
                  "Kit de Alfabetos e Monogramas",
                  "Pack de Designs Hospitalares para Bordado"
                ].map((bonus, i) => (
                  <div key={i} className="p-4 bg-[#fffbeb] border-2 border-[#fde68a] rounded-2xl relative overflow-hidden group text-left">
                    <Gift className="absolute -right-2 -bottom-2 w-16 h-16 text-[#fde68a] opacity-30 group-hover:scale-110 transition-transform" />
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="bg-[#fde68a] p-2 rounded-lg">
                        <Star className="w-5 h-5 text-[#d97706] fill-[#d97706]" />
                      </div>
                      <h4 className="text-[#d97706] text-base sm:text-lg font-black leading-tight">
                        {bonus}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Wiapy Upsell Widget */}
              <div className="mt-12">
                <div id="wiapy_upsell"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingUpsellSection;
