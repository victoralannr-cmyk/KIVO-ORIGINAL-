
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../common/scroll-reveal';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const AnimatedLineChart = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("h-12 w-12 text-muted-foreground", className)}
  >
    <path d="M3 3v18h18" />
    <path d="M7 17L12 12l5 5l5-12" className="animate-zigzag" />
  </svg>
);

const AnimatedUsersIcon = ({ className }: { className?: string }) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-12 w-12 text-muted-foreground", className)}
  >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" className="animate-bob-1" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" className="animate-bob-2" />
  </svg>
);

const AnimatedResponsiveIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-12 w-12 text-muted-foreground", className)}
    >
      <g className="animate-slide-in-left">
        <rect width="16" height="12" x="2" y="5" rx="2" />
        <line x1="2" x2="18" y1="13" y2="13" />
      </g>
      <g className="animate-slide-in-right">
        <rect width="6" height="10" x="16" y="9" rx="1" />
      </g>
    </svg>
  );

const AnimatedClapperboard = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="-2 -2 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("h-12 w-12 text-muted-foreground", className)}
  >
    <g className="animate-clap">
      <path d="M20.2 6.2 3.8 6.2c-.5 0-.8.3-.8.8v2.4c0 .5.3.8.8.8h16.4c.5 0 .8-.3.8-.8V7c0-.5-.3-.8-.8-.8Z" />
      <path d="m4.2 4.2 15 4" />
    </g>
    <path d="M2.8 10.2v10c0 .5.3.8.8.8h16.8c.5 0 .8-.3.8-.8v-10" />
    <path d="m7 15-2-2" />
    <path d="m12 15-2-2" />
    <path d="m17 15-2-2" />
  </svg>
);


export default function HowItWorksSection() {
  const kLogo = PlaceHolderImages.find(img => img.id === 'k-logo-hero');
  const kivoText = PlaceHolderImages.find(img => img.id === 'kivo-text-hero');

  return (
    <section 
      id="como-funciona" 
      className="relative bg-transparent py-12 md:py-24 lg:py-32 overflow-hidden"
    >
       {kLogo && (
          <Image
              src={kLogo.imageUrl}
              alt={kLogo.description}
              width={500}
              height={500}
              className="absolute -top-10 -right-10 w-1/3 h-auto opacity-20 animate-orbit hidden md:block"
              style={{ animationDuration: '55s' }}
          />
      )}

      {kivoText && (
          <Image
              src={kivoText.imageUrl}
              alt={kivoText.description}
              width={600}
              height={200}
              className="absolute bottom-10 -left-20 w-1/2 h-auto opacity-[0.03] animate-orbit hidden md:block"
              style={{ animationDuration: '58s' }}
          />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-foreground">
              O que ele é capaz de fazer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
              Nosso agente de IA é um assistente digital completo para sua empresa.
            </p>
          </div>
        

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8">
            <ScrollReveal delay={0}>
              <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm h-full flex flex-col">
                  <div className="card-sky-background"></div>
                  <CardHeader className="relative items-center text-center p-6">
                      <div className="relative h-48 w-full mb-4">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-card p-4 rounded-full border border-border/50">
                              <AnimatedLineChart />
                            </div>
                          </div>
                      </div>
                      <CardTitle className="font-headline text-xl">Gestão de Mídias</CardTitle>
                  </CardHeader>
                  <CardContent className="relative p-6 pt-0 text-center text-base text-muted-foreground flex-grow">
                      As redes sociais da sua empresa são sua vitrine digital, o primeiro passo. <span className="text-muted-foreground">Google Business Center, Instagram, Facebook e mais.</span>
                  </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm h-full flex flex-col">
                  <div className="card-sky-background"></div>
                  <CardHeader className="relative items-center text-center p-6">
                      <div className="relative h-48 w-full mb-4">
                          <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-card p-4 rounded-full border border-border/50">
                                  <AnimatedUsersIcon />
                              </div>
                          </div>
                      </div>
                      <CardTitle className="font-headline text-xl">Tráfego Pago</CardTitle>
                  </CardHeader>
                  <CardContent className="relative p-6 pt-0 text-center text-base text-muted-foreground flex-grow">
                     Impulsionamos campanhas estratégicas. Levamos o cliente ideal para a sua vitrine. <span className="text-muted-foreground">Google e Meta Ads.</span>
                  </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm h-full flex flex-col">
                  <div className="card-sky-background"></div>
                  <CardHeader className="relative items-center text-center p-6">
                      <div className="relative h-48 w-full mb-4">
                          <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-card p-4 rounded-full border border-border/50">
                                <AnimatedResponsiveIcon />
                              </div>
                          </div>
                      </div>
                      <CardTitle className="font-headline text-xl">Criação de Sites</CardTitle>
                  </CardHeader>
                  <CardContent className="relative p-6 pt-0 text-center text-base text-muted-foreground flex-grow">
                     Ter um site é abrir as portas do seu negócio para o mundo. Ele trabalha por você 24h, atrai clientes, gera confiança e transforma oportunidades em resultados reais.
                  </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm h-full flex flex-col">
                  <div className="card-sky-background"></div>
                  <CardHeader className="relative items-center text-center p-6">
                      <div className="relative h-48 w-full mb-4">
                          <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-card p-4 rounded-full border border-border/50">
                                  <AnimatedClapperboard />
                              </div>
                          </div>
                      </div>
                      <CardTitle className="font-headline text-xl">Criação de Conteúdo Criativo</CardTitle>
                  </CardHeader>
                  <CardContent className="relative p-6 pt-0 text-center text-base text-muted-foreground flex-grow">
                     Criamos conteúdo que engaja, inspira e converte. Do roteiro à produção, transformamos suas ideias em vídeos, imagens e textos que capturam a atenção do seu público.
                  </CardContent>
              </Card>
            </ScrollReveal>
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
