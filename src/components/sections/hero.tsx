
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative w-full h-screen min-h-[700px] md:min-h-[800px] flex flex-col justify-center items-center text-center overflow-hidden"
        >
            <div className={cn("container relative z-10 px-4 md:px-6 flex flex-col justify-center items-center h-full text-center")}>
                <div className="flex-grow flex flex-col justify-center items-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center text-white">
						<span className='outline-none' >
							Visão estratégica. Execução completa. <span className="text-wavy-gradient">Resultado real.</span>
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
