'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Share2 } from 'lucide-react';
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

        <div className="mt-12 flex justify-center">
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
                    <CardTitle className="font-headline text-xl">Gestão de Mídias</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 text-center">
                    <CardDescription className="text-base">
                        As redes sociais da sua empresa são sua vitrine digital, o primeiro passo. <span className="text-primary">Google Business Center, Instagram, Facebook e mais.</span>
                    </CardDescription>
                </CardContent>
            </Card>
        </div>

      </div>
    </section>
  );
}