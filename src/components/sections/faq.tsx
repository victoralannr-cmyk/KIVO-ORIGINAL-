import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const faqs = [
    {
        question: "Quais serviços a Kivo oferece?",
        answer: "A Kivo oferece soluções completas para o crescimento digital de marcas e pessoas. Nossos serviços incluem criação de identidade visual, estratégias de tráfego pago, gestão de redes sociais, criação de sites personalizados, automação de marketing, e campanhas de branding. Trabalhamos com empresas que buscam resultados reais, inovação e um posicionamento digital sólido."
    },
    {
        question: "Como a Kivo ajuda minha empresa a crescer digitalmente?",
        answer: "A Kivo orquestra o crescimento digital da sua marca por meio da integração de design, tecnologia e performance. Criamos estratégias personalizadas que posicionam sua marca de forma única e eficaz, utilizando campanhas de tráfego pago, automação e otimização contínua para gerar resultados reais e mensuráveis."
    },
    {
        question: "A Kivo faz um plano personalizado para minha empresa?",
        answer: "Sim, na Kivo entendemos que cada negócio é único. Por isso, criamos estratégias e planos personalizados baseados nas necessidades e objetivos específicos de cada cliente. Seja para aumentar a visibilidade online, melhorar as vendas ou construir uma presença digital de longo prazo, temos a solução ideal para você."
    },
    {
        question: "Como posso saber qual é o plano ideal para minha empresa?",
        answer: "Nossa equipe está disponível para realizar uma consultoria personalizada e entender as necessidades da sua empresa. A partir daí, sugerimos o plano mais adequado — seja para crescimento rápido, posicionamento estratégico ou desenvolvimento digital contínuo."
    },
    {
        question: "Como faço para começar a trabalhar com a Kivo?",
        answer: "É simples! Basta entrar em contato conosco para agendar uma conversa. Vamos entender sua necessidade e criar um plano estratégico alinhado aos seus objetivos. A Kivo está pronta para orquestrar o crescimento da sua marca no digital."
    }
]

export default function FaqSection() {
  const kLogo = PlaceHolderImages.find(img => img.id === 'k-logo-hero');
  const kivoText = PlaceHolderImages.find(img => img.id === 'kivo-text-hero');

  return (
    <section 
      id="faq" 
      className="relative bg-transparent py-12 md:py-24 lg:py-32 overflow-hidden"
    >
       {kivoText && (
          <Image
              src={kivoText.imageUrl}
              alt={kivoText.description}
              width={600}
              height={200}
              className="absolute top-20 right-20 w-1/4 h-auto opacity-[0.03] animate-orbit hidden md:block"
              style={{ animationDuration: '51s' }}
          />
      )}
       {kLogo && (
          <Image
              src={kLogo.imageUrl}
              alt={kLogo.description}
              width={500}
              height={500}
              className="absolute bottom-20 left-20 w-1/5 h-auto opacity-20 animate-orbit hidden md:block"
              style={{ animationDuration: '56s' }}
          />
      )}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
            Perguntas Frequentes
          </h2>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b-border/20">
                        <AccordionTrigger className="font-headline text-base md:text-lg text-left hover:no-underline text-foreground">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-base text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
