'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Share2, BarChart3, Users, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
            <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm">
                <div className="card-sky-background"></div>
                <CardHeader className="relative items-center text-center p-6">
                    <div className="relative h-48 w-full mb-4">
                        <Image src="https://framerusercontent.com/images/EaQHg2lXGfJYdlkVzsdOTUA4AIk.png" alt="Grid Background" fill style={{objectFit: 'contain', transform: 'scale(0.8)'}} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-card p-4 rounded-full border border-border/50">
                                <Share2 className="h-12 w-12 text-primary icon-pulse-glow" />
                            </div>
                        </div>
                    </div>
                    <CardTitle className="font-headline text-xl">Gestão de Mídias</CardTitle>
                </CardHeader>
                <CardContent className="relative p-6 pt-0 text-center text-base text-gray-400">
                    As redes sociais da sua empresa são sua vitrine digital, o primeiro passo. <span className="text-primary">Google Business Center, Instagram, Facebook e mais.</span>
                </CardContent>
            </Card>

            <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm">
                <div className="card-sky-background"></div>
                <CardHeader className="relative items-center text-center p-6">
                    <div className="relative h-48 w-full mb-4">
                         <Image src="https://framerusercontent.com/images/EaQHg2lXGfJYdlkVzsdOTUA4AIk.png" alt="Grid Background" fill style={{objectFit: 'contain', transform: 'scale(0.8)'}} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-card p-4 rounded-full border border-border/50">
                                <BarChart3 className="h-12 w-12 text-primary" />
                            </div>
                        </div>
                    </div>
                    <CardTitle className="font-headline text-xl">Tráfego Pago</CardTitle>
                </CardHeader>
                <CardContent className="relative p-6 pt-0 text-center text-base text-gray-400">
                   Impulsionamos campanhas estratégicas. Levamos o cliente ideal para a sua vitrine. <span className="text-primary">Google e Meta Ads.</span>
                </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm">
                <div className="card-sky-background"></div>
                <CardHeader className="relative items-center text-center p-6">
                    <div className="relative h-48 w-full mb-4">
                         <Image src="https://framerusercontent.com/images/EaQHg2lXGfJYdlkVzsdOTUA4AIk.png" alt="Grid Background" fill style={{objectFit: 'contain', transform: 'scale(0.8)'}} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-card p-4 rounded-full border border-border/50">
                                <svg width="48" height="48" viewBox="0 0 72 72" fill="none" className="h-12 w-12 text-primary">
                                    <g transform="matrix(1.2207369804382324,0,0,1.2207369804382324,39.83444595336914,40.16555404663086)">
                                        <g transform="matrix(2,0,0,2,0,0)">
                                            <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="currentColor" strokeOpacity="1" strokeWidth="3" d=" M3.0980000495910645,-1.5980000495910645 C1.121999979019165,0.3779999911785126 -1.5,3 -1.5,3 C-1.5,3 -4.5,0 -4.5,0"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <CardTitle className="font-headline text-xl">Consultoria de Vendas</CardTitle>
                </CardHeader>
                <CardContent className="relative p-6 pt-0 text-center text-base text-gray-400">
                   Nosso objetivo é te entregar vendas, e não mensagens. <span className="text-primary">Time Comercial, Consultoria, Agente de Vendas.</span>
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
