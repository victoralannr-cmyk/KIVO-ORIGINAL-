
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import DotGrid from '@/components/common/dot-grid';

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative w-full pt-40 pb-20 md:pt-64 md:pb-32 flex flex-col justify-center items-center text-center overflow-hidden bg-background"
        >
            <DotGrid
              dotSize={2}
              gap={25}
              baseColor="#2A334A"
              activeColor="#F0F0F0"
              proximity={120}
              shockRadius={200}
            />

            <div className={cn("container relative z-10 px-4 md:px-6 flex flex-col justify-center items-center h-full text-center")}>
                <div className="flex-grow flex flex-col justify-center items-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-center text-foreground animate-slide-in-right">
						<span className='outline-none' >
							Visão estratégica. Execução completa. <span className="text-wavy-gradient">Resultado real.</span>
						</span>
					</h1>
                    <div className="mt-8 animate-slide-in-left">
                        <Button asChild size="lg" className="group transition-all duration-300 ease-in-out button-wavy-gradient hover:shadow-lg hover:shadow-blue-900/50 rounded-full px-6 py-3 text-base md:px-8 md:py-4 md:text-lg animate-pulse">
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

    