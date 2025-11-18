
'use client';
import Image from 'next/image';
import ScrollReveal from '../common/scroll-reveal';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ChatMessage from '../common/chat-message';

export default function WhatIsAgent() {
  const logo = PlaceHolderImages.find(img => img.id === 'aetherai-logo');
  const kLogo = PlaceHolderImages.find(img => img.id === 'k-logo-hero');
  const kivoText = PlaceHolderImages.find(img => img.id === 'kivo-text-hero');
  
  return (
    <section 
      id="sobre" 
      className="relative bg-transparent py-12 md:py-24 lg:py-32 overflow-hidden"
    >
       {kivoText && (
          <Image
              src={kivoText.imageUrl}
              alt={kivoText.description}
              width={600}
              height={200}
              className="absolute top-1/4 left-10 w-1/3 h-auto opacity-[0.03] animate-orbit hidden md:block"
              style={{ animationDuration: '48s' }}
          />
      )}
       {kLogo && (
          <Image
              src={kLogo.imageUrl}
              alt={kLogo.description}
              width={500}
              height={500}
              className="absolute bottom-1/4 right-10 w-1/4 h-auto opacity-20 animate-orbit hidden md:block"
              style={{ animationDuration: '52s' }}
          />
      )}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className='animate-slide-in-left'>
          <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
            <Image
              src="https://kyondigital.com/wp-content/uploads/2025/08/Background-celular-v2.png"
              alt="Celular com conversas de IA"
              width={400}
              height={800}
              className="object-contain h-full w-auto"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 space-y-4 max-w-[320px] md:max-w-[380px] mx-auto">
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
        </div>
        <div className='animate-slide-in-right'>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
              SUPORTE KIVO 24H
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Ele é um atendente digital inteligente que entende mensagens, busca informações em tempo real, toma decisões e executa tarefas de ponta a ponta, tudo de forma autônoma e personalizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

    