
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "O que é um agente de IA da AetherAI?",
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
  return (
    <section id="faq" className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl text-glow-accent">
            Perguntas Frequentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Tudo o que você precisa saber antes de contratar.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="font-headline text-lg text-left">{faq.question}</AccordionTrigger>
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
