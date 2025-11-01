import Image from 'next/image';

const benefits = [
  {
    image: 'https://i.postimg.cc/50fW93bF/01.webp',
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

export default function WhyKyonSection() {
  return (
    <section 
      id="beneficios" 
      className="sky-background"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-center text-foreground">
            <span style={{fontFamily: "'Playfair Display', serif"}}>Por que a Kivo?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
          Na Kivo, criamos agentes de IA generativa sob medida, com infraestrutura segura e privativa, integração com +400 ferramentas e suporte contínuo para que seu atendimento evolua junto com o seu negócio.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center p-6 rounded-lg bg-card/60 backdrop-blur-sm border border-border/20">
              <Image src={benefit.image} alt={benefit.description} width={150} height={150} className="object-contain" />
              <p className="mt-4 text-muted-foreground text-lg max-w-xs"><span className="font-bold text-foreground">{benefit.description.split(' ')[0]}</span> {benefit.description.substring(benefit.description.indexOf(' ') + 1)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
