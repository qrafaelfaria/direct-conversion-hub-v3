import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Gem, ArrowRight, Ban, ArrowDown, TriangleAlert } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-20 bg-[#c43c6f] text-white ">
      {/* Top Urgent Bar */}
      <div className="bg-[#a02a50] text-white py-2 text-center font-bold uppercase tracking-widest text-3xl bg-urgency">
        🚨 ESPERE! TEMOS UMA OFERTA EXCLUSIVA PARA VOCÊ
      </div>

      {/* Countdown Timer */}
      <div className="flex justify-center items-center gap-4 py-6 bg-urgency">
        <div className="bg-white text-[#c43c6f] rounded-xl px-6 py-3 text-center font-bold text-2xl">
          08 <span className="block text-sm font-normal">Minutos</span>
        </div>
        <div className="bg-white text-[#c43c6f] rounded-xl px-6 py-3 text-center font-bold text-2xl">
          58 <span className="block text-sm font-normal">Segundos</span>
        </div>
      </div>

      <div className="section-container mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-white text-balance mb-4">
            Sua compra está quase finalizada… Mas antes, queremos te oferecer algo que pode <span className="text-[#ffe500]">aumentar sua renda ainda mais. </span>
          </h2>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto bg-[#a02a50] rounded-full h-8 flex items-center justify-between p-1 mb-8">
            <div className="bg-[#ffe500] h-6 rounded-full flex items-center justify-end pr-2" style={{ width: '90%' }}>
              <span className="text-[#c43c6f] text-sm font-bold">99%</span>
            </div>
          </div>

          {/* Down Arrows */}
          <div className="flex justify-center my-8">
            <ArrowDown className="w-12 h-12 text-[#ffe500] animate-bounce" />
            <ArrowDown className="w-12 h-12 text-[#ffe500] animate-bounce delay-150" />
            <ArrowDown className="w-12 h-12 text-[#ffe500] animate-bounce delay-300" />
          </div>

          <p className="text-white text-lg sm:text-xl mb-8">
            Agora, além dos 4 evangelhos, você também pode obter o livro de Apocalipse explicado versículo por versículo por um valor simbólico.
          </p>

          {/* Product Image */}
          <div className="flex justify-center">
            <img src="/Moldes.png" alt="Super Pack de Moldes" className="max-w-full h-auto mx-auto" />
          </div>

          {/* Pricing */}
          <p className="text-white text-2xl sm:text-3xl font-bold mb-8">
            De <span className="line-through">R$ 89,90</span> por <span className="text-[#ffe500]">R$ 7,90</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
