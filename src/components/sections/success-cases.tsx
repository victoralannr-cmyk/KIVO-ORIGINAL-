
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
  {
    quote: 'O ROI foi evidente desde o primeiro trimestre. Uma ferramenta indispensável para qualquer negócio que queira escalar.',
    name: 'CFO, Visionary Inc.',
    logoId: 'client-logo-5',
  },
  {
    quote: 'A capacidade de integração do agente com nossos sistemas legados foi surpreendente. Parecia que ele sempre esteve aqui.',
    name: 'Head de TI, DataDriven Co.',
    logoId: 'client-logo-6',
  },
    {
    quote: 'Nossos clientes estão mais felizes, e nossa equipe mais produtiva. Foi uma vitória para todos os lados.',
    name: 'Diretora de RH, PeopleFirst',
    logoId: 'client-logo-7',
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
            Apoiada por grandes empresas
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="border-border/20 bg-card overflow-hidden h-full">
                      <CardContent className="flex flex-col items-center justify-center p-8 md:p-12 text-center h-full">
                         {logo && (
                             <Image
                               src={logo.imageUrl}
                               alt={logo.description}
                               width={120}
                               height={40}
                               className="h-10 w-auto object-contain grayscale mb-6"
                               data-ai-hint={logo.imageHint}
                             />
                           )}
                        <p className="text-lg md:text-xl font-medium text-foreground flex-grow">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <div className="mt-6 flex items-center gap-4">
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

