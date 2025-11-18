
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function FinalCtaSection() {
  const kLogo = PlaceHolderImages.find(img => img.id === 'k-logo-hero');
  const kivoText = PlaceHolderImages.find(img => img.id === 'kivo-text-hero');

  return (
    <section 
      className="relative py-12 md:py-24 lg:py-32 bg-transparent overflow-hidden"
    >
       {kLogo && (
          <Image
              src={kLogo.imageUrl}
              alt={kLogo.description}
              width={500}
              height={500}
              className="absolute -top-1/4 -left-1/4 w-3/4 h-auto opacity-5 animate-orbit"
              style={{ animationDuration: '45s' }}
          />
      )}

      {kivoText && (
          <Image
              src={kivoText.imageUrl}
              alt={kivoText.description}
              width={600}
              height={200}
              className="absolute -bottom-1/4 -right-1/4 w-2/3 h-auto opacity-[0.03] animate-orbit"
              style={{ animationDuration: '60s' }}
          />
      )}

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
          Pronto para ter um agente de IA trabalhando por você?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
          Nós criamos, treinamos e entregamos seu agente pronto para atender.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="group transition-all duration-300 ease-in-out button-wavy-gradient hover:shadow-lg hover:shadow-blue-900/50 rounded-full px-8 py-4 text-lg animate-pulse">
            <Link href="#agendar">
              Agendar uma demonstração
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

    