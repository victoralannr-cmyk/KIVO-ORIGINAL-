import Image from 'next/image';

export default function IntegrationsSection() {
  return (
    <section 
      className="sky-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
          <span style={{fontFamily: "'Playfair Display', serif"}}>Integrações sem limites</span>
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
