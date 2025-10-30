'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const logos = [
  { logoId: 'client-logo-1' },
  { logoId: 'client-logo-2' },
  { logoId: 'client-logo-3' },
  { logoId: 'client-logo-4' },
  { logoId: 'client-logo-5' },
  { logoId: 'client-logo-6' },
  { logoId: 'client-logo-7' },
];

export default function HeroSection() {
    const [offsetY, setOffsetY] = useState(0);
    const [api, setApi] = React.useState<CarouselApi>();

    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        if (!api) {
          return;
        }
    
        const interval = setInterval(() => {
          if (api.canScrollNext()) {
            api.scrollNext();
          } else {
            api.scrollTo(0);
          }
        }, 3000);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
          clearInterval(interval);
        };
    }, [api]);

    const getParallaxStyle = (factor: number) => ({
        transform: `translateY(${offsetY * factor}px)`,
    });

    return (
        <section 
            id="home" 
            className="relative w-full h-screen min-h-[900px] md:min-h-[800px] flex flex-col justify-center items-center text-center overflow-hidden"
            style={{backgroundImage: "url('https://i.postimg.cc/KcR5HCL0/a40fbc6f-7725-4026-8835-ab6a63e5441c.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}
        >
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
            
            <div className="container relative z-10 px-4 md:px-6 flex flex-col justify-center items-center h-full">
                <div className="flex-grow flex flex-col justify-center items-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-glow-primary">
                        Coloque um Agente de IA para trabalhar na sua empresa
                    </h1>
                    <p className="mx-auto mt-6 max-w-[700px] text-muted-foreground md:text-xl">
                        Visão estratégica. Execução completa. <span className="text-glow-accent">Resultado real.</span>
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg" className="group transition-all duration-300 ease-in-out hover:glow-shadow-accent bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-4 text-lg">
                            <Link href="#agendar">
                                Agendar uma demonstração
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="w-full pb-8 md:pb-12">
                    <h2 className="font-headline text-2xl font-bold tracking-tighter text-foreground sm:text-3xl text-glow-primary mb-8">
                        Apoiada por grandes empresas
                    </h2>
                    <Carousel setApi={setApi} className="w-full" opts={{loop: true, align: 'start'}}>
                        <CarouselContent>
                            {logos.concat(logos).map((item, index) => {
                               const logo = PlaceHolderImages.find(p => p.id === item.logoId);
                               return (
                                <CarouselItem key={index} className="basis-1/3 md:basis-1/5 lg:basis-1/7">
                                  <div className="p-4 flex justify-center items-center h-full">
                                     {logo && (
                                         <Image
                                           src={logo.imageUrl}
                                           alt={logo.description}
                                           width={140}
                                           height={50}
                                           className="h-10 w-auto object-contain grayscale opacity-60"
                                           data-ai-hint={logo.imageHint}
                                         />
                                       )}
                                  </div>
                                </CarouselItem>
                              );
                            })}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>

            <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
                <Image
                    src="https://kyondigital.com/wp-content/uploads/2025/08/Gostaria-de-conhecer-o-catalogo-de-voces.svg"
                    alt="Chat message example 1"
                    width={390}
                    height={61}
                    className="absolute top-[15%] left-[5%] w-72 md:w-96 transition-all duration-300 ease-out"
                    style={{...getParallaxStyle(0.15), filter: 'blur(1px)'}}
                />
                 <Image
                    src="https://kyondigital.com/wp-content/uploads/2025/08/Claro-Jose-Vou-te-enviar-um-PDF-que-contem.png"
                    alt="Chat message example 2"
                    width={862}
                    height={161}
                    className="absolute top-[30%] right-[5%] w-80 md:w-[450px] transition-all duration-300 ease-out"
                    style={{...getParallaxStyle(0.25), filter: 'blur(1px)'}}
                />
            </div>
        </section>
    );
}