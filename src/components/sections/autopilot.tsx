
'use client';

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

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

const title = "Seu atendimento, vendas e suporte no piloto automático".split(" ");

export default function AutopilotSection() {
  const kLogo = PlaceHolderImages.find(img => img.id === 'k-logo-hero');

  return (
    <section 
      className="relative bg-transparent py-12 md:py-24 lg:py-32 overflow-hidden"
    >
       {kLogo && (
          <Image
              src={kLogo.imageUrl}
              alt={kLogo.description}
              width={500}
              height={500}
              className="absolute bottom-5 left-5 w-32 h-auto opacity-10 animate-orbit hidden md:block"
              style={{ animationDuration: '49s' }}
          />
      )}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, x: 50, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
            <div className="mb-8">
                <Button 
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#agendar');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-6 py-3 text-base md:px-8 md:py-4 md:text-lg button-wavy-gradient rounded-full animate-pulse"
                >
                    Fale com um especialista
                    <ArrowUpRight className="h-5 w-5 ml-2 transition-transform group-hover:rotate-45" />
                </Button>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
