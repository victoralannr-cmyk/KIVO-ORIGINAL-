'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Nosso agente de IA é um assistente digital completo para sua empresa.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
            <Card className="overflow-hidden bg-background/80 backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm">
                <CardHeader className="items-center text-center p-6">
                    <div className="relative h-48 w-full mb-4">
                        <Image src="https://framerusercontent.com/images/EaQHg2lXGfJYdlkVzsdOTUA4AIk.png" alt="Grid Background" fill style={{objectFit: 'contain', transform: 'scale(0.8)'}} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-card p-4 rounded-full border border-border/50">
                                <Share2 className="h-12 w-12 text-primary" />
                            </div>
                        </div>
                    </div>
                    <svg viewBox="0 0 100 10" className="w-full h-8 mb-2">
                        <path d="M0 5 Q 25 10, 50 5 T 100 5" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" strokeLinecap="round" className="lightning-path" />
                    </svg>
                    <CardTitle className="font-headline text-xl">Gestão de Mídias</CardTitle>
                </CardHeader>
                <CardDescription className="p-6 pt-0 text-center text-base text-foreground/60">
                    As redes sociais da sua empresa são sua vitrine digital, o primeiro passo. <span className="text-primary">Google Business Center, Instagram, Facebook e mais.</span>
                </CardDescription>
            </Card>

            <Card className="overflow-hidden bg-background/80 backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm">
                <CardHeader className="items-center text-center p-6">
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
                <CardDescription className="p-6 pt-0 text-center text-base text-foreground/60">
                   Impulsionamos campanhas estratégicas. Levamos o cliente ideal para a sua vitrine. <span className="text-primary">Google e Meta Ads.</span>
                </CardDescription>
            </Card>
            
            <Card className="overflow-hidden bg-background/80 backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm">
                <CardHeader className="items-center text-center p-6">
                    <div className="relative h-48 w-full mb-4">
                         <Image src="https://framerusercontent.com/images/EaQHg2lXGfJYdlkVzsdOTUA4AIk.png" alt="Grid Background" fill style={{objectFit: 'contain', transform: 'scale(0.8)'}} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-card p-4 rounded-full border border-border/50">
                                <Users className="h-12 w-12 text-primary" />
                            </div>
                        </div>
                    </div>
                    <CardTitle className="font-headline text-xl">Consultoria de Vendas</CardTitle>
                </CardHeader>
                <CardDescription className="p-6 pt-0 text-center text-base text-foreground/60">
                   Nosso objetivo é te entregar vendas, e não mensagens. <span className="text-primary">Time Comercial, Consultoria, Agente de Vendas.</span>
                </CardDescription>
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
       <style jsx>{`
        .lightning-path {
          stroke-dasharray: 150;
          stroke-dashoffset: 150;
          animation: draw-lightning 2.5s ease-in-out infinite;
        }
        @keyframes draw-lightning {
          0% {
            stroke-dashoffset: 150;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -150;
          }
        }
      `}</style>
    </section>
  );
}