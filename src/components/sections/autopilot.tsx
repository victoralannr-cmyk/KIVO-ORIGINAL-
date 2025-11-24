'use client';

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

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
             <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
             >
                <p className="mx-auto max-w-3xl text-foreground md:text-xl">
                    Tráfego colocam o seu negócio à frente dos olhares certos. 
                    O seu posicionamento é a sua vitrine digital!
                </p>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                    Gerimos mais de U$400.000,00 em campanhas para clientes. Temos uma equipe especialista em Google e Meta Ads.
                </p>
            </motion.div>

            <motion.h2 
              className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground"
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
            className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Imagine ter um assistente inteligente, disponível o tempo todo, que:
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
