'use client';
import Image from 'next/image';
import ScrollReveal from '../common/scroll-reveal';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function WhatIsAgent() {
  const logo = PlaceHolderImages.find(img => img.id === 'aetherai-logo');
  
  return (
    <section 
      id="sobre" 
      className="bg-transparent py-12 md:py-24 lg:py-32"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal className='scroll-reveal-left'>
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
            <Image
              src="https://kyondigital.com/wp-content/uploads/2025/08/Background-celular-v2.png"
              alt="Celular com conversas de IA"
              width={400}
              height={800}
              className="object-contain h-full w-auto brightness-50"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 space-y-4 max-w-[380px] mx-auto">
              <Image src="https://kyondigital.com/wp-content/uploads/2025/08/Mensagem-1.png" width={315} height={75} alt="Chat message 1" className="self-end animate-float" />
              
              <div className="self-start animate-float animation-delay-1000 flex items-start gap-2 w-full">
                <div className="bg-card p-1.5 rounded-full mt-2 border border-border/50">
                  {logo && (
                    <Image src={logo.imageUrl} width={32} height={32} alt="Kivo Logo" className="rounded-full object-contain" />
                  )}
                </div>
                <div className="bg-muted text-foreground p-3 rounded-lg rounded-bl-none max-w-[80%]">
                  <p className="text-sm">Claro, posso ajudar com o seu agendamento da sua consulta.</p>
                </div>
              </div>

              <Image src="https://kyondigital.com/wp-content/uploads/2025/08/Mensagem-3.png" width={315} height={75} alt="Chat message 3" className="self-end animate-float animation-delay-2000" />
              <Image src="https://kyondigital.com/wp-content/uploads/2025/08/Mensagem-4.png" width={317} height={105} alt="Chat message 4" className="self-start animate-float animation-delay-3000" />
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal className='scroll-reveal-right'>
          <div className="space-y-4">
            <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
              SUPORTE KIVO 24H
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Ele é um atendente digital inteligente que entende mensagens, busca informações em tempo real, toma decisões e executa tarefas de ponta a ponta, tudo de forma autônoma e personalizada.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
