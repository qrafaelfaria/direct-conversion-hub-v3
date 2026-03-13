import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-secondary">
      <div className="section-container max-w-3xl">
        <h2 className="text-2xl sm:text-4xl font-display font-black text-foreground text-center mb-6">
          Perguntas frequentes
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Tire suas dúvidas sobre os moldes editáveis e como começar agora.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>O que eu recebo ao comprar?</AccordionTrigger>
            <AccordionContent>
              Você recebe acesso imediato por e‑mail ao kit com +250 moldes, todos organizados por tema e 100% editáveis no Canva. No plano Premium,
              você ainda recebe bônus como posts para Instagram, cardápio digital e uma aula de personalização.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Como faço a edição dos modelos?</AccordionTrigger>
            <AccordionContent>
              Os arquivos abrem no Canva através de um link. Você pode trocar textos, cores, fontes e detalhes
              em poucos minutos, mesmo sem experiência em design, usando apenas o Canva grátis.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Posso imprimir? Em casa ou na gráfica?</AccordionTrigger>
            <AccordionContent>
              Sim. Após editar, basta exportar em alta qualidade e imprimir quantas vezes quiser,
              em casa ou na gráfica de sua preferência.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Qual a diferença entre o Básico e o Premium?</AccordionTrigger>
            <AccordionContent>
              O Básico inclui +250 moldes editáveis no Canva. O Premium inclui tudo do Básico
              e ainda: posts para Instagram, cardápio digital, aula de personalização,
              acesso vitalício e suporte prioritário via WhatsApp.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Posso usar comercialmente? E se eu não gostar?</AccordionTrigger>
            <AccordionContent>
              Você pode usar os moldes para seu negócio e vender os produtos criados a partir deles.
              Se não ficar satisfeito, oferecemos garantia: seu dinheiro de volta em até 7 dias.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

