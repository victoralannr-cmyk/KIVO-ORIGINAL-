'use client';

import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import CountUpStats from '../common/count-up-stats';

const stats = [
    { to: 50, prefix: '+', sufix: '', label: 'Projetos Executados', subLabel: 'Transformando marcas e resultados.' },
    { to: 250, prefix: '+', sufix: '', label: 'Clientes' },
    { to: 97, prefix: '', sufix: '%', label: 'de satisfação' },
]

export default function VideoCtaSection() {
  const ctaImage = PlaceHolderImages.find(img => img.id === 'video-cta-image');

  return (
    <section className="py-12 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="flex items-baseline">
                         <CountUpStats 
                            to={stat.to} 
                            prefix={stat.prefix}
                            className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-wavy-gradient"
                        />
                        <span className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-wavy-gradient">{stat.sufix}</span>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base mt-2">
                      {stat.label}
                      {stat.subLabel && <br />}
                      {stat.subLabel}
                    </p>
                </div>
            ))}
          </div>


          <h2 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-foreground">
            <span className="text-primary">Tráfego</span> colocam o seu negócio à frente dos{' '}
            <span className="text-primary">olhares certos.</span> O seu posicionamento é a sua{' '}
            <span className="text-primary">vitrine digital!</span>
          </h2>
          <div className="mt-6 flex justify-center">
            <Button asChild className="button-wavy-gradient rounded-full">
              <Link href="#agendar">
                Fale Conosco <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-16 flex justify-center text-primary animate-bounce">
            <svg width="59.22" height="78.96" viewBox="0 0 59.22 78.96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.61 1V77.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M58.22 50.34L29.61 77.95L1 50.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
