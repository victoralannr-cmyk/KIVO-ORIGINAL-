'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Aurora from '../common/aurora';

const initialState: ContactFormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full button-wavy-gradient animate-pulse" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Enviar'}
    </Button>
  );
}

const sentence = {
  hidden: { opacity: 0 },
  visible: (i:number = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: i * 0.05,
    },
  }),
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

const titleText = "Impulsionamos sua empresa para o topo com modelos preditivos de conversão";
const paragraphText = "e mantemos você dominante, relevante e sempre";


export default function HeroSection() {
    const [state, formAction] = useFormState(submitContactForm, initialState);
    const { toast } = useToast();
    const kLogo = PlaceHolderImages.find(img => img.id === 'k-logo-hero');

    useEffect(() => {
        if (state.message) {
        if (state.success) {
            toast({
            title: 'Sucesso!',
            description: state.message,
            });
        } else if (state.errors) {
            toast({
            variant: 'destructive',
            title: 'Erro de Validação',
            description: state.message,
            });
        } else {
            toast({
            variant: 'destructive',
            title: 'Erro no Envio',
            description: state.message,
            });
        }
        }
    }, [state, toast]);

    const wordsWithGradient = ["Impulsionamos", "para", "preditivos", "de", "conversão"];

    return (
        <section
            id="home"
            className="relative w-full pt-40 pb-20 md:pt-44 md:pb-32 flex flex-col justify-center items-center text-center overflow-hidden section-with-grid"
        >
            <Aurora colorStops={['#1A237E', '#4285F4', '#1A237E']} amplitude={0.2} blend={1.0} />
            {kLogo && (
              <>
                <Image src={kLogo.imageUrl} alt={kLogo.description} width={100} height={100} className="absolute top-1/4 left-[5%] w-16 h-auto opacity-10 animate-orbit" style={{ animationDuration: '45s' }} />
                <Image src={kLogo.imageUrl} alt={kLogo.description} width={100} height={100} className="absolute top-1/2 right-[10%] w-24 h-auto opacity-5 animate-orbit" style={{ animationDuration: '55s', animationDelay: '3s' }} />
                <Image src={kLogo.imageUrl} alt={kLogo.description} width={100} height={100} className="absolute bottom-[15%] left-[15%] w-12 h-auto opacity-10 animate-orbit" style={{ animationDuration: '65s' }} />
                <Image src={kLogo.imageUrl} alt={kLogo.description} width={100} height={100} className="absolute bottom-[5%] right-[5%] w-20 h-auto opacity-5 animate-orbit" style={{ animationDuration: '40s', animationDelay: '5s' }} />
              </>
            )}
            <div className={cn("container relative z-10 px-4 md:px-6 flex flex-col justify-center items-center h-full text-center")}>
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    className="flex-grow flex flex-col justify-center items-center w-full"
                >
                    <motion.h1 
                      className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-center text-foreground max-w-4xl"
                      variants={sentence}
                      initial="hidden"
                      animate="visible"
                    >
                      {titleText.split(" ").map((word, wordIndex) => (
                        <span key={wordIndex} className={cn("inline-block mr-3 whitespace-nowrap", wordsWithGradient.includes(word) ? "text-wavy-gradient" : "")}>
                          {word.split("").map((char, charIndex) => (
                            <motion.span key={charIndex} variants={letter} className="inline-block">
                              {char}
                            </motion.span>
                          ))}
                        </span>
                      ))}
					          </motion.h1>
                    <motion.p 
                        className="mx-auto mt-6 max-w-4xl text-muted-foreground md:text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        {paragraphText} <span className="text-wavy-gradient">acima da concorrência.</span>
                    </motion.p>
                    <div className="mt-8">
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.querySelector('#agendar');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="px-10 py-5 text-xl button-wavy-gradient rounded-full animate-pulse"
                        >
                            Agendar uma demonstração
                        </Button>
                    </div>
                </motion.div>

                <div 
                    id="agendar" className="w-full max-w-4xl mx-auto pt-16 md:pt-24"
                >
                  <div className="space-y-4 text-center">
                      <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                        Vamos conversar?
                      </h2>
                      <p className="text-muted-foreground md:text-lg">
                          Nosso time entrará em contato para fazer uma demonstração gratuita e mostrar como podemos ajudar.
                      </p>
                  </div>
                      <div className="mt-16 flex justify-center text-muted-foreground animate-bounce">
                          <svg width="59.22" height="78.96" viewBox="0 0 59.22 78.96" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29.61 1V77.96" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M58.22 50.34L29.61 77.95L1 50.34" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                      </div>
                      <div className="mt-12 flex justify-center">
                        <Button asChild className="px-10 py-5 text-xl button-wavy-gradient rounded-full">
                          <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                            WhatsApp <ArrowUpRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                </div>
            </div>
        </section>
    );
}
