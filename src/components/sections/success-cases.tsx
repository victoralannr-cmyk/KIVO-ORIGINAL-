'use client';

import React, { useEffect } from 'react';
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
        }, 3000); 

        return () => clearInterval(interval);
    }, [api]);

  return (
    <section 
      id="sucesso" 
      className="relative bg-background py-12 md:py-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.postimg.cc/8CBFmdPR/Chat-GPT-Image-31-de-out-de-2025-11-38-36.png')",
          transform: 'scaleY(-1)',
        }}
      />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl text-glow-primary">
            Apoiada por grandes empresas
          </h2>
        </div>
        <Carousel setApi={setApi} className="w-full mt-12" opts={{loop: true, align: 'start'}}>
          <CarouselContent>
            {logos.map((item, index) => {
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
                           className="h-10 w-auto object-contain grayscale"
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
    </section>
  );
}
