'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

const logos = [
  { logoId: 'client-logo-very-pizza' },
  { logoId: 'client-logo-2' },
  { logoId: 'client-logo-3' },
  { logoId: 'client-logo-4' },
  { logoId: 'client-logo-5' },
  { logoId: 'client-logo-6' },
  { logoId: 'client-logo-7' },
];

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

const title = "Apoiada por grandes empresas".split(" ");

export default function SuccessCasesSection() {
  return (
    <section 
      id="sucesso" 
      className="relative bg-transparent py-12 md:py-24"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <motion.h2 
              className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-foreground"
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
        </div>
        <div className="w-full mt-12 overflow-x-hidden relative">
          <div className="flex marquee">
            {logos.map((item, index) => {
               const logo = PlaceHolderImages.find(p => p.id === item.logoId);
               return (
                <div 
                  key={index} 
                  className="p-4 flex-shrink-0"
                  style={{ minWidth: '180px' }}
                >
                     {logo && (
                         <Image
                           src={logo.imageUrl}
                           alt={logo.description}
                           width={140}
                           height={50}
                           className="h-10 w-auto object-contain mx-auto"
                           data-ai-hint={logo.imageHint}
                         />
                       )}
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
