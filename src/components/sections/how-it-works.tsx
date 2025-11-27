
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Camera, Code } from 'lucide-react';
import ScrollReveal from '../common/scroll-reveal';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';

const sentence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const title = "Estratégias de Vendas".split(" ");

const cardData = [
  {
    icon: 'Users',
    title: 'Social Media',
    description: 'Construímos uma presença digital forte e profissional para sua marca. Estratégia, conteúdo e imagem que geram autoridade e desejo.',
  },
  {
    icon: 'DollarSign',
    title: 'Tráfego Pago',
    description: 'Impulsionamos campanhas estratégicas. Levamos o cliente ideal para a sua vitrine. Google e Meta Ads.',
  },
  {
    icon: 'Code',
    title: 'Criação de Sites',
    description: 'Sites profissionais que funcionam 24h e facilitam a vida do seu cliente. Catálogo, contato, agendamentos e recursos completos para vender online.',
  },
  {
    icon: 'Camera',
    title: 'Criação de Conteúdo Criativo',
    description: 'Conteúdos criativos que realmente vendem — vídeos, designs e textos feitos para aumentar o desempenho e destacar sua marca.',
  },
];


export default function HowItWorksSection() {
  const kLogo = PlaceHolderImages.find(img => img.id === 'k-logo-hero');

  const getIcon = (iconName?: string) => {
    switch(iconName) {
      case 'Users':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <g className="animate-bob-1">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
            </g>
            <g className="animate-bob-2">
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </g>
          </svg>
        );
      case 'DollarSign':
        return (
          <div style={{ perspective: '800px' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary animate-spin-3d"
            >
              <line x1="12" y1="2" x2="12" y2="22"></line>
              <line x1="12" y1="2" x2="12" y2="22" style={{ transform: 'translateX(-4px)' }}></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
        );
      case 'Code':
        return <Code className="h-8 w-8 text-primary" />;
      case 'Camera':
        return <Camera className="h-8 w-8 text-primary" />;
      default:
        return null;
    }
  }

  return (
    <section 
      id="como-funciona" 
      className="relative bg-transparent py-12 md:py-24 lg:py-32 overflow-hidden"
    >
       {kLogo && (
          <>
            <Image
                src={kLogo.imageUrl}
                alt={kLogo.description}
                width={500}
                height={500}
                className="absolute -top-10 -right-10 w-48 h-auto opacity-5 animate-orbit hidden md:block"
                style={{ animationDuration: '55s' }}
            />
             <Image
                src={kLogo.imageUrl}
                alt={kLogo.description}
                width={200}
                height={200}
                className="absolute bottom-10 -left-20 w-32 h-auto opacity-10 animate-orbit hidden md:block"
                style={{ animationDuration: '58s', animationDelay: '2s' }}
            />
          </>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
          <div className="text-center">
             <motion.h2 
              className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-center text-foreground"
              variants={sentence}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {title.map((word, index) => (
                <motion.span key={index} variants={wordAnimation} className="inline-block mr-2">
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p 
              className="mx-auto mt-4 text-muted-foreground md:text-xl"
              style={{ maxWidth: '600px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Entenda como iremos impulsionar sua empresa através da internet
            </motion.p>
          </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardData.map((card, index) => {
                return (
                  <ScrollReveal key={index} delay={index * 150}>
                    <Card 
                      className="bg-card/10 backdrop-blur-sm border-border/20 shadow-lg p-6 flex flex-col justify-center items-center text-center h-full"
                    >
                      <div className="p-3 bg-primary/10 rounded-full mb-4 flex items-center justify-center h-[56px] w-[56px]">
                        {getIcon(card.icon)}
                      </div>
                      <h3 className="font-headline text-2xl font-bold text-foreground mb-4">{card.title}</h3>
                      <p className="text-muted-foreground">{card.description}</p>
                    </Card>
                  </ScrollReveal>
                )
              })}
        </div>


        <div className="mt-20 text-center">
          <ScrollReveal direction="right" delay={800}>
            <Button 
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#agendar');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-3 text-base md:px-8 md:py-4 md:text-lg button-wavy-gradient rounded-full"
            >
              Fale com um especialista
              <ArrowUpRight className="h-5 w-5 ml-2 transition-transform group-hover:rotate-45" />
            </Button>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
