'use client';
import Image from 'next/image';
import ScrollReveal from '../common/scroll-reveal';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ChatMessage from '../common/chat-message';

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
              src="https://i.postimg.cc/MKMGLpSz/Chat-GPT-Image-31-de-out-de-2025-12-01-53.png"
              alt="Celular com conversas de IA"
              width={400}
              height={800}
              className="object-contain h-full w-auto"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 space-y-4 max-w-[380px] mx-auto">
              <Image src="https://kyondigital.com/wp-content/uploads/2025/08/Mensagem-1.png" width={315} height={75} alt="Chat message 1" className="self-end animate-float" />
              
              <ChatMessage
                logo={logo}
                text="O horário das 17h não está disponível amanhã. Posso te sugerir outro?"
                className="animate-float animation-delay-1000"
              />

              <Image src="https://kyondigital.com/wp-content/uploads/2025/08/Mensagem-3.png" width={315} height={75} alt="Chat message 3" className="self-end animate-float animation-delay-2000" />
              
              <ChatMessage
                logo={logo}
                text="Claro! Agendei para as 18h e enviei a confirmação para o seu e-mail."
                className="animate-float animation-delay-3000"
              />

            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal className='scroll-reveal-right'>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
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
