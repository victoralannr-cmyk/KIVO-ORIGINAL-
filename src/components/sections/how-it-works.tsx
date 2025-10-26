
import { BrainCircuit, Rocket, BarChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: '1. Treinamento e Customização',
    description: 'Nossa equipe analisa seus processos e treina um agente de IA com seus dados, garantindo que ele responda e atue exatamente como um especialista da sua empresa.',
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: '2. Implementação e Integração',
    description: 'Integramos o agente de IA aos seus sistemas existentes (CRM, ERP, WhatsApp, etc.) para uma automação fluida e sem interrupções. O lançamento é rápido e assistido.',
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: '3. Otimização e Análise',
    description: 'Monitoramos o desempenho do agente continuamente, fornecendo relatórios detalhados e otimizando suas respostas para garantir a máxima eficiência e satisfação do cliente.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl text-glow-primary">
            Como Funciona
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Nosso processo é desenhado para ser simples, rápido e totalmente adaptado às suas necessidades.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 bg-card border border-border/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="p-0">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {step.icon}
                </div>
                <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
