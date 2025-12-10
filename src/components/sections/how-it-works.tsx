'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Code, DollarSign, Users, Clapperboard } from 'lucide-react';
import ScrollReveal from '../common/scroll-reveal';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';

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
    iconName: 'Users',
    title: 'Social Media',
    description: 'Construímos uma presença digital forte e profissional para sua marca. Estratégia, conteúdo e imagem que geram autoridade e desejo.',
  },
  {
    iconName: 'DollarSign',
    title: 'Tráfego Pago',
    description: 'Impulsionamos campanhas estratégicas. Levamos o cliente ideal para a sua vitrine. Google e Meta Ads.',
  },
  {
    iconName: 'Code',
    title: 'Criação de Sites',
    description: 'Damos vida à sua marca com sites que combinam estética, movimento e funcionalidade. Uma vitrine digital única, feita para impressionar e converter.',
  },
  {
    iconName: 'Clapperboard',
    title: 'Criação de Conteúdo Criativo',
    description: 'Conteúdos criativos que realmente vendem vídeos, designs e textos feitos para aumentar o desempenho e destacar sua marca.',
  },
];

const AnimatedIcon: React.FC<{ iconName?: string }> = ({ iconName }) => {
  const iconProps = { size: 32, className: 'text-accent' };
  switch (iconName) {
    case 'Users':
      return (
        <div className="animate-bob-1">
          <Users {...iconProps} />
        </div>
      );
    case 'DollarSign':
      return (
        <div style={{ perspective: '800px' }}>
          <div className="animate-spin-3d">
            <DollarSign {...iconProps} />
          </div>
        </div>
      );
    case 'Code':
      return (
        <div className="animate-fly-away-left">
          <Code {...iconProps} />
        </div>
      );
    case 'Clapperboard':
      return (
        <div className="animate-clap">
          <Clapperboard {...iconProps} />
        </div>
      );
    default:
      return null;
  }
};


export default function HowItWorksSection() {
  const kLogo = PlaceHolderImages.find(img => img.id === 'k-logo-hero');

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
                className="absolute bottom-10 -left-20 w-32 h-auto opacity-10 animate-orbit hidden md-block"
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
          
            <div className="mt-8 flex justify-center text-muted-foreground animate-bounce">
                <svg width="59.22" height="78.96" viewBox="0 0 59.22 78.96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.61 1V77.96" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M58.22 50.34L29.61 77.95L1 50.34" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardData.map((card, index) => {
                return (
                  <ScrollReveal key={index} delay={index * 150}>
                    <Card 
                      className="bg-card/10 backdrop-blur-sm border-border/20 shadow-lg p-6 flex flex-col justify-center items-center text-center h-full"
                    >
                      <div className="p-3 bg-primary/10 rounded-full mb-4 flex items-center justify-center h-[56px] w-[56px]">
                        <AnimatedIcon iconName={card.iconName} />
                      </div>
                      <h3 className="font-headline text-2xl font-bold text-foreground mb-4">{card.title}</h3>
                      <p className="text-muted-foreground">{card.description}</p>
                    </Card>
                  </ScrollReveal>
                )
              })}
        </div>

      </div>
    </section>
  );
}
