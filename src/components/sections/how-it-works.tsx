'use client';

import React from 'react';

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
      </div>
    </section>
  );
}
