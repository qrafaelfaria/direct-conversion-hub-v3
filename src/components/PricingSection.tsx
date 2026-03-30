import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="planos" className="py-4 sm:py-20 bg-[#0c3769]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-benefit text-center mb-8 border-2 border-[#0c3769] bg-white"
          >
            <div className="px-6 py-6">
              <p className="tracking-widest text-xs sm:text-sm font-display font-black text-[#0c3769]">
                ACESSO IMEDIATO!
              </p>
              <h3 className="mt-1 text-2xl sm:text-3xl font-display font-black text-[#0c3769]">
                COMO APROVEITAR A{" "}
                <span className="text-black bg-[#ffe500] px-2 py-1 text-medium">PROMOÇÃO?</span>
              </h3>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                Após realizar o pagamento você recebe{" "}
                <span className="font-semibold text-black font-black">automaticamente</span> por e‑mail
                e também no seu <span className="font-semibold text-[#0c3769]">WhatsApp</span> o link para acessar o
                material em vídeo e bônus adicionais para baixar e estudar onde quiser.
              </p>
              <img src="/logo_wiapy_fCXIrP.png" alt="Wiapy" className="mx-auto my-6 w-44 h-auto" />
              <p className="text-xs sm:text-sm text-muted-foreground">
               Lembramos que sua compra está protegida pela Wiapy.
              </p>
            </div>
          </motion.div>
          {/* Premium */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-benefit flex flex-col relative border-2 border-[#0c3769] shadow-lg shadow-[#0c3769]/50"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="badge-popular flex items-center gap-1 bg-[#0c3769] text-white px-2 py-1 rounded-full text-medium">
                <Star className="w-6 h-6" /> MAIS ESCOLHIDO
              </span>
            </div>

            <h3 className="text-xl font-display font-bold text-foreground mb-2 mt-2">
              Pacote Premium
            </h3>
            <div className="mb-6">
              <span className="text-muted-foreground text-sm line-through">De R$ 197,00</span>
              <div className="flex items-baseline gap-1">
                <span className="text-6xl font-display font-black text-[#0c3769]">R$ 19</span>
                <span className="text-[#0c3769] text-medium">,90</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {[
                "+100 Moldes Hospitalares Profissionais",
                "Lista de Fornecedores Atualizada",
                "Certificado de Finalização",
                "Grupo VIP Alunas",
                "Acesso Vitalício + Acesso Imediato",
                "Atualizações Constantes",
                "Garantia de satisfação de 30 Dias",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-medium text-black font-semibold">
                  <Check className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="https://pay.wiapy.com/eWxbrwirql" className="cta-button w-full text-center text-base animate-pulse-glow">
              QUERO O PREMIUM
            </a>
            <img src="/pagamentos.jpeg" alt="Métodos de Pagamento" className="mx-auto mt-4" />
            <p className="text-center text-xs text-muted-foreground mt-3">
              🔒 Pagamento 100% seguro • Acesso imediato
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
