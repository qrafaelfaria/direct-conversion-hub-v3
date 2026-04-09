import { motion } from "framer-motion";
import { CheckCircle2, Scissors, PenTool, Layers, Sparkles, TrendingUp } from "lucide-react";

const curriculumItems = [
  { icon: Scissors, text: "Bordado em uniformes hospitalares" },
  { icon: PenTool, text: "Personalização com nomes e logotipos" },
  { icon: Sparkles, text: "Técnicas de silk screen e estamparia" },
  { icon: Layers, text: "Acabamentos profissionais e duráveis" },
  { icon: TrendingUp, text: "Precificação estratégica para peças personalizadas" },
];

const CurriculumSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-black text-[#c43c6f] mb-4 uppercase tracking-tight">
            📚 O Que Você Vai Aprender
          </h2>
          <div className="w-20 h-1.5 bg-[#ffe500] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {curriculumItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-[#fbe8ee]/30 p-5 rounded-2xl border border-[#f472b6]/10 hover:border-[#c43c6f]/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c43c6f] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-700">
                {item.text}
              </span>
              <CheckCircle2 className="w-6 h-6 text-[#22c55e] ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
