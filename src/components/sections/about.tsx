
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');

  return (
    <section id="sobre" className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl text-glow-accent">
              Sobre a AetherAI
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Na AetherAI, nossa missão é democratizar o acesso à inteligência artificial generativa, capacitando empresas de todos os tamanhos a inovar, automatizar e crescer. Acreditamos que a tecnologia deve trabalhar para as pessoas, não o contrário.
            </p>
            <p className="text-muted-foreground md:text-lg">
              Nossa equipe é formada por especialistas em IA, engenheiros de software e estrategistas de negócios apaixonados por resolver problemas complexos. Combinamos expertise técnica com uma profunda compreensão das necessidades do mercado para entregar soluções que geram resultados reais.
            </p>
          </div>
          <div className="relative">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={800}
                height={600}
                className="rounded-lg object-cover shadow-2xl shadow-primary/10"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
