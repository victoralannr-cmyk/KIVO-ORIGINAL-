
'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const logos = [
  { logoId: 'client-logo-very-pizza' },
  { logoId: 'client-logo-2' },
  { logoId: 'client-logo-3' },
  { logoId: 'client-logo-4' },
  { logoId: 'client-logo-5' },
  { logoId: 'client-logo-6' },
  { logoId: 'client-logo-7' },
];

export default function SuccessCasesSection() {
  return (
    <section 
      id="sucesso" 
      className="relative bg-transparent py-12 md:py-24"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                Apoiada por grandes empresas
            </h2>
        </div>
        <div className="w-full mt-12">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {logos.map((item, index) => {
               const logo = PlaceHolderImages.find(p => p.id === item.logoId);
               const animationDelay = `${index * 0.3}s`;
               return (
                <div 
                  key={index} 
                  className="p-4 animate-float"
                  style={{ animationDelay }}
                >
                     {logo && (
                         <Image
                           src={logo.imageUrl}
                           alt={logo.description}
                           width={140}
                           height={50}
                           className="h-10 w-auto object-contain"
                           data-ai-hint={logo.imageHint}
                         />
                       )}
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
