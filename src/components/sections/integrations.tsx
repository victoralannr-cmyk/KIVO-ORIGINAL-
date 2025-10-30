
import Image from 'next/image';

export default function IntegrationsSection() {
  return (
    <section 
      className="relative bg-background py-12 md:py-24 lg:py-32 bg-cover bg-center"
      style={{backgroundImage: "url('https://i.postimg.cc/rpsT480S/6167b44b090043d5151bacce172725d9.jpg')"}}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl text-glow-accent">
          Integrações sem limites
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
          Seus agentes de IA não trabalham sozinhos, eles se conectam a todas as ferramentas que sua empresa já usa. Com a Kivo, você tem integração completa entre canais de atendimento, sistemas internos e plataformas externas, criando um ecossistema fluido e inteligente.
        </p>
        <div className="mt-12 flex justify-center">
            <Image 
                src="https://kyondigital.com/wp-content/uploads/2025/09/Frame-2147207637-1.png"
                alt="Logos de integrações"
                width={591}
                height={357}
                className="max-w-full h-auto"
            />
        </div>
      </div>
    </section>
  );
}
