
'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    quote: 'A implementação do agente de IA transformou nosso atendimento. A eficiência aumentou 200% em apenas um mês.',
    name: 'CEO, TechSolutions',
    logoId: 'client-logo-1',
  },
  {
    quote: 'Nunca imaginei que automatizar nosso suporte seria tão simples e rápido. A equipe da AetherAI foi incrível.',
    name: 'Diretor de Operações, InovaCorp',
    logoId: 'client-logo-2',
  },
  {
    quote: 'Reduzimos em 50% o tempo de resposta aos clientes. O impacto nos nossos KPIs foi imediato.',
    name: 'Gerente de Sucesso, MarketBoost',
    logoId: 'client-logo-3',
  },
   {
    quote: 'O agente de IA não apenas responde, mas também resolve problemas complexos, liberando nossa equipe para inovar.',
    name: 'CTO, FutureWare',
    logoId: 'client-logo-4',
  },
];

export default function SuccessCasesSection() {
    const [api, setApi] = React.useState<CarouselApi>();

    useEffect(() => {
        if (!api) return;

        const interval = setInterval(() => {
            if (api.canScrollNext()) {
                api.scrollNext();
            } else {
                api.scrollTo(0);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [api]);

  return (
    <section id="sucesso" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl text-glow-primary">
            Casos de Sucesso
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Veja como empresas como a sua estão se beneficiando da nossa tecnologia.
          </p>
        </div>
        <Carousel setApi={setApi} className="w-full mt-12" opts={{loop: true}}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
               const logo = PlaceHolderImages.find(p => p.id === testimonial.logoId);
               return (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-border/20 bg-card overflow-hidden">
                      <CardContent className="flex flex-col items-center justify-center p-8 md:p-12 text-center">
                        <p className="text-xl md:text-2xl font-medium text-foreground">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                           {logo && (
                             <Image
                               src={logo.imageUrl}
                               alt={logo.description}
                               width={120}
                               height={50}
                               className="h-10 w-auto object-contain grayscale"
                               data-ai-hint={logo.imageHint}
                             />
                           )}
                           <span className="text-muted-foreground font-semibold">{testimonial.name}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
