import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Gem, ArrowRight, Ban, ArrowDown, TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    initWiapyUpsell: (config: any) => void;
  }
}

const HeroSection = () => {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (typeof window.initWiapyUpsell === "function") {
      window.initWiapyUpsell({
        linkUrl: "https://pay.wiapy.com/checkout/69d71225585092329ccef181",
        linkText: "SIM! QUERO GARANTIR AGORA",
        styles: {
          backgroundColor: "#094b00ff",
          hoverBackgroundColor: "#1e6b00ff",
          fontSize: "20px",
          borderRadius: "10px"
        },
        refusalLinkUrl: "https://costurahospitalar.vercel.app",
        refusalLinkText: "Não, vou deixar passar",
        refusalLinkColor: "#ffffffff"
      });
    }
  }, []);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [minutes, seconds]);

  return (
    <>
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-20 bg-[#c43c6f] text-white">
        {/* Top Urgent Bar */}
        <div className="bg-[#a02a50] text-white py-2 text-center font-bold uppercase tracking-widest text-2xl bg-urgency pt-8">
          🚨 ESPERE! TEMOS UMA OFERTA EXCLUSIVA PARA VOCÊ!
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center items-center gap-4 py-6 bg-urgency">
          <div className="bg-white text-[#c43c6f] rounded-xl px-6 py-3 text-center font-bold text-2xl">
            {String(minutes).padStart(2, '0')} <span className="block text-sm font-normal">Minutos</span>
          </div>
          <div className="bg-white text-[#c43c6f] rounded-xl px-6 py-3 text-center font-bold text-2xl">
            {String(seconds).padStart(2, '0')} <span className="block text-sm font-normal">Segundos</span>
          </div>
        </div>

{/* Progress Bar */}
            <div className="max-w-sm mx-auto bg-[#a02a50] rounded-full h-8 flex items-center justify-between p-1 m-8">
              <div className="bg-[#ffe500] h-6 rounded-full flex items-center justify-end pr-2" style={{ width: '90%' }}>
                <span className="text-[#c43c6f] text-sm font-bold">99%</span>
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
              Sua compra está quase finalizada… Mas antes, queremos te oferecer algo que pode <span className="text-[#ffe500]">aumentar ainda mais a sua renda com costura.</span>
            </h2>

            {/* Down Arrows */}
            <div className="flex justify-center my-8">
              <ArrowDown className="w-12 h-12 text-[#ffe500] animate-bounce" />
              <ArrowDown className="w-12 h-12 text-[#ffe500] animate-bounce delay-150" />
              <ArrowDown className="w-12 h-12 text-[#ffe500] animate-bounce delay-300" />
            </div>

            <p className="text-white text-xl sm:text-2xl mb-8">
              Agora, além do Curso de Costura Hospitalar, você pode garantir acesso ao Super Pack de Moldes Profissionais. <span className="text-[#ffe500]">Um acervo completo para você produzir, variar e vender muito mais.</span> 
            </p>

            {/* Product Image */}
            <div className="flex justify-center">
              <img src="/Maisvendido.png" alt="Super Pack de Moldes" className="max-w-full h-auto mx-auto" />
            </div>

            {/* Pricing */}
            <p className="text-white text-2xl sm:text-3xl font-bold mt-8">
              De <span className="line-through">R$ 49,90</span> por <span className="text-[#ffe500]">R$ 14,90</span>
            </p>

            {/* New Section: What you will receive */}
            <div className="bg-[#fbe8ee] p-6 rounded-lg shadow-lg mt-6 max-w-md mx-auto">
              <h3 className="text-[#c43c6f] text-3xl font-black mb-6 text-center">O que você vai receber:</h3>
              <ul className="space-y-4 mb-8 text-lg">
                <li className="flex items-left text-[#c43c6f] text-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  +100 Moldes para bebês
                </li>
                <li className="flex items-left text-[#c43c6f] text-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  +400 Moldes de Vestidos infantis
                </li>
                <li className="flex items-left text-[#c43c6f] text-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  +280 Moldes de Vestidos Adultos
                </li>
                <li className="flex items-left text-[#c43c6f] text-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  +750 Moldes para Roupas Fitness
                </li>
                <li className="flex items-left text-[#c43c6f] text-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  +40 Moldes para Pets
                </li>
                <li className="flex items-left text-[#c43c6f] text-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  Guia de Impressão
                </li>
              </ul>
            </div>
{/* Wiapy Upsell Widget */}
            <div className="mt-8">
              <div id="wiapy_upsell"></div>
            </div>

          </motion.div>
        </div>
      </section>
      <section className="bg-[#c43c6f] text-white py-8 px-4 text-center">
        <p className="text-lg italic mb-4">
          Essa é a sua única chance de garantir esse pack com desconto. Ao fechar essa página, o valor volta ao normal e essa oferta desaparece.
        </p>
        <div className="flex flex-col items-center justify-center mb-8">
          <img src="/logocostura.png" alt="Curso de Costura Hospitalar" className="w-48 h-auto mx-auto mb-4 rounded-full" />
        </div>
        <div className="bg-[#ffe500] text-[#1a1a1a] py-4 px-4 text-center font-bold text-xl mb-4 gap-4 flex flex-col items-center justify-center">
          <p>OBRIGADO PELA SUA INSCRIÇÃO!</p>
          <p>Seu acesso ao curso já foi enviado ao seu E-mail!</p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
