
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FinalCtaSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl text-glow-primary">
          Pronto para ter um agente de IA trabalhando por você?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
          Nós criamos, treinamos e entregamos seu agente pronto para atender.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="group transition-all duration-300 ease-in-out hover:glow-shadow-accent bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#agendar">
              Agendar uma demonstração
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
