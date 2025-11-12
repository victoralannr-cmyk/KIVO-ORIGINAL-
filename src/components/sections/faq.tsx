
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
        question: "O que é um agente de IA da Kivo?",
        answer: "Nossos agentes de IA são sistemas inteligentes capazes de automatizar todo ou parte do atendimento ao cliente, interagindo em múltiplos canais e integrando-se aos sistemas da sua empresa para oferecer respostas rápidas, personalizadas e precisas."
    },
    {
        question: "Em quais canais o agente pode atuar?",
        answer: "Podemos integrar seu agente de IA a canais como WhatsApp, e-mail, chat no site, redes sociais, CRMs, plataformas de suporte e qualquer outro sistema que sua empresa utilize."
    },
    {
        question: "O agente substitui minha equipe?",
        answer: "O objetivo não é substituir, mas potencializar sua equipe. O agente cuida das tarefas repetitivas e operacionais, liberando seus colaboradores para lidar com casos complexos e estratégicos."
    },
    {
        question: "É possível personalizar o comportamento do agente?",
        answer: "Sim. Configuramos o agente para seguir regras, fluxos e linguagem específicos da sua empresa, mantendo a identidade e o tom de voz da sua marca."
    },
    {
        question: "O agente aprende sozinho?",
        answer: "Sim. Ele utiliza aprendizado contínuo para melhorar suas respostas com base nas interações e resultados obtidos, garantindo evolução constante da performance."
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
              className="absolute bottom-20 left-20 w-1/5 h-auto opacity-5 animate-orbit hidden md:block"
              style={{ animationDuration: '56s' }}
          />
      )}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Perguntas Frequentes
          </h2>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b-border/20">
                        <AccordionTrigger className="font-headline text-lg text-left hover:no-underline text-foreground">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
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
