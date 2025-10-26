
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

const benefits = [
  {
    image: 'https://kyondigital.com/wp-content/uploads/2025/08/01.png',
    description: '70% de redução no tempo médio de resposta no WhatsApp.',
  },
  {
    image: 'https://kyondigital.com/wp-content/uploads/2025/08/02.png',
    description: '+180 horas/mês economizadas em tarefas repetitivas de atendimento.',
  },
  {
    image: 'https://kyondigital.com/wp-content/uploads/2025/08/03.png',
    description: '98% de satisfação dos clientes atendidos pelos agentes de IA.',
  },
]

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl text-glow-accent">
          Por que a Kyon?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
          Na Kyon, criamos agentes de IA generativa sob medida, com infraestrutura segura e privativa, integração com +400 ferramentas e suporte contínuo para que seu atendimento evolua junto com o seu negócio.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={benefit.image} alt={benefit.description} width={160} height={150} />
              <p className="mt-4 text-muted-foreground text-lg"><span className="font-bold text-foreground">{benefit.description.split(' ')[0]}</span> {benefit.description.substring(benefit.description.indexOf(' ') + 1)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
