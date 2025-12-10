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
    { to: 200, prefix: '+', sufix: '', label: 'Estratégias de Crescimento', subLabel: 'Potencializando o digital com propósito.' },
    { to: 100, prefix: '+', sufix: '', label: 'Marcas Elevadas', subLabel: 'Crescimento digital com inovação.' },
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
          <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 text-center max-w-5xl mx-auto">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-start">
                    <div className="flex items-baseline">
                         <CountUpStats 
                            to={stat.to} 
                            prefix={stat.prefix}
                            className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-wavy-gradient"
                        />
                        <span className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-wavy-gradient">{stat.sufix}</span>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base mt-4">
                      {stat.label}
                      {stat.subLabel && <br />}
                      {stat.subLabel}
                    </p>
                </div>
            ))}
          </div>


          <h2 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-foreground">
            <span className="text-wavy-gradient">Tráfego</span> colocam o seu negócio à frente dos{' '}
            <span className="text-wavy-gradient">olhares certos.</span> O seu posicionamento é a sua{' '}
            <span className="text-wavy-gradient">vitrine digital!</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
