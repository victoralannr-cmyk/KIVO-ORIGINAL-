
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

export default function WhyKyonSection() {
  return (
    <section 
      id="beneficios" 
      className="relative bg-background py-12 md:py-24 lg:py-32 bg-cover bg-center"
      style={{backgroundImage: "url('https://i.postimg.cc/RhnJfkW2/6167b44b090043d5151bacce172725d9-1.jpg')"}}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl text-glow-accent">
          Por que a Kivo?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
          Na Kivo, criamos agentes de IA generativa sob medida, com infraestrutura segura e privativa, integração com +400 ferramentas e suporte contínuo para que seu atendimento evolua junto com o seu negócio.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center h-40 w-40 rounded-full bg-card/80 p-4">
                <Image src={benefit.image} alt={benefit.description} width={160} height={150} className="object-contain" />
              </div>
              <p className="mt-4 text-muted-foreground text-lg max-w-xs"><span className="font-bold text-foreground">{benefit.description.split(' ')[0]}</span> {benefit.description.substring(benefit.description.indexOf(' ') + 1)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
