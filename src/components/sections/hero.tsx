
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function HeroSection() {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getParallaxStyle = (factor: number) => ({
        transform: `translateY(${offsetY * factor}px)`,
    });

    return (
        <section id="home" className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden animated-gradient">
            <div className="absolute inset-0 bg-background/60" />
            
            <div className="container relative z-10 px-4 md:px-6 text-center">
                <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-glow-primary">
                    Coloque um Agente de IA para trabalhar na sua empresa
                </h1>
                <p className="mx-auto mt-6 max-w-[700px] text-muted-foreground md:text-xl">
                    Treinamos e implementamos um agente de IA generativa que fala com seus clientes, automatiza processos, responde dúvidas, resolve problemas e integra com todos os seus sistemas como se fosse você.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg" className="group transition-all duration-300 ease-in-out hover:glow-shadow-accent bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-4 text-lg">
                        <Link href="#agendar">
                            Agendar uma demonstração
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="absolute inset-0 z-0 h-full w-full">
                <Image
                    src="https://kyondigital.com/wp-content/uploads/2025/08/Gostaria-de-conhecer-o-catalogo-de-voces.svg"
                    alt="Chat message example 1"
                    width={390}
                    height={61}
                    className="absolute top-[15%] left-[5%] w-72 md:w-96 transition-all duration-300 ease-out"
                    style={{...getParallaxStyle(0.15), filter: 'blur(1px)'}}
                />
                 <Image
                    src="https://kyondigital.com/wp-content/uploads/2025/08/Claro-Jose-Vou-te-enviar-um-PDF-que-contem.png"
                    alt="Chat message example 2"
                    width={862}
                    height={161}
                    className="absolute top-[30%] right-[5%] w-80 md:w-[450px] transition-all duration-300 ease-out"
                    style={{...getParallaxStyle(0.25), filter: 'blur(1px)'}}
                />
            </div>
        </section>
    );
}
