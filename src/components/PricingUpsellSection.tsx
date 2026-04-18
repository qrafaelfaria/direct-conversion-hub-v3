import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react"; // Keep Check for FAQ

declare global {
  interface Window {
    initWiapyUpsell: (config: any) => void;
  }
}

const PricingUpsellSection = () => {
  useEffect(() => {
    if (typeof window.initWiapyUpsell === "function") {
      window.initWiapyUpsell({
        linkUrl: "https://pay.wiapy.com/checkout/YOUR_DOWNSELL_CHECKOUT_ID", // TODO: Substituir pelo ID de checkout correto para a oferta de R$ 14,90
        linkText: "SIM! QUERO GARANTIR AGORA",
        styles: {
          backgroundColor: "#c43c6f",
          hoverBackgroundColor: "#75394fff",
          fontSize: "20px",
          borderRadius: "10px"
        },
        refusalLinkUrl: "https://costurahospitalar.vercel.app",
        refusalLinkText: "Não, vou deixar passar",
        refusalLinkColor: "#000000"
      });
    }
  }, []);

  return (
    <section id="downsell" className="py-12 sm:py-20 bg-white">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          {/* Downsell Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white flex flex-col relative border-4 border-[#c43c6f] rounded-[3rem] shadow-2xl overflow-hidden mb-12"
          >
            <div className="px-6 sm:px-12 pt-12 text-center pb-12">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl sm:text-5xl font-display font-black text-gray-900 leading-tight uppercase">
                  KIT MOLDES PREMIUM
                </h2>
              </motion.div>

              {/* Intro */}
                <h2 className="text-gray-600 font-black text-xl tracking-tighter">
                  
                </h2>
                <h2 className="text-gray-600 font-black text-xl tracking-tighter">
                  
                </h2>
                <h2 className="text-gray-600 font-black text-xl tracking-tighter">
                  
                </h2>
                <h2 className="text-gray-600 font-black text-xl  tracking-tighter">
                  
                </h2>

              {/* Pricing */}
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-black text-[#c43c6f] my-4 drop-shadow-sm">
                  Por apenas: R$ 14,90
                </p>
              </div>

              {/* Important Note */}
              <p className="text-gray-500 text-lg font-bold italic mt-8">
                🚫 Importante: Essa oferta não volta depois.
              </p>

              {/* Wiapy Upsell Widget */}
              <div className="mt-12">
                <div id="wiapy_upsell"></div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white p-6 sm:p-10 rounded-[3rem] shadow-lg"
          >
            <h3 className="text-2xl sm:text-3xl font-display font-black text-gray-900 leading-tight mb-8 text-center">
              Perguntas Frequentes
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">1. Qual o valor da oferta e como funciona o pagamento?</h4>
                <p className="text-gray-600">A oferta exclusiva para novas alunas é de apenas R$ 14,90. O pagamento é único, sem mensalidades ou custos adicionais.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">2. Essa oferta estará disponível novamente?</h4>
                <p className="text-gray-600">Não, esta é uma oferta exclusiva desta página e não aparecerá novamente. É uma oportunidade única para novas alunas.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">3. Quando terei acesso ao conteúdo?</h4>
                <p className="text-gray-600">O acesso ao conteúdo é imediato após a confirmação do pagamento. Você poderá começar a aprender e praticar assim que finalizar a compra.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">4. Por quanto tempo terei acesso ao conteúdo?</h4>
                <p className="text-gray-600">Você terá acesso vitalício ao conteúdo, podendo revisitar as aulas e materiais sempre que desejar, sem prazo de expiração.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">5. Existe alguma garantia? Como funciona?</h4>
                <p className="text-gray-600">Sim, oferecemos uma garantia de 7 dias. Se por algum motivo você não ficar satisfeita com o conteúdo, poderá solicitar o reembolso total do valor investido dentro desse período.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">6. Quais são os bônus inclusos na oferta?</h4>
                <p className="text-gray-600">Ao adquirir a oferta, você receberá dois bônus exclusivos: um Kit de Alfabetos e Monogramas e um Pack de Designs Hospitalares para Bordado.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">7. A oferta é por tempo limitado ou possui um número restrito de vagas?</h4>
                <p className="text-gray-600">Sim, a oferta é por tempo limitado e possui um número restrito de vagas. Há uma indicação de escassez ("RESTAM APENAS 7 DISPONÍVEIS"), o que significa que a oportunidade pode se encerrar a qualquer momento.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PricingUpsellSection;

