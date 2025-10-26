
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const humanAvatar = PlaceHolderImages.find(p => p.id === 'human-avatar');
const aiAvatar = PlaceHolderImages.find(p => p.id === 'ai-avatar');

const chatMessages = [
    { from: 'human', text: 'Qual o status do meu pedido #A3X8B?' },
    { from: 'ai', text: 'Seu pedido #A3X8B foi enviado hoje e a previsão de entrega é amanhã. Quer o código de rastreio?' },
    { from: 'human', text: 'Sim, por favor!' },
];

export default function HeroSection() {
    const [offsetY, setOffsetY] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    };

    useEffect(() => {
        setIsMounted(true);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getParallaxStyle = (factor: number) => ({
        transform: `translateY(${offsetY * factor}px)`,
    });
    
    return (
        <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden animated-gradient">
            <div className="absolute inset-0 bg-background/50" />
            
            <div className="container relative z-10 px-4 md:px-6 text-center">
                <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-glow-primary">
                    Coloque um Agente de IA para trabalhar na sua empresa
                </h1>
                <p className="mx-auto mt-6 max-w-[700px] text-muted-foreground md:text-xl">
                    Treinamos e implementamos um agente de IA generativa que fala com seus clientes, automatiza processos, responde dúvidas, resolve problemas e integra com todos os seus sistemas como se fosse você.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg" className="group transition-all duration-300 ease-in-out hover:glow-shadow-accent bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="#agendar">
                            Agendar uma demonstração
                        </Link>
                    </Button>
                </div>
            </div>

            {isMounted && (
                <div className="absolute inset-0 z-0 h-full w-full">
                    <Card style={getParallaxStyle(0.15)} className={cn("absolute top-[15%] left-[5%] w-80 p-3 bg-card/50 backdrop-blur-sm border-border/20 transition-transform duration-300 ease-out", "animate-float")}>
                        <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">{humanAvatar && <AvatarImage src={humanAvatar.imageUrl} /> }<AvatarFallback>U</AvatarFallback></Avatar>
                            <p className="text-sm">{chatMessages[0].text}</p>
                        </div>
                    </Card>
                    <Card style={getParallaxStyle(0.25)} className={cn("absolute top-[30%] right-[10%] w-96 p-3 bg-card/50 backdrop-blur-sm border-border/20 transition-transform duration-300 ease-out", "animate-float animation-delay-3000")}>
                        <div className="flex items-center gap-2">
                             <Avatar className="h-8 w-8">{aiAvatar && <AvatarImage src={aiAvatar.imageUrl} /> }<AvatarFallback>AI</AvatarFallback></Avatar>
                            <p className="text-sm">{chatMessages[1].text}</p>
                        </div>
                    </Card>
                    <Card style={getParallaxStyle(0.1)} className={cn("absolute bottom-[20%] left-[15%] w-64 p-3 bg-card/50 backdrop-blur-sm border-border/20 transition-transform duration-300 ease-out", "animate-float animation-delay-1000")}>
                        <div className="flex items-center gap-2">
                             <Avatar className="h-8 w-8">{humanAvatar && <AvatarImage src={humanAvatar.imageUrl} /> }<AvatarFallback>U</AvatarFallback></Avatar>
                            <p className="text-sm">{chatMessages[2].text}</p>
                        </div>
                    </Card>
                </div>
            )}
        </section>
    );
}
