
import { Clock, Spline, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const benefits = [
  {
    icon: <Clock className="h-8 w-8 text-accent" />,
    title: 'Atendimento 24/7',
    description: 'Seu negócio sempre online, respondendo clientes e resolvendo problemas a qualquer hora do dia, sem pausas.',
  },
  {
    icon: <Spline className="h-8 w-8 text-accent" />,
    title: 'Integração Total',
    description: 'Conectamos nossa IA com as ferramentas que você já usa, automatizando fluxos de trabalho e centralizando informações.',
  },
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: 'Economia de Tempo e Custos',
    description: 'Automatize tarefas repetitivas, libere sua equipe para focar no que é estratégico e reduza custos operacionais.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl text-glow-accent">
            Por que usar nossa IA?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Vantagens que transformam a operação da sua empresa.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="group p-6 border-transparent bg-transparent hover:bg-background transition-colors duration-300">
              <CardHeader className="flex flex-row items-center gap-4 p-0">
                <div className="flex-shrink-0">{benefit.icon}</div>
                <CardTitle className="font-headline text-2xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-4 text-base text-muted-foreground">
                {benefit.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
