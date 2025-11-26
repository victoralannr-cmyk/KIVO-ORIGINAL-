
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
  const kivoText = PlaceHolderImages.find(img => img.id === 'kivo-text-hero');

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
              className="absolute bottom-5 left-5 w-1/4 h-auto opacity-20 animate-orbit hidden md:block"
              style={{ animationDuration: '49s' }}
          />
      )}

      {kivoText && (
          <Image
              src={kivoText.imageUrl}
              alt={kivoText.description}
              width={600}
              height={200}
              className="absolute top-5 right-5 w-1/3 h-auto opacity-[0.03] animate-orbit hidden md:block"
              style={{ animationDuration: '54s' }}
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
                <Button asChild size="lg" className="group transition-all duration-300 ease-in-out button-wavy-gradient hover:shadow-lg hover:shadow-blue-900/50 rounded-full px-6 py-3 text-base md:px-8 md:py-4 md:text-lg">
                  <Link href="#agendar">
                    Fale com um especialista
                    <ArrowUpRight className="h-5 w-5 ml-2 transition-transform group-hover:rotate-45" />
                  </Link>
                </Button>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
