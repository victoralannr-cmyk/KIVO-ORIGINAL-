'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Users, DollarSign, Code, Camera } from 'lucide-react';
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
    icon: Users,
    title: 'Social Media',
    description: 'Construímos uma presença digital forte e profissional para sua marca. Estratégia, conteúdo e imagem que geram autoridade e desejo.',
    customClass: 'bg-gradient-to-br from-blue-900 to-indigo-900',
  },
  {
    icon: DollarSign,
    title: 'Tráfego Pago',
    description: 'Impulsionamos campanhas estratégicas. Levamos o cliente ideal para a sua vitrine. Google e Meta Ads.',
    customClass: 'bg-gradient-to-br from-purple-900 to-violet-900',
  },
  {
    icon: Code,
    title: 'Criação de Sites',
    description: 'Sites profissionais que funcionam 24h e facilitam a vida do seu cliente. Catálogo, contato, agendamentos e recursos completos para vender online.',
    customClass: 'bg-gradient-to-br from-sky-900 to-cyan-900',
  },
  {
    icon: Camera,
    title: 'Criação de Conteúdo Criativo',
    description: 'Conteúdos criativos que realmente vendem — vídeos, designs e textos feitos para aumentar o desempenho e destacar sua marca.',
    customClass: 'bg-gradient-to-br from-teal-900 to-emerald-900',
  },
];


export default function HowItWorksSection() {
  const kLogo = PlaceHolderImages.find(img => img.id === 'k-logo-hero');
  const kivoText = PlaceHolderImages.find(img => img.id === 'kivo-text-hero');

  return (
    <section 
      id="como-funciona" 
      className="relative bg-transparent py-12 md:py-24 lg:py-32 overflow-hidden"
    >
       {kLogo && (
          <Image
              src={kLogo.imageUrl}
              alt={kLogo.description}
              width={500}
              height={500}
              className="absolute -top-10 -right-10 w-1/3 h-auto opacity-20 animate-orbit hidden md:block"
              style={{ animationDuration: '55s' }}
          />
      )}

      {kivoText && (
          <Image
              src={kivoText.imageUrl}
              alt={kivoText.description}
              width={600}
              height={200}
              className="absolute bottom-10 -left-20 w-1/2 h-auto opacity-[0.03] animate-orbit hidden md:block"
              style={{ animationDuration: '58s' }}
          />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
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
              className="mx-auto mt-4 text-foreground font-bold md:text-xl"
              style={{ maxWidth: '260.4px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Entenda como iremos impulsionar sua empresa através da internet
            </motion.p>
          </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardData.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Card 
                    key={index} 
                    className={`${card.customClass} p-6 flex flex-col justify-center items-center text-center border-border/20 shadow-lg`}
                  >
                    <div className="p-3 bg-white/10 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-white mb-4">{card.title}</h3>
                    <p className="text-white/80">{card.description}</p>
                  </Card>
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
