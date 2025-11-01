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
            className="relative w-full h-screen min-h-[1000px] md:min-h-[900px] flex flex-col justify-center items-center text-center overflow-hidden bg-cover bg-center"
            style={{backgroundImage: "url('https://i.postimg.cc/PJxbpVhs/Chat-GPT-Image-31-de-out-de-2025-12-01-53.png')"}}
        >
            <div className="absolute inset-0 bg-black/60" />
            
            <div className="container relative z-10 px-4 md:px-6 flex flex-col justify-center items-center h-full text-center">
                <div className="flex-grow flex flex-col justify-center items-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-center">
						<span style={{fontFamily: "'Playfair Display', serif"}} className="button-wavy-gradient bg-clip-text text-transparent">
							Visão estratégica. Execução completa. <span style={{color: '#0000CD'}}>Resultado real.</span>
						</span>
					</h1>
                    <div className="mt-8">
                        <Button asChild size="lg" className="group transition-all duration-300 ease-in-out button-wavy-gradient hover:shadow-lg hover:shadow-blue-900/50 rounded-full px-8 py-4 text-lg">
                            <Link href="#agendar">
                                Agendar uma demonstração
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="w-full pb-8 md:pb-12">
                
                </div>
            </div>
        </section>
    );
}
