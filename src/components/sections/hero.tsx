'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
    return (
        <section 
            id="home" 
            className="relative w-full h-screen min-h-[900px] flex flex-col justify-center items-center text-center overflow-hidden bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://i.postimg.cc/MKMGLpSz/Chat-GPT-Image-31-de-out-de-2025-12-01-53.png')" }}
        >
            <div className="container relative z-10 px-4 md:px-6 flex flex-col justify-center items-center h-full text-center">
                <div className="flex-grow flex flex-col justify-center items-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-center">
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
