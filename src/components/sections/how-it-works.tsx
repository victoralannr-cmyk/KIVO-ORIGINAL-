'use client';

import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Brain, Mic, Eye, Code, Puzzle } from 'lucide-react';

const capabilities = [
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: 'Compreender o cliente',
    description: 'Interpretar o contexto e responder de forma natural.',
  },
  {
    icon: <Mic className="h-10 w-10 text-primary" />,
    title: 'Ouvir e transcrever áudios',
    description: 'Interpreta mensagens de voz e responde automaticamente.',
  },
  {
    icon: <Eye className="h-10 w-10 text-primary" />,
    title: 'Analisar imagens',
    description: 'Reconhecer documentos, fotos de produtos ou comprovantes.',
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'Conectar-se a qualquer API',
    description: 'Integra sistemas, ERPs, bancos de dados e plataformas externas.',
  },
  {
    icon: <Puzzle className="h-10 w-10 text-primary" />,
    title: 'Executar lógica avançada',
    description: 'Gerar orçamentos, validar informações e aplicar regras de negócio.',
  },
];

export default function HowItWorksSection() {
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
    <section 
      id="como-funciona" 
      className="sky-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-center text-foreground">
            <span style={{fontFamily: "'Playfair Display', serif"}}>O que ele é capaz de fazer</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Nosso agente de IA é um assistente digital completo para sua empresa.
          </p>
        </div>
        <Carousel setApi={setApi} className="w-full mt-12" opts={{ loop: true, align: 'start' }}>
          <CarouselContent className="-ml-4">
            {capabilities.map((capability, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col items-center text-center p-6 bg-card/60 backdrop-blur-sm border border-border/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 h-full">
                    <CardHeader className="p-0">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        {capability.icon}
                      </div>
                      <CardTitle className="font-headline text-xl">{capability.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-4 flex-grow">
                      <p className="text-muted-foreground">{capability.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
        </Carousel>
      </div>
    </section>
  );
}
