
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export default function HowItWorksSection() {
  return (
    <section 
      id="como-funciona" 
      className="bg-transparent py-12 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-center text-foreground">
            O que ele é capaz de fazer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400 md:text-xl">
            Nosso agente de IA é um assistente digital completo para sua empresa.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
            <Card className="relative overflow-hidden bg-gray-900/80 backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm">
                <div className="card-sky-background"></div>
                <CardHeader className="relative items-center text-center p-6">
                    <div className="relative h-48 w-full mb-4">
                        <Image src="https://framerusercontent.com/images/EaQHg2lXGfJYdlkVzsdOTUA4AIk.png" alt="Grid Background" fill style={{objectFit: 'contain', transform: 'scale(0.8)'}} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-card p-4 rounded-full border border-border/50">
                                <Share2 className="h-12 w-12 text-muted-foreground icon-pulse-glow" />
                            </div>
                        </div>
                    </div>
                    <CardTitle className="font-headline text-xl">Gestão de Mídias</CardTitle>
                </CardHeader>
                <CardContent className="relative p-6 pt-0 text-center text-base text-gray-400">
                    As redes sociais da sua empresa são sua vitrine digital, o primeiro passo. <span className="text-gray-500">Google Business Center, Instagram, Facebook e mais.</span>
                </CardContent>
            </Card>

            <Card className="relative overflow-hidden bg-gray-900/80 backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm">
                <div className="card-sky-background"></div>
                <CardHeader className="relative items-center text-center p-6">
                    <div className="relative h-48 w-full mb-4">
                         <Image src="https://framerusercontent.com/images/EaQHg2lXGfJYdlkVzsdOTUA4AIk.png" alt="Grid Background" fill style={{objectFit: 'contain', transform: 'scale(0.8)'}} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-card p-4 rounded-full border border-border/50">
                               <svg width="48" height="48" viewBox="0 0 16 16" fill="none" className="h-12 w-12 text-muted-foreground">
                                    <path stroke-linecap="butt" stroke-linejoin="round" fill-opacity="0" stroke="currentColor" stroke-opacity="1" stroke-width="1" d=" M0.01,14.88 C1.32,6.62 10.45,6.62 11.76,14.88 C11.86,15.48 11.39,16 10.81,16 C10.81,16 0.96,16 0.96,16 C0.38,16 -0.08,15.48 0.01,14.88 C0.01,14.88 0.01,14.88 0.01,14.88 C0.01,14.88 0.01,14.88 0.01,14.88 C0.01,14.88 0.01,14.88 0.01,14.88z M8.89,2.68 C8.89,4.34 7.54,5.68 5.89,5.68 C4.23,5.68 2.89,4.34 2.89,2.68 C2.89,1.03 4.23,-0.32 5.89,-0.32 C7.54,-0.32 8.89,1.03 8.89,2.68 C8.89,2.68 8.89,2.68 8.89,2.68 C8.89,2.68 8.89,2.68 8.89,2.68 C8.89,2.68 8.89,2.68 8.89,2.68z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <CardTitle className="font-headline text-xl">Tráfego Pago</CardTitle>
                </CardHeader>
                <CardContent className="relative p-6 pt-0 text-center text-base text-gray-400">
                   Impulsionamos campanhas estratégicas. Levamos o cliente ideal para a sua vitrine. <span className="text-gray-500">Google e Meta Ads.</span>
                </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden bg-gray-900/80 backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm">
                <div className="card-sky-background"></div>
                <CardHeader className="relative items-center text-center p-6">
                    <div className="relative h-48 w-full mb-4">
                         <Image src="https://framerusercontent.com/images/EaQHg2lXGfJYdlkVzsdOTUA4AIk.png" alt="Grid Background" fill style={{objectFit: 'contain', transform: 'scale(0.8)'}} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-card p-4 rounded-full border border-border/50">
                                <svg width="48" height="48" viewBox="0 0 16 16" fill="none" className="h-12 w-12 text-muted-foreground">
                                    <g transform="matrix(0.5,0,0,0.5,4,4)">
                                        <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="currentColor" stroke-opacity="1" stroke-width="3" d=" M3.0980000495910645,-1.5980000495910645 C1.121999979019165,0.3779999911785126 -1.5,3 -1.5,3 C-1.5,3 -4.5,0 -4.5,0"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <CardTitle className="font-headline text-xl">Consultoria de Vendas</CardTitle>
                </CardHeader>
                <CardContent className="relative p-6 pt-0 text-center text-base text-gray-400">
                   Nosso objetivo é te entregar vendas, e não mensagens. <span className="text-gray-500">Time Comercial, Consultoria, Agente de Vendas.</span>
                </CardContent>
            </Card>
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="group transition-all duration-300 ease-in-out button-wavy-gradient hover:shadow-lg hover:shadow-blue-900/50 rounded-full px-8 py-4 text-lg">
            <Link href="#agendar">
              Fale com um especialista
              <ArrowUpRight className="h-5 w-5 ml-2 transition-transform group-hover:rotate-45" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
