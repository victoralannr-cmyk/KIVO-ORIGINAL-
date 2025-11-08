'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Clapperboard, MonitorSmartphone } from 'lucide-react';
import ScrollReveal from '../common/scroll-reveal';
import LottiePlayer from '../common/lottie-player';
import Image from 'next/image';

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
        

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8">
            <ScrollReveal delay={0}>
              <Card className="relative overflow-hidden bg-black backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm h-full flex flex-col">
                  <div className="card-sky-background"></div>
                  <CardHeader className="relative items-center text-center p-6">
                      <div className="relative h-48 w-full mb-4">
                          <div className="card-sky-background"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                              <div className="h-24 w-24">
                                <LottiePlayer src="https://lottie.host/e3f2409c-29a3-485a-8b77-afa385844883/tQk1xRk57e.json" />
                              </div>
                          </div>
                      </div>
                      <CardTitle className="font-headline text-xl">Gestão de Mídias</CardTitle>
                  </CardHeader>
                  <CardContent className="relative p-6 pt-0 text-center text-base text-gray-400 flex-grow">
                      As redes sociais da sua empresa são sua vitrine digital, o primeiro passo. <span className="text-gray-500">Google Business Center, Instagram, Facebook e mais.</span>
                  </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="relative overflow-hidden bg-black backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm h-full flex flex-col">
                  <div className="card-sky-background"></div>
                  <CardHeader className="relative items-center text-center p-6">
                      <div className="relative h-48 w-full mb-4">
                           <div className="card-sky-background"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-card p-4 rounded-full border border-border/50">
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
                                      className="h-12 w-12 text-muted-foreground"
                                  >
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                      <circle cx="9" cy="7" r="4" className="animate-bob-1" />
                                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                      <path d="M16 3.13a4 4 0 0 1 0 7.75" className="animate-bob-2" />
                                  </svg>
                              </div>
                          </div>
                      </div>
                      <CardTitle className="font-headline text-xl">Tráfego Pago</CardTitle>
                  </CardHeader>
                  <CardContent className="relative p-6 pt-0 text-center text-base text-gray-400 flex-grow">
                     Impulsionamos campanhas estratégicas. Levamos o cliente ideal para a sua vitrine. <span className="text-gray-500">Google e Meta Ads.</span>
                  </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <Card className="relative overflow-hidden bg-black backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm h-full flex flex-col">
                  <div className="card-sky-background"></div>
                  <CardHeader className="relative items-center text-center p-6">
                      <div className="relative h-48 w-full mb-4">
                           <div className="card-sky-background"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-card p-4 rounded-full border border-border/50">
                                <MonitorSmartphone className="h-12 w-12 text-muted-foreground" />
                              </div>
                          </div>
                      </div>
                      <CardTitle className="font-headline text-xl">Criação de Sites</CardTitle>
                  </CardHeader>
                  <CardContent className="relative p-6 pt-0 text-center text-base text-gray-400 flex-grow">
                     Ter um site é abrir as portas do seu negócio para o mundo. Ele trabalha por você 24h, atrai clientes, gera confiança e transforma oportunidades em resultados reais.
                  </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <Card className="relative overflow-hidden bg-black backdrop-blur-sm border-border/20 shadow-lg group rounded-2xl w-full max-w-sm h-full flex flex-col">
                  <div className="card-sky-background"></div>
                  <CardHeader className="relative items-center text-center p-6">
                      <div className="relative h-48 w-full mb-4">
                           <div className="card-sky-background"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-card p-4 rounded-full border border-border/50">
                                  <Clapperboard className="h-12 w-12 text-muted-foreground" />
                              </div>
                          </div>
                      </div>
                      <CardTitle className="font-headline text-xl">Criação de Conteúdo Criativo</CardTitle>
                  </CardHeader>
                  <CardContent className="relative p-6 pt-0 text-center text-base text-gray-400 flex-grow">
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
