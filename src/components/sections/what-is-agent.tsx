'use client';
import Image from 'next/image';

export default function WhatIsAgent() {
  return (
    <section 
      id="sobre" 
      className="relative bg-card py-12 md:py-24 lg:py-32 bg-cover bg-center"
      style={{backgroundImage: "url('https://i.postimg.cc/SxrgzLkK/17178a26ad764906f5ea3c8c44df5ac2.jpg')"}}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          <Image
            src="https://kyondigital.com/wp-content/uploads/2025/08/Background-celular-v2.png"
            alt="Celular com conversas de IA"
            width={400}
            height={800}
            className="object-contain h-full w-auto"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 space-y-4">
             <Image src="https://kyondigital.com/wp-content/uploads/2025/08/Mensagem-1.png" width={315} height={75} alt="Chat message 1" className="self-end animate-float" />
             <Image src="https://kyondigital.com/wp-content/uploads/2025/08/Mensagem-2.png" width={317} height={75} alt="Chat message 2" className="self-start animate-float animation-delay-1000" />
             <Image src="https://kyondigital.com/wp-content/uploads/2025/08/Mensagem-3.png" width={315} height={75} alt="Chat message 3" className="self-end animate-float animation-delay-2000" />
             <Image src="https://kyondigital.com/wp-content/uploads/2025/08/Mensagem-4.png" width={317} height={105} alt="Chat message 4" className="self-start animate-float animation-delay-3000" />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl text-glow-accent">
            SUPORTE KIVO 24H
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Ele é um atendente digital inteligente que entende mensagens, busca informações em tempo real, toma decisões e executa tarefas de ponta a ponta, tudo de forma autônoma e personalizada.
          </p>
        </div>
      </div>
    </section>
  );
}
