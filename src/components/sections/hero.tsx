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
    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {

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
          clearInterval(interval);
        };
    }, [api]);

    return (
        <section 
            id="home" 
            className="relative w-full h-screen min-h-[1000px] md:min-h-[900px] flex flex-col justify-center items-center text-center overflow-hidden"
            style={{backgroundImage: "url('https://i.postimg.cc/KcR5HCL0/a40fbc6f-7725-4026-8835-ab6a63e5441c.jpg')", backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
        >
            <div className="absolute inset-0" />
            
            <div className="container relative z-10 px-4 md:px-6 flex flex-col justify-center items-center h-full text-center">
                <div className="flex-grow flex flex-col justify-center items-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tighter text-black sm:text-5xl md:text-6xl lg:text-7xl text-glow-primary text-center">
						<span>
							Visão estratégica. Execução completa. <span className="text-glow-accent">Resultado real.</span>						</span>
					</h1>
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
                </div>
            </div>
        </section>
    );
}
