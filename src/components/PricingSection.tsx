import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="planos" className="py-4 sm:py-20 bg-[#c43c6f]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
        </motion.div>

        <div className="max-w-xl mx-auto">
          
          {/* Premium */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-benefit flex flex-col relative border-2 border-[#c43c6f] shadow-lg shadow-[#c43c6f]/50"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            </div>

            <div className="px-4 sm:px-6 pt-4">
              <div className="mx-auto max-w-sm">
                <div className="px-4 py-2 text-center bg-[#c43c6f] text-white font-display text-2xl font-black">
                  VEJA TUDO O QUE VOCÊ VAI RECEBER AO ADQUIRIR HOJE
                </div>
              </div>
            </div>

            <div className="mx-4 sm:mx-6 mt-4 rounded-2xl border-2 border-red-500 p-4 sm:p-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-text-red-500 px-3 py-1 mb-4">
                <span className="text-red-500 text-medium font-bold text-center">🎁 Todos os bônus exclusivos liberado</span>
              </div>
              <ul className="space-y-3">
                {[
                  "✅ +100 Moldes Hospitalares Profissionais",
                  "✅ Lista de Fornecedores Atualizada",
                  "✅ Certificado de Finalização",
                  "✅ Grupo VIP Alunas",
                  "✅ Acesso Vitalício + Acesso Imediato",
                  "✅ Atualizações Constantes",
                  "✅ Garantia de satisfação de 30 Dias",
                  "🎁 Guia Fotos que Vendem com o Celular",
                  "🎁 Como  Embalar e Calcular o Frete sem Erro",
                  "🎁 Guia de Precificação Simples para Iniciantes",
                  "🎁 Guia de Vendas (Whatsapp e Instagram)"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-medium text-black font-semibold">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-6 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-black" />
                <span>Acesso vitalício • 100% online</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-black" />
                <span>Certificado de finalização incluso</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-black" />
                <span>Suporte VIP prioritário</span>
              </div>
            </div>

            <div className="border-t mt-6 mb-4" />

            <div className="px-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#ff0073]/10 border border-[#ff0073] px-3 py-1 mb-3">
                <span className="text-[#ff0073] text-sm font-bold">Hoje Desconto Especial</span>
              </div>
              <div className="text-muted-foreground">
                <span className="line-through">De R$ 97,00</span>
              </div>
              <p className="mt-1 text-[#0c3769] font-display font-black">HOJE POR APENAS</p>
              <div className="mt-1 text-4xl sm:text-5xl text-[#17a34a] font-display font-black">
                4x de R$ 5,57
              </div>
              <p className="mt-2 text-medium text-black">
                ou R$ 19,90 à vista
              </p>
            </div>

            <div className="px-6 mt-4 text-center text-sm text-muted-foreground">
              <p className="uppercase font-bold text-red-500">
                Hoje {new Date().toLocaleDateString("pt-BR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
              </p>
              <p>É o último dia para acessar com desconto especial</p>
            </div>

            <div className="px-6 mt-4">
              <a href="https://pay.wiapy.com/eWxbrwirql" className="cta-button w-full text-center text-base animate-pulse-glow">
                GARANTIR AGORA
              </a>
            </div>

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
