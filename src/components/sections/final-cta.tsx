import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FinalCtaSection() {
  return (
    <section 
      className="relative py-12 md:py-24 lg:py-32 bg-card bg-cover bg-center"
      style={{backgroundImage: "url('https://i.postimg.cc/RhnJfkW2/6167b44b090043d5151bacce172725d9-1.jpg')"}}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
          Pronto para ter um agente de IA trabalhando por você?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
          Nós criamos, treinamos e entregamos seu agente pronto para atender.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="group transition-all duration-300 ease-in-out button-wavy-gradient hover:shadow-lg hover:shadow-blue-900/50 rounded-full px-8 py-4 text-lg">
            <Link href="#agendar">
              Agendar uma demonstração
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
