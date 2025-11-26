'use client';

import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
          {ctaImage && (
            <div className="mb-8 flex justify-center">
              <Image
                src={ctaImage.imageUrl}
                alt={ctaImage.description}
                width={700}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint={ctaImage.imageHint}
              />
            </div>
          )}
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
