import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="planos" className="py-12 sm:py-20 bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-4xl font-display font-black text-foreground mb-3">
            ⏰ ÚLTIMA CHANCE — OFERTA TERMINA HOJE
          </h2>
        </motion.div>

        <div className="max-w-xl mx-auto">
          {/* Premium */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-benefit flex flex-col relative border-2 border-[#ff0073] shadow-lg shadow-[#ff0073]/50"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="badge-popular flex items-center gap-1 bg-[#ff0073] text-white px-2 py-1 rounded-full text-medium">
                <Star className="w-6 h-6" /> MAIS ESCOLHIDO
              </span>
            </div>

            <h3 className="text-xl font-display font-bold text-foreground mb-2 mt-2">
              Pacote Premium
            </h3>
            <div className="mb-6">
              <span className="text-muted-foreground text-sm line-through">De R$ 97,00</span>
              <div className="flex items-baseline gap-1">
                <span className="text-6xl font-display font-black text-[#ff0073]">R$ 10</span>
                <span className="text-[#ff0073] text-medium">,00</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {[
                "+250 Moldes de Caixa Mini Confeiteiro",
                "100% editável no Canva grátis",
                "Arquivos organizados por tema",
                "Posts para o Instragram Prontos e Editáveis 2026",
                "Modelo de Cardápio Digital Editável",
                "Aula de como Fazer as Personalizações no Canva",
                "Moldes de Sacolinhas Páscoa",
                "Moldes de Mini Ovos Páscoa",
                "Acesso prioritário ao suporte",
                "Acesso Vitalício",
                "Suporte prioritário via WhatsApp",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-medium text-black font-semibold">
                  <Check className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="https://pay.wiapy.com/M2HsCRlzc" className="cta-button w-full text-center text-base animate-pulse-glow">
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
