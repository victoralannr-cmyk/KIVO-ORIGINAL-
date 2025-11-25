
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
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const initialState: ContactFormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full rounded-full animate-pulse" disabled={pending}>
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

const titleText = "Impulsionamos sua empresa para o topo com estratégias de alta performance";
const paragraphText = "e mantemos você lá — dominante, relevante e sempre acima da concorrência.";


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

    return (
        <section
            id="home"
            className="relative w-full pt-40 pb-20 md:pt-64 md:pb-32 flex flex-col justify-center items-center text-center overflow-hidden"
        >
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
                        <span key={wordIndex} className="inline-block mr-3 whitespace-nowrap">
                          {word.split("").map((char, charIndex) => (
                            <motion.span key={charIndex} variants={letter} className="inline-block">
                              {char}
                            </motion.span>
                          ))}
                        </span>
                      ))}
					          </motion.h1>
                    <motion.p 
                        className="mx-auto mt-6 max-w-3xl text-muted-foreground md:text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        {paragraphText}
                    </motion.p>
                    <div className="mt-8">
                        <Button asChild size="lg" className="group transition-all duration-300 ease-in-out button-wavy-gradient hover:shadow-lg hover:shadow-blue-900/50 rounded-full px-6 py-3 text-base md:px-8 md:py-4 md:text-lg animate-pulse">
                            <Link href="#agendar">
                                Agendar uma demonstração
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                <div 
                    id="agendar" className="w-full max-w-4xl mx-auto pt-16 md:pt-24"
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4 text-center md:text-left animate-slide-in-left">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                          Vamos conversar?
                        </h2>
                        <p className="text-muted-foreground md:text-lg">
                            Nosso time entrará em contato para fazer uma demonstração gratuita e mostrar como podemos ajudar.
                        </p>
                    </div>

                    <div className="animate-slide-in-right">
                      <Card className="w-full max-w-lg mx-auto bg-card/10 backdrop-blur-sm border-border/20 shadow-lg rounded-2xl">
                        <form action={formAction}>
                          <CardContent className="pt-6 space-y-4">
                            <div className="space-y-2">
                              <Input id="name" name="name" placeholder="Seu nome" required className="bg-background/80 rounded-full text-foreground placeholder:text-muted-foreground"/>
                              {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(', ')}</p>}
                            </div>
                            <div className="space-y-2">
                              <Input id="email" name="email" type="email" placeholder="Seu melhor e-mail" required className="bg-background/80 rounded-full text-foreground placeholder:text-muted-foreground"/>
                              {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(', ')}</p>}
                            </div>
                            <div className="space-y-2">
                              <Input id="whatsapp" name="whatsapp" placeholder="WhatsApp" required className="bg-background/80 rounded-full text-foreground placeholder:text-muted-foreground"/>
                            </div>
                            <div className="space-y-2">
                              <Input id="company" name="company" placeholder="Qual é o nome da sua empresa?" required className="bg-background/80 rounded-full text-foreground placeholder:text-muted-foreground"/>
                            </div>
                            <div className="space-y-2">
                              <Input id="segment" name="segment" placeholder="Qual o segmento da sua empresa?" required className="bg-background/80 rounded-full text-foreground placeholder:text-muted-foreground"/>
                            </div>
                            <div className="space-y-2">
                              <select name="revenue" id="revenue" className="w-full h-10 rounded-full border border-input bg-background/80 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-muted-foreground" required defaultValue="">
                                  <option value="" disabled>Qual é o seu faturamento mensal atual?</option>
                                  <option value="Até R$ 20.000">Até R$ 20.000</option>
                                  <option value="de R$ 20.000 a R$ 40.000">de R$ 20.000 a R$ 40.000</option>
                                  <option value="de R$ 41.000 a R$ 60.000">de R$ 41.000 a R$ 60.000</option>
                                  <option value="de R$ 61.000 a R$ 100.000">de R$ 61.000 a R$ 100.000</option>
                                  <option value="de R$ 100.000 a R$ 500.000">de R$ 100.000 a R$ 500.000</option>
                                  <option value="de R$ 500.000 a R$ 1.000.000">de R$ 500.000 a R$ 1.000.000</option>
                                  <option value="Mais de R$ 1.000.000 por mês">Mais de R$ 1.000.000 por mês</option>
                              </select>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <SubmitButton />
                          </CardFooter>
                        </form>
                      </Card>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    );
}
